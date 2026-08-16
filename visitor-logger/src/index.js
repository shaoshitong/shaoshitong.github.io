const json = (body, status = 200, headers = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers },
  });

const corsHeaders = (env) => ({
  "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  Vary: "Origin",
});

const safeText = (value, maxLength) =>
  typeof value === "string" ? value.slice(0, maxLength) : "";

function networkPrefix(ip) {
  if (ip.includes(".")) {
    const parts = ip.split(".");
    return parts.length === 4
      ? `${parts[0]}.${parts[1]}.${parts[2]}.0/24`
      : "unknown";
  }
  if (ip.includes(":")) return `${ip.split(":").slice(0, 4).join(":")}::/64`;
  return "unknown";
}

async function hashIp(ip, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(ip),
  );
  return [...new Uint8Array(signature)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function recordVisit(request, env) {
  if (request.headers.get("Origin") !== env.ALLOWED_ORIGIN) {
    return json({ error: "origin_not_allowed" }, 403, corsHeaders(env));
  }

  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  let payload;
  try {
    payload = JSON.parse(await request.text());
  } catch {
    return json({ error: "invalid_json" }, 400, corsHeaders(env));
  }

  const path = safeText(payload.path, 500);
  if (!path.startsWith("/"))
    return json({ error: "invalid_path" }, 400, corsHeaders(env));

  const cf = request.cf || {};
  await env.DB.prepare(
    `INSERT INTO visits
      (ip_hash, ip_prefix, full_ip, country, region, city, path, referrer, user_agent, language, screen)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      await hashIp(ip, env.IP_HASH_SECRET),
      networkPrefix(ip),
      env.STORE_FULL_IP === "true" ? ip : null,
      safeText(cf.country, 8),
      safeText(cf.region, 100),
      safeText(cf.city, 100),
      path,
      safeText(payload.referrer, 500),
      safeText(request.headers.get("User-Agent"), 500),
      safeText(payload.language, 32),
      safeText(payload.screen, 32),
    )
    .run();

  return json({ ok: true }, 202, corsHeaders(env));
}

async function listVisits(request, env) {
  const authorization = request.headers.get("Authorization") || "";
  if (authorization !== `Bearer ${env.ADMIN_TOKEN}`)
    return json({ error: "unauthorized" }, 401);

  const url = new URL(request.url);
  const requestedLimit = Number.parseInt(
    url.searchParams.get("limit") || "100",
    10,
  );
  const limit = Number.isFinite(requestedLimit)
    ? Math.min(Math.max(requestedLimit, 1), 1000)
    : 100;
  const { results } = await env.DB.prepare(
    "SELECT * FROM visits ORDER BY visited_at DESC LIMIT ?",
  )
    .bind(limit)
    .all();
  return json({ visits: results });
}

async function purgeOldVisits(env) {
  const parsedDays = Number.parseInt(env.RETENTION_DAYS || "30", 10);
  const days = Number.isFinite(parsedDays)
    ? Math.min(Math.max(parsedDays, 1), 365)
    : 30;
  await env.DB.prepare(
    "DELETE FROM visits WHERE julianday(visited_at) < julianday('now', ?)",
  )
    .bind(`-${days} days`)
    .run();
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      if (request.headers.get("Origin") !== env.ALLOWED_ORIGIN)
        return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }
    if (request.method === "POST" && url.pathname === "/collect")
      return recordVisit(request, env);
    if (request.method === "GET" && url.pathname === "/visits")
      return listVisits(request, env);
    if (request.method === "GET" && url.pathname === "/health")
      return json({ ok: true });
    return json({ error: "not_found" }, 404);
  },

  async scheduled(_event, env, ctx) {
    ctx.waitUntil(purgeOldVisits(env));
  },
};
