/* =========================================================
   BROWSER BACK / FORWARD SUPPORT  (History API)

   The site is a single page: every "screen" is a <section class="hero">
   that is shown or hidden, and the TOEFL sections swap an inner
   "home" / "activity" view. This file adds browser history on top of that
   WITHOUT changing the existing buttons or screens:

     1. It wraps the existing navigation functions (showESTCourse,
        showTOEFLSpeaking, openTOEFLReadingPracticeSet, ...). The original
        function still runs first, so every button behaves exactly as before;
        afterwards the wrapper records the new screen in the browser history.
     2. On Back / Forward (popstate) it re-opens the right screen by calling
        those same functions.

   URLs use a hash (index.html#/toefl/speaking/practice/repeat), so
   GitHub Pages needs no server configuration and refreshing works.
   Load this file LAST in index.html (after all the toefl-*.js files).
   ========================================================= */
(function () {
    "use strict";

    if (!window.history || typeof history.pushState !== "function") return;

    var MAX_TRAIL = 20;
    var SECTIONS = {
        reading:   { screen: "toefl-reading-screen",   show: "showTOEFLReading",   task: "openTOEFLReadingTask",   practice: "openTOEFLReadingPractice",   set: "openTOEFLReadingPracticeSet" },
        listening: { screen: "toefl-listening-screen", show: "showTOEFLListening", task: "openTOEFLListeningTask", practice: "openTOEFLListeningPractice", set: "openTOEFLListeningPracticeSet" },
        writing:   { screen: "toefl-writing-screen",   show: "showTOEFLWriting",   task: "openTOEFLWritingTask",   practice: "openTOEFLWritingPractice",   set: "openTOEFLWritingPracticeSet" },
        speaking:  { screen: "toefl-speaking-screen",  show: "showTOEFLSpeaking",  task: "openTOEFLSpeakingTask",  practice: "openTOEFLSpeakingPractice",  set: "openTOEFLSpeakingPracticeSet" }
    };

    var current = "";          // route of the screen being shown ("" = course hub)
    var restoring = false;     // true while Back/Forward/refresh is re-opening a screen
    var skipPop = false;       // true when WE triggered history.go(), so popstate must not re-render
    var skipTimer = null;
    var disabled = false;      // set if the browser refuses pushState (e.g. some file:// setups)
    var quizAlive = false;     // Parts of Speech quiz has a question on screen
    var resultsAlive = false;  // Parts of Speech results screen has been reached

    /* ---------- routes ----------
       ""                                    course hub
       est                                   EST course
       est/session-2                         EST session 2 (has its own lesson screens)
       est/session-<n>                       any other EST session outline (n = 1-21)
       est/session-2/learn|strategy|practice|results
       toefl                                 TOEFL course
       toefl/<section>                       section home (reading|listening|writing|speaking)
       toefl/<section>/learn/<task>          lesson + guided sets
       toefl/<section>/practice/<task>       practice hub
       toefl/<section>/practice/<task>/<set> one practice set
       ielts[?track=academic|general]        IELTS dashboard
       ielts/<view>[?track=...]              view = course|library|listening|reading|writing|speaking */

    var IELTS_VIEWS = { course: 1, library: 1, listening: 1, reading: 1, writing: 1, speaking: 1 };
    var IELTS_TRACKS = { academic: 1, general: 1 };

    function isIeltsRoute(route) { return /^ielts(\/|\?|$)/.test(route || ""); }
    function stripQuery(route) { var i = route.indexOf("?"); return i < 0 ? route : route.slice(0, i); }

    function parseIelts(route) {
        var i = route.indexOf("?");
        var query = i < 0 ? "" : route.slice(i + 1);
        var m = /(?:^|&)track=([a-z]+)(?:&|$)/.exec(query);
        var track = m && Object.prototype.hasOwnProperty.call(IELTS_TRACKS, m[1]) ? m[1] : "";
        var p;
        try { p = stripQuery(route).split("/").map(decodeURIComponent); } catch (e) { return { kind: "hub" }; }
        var view = (p.length === 2 && Object.prototype.hasOwnProperty.call(IELTS_VIEWS, p[1])) ? p[1] : "";
        return { kind: "ielts", view: view, track: track };
    }

    function parse(route) {
        if (isIeltsRoute(route)) return parseIelts(route);
        var p = route ? route.split("/").map(decodeURIComponent) : [];
        if (!p.length) return { kind: "hub" };
        if (p[0] === "est") {
            if (p.length === 1) return { kind: "est" };
            var m = /^session-(\d+)$/.exec(p[1] || "");
            var num = m ? parseInt(m[1], 10) : 0;
            if (num >= 1 && num <= 22 && (num !== 2 || p[2] === "lesson")) {
                if (p.length === 2) return { kind: "estn", n: num };
                var lessons = window.estLessons || {};
                if (p[2] === "lesson" && lessons[p[3]] && lessons[p[3]].session === num) {
                    if (p.length === 4) return { kind: "estlesson", n: num, id: p[3] };
                    if (p.length === 5 && p[4] === "practice") return { kind: "estpractice", n: num, id: p[3] };
                }
                var tix = window.estTestIndex || {};
                if (p[2] === "test" && p.length === 4 && tix[p[3]] && tix[p[3]].session === num) return { kind: "esttest", n: num, id: p[3] };
                return { kind: "hub" };
            }
            if (p[1] !== "session-2") return { kind: "hub" };
            if (p.length === 2) return { kind: "est2" };
            if (p.length === 3 && /^(learn|strategy|practice|results)$/.test(p[2])) return { kind: "pos", view: p[2] };
            return { kind: "hub" };
        }
        if (p[0] === "toefl") {
            if (p.length === 1) return { kind: "toefl" };
            if (!SECTIONS[p[1]]) return { kind: "hub" };
            if (p.length === 2) return { kind: "section", sec: p[1] };
            if (p[2] === "learn" && p.length === 4) return { kind: "learn", sec: p[1], task: p[3] };
            if (p[2] === "practice" && p.length === 4) return { kind: "hubview", sec: p[1], task: p[3] };
            if (p[2] === "practice" && p.length === 5) return { kind: "set", sec: p[1], task: p[3], set: p[4] };
        }
        return { kind: "hub" };
    }

    function build(parts) {
        return parts.map(encodeURIComponent).join("/");
    }

    function depth(route) {
        var k = parse(route);
        switch (k.kind) {
            case "hub": return 0;
            case "est": case "toefl": return 1;
            case "ielts": return k.view ? 2 : 1;
            case "est2": case "estn": case "section": return 2;
            case "estlesson": case "esttest": return 3;
            case "estpractice": return 4;
            case "pos": return k.view === "results" ? 4 : 3;
            case "learn": case "hubview": return 3;
            case "set": return 4;
        }
        return 0;
    }

    function isSet(route) { return parse(route).kind === "set"; }

    function canonical(route) {
        // Re-build from the parsed form so unknown / malformed routes collapse to the hub.
        var k = parse(route);
        switch (k.kind) {
            case "est": return "est";
            case "ielts": return "ielts" + (k.view ? "/" + k.view : "") + (k.track ? "?track=" + k.track : "");
            case "est2": return "est/session-2";
            case "estn": return "est/session-" + k.n;
            case "estlesson": return "est/session-" + k.n + "/lesson/" + k.id;
            case "esttest": return "est/session-" + k.n + "/test/" + k.id;
            case "estpractice": return "est/session-" + k.n + "/lesson/" + k.id + "/practice";
            case "pos": return "est/session-2/" + k.view;
            case "toefl": return "toefl";
            case "section": return build(["toefl", k.sec]);
            case "learn": return build(["toefl", k.sec, "learn", k.task]);
            case "hubview": return build(["toefl", k.sec, "practice", k.task]);
            case "set": return build(["toefl", k.sec, "practice", k.task, k.set]);
        }
        return "";
    }

    function urlFor(route) {
        return location.pathname + location.search + (route ? "#/" + route : "");
    }

    function routeFromHash() {
        var h = location.hash || "";
        if (h.indexOf("#/") !== 0) return "";
        return canonical(h.slice(2));
    }

    /* ---------- history helpers ---------- */

    function makeState(route, trail, y) {
        return { nav: 1, route: route, trail: trail || [], y: y || 0 };
    }

    function readState() {
        var st = history.state;
        if (st && st.nav === 1 && typeof st.route === "string") return st;
        return makeState(current, []);
    }

    function safe(fn) {
        try { fn(); return true; } catch (e) { disabled = true; return false; }
    }

    function replace(route, trail, y) {
        if (disabled) return;
        safe(function () { history.replaceState(makeState(route, trail, y), "", urlFor(route)); });
    }

    function push(route, trail) {
        if (disabled) return;
        safe(function () { history.pushState(makeState(route, trail, 0), "", urlFor(route)); });
    }

    function goBack(steps) {
        skipPop = true;
        clearTimeout(skipTimer);
        skipTimer = setTimeout(function () { skipPop = false; }, 1500);   // safety net
        history.go(-steps);
    }

    /* Remember how far the person has scrolled on this entry (debounced). */
    var scrollTimer = null;
    function currentY() { return window.pageYOffset || document.documentElement.scrollTop || 0; }
    function saveScrollNow() {
        if (disabled || restoring) return;
        var st = readState();
        replace(st.route, st.trail, currentY());
    }
    window.addEventListener("scroll", function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(saveScrollNow, 200);
    }, { passive: true });

    /* ---------- recording a navigation made with the site's own buttons ---------- */

    function commit(route, forward) {
        if (disabled) return;
        route = canonical(route);
        clearTimeout(scrollTimer);

        // Same screen again (re-render, "Retry this set", ...): never add a duplicate entry.
        if (route === current) {
            var same = readState();
            replace(route, same.trail, 0);
            return;
        }

        // Only the IELTS track changed (Academic <-> General): same screen, so replace instead of stacking.
        if (isIeltsRoute(current) && isIeltsRoute(route) && stripQuery(current) === stripQuery(route)) {
            var tr = readState();
            current = route;
            replace(route, tr.trail, 0);
            return;
        }

        saveScrollNow();
        var st = readState();
        var trail = st.trail || [];

        // "Up" buttons (← Back to ..., Practice hub, exit): behave like the browser Back button
        // instead of stacking another copy of a screen that is already earlier in the history.
        if (!forward && depth(route) < depth(current)) {
            var k = trail.lastIndexOf(route);
            if (k >= 0) {
                current = route;
                goBack(trail.length - k);
                return;
            }
        }

        // Next set / previous set: a sibling of the set we are on, so replace instead of stacking.
        if (isSet(current) && isSet(route)) {
            current = route;
            replace(route, trail, 0);
            return;
        }

        var newTrail = trail.concat(current).slice(-MAX_TRAIL);
        current = route;
        push(route, newTrail);
    }

    /* ---------- re-opening a screen (Back / Forward / refresh / typed URL) ---------- */

    function fn(name) { return typeof window[name] === "function" ? window[name] : null; }
    function visible(id) { var el = document.getElementById(id); return !!el && el.style.display === "block"; }

    function showOnly(id) {
        if (fn("hideAllScreens")) window.hideAllScreens();
        var el = document.getElementById(id);
        if (el) el.style.display = "block";
        window.scrollTo(0, 0);
    }

    // Returns the route that was really shown (a screen that cannot be rebuilt falls back to its parent).
    function render(route) {
        var k = parse(route);
        var call = function (name) { var f = fn(name); if (f) f.apply(null, Array.prototype.slice.call(arguments, 1)); };

        switch (k.kind) {
            case "hub":   call("showCourseHub"); return "";
            case "est":   call("showESTCourse"); return "est";
            case "est2":  call("showESTSession2"); return "est/session-2";
            case "estn":  call("showESTSession", k.n); return "est/session-" + k.n;
            case "estlesson": call("showESTLesson", k.id); return canonical(route);
            case "esttest": call("showESTTest", k.id); return canonical(route);
            case "estpractice": call("showESTLessonPractice", k.id); return canonical(route);
            case "toefl": call("showTOEFLCourse"); return "toefl";
            case "ielts":
                if (!fn("showIELTS")) { call("showCourseHub"); return ""; }
                call("showIELTS", k.view, k.track);     // IELTS.route() reports the track actually shown
                return window.IELTS ? window.IELTS.route() : canonical(route);
            case "pos":
                if (k.view === "learn")    { call("showLearnMode");    return route; }
                if (k.view === "strategy") { call("showStrategyMode"); return route; }
                if (k.view === "practice") {
                    // Quiz still in progress in this page session: show it exactly as it was.
                    if (quizAlive) showOnly("practice-screen"); else call("startPractice");
                    return route;
                }
                if (resultsAlive) { showOnly("results-screen"); return route; }
                call("showESTSession2");           // results cannot be rebuilt after a refresh
                return "est/session-2";
            default:
                var S = SECTIONS[k.sec];
                if (!S) { call("showCourseHub"); return ""; }
                if (!visible(S.screen) || k.kind === "section") call(S.show);
                if (k.kind === "learn")   call(S.task, k.task);
                if (k.kind === "hubview") call(S.practice, k.task);
                if (k.kind === "set")     call(S.set, k.task, k.set);
                return route;
        }
    }

    // History can jump several steps at once (long-press Back, history menu), skipping the
    // screens that would normally stop a timer or audio. Stop them here; all are safe to call any time.
    function stopRunningActivities() {
        ["stopTOEFLReadingTimer", "stopTOEFLWritingTimer", "lsCleanup", "spCleanup"].forEach(function (name) {
            var f = fn(name);
            if (f) { try { f(); } catch (e) { /* never block navigation */ } }
        });
    }

    function restore(route) {
        stopRunningActivities();
        restoring = true;
        var shown;
        try { shown = render(route); } finally { restoring = false; }
        return canonical(shown);
    }

    window.addEventListener("popstate", function (e) {
        var st = e.state && e.state.nav === 1 ? e.state : null;
        var route = st ? canonical(st.route) : routeFromHash();

        if (skipPop) {                 // our own history.go(): the screen is already correct
            skipPop = false;
            clearTimeout(skipTimer);
            current = route;
            return;
        }
        if (route === current) return;

        var shown = restore(route);
        current = shown;
        var trail = st ? st.trail : [];
        if (!st || shown !== route) replace(shown, trail, 0);
        else if (st.y) {
            try { window.scrollTo({ top: st.y, left: 0, behavior: "instant" }); } catch (err) { window.scrollTo(0, st.y); }
        }
    });

    /* ---------- hooking the existing functions ---------- */

    function wrap(name, routeOf, opts) {
        var original = window[name];
        if (typeof original !== "function" || original.__nav) return;
        opts = opts || {};
        var wrapped = function () {
            if (opts.before) opts.before();
            var result = original.apply(this, arguments);
            if (opts.after) opts.after();
            if (!restoring) {
                var route = routeOf.apply(null, arguments);
                if (route !== null) commit(route, opts.forward);
            }
            return result;
        };
        wrapped.__nav = true;
        window[name] = wrapped;
    }

    function install() {
        var POS = "est/session-2/";
        wrap("showCourseHub",   function () { return ""; });
        wrap("showESTCourse",   function () { return "est"; });
        wrap("showESTSession2", function () { return "est/session-2"; });
        wrap("showESTSession",  function (num) { return "est/session-" + num; });
        var lessonRoute = function (id, tail) { var l = (window.estLessons || {})[id]; return l ? "est/session-" + l.session + "/lesson/" + id + tail : null; };
        wrap("showESTLesson", function (id) { return lessonRoute(id, ""); });
        wrap("showESTTest", function (id) { var t = (window.estTestIndex || {})[id]; return t ? "est/session-" + t.session + "/test/" + id : null; });
        wrap("showESTLessonPractice", function (id) { return lessonRoute(id, "/practice"); });
        wrap("showLearnMode",   function () { return POS + "learn"; });
        wrap("showStrategyMode", function () { return POS + "strategy"; });
        wrap("startPractice",   function () { return POS + "practice"; }, { after: function () { quizAlive = true; resultsAlive = false; } });
        wrap("restartQuiz",     function () { return POS + "practice"; }, { forward: true });
        wrap("showResults",     function () { return POS + "results"; },  { after: function () { resultsAlive = true; } });
        wrap("exitPractice", function () { return null; }, { before: function () { quizAlive = false; } });
        wrap("showTOEFLCourse", function () { return "toefl"; });
        wrap("showIELTS", function () { return window.IELTS ? window.IELTS.route() : null; });

        Object.keys(SECTIONS).forEach(function (sec) {
            var S = SECTIONS[sec];
            var base = function () { return ["toefl", sec]; };
            wrap(S.show, function () { return build(base()); });
            wrap("backToTOEFL" + sec.charAt(0).toUpperCase() + sec.slice(1) + "Home", function () { return build(base()); });
            wrap(S.task,     function (t)    { return build(base().concat(["learn", t])); });
            wrap(S.practice, function (t)    { return build(base().concat(["practice", t])); });
            wrap(S.set,      function (t, s) { return build(base().concat(["practice", t, s])); });
        });
    }

    /* ---------- start-up ---------- */

    function init() {
        install();
        try { history.scrollRestoration = "manual"; } catch (e) { /* older browsers */ }

        var st = history.state && history.state.nav === 1 ? history.state : null;
        var wanted = st ? canonical(st.route) : routeFromHash();
        var trail = st ? st.trail : [];
        var y = st ? st.y : 0;

        var shown = "";
        if (wanted) shown = restore(wanted);      // the hub is already on screen at load
        current = shown;

        replace(shown, trail, shown === wanted ? y : 0);
        if (y && shown === wanted) {
            try { window.scrollTo({ top: y, left: 0, behavior: "instant" }); } catch (err) { window.scrollTo(0, y); }
        }
    }

    init();
})();
