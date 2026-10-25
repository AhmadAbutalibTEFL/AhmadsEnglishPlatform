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

    /* ---------------------------------------------------------
       Course navigation: one <aside id="course-sidebar"> shared by every screen.

       Desktop (>= 1100px): slim icon rail. The < / > button expands it into an
       overlay drawer (the page does not move).
       Mobile + tablet: off-canvas drawer, opened from the menu button in the header.

       It is the same element, the same open/close state and the same links at
       every width. Only courses that actually open today are listed; planned
       courses are deliberately left out. Opening is always an explicit click or tap.
       --------------------------------------------------------- */
    var DESKTOP_QUERY = "(min-width: 1100px)";

    var ICON_PATHS = {
        home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><path d="M10 20v-5.5h4V20"/>',
        headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
        globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
        file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
        user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
        mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
        menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
        close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
        chevron: '<path d="m9 18 6-6-6-6"/>'
    };

    function icon(name) {
        return '<svg class="sidebar-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + ICON_PATHS[name] + '</svg>';
    }

    function navLink(attrs, label, iconName, tag) {
        var full = tag ? label + " (" + tag + ")" : label;
        return '<a ' + attrs + ' data-tip="' + full + '"' + (tag ? ' aria-label="' + full + '"' : '') + '>' +
            icon(iconName) + '<span class="sidebar-text">' + label + '</span>' +
            (tag ? '<small>' + tag + '</small>' : '') + '</a>';
    }

    // Which sidebar item a visible screen belongs to (screen ids come from index.html).
    function sectionOfScreen(id) {
        if (id === "welcome-screen") return "home";
        if (id === "ielts-screen") return "ielts";
        if (id.indexOf("toefl-") === 0) return "toefl";
        if (id.indexOf("est-") === 0 || id === "learn-screen" || id === "strategy-screen" ||
            id === "practice-screen" || id === "results-screen") return "est";   // Parts of Speech lives in EST session 2
        return "";
    }

    function installCourseSidebar() {
        if (document.getElementById("course-sidebar")) return;

        var mq = window.matchMedia ? window.matchMedia(DESKTOP_QUERY) : { matches: true };

        var nav = document.createElement("aside");
        nav.id = "course-sidebar";
        nav.className = "course-sidebar";
        nav.setAttribute("aria-label", "Course navigation");
        nav.innerHTML =
            '<div class="sidebar-head">' +
              '<button class="sidebar-toggle" type="button" aria-expanded="false" aria-controls="course-sidebar">' +
                '<span class="ic-chevron">' + icon("chevron") + '</span>' +
                '<span class="ic-close">' + icon("close") + '</span>' +
              '</button>' +
              '<span class="sidebar-title">Menu</span>' +
            '</div>' +
            '<nav class="sidebar-links" aria-label="Main navigation">' +
              navLink('href="./" data-side-action="home"', "Home", "home") +
              '<div class="sidebar-label">Courses</div>' +
              navLink('href="#/ielts" data-side-action="ielts"', "IELTS", "headphones", "Preview") +
              navLink('href="#/toefl" data-side-action="toefl"', "TOEFL", "globe") +
              navLink('href="#/est" data-side-action="est"', "EST", "file") +
              '<div class="sidebar-divider"></div>' +
              navLink('href="#about" data-site-nav="about"', "About Me", "user") +
              navLink('href="#contact" data-site-nav="contact"', "Contact", "mail") +
            '</nav>';

        var backdrop = document.createElement("div");
        backdrop.className = "sidebar-backdrop";
        backdrop.setAttribute("aria-hidden", "true");
        backdrop.hidden = true;

        // Placed right after the skip link so keyboard order follows the visual order.
        var header = document.querySelector(".site-header");
        document.body.insertBefore(nav, header);
        document.body.insertBefore(backdrop, header);

        // Compact menu button inside the existing header (mobile + tablet; hidden by CSS on desktop).
        var menuButton = null;
        var headerInner = document.querySelector(".site-header-inner");
        if (headerInner) {
            menuButton = document.createElement("button");
            menuButton.type = "button";
            menuButton.className = "site-menu-button";
            menuButton.setAttribute("aria-controls", "course-sidebar");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.innerHTML = icon("menu");
            headerInner.insertBefore(menuButton, headerInner.firstChild);
        }

        var toggle = nav.querySelector(".sidebar-toggle");

        function isDesktop() { return !!mq.matches; }
        function isOpen() { return nav.classList.contains("is-open"); }

        function setOpen(open) {
            nav.classList.toggle("is-open", open);
            backdrop.hidden = !open;
            var label = isDesktop() ? (open ? "Collapse navigation" : "Expand navigation") : "Close navigation";
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", label);
            toggle.setAttribute("data-tip", label);
            if (menuButton) menuButton.setAttribute("aria-expanded", String(open));
        }

        function closeAndRestoreFocus() {
            setOpen(false);
            var target = isDesktop() ? toggle : (menuButton || toggle);
            try { target.focus(); } catch (e) { /* ignore */ }
        }

        toggle.addEventListener("click", function () {
            if (isDesktop()) setOpen(!isOpen());
            else closeAndRestoreFocus();
        });

        if (menuButton) {
            menuButton.addEventListener("click", function () {
                if (isOpen()) { setOpen(false); return; }
                setOpen(true);
                toggle.focus();                      // move focus into the drawer
            });
        }

        backdrop.addEventListener("click", closeAndRestoreFocus);

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && isOpen()) closeAndRestoreFocus();
        });

        // Modal behaviour only where the drawer covers the page: keep Tab inside it.
        nav.addEventListener("keydown", function (event) {
            if (event.key !== "Tab" || isDesktop() || !isOpen()) return;
            var items = nav.querySelectorAll("a[href], button");
            if (!items.length) return;
            var first = items[0], last = items[items.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        });

        // Crossing the desktop breakpoint (rotate / resize): start from a clean, closed state.
        var onBreakpoint = function () { setOpen(false); };
        if (mq.addEventListener) mq.addEventListener("change", onBreakpoint);
        else if (mq.addListener) mq.addListener(onBreakpoint);

        // Existing behaviour, unchanged: the course links call the existing show...() functions.
        nav.addEventListener("click", function (event) {
            var anchor = event.target.closest ? event.target.closest("a") : null;
            if (anchor && !(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) setOpen(false);

            var link = event.target.closest ? event.target.closest("[data-side-action]") : null;
            if (!link) return;
            var action = link.getAttribute("data-side-action");
            if (action === "home") {
                event.preventDefault();
                if (typeof window.showCourseHub === "function") window.showCourseHub();
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else if (action === "ielts") {
                event.preventDefault();
                if (typeof window.showIELTS === "function") window.showIELTS();
            } else if (action === "toefl") {
                event.preventDefault();
                if (typeof window.showTOEFLCourse === "function") window.showTOEFLCourse();
            } else if (action === "est") {
                event.preventDefault();
                if (typeof window.showESTCourse === "function") window.showESTCourse();
            }
        });

        // Highlight the course / section that is currently on screen.
        function updateActive() {
            var active = "";
            var screens = document.querySelectorAll("main .hero");
            for (var i = 0; i < screens.length; i++) {
                if (screens[i].style.display !== "none") { active = sectionOfScreen(screens[i].id); break; }
            }
            var links = nav.querySelectorAll("a[data-side-action]");
            for (var j = 0; j < links.length; j++) {
                var on = links[j].getAttribute("data-side-action") === active;
                links[j].classList.toggle("is-active", on);
                if (on) links[j].setAttribute("aria-current", "page");
                else links[j].removeAttribute("aria-current");
            }
        }
        if (window.MutationObserver) {
            var observer = new MutationObserver(updateActive);
            var screens = document.querySelectorAll("main .hero");
            for (var k = 0; k < screens.length; k++) {
                observer.observe(screens[k], { attributes: true, attributeFilter: ["style"] });
            }
        }

        setOpen(false);
        updateActive();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", installCourseSidebar);
    else installCourseSidebar();
})();
