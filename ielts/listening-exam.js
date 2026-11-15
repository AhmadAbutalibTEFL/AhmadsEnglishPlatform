/* =========================================================
   IELTS LISTENING - exam-style practice: assembles Test A and
   Test B (4 parts each, 10 questions per part) from
   listening-exam-1..4.js. Load AFTER those files, BEFORE ielts.js.
   The Listening test is the same for Academic and General Training.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var D = ns.listeningData, X = ns.lx;
    if (!D || !X || !X.tests) return;
    var AUDIO = "audio/ielts-listening/";
    var sets = [];
    X.tests.forEach(function (t) {
        var qs = [], nums = [], n = t.qOffset || 0, marks = 0;
        t.parts.forEach(function (p) {
            p.qs.forEach(function (q) {
                q.marks = q.type === "multi" ? q.answer.length : 1;
                nums.push(n + 1 + (q.marks > 1 ? "\u2013" + (n + q.marks) : ""));
                n += q.marks; marks += q.marks; qs.push(q);
            });
        });
        sets.push({
            id: t.id, skill: "listening", track: "both", test: t.test, part: t.part, exam: true,
            typeName: t.typeName, title: t.title, context: t.context, kind: t.kind,
            lessons: t.lessons || [], audio: AUDIO + t.id + ".mp3", script: t.script, voices: t.voices,
            parts: t.parts, questions: qs, qNums: nums, totalMarks: marks, qOffset: t.qOffset || 0,
            vocab: t.vocab || [], minutes: t.minutes,
            intro: "Test " + t.test + " \u00b7 Part " + t.part + " \u00b7 " + t.kind + " \u00b7 " + marks + " questions"
        });
    });
    D.practiceSets = sets;
    D.testNames = ["A", "B"];
    /* The strategy lessons now live inside each practice part. */
    if (D.lessons) D.lessons.forEach(function (L) { L.strategyOnly = true; });
})();
