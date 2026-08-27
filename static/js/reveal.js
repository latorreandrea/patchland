/**
 * Patchland — `reveal` Alpine component (shared, project-wide).
 *
 * Scroll-triggered entrance animation (fade + directional slide) powered by
 * IntersectionObserver (no external library).
 *
 * Stored in the project-level `static/js/` directory so it is shared by every
 * app in this project. It is loaded globally from `templates/base.html`, so
 * any app that extends `base.html` inherits it automatically.
 *
 * USAGE
 * -----
 *   x-data="reveal('from-top')"                    → drops in from above
 *   x-data="reveal('from-bottom')"                 → rises from below
 *   x-data="reveal('from-left')"                   → slides in from the left
 *   x-data="reveal('from-right')"                  → slides in from the right
 *   x-data="reveal('from-bottom', { stagger: true })"
 *                                                  → auto-delay by sibling
 *                                                    index (90ms steps)
 *   x-data="reveal('from-top', { delay: 200 })"    → fixed delay (ms)
 *
 *   Each element also needs:
 *     :class="visible ? shownClass : hiddenClass"
 *     :style="delayStyle"
 *     class="… transition-all duration-700 ease-out"
 *   (cards that already have `transition-all duration-300` reuse it).
 *
 * Behaviour:
 *   - animates ONCE (IntersectionObserver is disconnected after trigger);
 *   - the stagger delay is cleared after the entrance so hover transitions
 *     are never left laggy;
 *   - `prefers-reduced-motion` keeps everything visible immediately;
 *   - without Alpine the hidden classes never apply → content stays visible.
 */
(function () {
  "use strict";

  document.addEventListener("alpine:init", () => {
    Alpine.data("reveal", (direction = "from-bottom", options = {}) => ({
      visible: false,
      _delay: 0,

      init() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          this.visible = true;
          return;
        }

        // Stagger: delay is derived from the element's index among its siblings.
        if (options.stagger) {
          const siblings = Array.from(this.$el.parentElement.children);
          this._delay = Math.max(0, siblings.indexOf(this.$el)) * (options.step || 90);
        } else {
          this._delay = options.delay || 0;
        }

        const io = new IntersectionObserver(
          (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
              this.visible = true;
              io.disconnect();
              // Clear the entrance delay so hover transitions stay responsive.
              window.setTimeout(() => { this._delay = 0; }, this._delay + 800);
            }
          },
          { threshold: options.threshold ?? 0.15, rootMargin: "0px 0px -8% 0px" }
        );
        io.observe(this.$el);
      },

      get hiddenClass() {
        return (
          {
            "from-top": "opacity-0 -translate-y-10",
            "from-bottom": "opacity-0 translate-y-10",
            "from-left": "opacity-0 -translate-x-10",
            "from-right": "opacity-0 translate-x-10",
          }[direction] || "opacity-0 translate-y-10"
        );
      },

      get shownClass() {
        return "opacity-100 translate-x-0 translate-y-0";
      },

      get delayStyle() {
        return this._delay ? "transition-delay:" + this._delay + "ms" : "";
      },
    }));
  });
})();
