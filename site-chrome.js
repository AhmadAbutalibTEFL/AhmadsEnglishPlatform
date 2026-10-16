/* =========================================================
   SITE CHROME: header / footer link behaviour

   The site is a single page whose "screens" are shown and hidden, and
   navigation.js owns the #/route hashes and Back/Forward history.
   Plain "#about" links would fight with that, so header and footer links
   (anything with data-site-nav) are handled here instead:

     1. If another screen is open, call the existing showCourseHub()
        (already wrapped by navigation.js, so history stays correct).
     2. Scroll to the requested section on the course hub.

   The href values stay real (#courses, #about, #contact), so links still
   open the right place if copied or opened in a new tab.
   Load this file AFTER navigation.js.
   ========================================================= */
(function () {
    "use strict";

    var TARGETS = {
        courses: { section: "courses", heading: "courses-heading" },
        about:   { section: "about",   heading: "about-heading" },
        contact: { section: "contact", heading: "contact-heading" }
    };

    var reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    var behavior = reduceMotion ? "auto" : "smooth";

    function hubIsVisible() {
        var hub = document.getElementById("welcome-screen");
        return !!hub && hub.style.display !== "none";
    }

    function goTo(key) {
        if (!hubIsVisible() && typeof window.showCourseHub === "function") {
            window.showCourseHub();
        }

        if (key === "top") {
            window.scrollTo({ top: 0, behavior: behavior });
            return;
        }

        var target = TARGETS[key];
        if (!target) return;

        // Wait one frame so the hub has been laid out before measuring it.
        window.requestAnimationFrame(function () {
            var section = document.getElementById(target.section);
            if (!section) return;
            section.scrollIntoView({ behavior: behavior, block: "start" });

            // Move keyboard / screen-reader focus to the section heading.
            var heading = document.getElementById(target.heading);
            if (heading) {
                try { heading.focus({ preventScroll: true }); } catch (e) { heading.focus(); }
            }
        });
    }

    document.addEventListener("click", function (event) {
        if (event.defaultPrevented || event.button !== 0) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;   // let "open in new tab" work

        var link = event.target.closest ? event.target.closest("a[data-site-nav], a[data-skip]") : null;
        if (!link) return;

        event.preventDefault();

        if (link.hasAttribute("data-skip")) {
            var main = document.getElementById("main-content");
            if (main) main.focus();
            return;
        }
        goTo(link.getAttribute("data-site-nav"));
    });
})();
