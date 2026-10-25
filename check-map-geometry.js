/* Checks that each map exercise's answer key follows from the map's coordinates and the spoken
   directions (left/right taken from the direction of travel), and that the drawing is clean.
   Run from the project root:  node tests/check-map-geometry.js */
"use strict";
var path = require("path");
global.window = {};
require(path.join(__dirname, "..", "ielts", "audio-practice.js"));
var bank = window.IELTS.audioPractice, fails = 0, checks = 0;

function ok(cond, msg) { checks++; if (!cond) { fails++; console.log("  FAIL: " + msg); } }
function ex(id) { return bank.mapExercises.filter(function (e) { return e.id === id; })[0]; }
function ans(e, qid) { return e.questions.filter(function (q) { return q.id === qid; })[0].answer; }
function blk(e, k) { return e.map.blocks.filter(function (b) { return b.k === k; })[0]; }
function overlapX(a, b) { return a.x < b.x + b.w && b.x < a.x + a.w; }
function overlapY(a, b) { return a.y < b.y + b.h && b.y < a.y + a.h; }

/* ---------- generic checks, all exercises ---------- */
bank.mapExercises.forEach(function (e) {
  console.log("[" + e.id + "] generic checks");
  var m = e.map, ks = m.blocks.map(function (b) { return b.k; });
  ok(new Set(ks).size === ks.length, "block letters are unique");
  ok(ks.slice().sort().join("") === "ABCDEFGH".slice(0, ks.length), "letters run A.. without gaps");
  m.blocks.forEach(function (b) {
    ok(b.x >= 8 && b.y >= 8 && b.x + b.w <= m.w - 8 && b.y + b.h <= m.h - 8, "block " + b.k + " inside the map");
  });
  for (var i = 0; i < m.blocks.length; i++) for (var j = i + 1; j < m.blocks.length; j++) {
    var a = m.blocks[i], b = m.blocks[j];
    ok(!(overlapX(a, b) && overlapY(a, b)), "blocks " + a.k + " and " + b.k + " do not overlap");
  }
  // blocks must not sit on a path
  m.paths.forEach(function (p) {
    var half = m.pathWidth / 2 + 3;
    var r = { x: Math.min(p.x1, p.x2) - half, y: Math.min(p.y1, p.y2) - half,
              w: Math.abs(p.x2 - p.x1) + 2 * half, h: Math.abs(p.y2 - p.y1) + 2 * half };
    m.blocks.forEach(function (b) { ok(!(overlapX(b, r) && overlapY(b, r)), "block " + b.k + " is not on a path"); });
  });
  // text labels: estimate width as 0.6 * font size * characters and make sure they miss every block
  var fs = m.labelSize || 22;
  m.labels.forEach(function (l) {
    var w = l.t.length * 0.6 * fs, x = l.anchor === "middle" ? l.x - w / 2 : l.x;
    var box = { x: x - 4, y: l.y - fs, w: w + 8, h: fs + 6 };
    ok(box.x >= 4 && box.x + box.w <= m.w - 4 && box.y >= 4 && box.y + box.h <= m.h - 4, "label '" + l.t + "' inside the map");
    m.blocks.forEach(function (b) { ok(!(overlapX(box, b) && overlapY(box, b)), "label '" + l.t + "' does not cover block " + b.k); });
  });
  e.questions.forEach(function (q) {
    ok(ks.indexOf(q.answer) !== -1, e.id + " " + q.id + " answer " + q.answer + " is a real block");
    ok(q.mapName && q.mapName.length >= 1 && q.mapName.length <= 2, e.id + " " + q.id + " has a 1-2 line map name");
  });
  var answers = e.questions.map(function (q) { return q.answer; });
  ok(new Set(answers).size === answers.length, "no two questions share an answer");
  var track = bank.tracks.filter(function (t) { return t.id === e.trackId; })[0];
  ok(!!track, "recording " + e.trackId + " exists in the audio bank");
});

/* ---------- campus: derive answers from the script ---------- */
(function () {
  var e = ex("campus"), m = e.map, f = m.fountain;
  console.log("[campus] spoken directions vs geometry");
  // "Walk along the path until you reach the fountain" (heading north). "Turn left" => heading west.
  // Heading west, the right-hand side is north (smaller y).
  var westPath = m.paths.filter(function (p) { return p.y1 === p.y2 && p.x2 < p.x1; })[0];
  var py = westPath.y1, half = m.pathWidth / 2;
  var adj = function (b) { return b.x + b.w <= f.x - f.r && b.x >= westPath.x2; };
  var north = m.blocks.filter(function (b) { return adj(b) && b.y + b.h <= py - half && py - half - (b.y + b.h) <= 20; });
  var south = m.blocks.filter(function (b) { return adj(b) && b.y >= py + half && b.y - (py + half) <= 20; });
  var br = m.bridge, bridgeLeft = br.x, bridgeRight = br.x + br.w;
  var beforeBridge = function (b) { return b.x >= bridgeRight; };
  var afterBridge = function (b) { return b.x + b.w <= bridgeLeft; };
  var firstRight = north.filter(beforeBridge).sort(function (a, b) { return b.x - a.x; })[0];
  ok(firstRight && firstRight.k === ans(e, "q1"), "first building on the right after turning left is " + ans(e, "q1") + " (got " + (firstRight && firstRight.k) + ")");
  var firstLeft = south.filter(beforeBridge).sort(function (a, b) { return b.x - a.x; })[0];
  ok(firstLeft && firstLeft.k === "B", "the first building on the LEFT is the B trap (got " + (firstLeft && firstLeft.k) + ")");
  // beyond the bridge: find the pair of buildings facing each other across the path
  var pairs = [];
  north.filter(afterBridge).forEach(function (n) { south.filter(afterBridge).forEach(function (s) { if (overlapX(n, s)) pairs.push([n, s]); }); });
  ok(pairs.length === 1, "exactly one facing pair beyond the bridge (got " + pairs.length + ")");
  var pair = pairs[0];
  // the car park is the lettered space beside exactly one of the pair, on the same side of the path
  var beside = function (a, c) { return c.k !== a.k && overlapY(a, c) && Math.abs(a.x - (c.x + c.w)) <= 20; };
  var nearPair = [];
  pair.forEach(function (a) { m.blocks.forEach(function (c) { if (c.k !== pair[0].k && c.k !== pair[1].k && beside(a, c)) nearPair.push([a.k, c.k]); }); });
  ok(nearPair.length === 1, "exactly one space is beside a building of the pair (got " + JSON.stringify(nearPair) + ")");
  ok(nearPair[0][0] === ans(e, "q2"), "computer room (beside the car park) is " + ans(e, "q2") + " (got " + nearPair[0][0] + ")");
  ok(nearPair[0][1] === ans(e, "q4"), "car park is " + ans(e, "q4") + " (got " + nearPair[0][1] + ")");
  var hall = pair.filter(function (b) { return b.k !== nearPair[0][0]; })[0];
  ok(hall.k === ans(e, "q3"), "sports hall (opposite the computer room) is " + ans(e, "q3") + " (got " + hall.k + ")");
  // route in the review stage must go entrance -> fountain -> west past the bridge and stop between the pair
  ok(/^M430 505 V280 H(\d+)$/.test(m.route), "route has the expected shape");
  var endX = Number(/H(\d+)$/.exec(m.route)[1]);
  ok(endX < bridgeLeft && endX >= pair[0].x && endX <= pair[0].x + pair[0].w, "route ends between the facing pair, after the bridge");
})();

/* ---------- garden: derive answers from the script ---------- */
(function () {
  var e = ex("garden"), m = e.map;
  console.log("[garden] spoken directions vs geometry");
  var px = m.paths[0].x1, half = m.pathWidth / 2;
  // Walking straight ahead = north, so the right-hand side is east (larger x).
  var right = m.blocks.filter(function (b) { return b.x >= px + half; }).sort(function (a, b) { return b.y - a.y; });
  var left = m.blocks.filter(function (b) { return b.x + b.w <= px - half; }).sort(function (a, b) { return b.y - a.y; });
  ok(right[0].k === ans(e, "q1"), "greenhouse = first building on the right = " + ans(e, "q1") + " (got " + right[0].k + ")");
  // "Continue past it": the benches are on the right beyond the greenhouse, the tool shed is opposite them on the left
  var beyond = right.slice(1);
  var candidates = [];
  beyond.forEach(function (rb) { left.forEach(function (lb) { if (overlapY(rb, lb)) candidates.push([lb, rb]); }); });
  // A tool shed/benches pair must also be reachable "past" the greenhouse: the first such pair in walking order
  var pair = candidates.sort(function (a, b) { return b[0].y - a[0].y; })[0];
  ok(pair[0].k === ans(e, "q2"), "tool shed = left, opposite the benches = " + ans(e, "q2") + " (got " + pair[0].k + ")");
  ok(pair[1].k === ans(e, "q3"), "benches = right, opposite the tool shed = " + ans(e, "q3") + " (got " + pair[1].k + ")");
  var oppGreenhouse = left.filter(function (lb) { return overlapY(lb, right[0]); })[0];
  ok(oppGreenhouse && oppGreenhouse.k === "E" && oppGreenhouse.k !== ans(e, "q2"), "the left building opposite the greenhouse (E) is a distractor, not the tool shed");
})();

console.log("\n" + checks + " checks, " + fails + " failed");
process.exit(fails ? 1 : 0);
