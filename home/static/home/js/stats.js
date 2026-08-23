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
  // The stats section (used to flag the load state) may be absent on
  // some pages, but individual `[data-stat]` counters (e.g. in the hero)
  // can exist anywhere. Query the whole document so every counter stays
  // in sync with the API response.
  const container = document.getElementById("nation-stats");
  const statCards = document.querySelectorAll("[data-stat]");
  if (!statCards.length) {
    return; // No counters on this page — nothing to do.
  }

  // Maps each `[data-stat]` key to its `[data-value]` node(s). A key can
  // appear more than once (e.g. the hero and the statistics section both
  // show `total_patches`), so every node is collected and kept in sync.
  //   <div data-stat="total_area_m2"> ... <span data-value>…</span></div>
  const valueNodes = {};
  statCards.forEach((card) => {
    const key = card.dataset.stat;
    const valueEl = card.querySelector("[data-value]");
    if (key && valueEl) {
      if (!valueNodes[key]) {
        valueNodes[key] = [];
      }
      valueNodes[key].push(valueEl);
    }
  });

  // ------------------------------------------------------------------
  // Rendering
  // ------------------------------------------------------------------
  function renderStats(stats) {
    Object.entries(stats).forEach(([key, value]) => {
      const nodes = valueNodes[key];
      if (!nodes || !nodes.length) return;

      const text =
        typeof value === "number" ? FORMATTER.format(value) : String(value);
      nodes.forEach((valueEl) => {
        valueEl.textContent = text;
      });
    });
  }

  // ------------------------------------------------------------------
  // Data loading
  // ------------------------------------------------------------------
  function setLoadState(state) {
    if (container) {
      container.dataset.state = state;
    }
  }

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
      setLoadState("loaded");
    } catch (err) {
      // Keep the server-rendered values and flag the failure state.
      console.warn(`[patchland] Could not load stats from ${ENDPOINT}`, err);
      setLoadState("error");
    }
  }

  loadStats();
})();
