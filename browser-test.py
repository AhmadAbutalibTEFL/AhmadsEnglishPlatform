import sys, json, re
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8123/AhmadsEnglishPlatform/index.html"
SHOT = sys.argv[2] if len(sys.argv) > 2 else "/home/claude/tests-run/shots"
import os; os.makedirs(SHOT, exist_ok=True)
results = []
def check(name, cond, detail=""):
    results.append((name, bool(cond), detail))
    print(("PASS " if cond else "FAIL ") + name + (f"  [{detail}]" if detail and not cond else ""))

def go_hub(page):
    if page.locator("[data-ielts-lesson]").count() == 0:
        if page.locator('[data-ielts-view="listening"]').count():
            page.click('[data-ielts-view="listening"]')
        else:
            page.evaluate("window.showIELTS('listening')")
    page.wait_for_selector("[data-ielts-lesson]")

def open_lesson(page, lesson):
    go_hub(page)
    page.click(f'[data-ielts-lesson="{lesson}"]')
    page.wait_for_selector('.ielts-card')

with sync_playwright() as p:
    b = p.chromium.launch()
    for label, vw, vh in [("desktop", 1280, 900), ("mobile", 375, 812)]:
        ctx = b.new_context(viewport={"width": vw, "height": vh}, has_touch=(label == "mobile"))
        page = ctx.new_page()
        errors, failed = [], []
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.on("console", lambda m: errors.append(m.text) if m.type == "error" and "Failed to load resource" not in m.text else None)
        page.on("requestfailed", lambda r: failed.append(r.url))
        page.on("response", lambda r: failed.append(f"{r.status} {r.url}") if r.status >= 400 else None)
        page.goto(BASE)
        print(f"\n===== {label} {vw}x{vh} =====")
        check(f"[{label}] showIELTS available", page.evaluate("typeof window.showIELTS") == "function")
        open_lesson(page, "map")

        # --- structure ---
        n_ex = page.locator(".ielts-map-exercise").count()
        check(f"[{label}] two map exercises render", n_ex == 2, n_ex)
        check(f"[{label}] each exercise has an SVG map", page.locator(".ielts-map-exercise svg.ielts-exmap").count() == 2)
        dup = page.evaluate("""() => { const ids = [...document.querySelectorAll('[id]')].map(e => e.id); return ids.filter((x,i)=>ids.indexOf(x)!==i); }""")
        check(f"[{label}] no duplicate IDs on page", not dup, dup)
        generic = page.locator(".ielts-audio-item").count()
        check(f"[{label}] map-track recordings are not listed twice in the generic audio list", generic == 0, generic)
        check(f"[{label}] strategy check is labelled text-only", "text only, no audio" in page.inner_text(".ielts-root"))
        check(f"[{label}] old worked-example figure still present", page.locator("svg.ielts-campus-map").count() == 1)

        # --- no answer leakage before submit ---
        sec = page.locator('[data-ielts-map-ex="campus"]')
        svg_text = sec.locator("svg").text_content()
        for leak in ["Student", "Computer", "Sports", "Car", "park", "hall"]:
            check(f"[{label}] campus SVG does not reveal '{leak}' before submit", leak not in svg_text)
        txt = sec.inner_text()
        check(f"[{label}] transcript hidden before submit", "fountain. Turn left" not in txt and "Good morning" not in txt and sec.locator(".ielts-transcript").count() == 0)
        check(f"[{label}] transcript-locked note shown", "transcript unlocks after you submit" in txt)
        check(f"[{label}] no explanations shown before submit", "trap" not in txt)
        check(f"[{label}] submit disabled until an answer is chosen", sec.locator("[data-ielts-map-submit]").is_disabled())
        check(f"[{label}] route not drawn before submit", sec.locator('svg path[marker-end]').count() == 0)

        # --- keyboard operation ---
        s1 = sec.locator("#ielts-map-campus-q1")
        s1.focus()
        page.keyboard.press("E")
        check(f"[{label}] keyboard: typing a letter selects it", s1.input_value() == "E", s1.input_value())
        check(f"[{label}] submit enabled after first answer", not sec.locator("[data-ielts-map-submit]").is_disabled())

        # --- audio element + fallback (mp3s are not in this tree) ---
        check(f"[{label}] audio element points at the existing recording path",
              sec.locator("audio source").get_attribute("src") == "audio/ielts-listening/ielts-l2-campus-map.mp3")
        page.wait_for_timeout(300)
        sec.locator("audio").evaluate("a => a.load()")
        page.wait_for_timeout(600)
        have_mp3 = "404" not in " ".join(f for f in failed if "campus-map.mp3" in f)
        missing_visible = sec.locator(".ielts-audio-missing").is_visible()
        print(f"   (mp3 present on server: {have_mp3}; fallback notice visible: {missing_visible})")
        check(f"[{label}] fallback notice matches whether the file loads", missing_visible == (not have_mp3))

        if label == "desktop":
            page.screenshot(path=f"{SHOT}/map-lesson-before-desktop.png", full_page=False)
        sec.scroll_into_view_if_needed()
        sec.screenshot(path=f"{SHOT}/campus-before-{label}.png")

        # --- all correct ---
        for q, a in zip(["q1", "q2", "q3", "q4"], ["E", "G", "D", "A"]):
            sec.locator(f"#ielts-map-campus-{q}").select_option(a)
        sec.locator("[data-ielts-map-submit]").click()
        sec = page.locator('[data-ielts-map-ex="campus"]')
        check(f"[{label}] perfect score 4 / 4", "4 / 4" in sec.locator(".ielts-map-score").inner_text(), sec.locator(".ielts-map-score").inner_text())
        check(f"[{label}] focus moves to the score after submit", page.evaluate("document.activeElement.classList.contains('ielts-map-score')"))
        check(f"[{label}] selects are locked after submit", sec.locator("select:not([disabled])").count() == 0)
        check(f"[{label}] transcript revealed after submit", "Ten thirty" not in sec.inner_text() and "fountain" in sec.locator(".ielts-transcript").inner_text())
        tr = sec.locator(".ielts-transcript").inner_text()
        check(f"[{label}] transcript matches recording script word for word",
              "Walk along the path until you reach the fountain. Turn left there, and the student services office is the first building on your right." in tr
              and "The computer room is opposite the sports hall, beside the car park." in tr)
        svg_text = sec.locator("svg").text_content()
        check(f"[{label}] review SVG now names the four places", all(w in svg_text for w in ["Student", "Computer", "Sports", "Car"]))
        check(f"[{label}] review SVG draws the route", sec.locator("svg path[marker-end]").count() == 1)
        check(f"[{label}] four 'Correct.' feedback items", sec.locator(".ielts-map-q-correct").count() == 4)
        sec.scroll_into_view_if_needed()
        sec.screenshot(path=f"{SHOT}/campus-review-{label}.png")

        # --- retry ---
        sec.locator("[data-ielts-map-retry]").click()
        sec = page.locator('[data-ielts-map-ex="campus"]')
        check(f"[{label}] retry clears answers", all(sec.locator(f"#ielts-map-campus-{q}").input_value() == "" for q in ["q1","q2","q3","q4"]))
        check(f"[{label}] retry hides transcript again", sec.locator(".ielts-transcript").count() == 0)
        check(f"[{label}] retry hides names on the map", "Student" not in sec.locator("svg").text_content())

        # --- mixed answers: trap, wrong, blank, correct ---
        sec.locator("#ielts-map-campus-q1").select_option("B")   # left-hand trap
        sec.locator("#ielts-map-campus-q2").select_option("D")   # swapped with sports hall
        sec.locator("#ielts-map-campus-q4").select_option("A")   # correct; q3 left blank
        sec.locator("[data-ielts-map-submit]").click()
        sec = page.locator('[data-ielts-map-ex="campus"]')
        check(f"[{label}] mixed score 1 / 4", "1 / 4" in sec.locator(".ielts-map-score").inner_text(), sec.locator(".ielts-map-score").inner_text())
        fb = sec.locator(".ielts-map-feedback").all_inner_texts()
        check(f"[{label}] wrong answer feedback names choice and key", fb[0].startswith("Not quite. You chose B; the answer is E.") and "first building on your left" in fb[0], fb[0][:90])
        check(f"[{label}] blank answer says No answer", fb[2].startswith("No answer. The answer is D."), fb[2][:60])
        check(f"[{label}] correct answer still says Correct", fb[3].startswith("Correct."))
        sec.scroll_into_view_if_needed()
        sec.screenshot(path=f"{SHOT}/campus-mixed-{label}.png")

        # --- garden exercise independent of campus state ---
        g = page.locator('[data-ielts-map-ex="garden"]')
        for q, a in zip(["q1", "q2", "q3"], ["D", "C", "F"]):
            g.locator(f"#ielts-map-garden-{q}").select_option(a)
        g.locator("[data-ielts-map-submit]").click()
        g = page.locator('[data-ielts-map-ex="garden"]')
        check(f"[{label}] garden 3 / 3", "3 / 3" in g.locator(".ielts-map-score").inner_text())
        check(f"[{label}] campus result unaffected by garden submit", "1 / 4" in page.locator('[data-ielts-map-ex="campus"] .ielts-map-score').inner_text())
        g.scroll_into_view_if_needed(); g.screenshot(path=f"{SHOT}/garden-review-{label}.png")

        # --- layout ---
        ow = page.evaluate("[document.documentElement.scrollWidth, window.innerWidth]")
        check(f"[{label}] no horizontal overflow", ow[0] <= ow[1], ow)
        svgw = page.evaluate("document.querySelector('.ielts-exmap').getBoundingClientRect().width")
        check(f"[{label}] map fits viewport width", svgw <= vw, svgw)
        sel_h = page.evaluate("document.querySelector('.ielts-map-q select').getBoundingClientRect().height")
        check(f"[{label}] select touch target >= 44px", sel_h >= 44, sel_h)
        print(f"   map rendered at {svgw:.0f}px wide")

        # --- regression: every other lesson, existing audio practice, quiz ---
        for lid in ["mcq","matching","completion","sentence","short-answer","prediction","paraphrasing"]:
            open_lesson(page, lid)
            n = page.locator(".ielts-audio-item").count()
            check(f"[{label}] lesson '{lid}' renders with {n} audio item(s) and no map exercise", page.locator(".ielts-map-exercise").count() == 0 and n >= 1, n)
        open_lesson(page, "mcq")
        page.check('input[data-ielts-lesson-answer][value="1"]')
        page.click("[data-ielts-lesson-check]")
        check(f"[{label}] strategy check gives correct feedback", "Correct." in page.inner_text(".ielts-answer-feedback"))
        page.click("[data-ielts-lesson-retry]")
        check(f"[{label}] strategy check retry works", page.locator("[data-ielts-lesson-check]").is_disabled())
        item = page.locator(".ielts-audio-item").first
        item.locator('input[type="radio"]').nth(1).check()
        item.locator("[data-ielts-audio-check]").click()
        check(f"[{label}] existing audio practice marks answer", "Correct." in page.locator(".ielts-audio-item").first.inner_text())
        page.locator("[data-ielts-audio-retry]").first.click()
        check(f"[{label}] existing audio practice retry works", page.locator("[data-ielts-audio-check]").first.is_visible())
        go_hub(page)
        page.click("[data-ielts-quiz-start]")
        page.once("dialog", lambda d: d.dismiss())
        for qn in range(1, 11):
            page.locator(f'input[name="q{qn}"]').nth(1).check()
        page.locator('input[name="q11[]"]').nth(1).check(); page.locator('input[name="q11[]"]').nth(6).check()
        page.click("[data-ielts-quiz-submit]")
        check(f"[{label}] intro quiz scores", re.search(r"\d+ / 12", page.inner_text(".ielts-quiz-score")) is not None, page.inner_text(".ielts-quiz-score"))
        page.click("[data-ielts-quiz-back]")
        check(f"[{label}] return navigation to Listening hub works", page.locator("[data-ielts-lesson]").count() >= 8)

        real_errors = [e for e in errors]
        check(f"[{label}] no JavaScript errors", not real_errors, real_errors[:3])
        print("   failed/404 requests:", sorted(set(f for f in failed))[:12])
        ctx.close()
    b.close()

bad = [r for r in results if not r[1]]
print(f"\n{len(results)-len(bad)} passed, {len(bad)} failed")
json.dump(results, open(f"{SHOT}/results.json", "w"))
sys.exit(1 if bad else 0)
