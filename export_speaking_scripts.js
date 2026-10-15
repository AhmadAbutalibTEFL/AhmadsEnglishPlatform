// Builds speaking-audio-scripts.json from toefl-speaking.js + toefl-speaking-practice.js
// Run from the repo root:  node export_speaking_scripts.js
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const read = f => fs.readFileSync(path.join(__dirname, f), "utf8");
const sandbox = { window: { addEventListener() {}, localStorage: null }, document: { addEventListener() {}, getElementById() { return null; }, querySelectorAll() { return []; } }, console };
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);

// 1) Practice bank (an IIFE that sets window.toeflSpeakingBank)
vm.runInContext(read("toefl-speaking-practice.js"), sandbox);

// 2) Guided sets: pull only the data block out of toefl-speaking.js (const SR/SI + toeflSpeakingTasks)
const src = read("toefl-speaking.js");
const start = src.indexOf("const SR =");
const end = src.indexOf("/* =========================================================\n   PROGRESS");
if (start < 0 || end < 0) throw new Error("Could not find the guided-set data block in toefl-speaking.js");
vm.runInContext(src.slice(start, end) + "\nthis.__tasks = toeflSpeakingTasks;", sandbox);

const pad = n => String(n + 1).padStart(2, "0");
const units = [];
const add = (id, task, set, kind, text) => units.push({ id, task, set, kind, lines: [{ sp: kind === "interview" ? "Interviewer" : "Speaker", text }] });

for (const taskId of ["repeat", "interview"]) {
    const guided = sandbox.__tasks[taskId].sets;
    const bank = (sandbox.window.toeflSpeakingBank || {})[taskId] || [];
    for (const set of [...guided, ...bank]) {
        set.items.forEach((item, i) => {
            const text = taskId === "repeat" ? item.text : [item.intro, item.question].filter(Boolean).join(" ");
            add(`sp-${taskId}-${set.id}-${pad(i)}`, taskId, set.id, taskId, text.trim());
        });
    }
}
fs.writeFileSync(path.join(__dirname, "speaking-audio-scripts.json"), JSON.stringify(units, null, 2), "utf8");
console.log(`Wrote speaking-audio-scripts.json with ${units.length} units.`);
