(() => {
  "use strict";

  const script = document.currentScript;
  const endpoint = script?.dataset.visitorEndpoint;
  if (
    !endpoint ||
    navigator.globalPrivacyControl === true ||
    navigator.doNotTrack === "1"
  )
    return;

  const payload = JSON.stringify({
    path: `${location.pathname}${location.search}`.slice(0, 500),
    referrer: document.referrer.slice(0, 500),
    language: navigator.language?.slice(0, 32) || "",
    screen: `${screen.width}x${screen.height}`,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, new Blob([payload], { type: "text/plain" }));
    return;
  }

  fetch(endpoint, {
    method: "POST",
    body: payload,
    mode: "cors",
    keepalive: true,
    headers: { "Content-Type": "text/plain" },
  }).catch(() => {});
})();
