/* =========================================================
   IELTS PROGRESS: saved practice results (all four skills)

   Mirrors the TOEFL pattern: a versioned localStorage record of each
   activity's best score and attempt count. Pure storage + summary; ielts.js
   renders the dashboard card from summary(). Load BEFORE ielts.js.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};

    var STORAGE_KEY = "ieltsProgress.v1";
    var MASTERY_PCT = 80;

    function load() {
        try {
            var raw = window.localStorage.getItem(STORAGE_KEY);
            if (raw) {
                var parsed = JSON.parse(raw);
                if (parsed && typeof parsed === "object") return { results: parsed.results || {} };
            }
        } catch (e) { /* storage unavailable: progress lasts for this visit only */ }
        return { results: {} };
    }

    var data = load();

    function save() {
        try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { /* ignore */ }
    }

    /* Record one completed activity. id: stable activity id (e.g. "listening-quiz",
       "lesson:mcq", "reading-set:rs-ac-1", "writing-task:wt-2"). pct: 0-100. */
    function record(id, pct) {
        var entry = data.results[id] || { best: 0, attempts: 0, last: 0 };
        entry.attempts += 1;
        entry.last = pct;
        if (pct > entry.best) entry.best = pct;
        data.results[id] = entry;
        save();
    }

    function best(id) {
        var entry = data.results[id];
        return entry ? entry.best : null;
    }

    function mastered(id) {
        var entry = data.results[id];
        return !!entry && entry.best >= MASTERY_PCT;
    }

    /* groups: [{label, ids:[...]}] -> per-group attempted/mastered counts for the dashboard. */
    function summarize(groups) {
        var out = [];
        groups.forEach(function (g) {
            var attempted = 0, masteredCount = 0, bestSum = 0;
            g.ids.forEach(function (id) {
                var entry = data.results[id];
                if (entry) { attempted += 1; bestSum += entry.best; if (entry.best >= MASTERY_PCT) masteredCount += 1; }
            });
            out.push({
                label: g.label,
                total: g.ids.length,
                attempted: attempted,
                mastered: masteredCount,
                average: attempted ? Math.round(bestSum / attempted) : null
            });
        });
        return out;
    }

    ns.progress = { record: record, best: best, mastered: mastered, summarize: summarize, masteryPct: MASTERY_PCT };
})();
