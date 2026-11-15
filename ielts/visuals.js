/* =========================================================
   IELTS VISUALS: original charts, maps and diagrams (SVG)

   Draws the pictures used in Listening map lessons and in Writing Task 1
   (line graph, bar chart, pie charts, process diagram, maps). Every picture
   is generated from the small data spec that sits next to the lesson or task,
   so the picture and the model answer always use the same numbers.
   All data and drawings are ORIGINAL and invented for PassMyEnglish.

   Public: window.IELTS.visuals.render(spec) -> HTML string.
   Load BEFORE ielts.js and audio-practice.js.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};
    var W = 360;
    var COLORS = ["#2563eb", "#dc2626", "#16a34a", "#d97706", "#7c3aed", "#0891b2"];
    var INK = "#1f2937", SOFT = "#6b7280", GRID = "#e5e7eb";

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
        });
    }
    function r1(n) { return Math.round(n * 10) / 10; }

    function text(x, y, s, o) {
        o = o || {};
        return '<text x="' + r1(x) + '" y="' + r1(y) + '" font-size="' + (o.size || 12) + '" fill="' + (o.fill || INK) + '"' +
            (o.anchor ? ' text-anchor="' + o.anchor + '"' : '') + (o.weight ? ' font-weight="' + o.weight + '"' : '') +
            (o.rotate ? ' transform="rotate(' + o.rotate + ' ' + r1(x) + ' ' + r1(y) + ')"' : '') + '>' + esc(s) + '</text>';
    }

    function wrap(inner, h, title, alt, caption) {
        return '<figure class="ielts-visual"><svg viewBox="0 0 ' + W + ' ' + h + '" role="img" aria-label="' + esc(alt || title || "Diagram") + '" ' +
            'font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" xmlns="http://www.w3.org/2000/svg">' +
            '<rect x="0" y="0" width="' + W + '" height="' + h + '" rx="10" fill="#ffffff"/>' +
            (title ? text(W / 2, 22, title, { anchor: "middle", size: 13, weight: "bold" }) : '') +
            inner + '</svg>' + (caption ? '<figcaption class="ielts-note">' + esc(caption) + '</figcaption>' : '') + '</figure>';
    }

    function legend(items, y) {
        /* items: [{name,color}] laid out in rows that fit the width */
        var out = '', x = 14, rowY = y;
        items.forEach(function (it) {
            var w = 30 + it.name.length * 6.4;
            if (x + w > W - 8) { x = 14; rowY += 18; }
            out += '<rect x="' + x + '" y="' + (rowY - 9) + '" width="11" height="11" rx="2" fill="' + it.color + '"/>' +
                text(x + 16, rowY + 1, it.name, { size: 11.5 });
            x += w;
        });
        return { svg: out, bottom: rowY + 12 };
    }

    /* ---------- line graph ---------- */
    function line(s) {
        var L = 46, R = 14, T = 42, B = 40, H = 250;
        var pw = W - L - R, ph = H - T - B;
        var n = s.xLabels.length, ymax = s.yMax, step = s.yStep;
        var out = '';
        for (var v = 0; v <= ymax + 0.001; v += step) {
            var y = T + ph - v / ymax * ph;
            out += '<line x1="' + L + '" y1="' + r1(y) + '" x2="' + (W - R) + '" y2="' + r1(y) + '" stroke="' + GRID + '"/>' + text(L - 6, y + 4, String(v), { anchor: "end", size: 11, fill: SOFT });
        }
        out += text(12, T + ph / 2, s.yLabel || "", { anchor: "middle", size: 11, fill: SOFT, rotate: -90 });
        s.xLabels.forEach(function (lab, i) {
            var x = L + i / (n - 1) * pw;
            out += '<line x1="' + r1(x) + '" y1="' + (T + ph) + '" x2="' + r1(x) + '" y2="' + (T + ph + 4) + '" stroke="' + SOFT + '"/>' + text(x, T + ph + 17, String(lab), { anchor: "middle", size: 11, fill: SOFT });
        });
        out += '<line x1="' + L + '" y1="' + (T + ph) + '" x2="' + (W - R) + '" y2="' + (T + ph) + '" stroke="' + SOFT + '"/>';
        s.series.forEach(function (se, k) {
            var col = se.color || COLORS[k % COLORS.length], pts = [];
            se.values.forEach(function (val, i) { pts.push(r1(L + i / (n - 1) * pw) + ',' + r1(T + ph - val / ymax * ph)); });
            out += '<polyline fill="none" stroke="' + col + '" stroke-width="2.5" stroke-linejoin="round" points="' + pts.join(' ') + '"/>';
            se.values.forEach(function (val, i) { out += '<circle cx="' + r1(L + i / (n - 1) * pw) + '" cy="' + r1(T + ph - val / ymax * ph) + '" r="3.2" fill="' + col + '"/>'; });
        });
        var lg = legend(s.series.map(function (se, k) { return { name: se.name, color: se.color || COLORS[k % COLORS.length] }; }), H - 6);
        return wrap(out + lg.svg, lg.bottom + 4, s.title, s.alt, s.caption);
    }

    /* ---------- clustered bar chart ---------- */
    function bar(s) {
        var L = 46, R = 14, T = 42, B = 40, H = 260;
        var pw = W - L - R, ph = H - T - B;
        var nc = s.categories.length, ns_ = s.series.length, ymax = s.yMax, step = s.yStep;
        var out = '';
        for (var v = 0; v <= ymax + 0.001; v += step) {
            var y = T + ph - v / ymax * ph;
            out += '<line x1="' + L + '" y1="' + r1(y) + '" x2="' + (W - R) + '" y2="' + r1(y) + '" stroke="' + GRID + '"/>' + text(L - 6, y + 4, String(v), { anchor: "end", size: 11, fill: SOFT });
        }
        out += text(12, T + ph / 2, s.yLabel || "", { anchor: "middle", size: 11, fill: SOFT, rotate: -90 });
        var groupW = pw / nc, barW = Math.min(30, (groupW - 16) / ns_);
        s.categories.forEach(function (cat, i) {
            var gx = L + i * groupW + (groupW - barW * ns_) / 2;
            s.series.forEach(function (se, k) {
                var val = se.values[i], bh = val / ymax * ph, bx = gx + k * barW;
                out += '<rect x="' + r1(bx) + '" y="' + r1(T + ph - bh) + '" width="' + r1(barW - 2) + '" height="' + r1(bh) + '" rx="2" fill="' + (se.color || COLORS[k % COLORS.length]) + '"/>';
                if (s.showValues) out += text(bx + (barW - 2) / 2, T + ph - bh - 4, String(val), { anchor: "middle", size: 10.5 });
            });
            out += text(L + i * groupW + groupW / 2, T + ph + 17, cat, { anchor: "middle", size: 11, fill: SOFT });
        });
        out += '<line x1="' + L + '" y1="' + (T + ph) + '" x2="' + (W - R) + '" y2="' + (T + ph) + '" stroke="' + SOFT + '"/>';
        var lg = legend(s.series.map(function (se, k) { return { name: se.name, color: se.color || COLORS[k % COLORS.length] }; }), H - 6);
        return wrap(out + lg.svg, lg.bottom + 4, s.title, s.alt, s.caption);
    }

    /* ---------- pie charts (one or two) ---------- */
    function pie(s) {
        var names = s.pies[0].slices.map(function (x) { return x.name; });
        var np = s.pies.length, r = np === 1 ? 78 : 62, cy = 42 + 18 + r;
        var out = '';
        s.pies.forEach(function (p, pi) {
            var cx = np === 1 ? W / 2 : (pi === 0 ? 92 : 268), a0 = -Math.PI / 2;
            var total = p.slices.reduce(function (t, x) { return t + x.value; }, 0);
            out += text(cx, cy - r - 10, p.label, { anchor: "middle", size: 12.5, weight: "bold" });
            p.slices.forEach(function (sl) {
                var k = names.indexOf(sl.name), a1 = a0 + sl.value / total * Math.PI * 2, mid = (a0 + a1) / 2;
                var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
                out += '<path d="M' + cx + ',' + cy + ' L' + r1(x0) + ',' + r1(y0) + ' A' + r + ',' + r + ' 0 ' + (a1 - a0 > Math.PI ? 1 : 0) + ' 1 ' + r1(x1) + ',' + r1(y1) + ' Z" fill="' + COLORS[k % COLORS.length] + '" stroke="#fff" stroke-width="2"/>';
                var pct = Math.round(sl.value / total * 100);
                var inside = pct >= 9, rr = inside ? r * 0.64 : r + 13;
                out += text(cx + rr * Math.cos(mid), cy + rr * Math.sin(mid) + 4, pct + '%', { anchor: "middle", size: 11.5, weight: "bold", fill: inside ? "#ffffff" : INK });
                a0 = a1;
            });
        });
        var lg = legend(names.map(function (nm, k) { return { name: nm, color: COLORS[k % COLORS.length] }; }), cy + r + 34);
        return wrap(out + lg.svg, lg.bottom + 4, s.title, s.alt, s.caption);
    }

    /* ---------- process diagram: numbered steps joined by arrows ---------- */
    function process(s) {
        var bw = 296, bh = 40, gap = 20, top = 40, x = (W - bw) / 2, out = '';
        s.steps.forEach(function (st, i) {
            var y = top + i * (bh + gap);
            out += '<rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + bh + '" rx="9" fill="#eff6ff" stroke="#93c5fd"/>' +
                '<circle cx="' + (x + 20) + '" cy="' + (y + bh / 2) + '" r="11" fill="#2563eb"/>' + text(x + 20, y + bh / 2 + 4, String(i + 1), { anchor: "middle", size: 12, weight: "bold", fill: "#ffffff" });
            var lines = st.split("\n");
            if (lines.length === 1) out += text(x + 40, y + bh / 2 + 4.5, st, { size: 12.5 });
            else { out += text(x + 40, y + 17, lines[0], { size: 12.5 }) + text(x + 40, y + 32, lines[1], { size: 11.5, fill: SOFT }); }
            if (i < s.steps.length - 1) {
                var ax = W / 2, ay = y + bh;
                out += '<line x1="' + ax + '" y1="' + (ay + 2) + '" x2="' + ax + '" y2="' + (ay + gap - 6) + '" stroke="#2563eb" stroke-width="2"/>' +
                    '<path d="M' + (ax - 5) + ',' + (ay + gap - 9) + ' L' + ax + ',' + (ay + gap - 2) + ' L' + (ax + 5) + ',' + (ay + gap - 9) + ' Z" fill="#2563eb"/>';
            }
        });
        return wrap(out, top + s.steps.length * (bh + gap) - gap + 14, s.title, s.alt, s.caption);
    }

    /* ---------- scenes: maps and plans drawn from simple shapes ---------- */
    function sceneItems(items) {
        var out = '';
        items.forEach(function (it) {
            if (it.t === "rect") {
                out += '<rect x="' + it.x + '" y="' + it.y + '" width="' + it.w + '" height="' + it.h + '" rx="' + (it.rx === undefined ? 4 : it.rx) + '" fill="' + (it.fill || "#e5e7eb") + '" stroke="' + (it.stroke || "#9ca3af") + '"' + (it.dash ? ' stroke-dasharray="4 3"' : '') + '/>';
                if (it.label) out += text(it.x + it.w / 2, it.y + it.h / 2 + (it.size || 12) / 3, it.label, { anchor: "middle", size: it.size || 12, weight: it.bold === false ? "" : "bold", fill: it.ink || INK });
            } else if (it.t === "road") {
                out += '<line x1="' + it.x1 + '" y1="' + it.y1 + '" x2="' + it.x2 + '" y2="' + it.y2 + '" stroke="' + (it.color || "#d1d5db") + '" stroke-width="' + (it.w || 14) + '" stroke-linecap="butt"' + (it.dash ? ' stroke-dasharray="6 5"' : '') + '/>';
            } else if (it.t === "text") {
                out += text(it.x, it.y, it.s, { size: it.size || 11, anchor: it.anchor, fill: it.fill || SOFT, weight: it.weight, rotate: it.rotate });
            } else if (it.t === "circle") {
                out += '<circle cx="' + it.x + '" cy="' + it.y + '" r="' + it.r + '" fill="' + (it.fill || "#bfdbfe") + '" stroke="' + (it.stroke || "#60a5fa") + '"/>';
                if (it.label) out += text(it.x, it.y + 4, it.label, { anchor: "middle", size: it.size || 11, weight: "bold" });
            } else if (it.t === "tree") {
                out += '<circle cx="' + it.x + '" cy="' + it.y + '" r="' + (it.r || 6) + '" fill="#86efac" stroke="#22c55e"/>';
            } else if (it.t === "water") {
                out += '<rect x="' + it.x + '" y="' + it.y + '" width="' + it.w + '" height="' + it.h + '" fill="#bae6fd" stroke="#7dd3fc"/>';
            } else if (it.t === "arrow") {
                out += '<line x1="' + it.x1 + '" y1="' + it.y1 + '" x2="' + it.x2 + '" y2="' + it.y2 + '" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/>';
            }
        });
        return out;
    }

    function compass(x, y) {
        return '<g>' + '<circle cx="' + x + '" cy="' + y + '" r="14" fill="#fff" stroke="#9ca3af"/>' +
            '<path d="M' + x + ',' + (y - 10) + ' L' + (x + 4) + ',' + (y + 2) + ' L' + x + ',' + (y - 1) + ' L' + (x - 4) + ',' + (y + 2) + ' Z" fill="#1f2937"/>' +
            text(x, y - 17, "N", { anchor: "middle", size: 10, weight: "bold" }) + '</g>';
    }

    function scene(s) {
        /* s.panels: [{label, h, items}] drawn one under the other, each 360 wide */
        var out = '', y = s.title ? 34 : 8;
        s.panels.forEach(function (p) {
            var h = p.h || 220;
            out += '<g transform="translate(0,' + y + ')">' + '<rect x="8" y="0" width="' + (W - 16) + '" height="' + h + '" rx="8" fill="#f9fafb" stroke="' + GRID + '"/>' +
                '<g>' + sceneItems(p.items) + '</g>' +
                (p.label ? text(16, 17, p.label, { size: 12.5, weight: "bold" }) : '') +
                (p.compass === false ? '' : compass(W - 30, 30)) + '</g>';
            y += h + 10;
        });
        return wrap(out, y, s.title, s.alt, s.caption);
    }

    ns.visuals = {
        render: function (s) {
            if (!s || !s.kind) return "";
            var f = { line: line, bar: bar, pie: pie, process: process, scene: scene }[s.kind];
            return f ? f(s) : "";
        }
    };
})();
