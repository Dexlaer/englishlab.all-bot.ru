const ALLBOT_ANALYTICS_URL = "https://all-bot.ru/api/apps/english-lab";
const ALLBOT_SESSION_KEY = "allbot-session-id";

function getAllBotSessionId() {
  try {
    const existing = localStorage.getItem(ALLBOT_SESSION_KEY);
    if (existing) return existing;

    const next = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(ALLBOT_SESSION_KEY, next);
    return next;
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

function trackAllBotView() {
  if (window.location.protocol === "file:") return;

  fetch(ALLBOT_ANALYTICS_URL, {
    method: "POST",
    mode: "cors",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "view",
      sessionId: getAllBotSessionId(),
      metadata: {
        path: window.location.pathname,
        referrer: document.referrer || null,
        title: document.title,
      },
    }),
  }).catch(() => {});
}

window.addEventListener("load", trackAllBotView);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
