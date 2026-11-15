// Writes ielts/exam-audio-scripts.json from the exam data files (run with: node export_exam_scripts.js)
global.window = {}; const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "ielts");
["listening-data","listening-exam-1","listening-exam-2","listening-exam-3","listening-exam-4","listening-exam",
 "speaking-data","speaking-exam"].forEach(f => { const p = path.join(dir, f + ".js"); if (fs.existsSync(p)) require(p); });
const I = window.IELTS, out = [];
((I.listeningData || {}).practiceSets || []).forEach(s => out.push({
  id: s.id, dir: "audio/ielts-listening", rate: "-6%",
  lines: s.script.map(l => [s.voices[l[0]], l[1]])
}));
((I.speakingData || {}).audioUnits || []).forEach(u => out.push(u));
fs.writeFileSync(path.join(dir, "exam-audio-scripts.json"), JSON.stringify(out));
console.log("units:", out.length);
