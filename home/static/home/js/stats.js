/**
 * Patchland — Nation statistics module.
 *
 * Fetches the live nation statistics from the Django Ninja API endpoint
 * `GET /api/home/stats` and refreshes the values rendered server-side in
 * `templates/home/index.html`.
 *
 * The endpoint is served by the Django Ninja router (`home/api.py`) and
 * aggregates its data from the PostgreSQL database through the service
 * layer (`home/services.py`). If the request fails (API unreachable,
 * network error, ...), the server-rendered values remain visible as a
 * graceful fallback.
 */
(function () {
  "use strict";

  /** Endpoint exposed by `patchland/api.py` -> `home/api.py`. */
  const ENDPOINT = "/api/home/stats";

  /** Numbers come from Postgres and may include decimal areas (m²). */
  const FORMATTER = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  });

  // ------------------------------------------------------------------
  // Bootstrapping
  // ------------------------------------------------------------------
  const container = document.getElementById("nation-stats");
  if (!container) {
    return; // Section not present on this page — nothing to do.
  }

  // Maps each `[data-stat]` card to its `[data-value]` node, e.g.:
  //   <div data-stat="total_area_m2"> ... <span data-value>…</span></div>
  const valueNodes = {};
  container.querySelectorAll("[data-stat]").forEach((card) => {
    const key = card.dataset.stat;
    const valueEl = card.querySelector("[data-value]");
    if (key && valueEl) {
      valueNodes[key] = valueEl;
    }
  });

  // ------------------------------------------------------------------
  // Rendering
  // ------------------------------------------------------------------
  function renderStats(stats) {
    Object.entries(stats).forEach(([key, value]) => {
      const valueEl = valueNodes[key];
      if (!valueEl) return;

      valueEl.textContent =
        typeof value === "number" ? FORMATTER.format(value) : String(value);
    });
  }

  // ------------------------------------------------------------------
  // Data loading
  // ------------------------------------------------------------------
  async function loadStats() {
    try {
      const response = await fetch(ENDPOINT, {
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        throw new Error(`API responded with HTTP ${response.status}`);
      }

      const stats = await response.json();
      renderStats(stats);
      container.dataset.state = "loaded";
    } catch (err) {
      // Keep the server-rendered values and flag the failure state.
      console.warn(`[patchland] Could not load stats from ${ENDPOINT}`, err);
      container.dataset.state = "error";
    }
  }

  loadStats();
})();
