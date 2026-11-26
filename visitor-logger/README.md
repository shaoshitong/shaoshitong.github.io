# Visitor logger

Cloudflare Worker + D1 backend for the site's privacy-conscious visit log. By
default it stores an HMAC of the visitor IP and a truncated `/24` (IPv4) or
`/64` (IPv6) network, not the complete address. Records are deleted after 30
days by a daily scheduled job.

## Deploy

Requirements: Node.js and a Cloudflare account.

```sh
cd visitor-logger
npx wrangler login
npx wrangler d1 create shaoshitong-visits
```

Copy the returned `database_id` into `wrangler.toml`, then initialize and
deploy:

```sh
npx wrangler d1 execute shaoshitong-visits --remote --file schema.sql
npx wrangler secret put IP_HASH_SECRET
npx wrangler secret put ADMIN_TOKEN
npx wrangler deploy
```

Use long, random and different values for both secrets. Put the deployed URL
plus `/collect` in `_config.yml`:

```yml
visitor_logging:
  endpoint: https://shaoshitong-visitor-logger.YOUR-SUBDOMAIN.workers.dev/collect
```

To intentionally retain complete IP addresses, change `STORE_FULL_IP` to
`"true"` in `wrangler.toml`. This increases privacy and compliance obligations;
update the site's privacy notice before enabling it.

## Read records

```sh
curl -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  "https://shaoshitong-visitor-logger.YOUR-SUBDOMAIN.workers.dev/visits?limit=100"
```

The endpoint caps a response at 1,000 rows. Do not put the admin token in the
website repository or browser code.
