/* =========================================================
   IELTS READING - exam-style practice: assembles the tests from
   reading-exam-1/2/3.js into the Reading data. Replaces the earlier
   short practice sets so each question type appears ONCE, as a full
   passage with a full question set. Load AFTER reading-data-2.js and
   reading-exam-1/2/3.js, BEFORE ielts.js.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var D = ns.readingData, X = ns.rx;
    if (!D || !X || !X.tests) return;

    var ORDER = [
        { id: "headings", lesson: "r-headings", name: "Matching headings", group: "Matching", note: "Choose the heading that gives the main idea of each paragraph." },
        { id: "info", lesson: "r-info", name: "Matching information", group: "Matching", note: "Find which paragraph contains a fact, example or reason." },
        { id: "features", lesson: "r-features", name: "Matching features", group: "Matching", note: "Match statements to people, places or things." },
        { id: "endings", lesson: "r-endings", name: "Matching sentence endings", group: "Matching", note: "Finish each sentence with the right ending from a list." },
        { id: "sentence", lesson: "r-gapfill", name: "Sentence completion", group: "Completion", note: "Fill each gap with exact words from the text." },
        { id: "summary", lesson: "r-summary", name: "Summary, note, table and flow-chart completion", group: "Completion", note: "Fill gaps in a summary, notes, a table or a flow-chart." },
        { id: "diagram", lesson: "r-diagram", name: "Diagram label completion", group: "Completion", note: "Name the parts of a drawing using words from the text." },
        { id: "tfng", lesson: "r-tfng", name: "True / False / Not given", group: "Checking facts and opinions", note: "Does the text agree, disagree, or say nothing?" },
        { id: "ynng", lesson: "r-ynng", name: "Yes / No / Not given", group: "Checking facts and opinions", note: "Does this match the writer's opinion, contradict it, or is it not mentioned?" },
        { id: "mcq", lesson: "r-mcq", name: "Multiple choice", group: "Choosing and short answers", note: "Pick the best answer, or two answers, from a list." },
        { id: "short", lesson: "r-short", name: "Short-answer questions", group: "Choosing and short answers", note: "Answer a question with a few words from the text." }
    ];
    var byType = {};
    ORDER.forEach(function (o) { byType[o.id] = o; });

    var sets = [];
    X.tests.forEach(function (t) {
        var meta = byType[t.type];
        if (!meta) return;
        var qs = [];
        t.parts.forEach(function (p) { p.qs.forEach(function (q) { qs.push(q); }); });
        sets.push({
            id: t.id, track: t.track, exam: true, type: t.type, typeName: meta.name, lesson: meta.lesson,
            title: t.title, passageTitle: t.passageTitle, passage: t.passage, visual: t.visual,
            parts: t.parts, questions: qs, vocab: t.vocab || [], minutes: t.minutes,
            intro: (t.track === "general" ? "General Training style" : "Academic style") + " \u00b7 " + qs.length + " questions \u00b7 about " + t.minutes + " minutes"
        });
    });
    /* Earlier short practice sets are replaced so no question type is repeated. */
    D.practiceSets = sets;
    D.examOrder = ORDER;
    /* Strategy lessons for the 11 types now live inside each practice page. */
    D.lessons.forEach(function (L) { if (L.id !== "r-skimming") L.strategyOnly = true; });
})();
