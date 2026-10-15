/* =========================================================
   TOEFL iBT SPEAKING — original interactive learning section
   Static-site friendly: no libraries, APIs, or back end.
   Learn (lesson + guided sets) and Practice (separate bank,
   loaded from toefl-speaking-practice.js).
   Audio: pre-generated Edge TTS files (audio/speaking/*.mp3) for model audio,
   with browser speech synthesis as a fallback; MediaRecorder
   for the learner's own recording. Scoring is self-review only.
   ========================================================= */

const TOEFL_SPEAKING_STORAGE_KEY = "toeflSpeakingProgress.v1";
const toeflSpeakingMastery = { pct: 80, goals: { repeat: 5, interview: 4 } };
const toeflSpeakingLevelNames = { 1: "Level 1 · Foundation", 2: "Level 2 · Core", 3: "Level 3 · Advanced" };
const SP_LIMITS = { repeat: 20, interview: 45 };

const toeflSpeakingChecklists = {
    repeat: [
        "I repeated every word, with nothing added or missing",
        "The word order matched the model",
        "Endings such as -s, -ed, and -ing were audible",
        "My stress and rhythm sounded close to the model"
    ],
    interview: [
        "I answered the question in my first sentence",
        "I gave a reason and a specific example",
        "I kept speaking until the time ended, without long silences",
        "My ideas were in a clear order (opening, reason, example)",
        "My grammar and word choice were clear enough to follow"
    ]
};

// R(scenario, sentence, focus, tip) and I(topic, question, model answer, phrases "a|b|c", tip)
const SR = (scenario, text, focus, tip) => ({ scenario, text, focus, tip });
const SI = (topic, question, model, phrases, tip) => ({ topic, question, model, phrases: phrases.split("|"), tip: tip || "" });

const toeflSpeakingTasks = {

    /* ------------------------------------------------------
       TASK 1 — LISTEN AND REPEAT
       ------------------------------------------------------ */
    repeat: {
        id: "repeat",
        title: "Listen and Repeat",
        icon: "🔊",
        shortDescription: "Hear a sentence once and repeat it as exactly as you can.",
        facts: [
            { value: "7 items", label: "Listen and Repeat items", note: "ETS lists 7 items of this type in the Speaking section; sentences get longer and harder as you go." },
            { value: "Heard once", label: "One listening", note: "Each sentence is played one time, so you must hold it in memory and repeat it immediately." },
            { value: "About 8 minutes", label: "Whole Speaking section", note: "ETS gives roughly 8 minutes for all Speaking tasks together." }
        ],
        explanation: "You hear a short sentence in an everyday or campus situation and repeat it exactly. The task measures how well you can hold language in your head and reproduce it clearly: words, word order, grammar endings, stress, and rhythm. Understanding the sentence helps, because you remember meaning groups far better than separate words.",
        strategy: [
            "Listen for the meaning first: who does what, where, and when.",
            "Hold the sentence in chunks (for example: ‘the registration office / moved to the second floor / last week’), not word by word.",
            "Copy the stress and rhythm of the model, not just the words.",
            "Say the sentence straight away, while it is fresh, and keep going even if you stumble.",
            "Finish with the same final sounds, including -s, -ed, and the last word."
        ],
        mistakes: [
            "Changing small words (‘a’ for ‘the’, ‘in’ for ‘on’) or dropping them completely.",
            "Dropping word endings such as -s, -ed, and -ing.",
            "Stopping to restart after a mistake instead of finishing the sentence.",
            "Saying every word with equal stress, so the sentence sounds flat and robotic.",
            "Trying to memorise single words instead of meaning groups."
        ],
        lessonModules: [
            {
                heading: "1. What the task asks you to do",
                intro: "You listen to one sentence and say it back. The scenario changes (campus, work, travel, shopping) but the job is always the same.",
                bullets: [
                    "Accuracy matters: the best response repeats the sentence exactly, clearly, and at a natural speed.",
                    "Short sentences come first; later sentences are longer and contain clauses such as ‘although’ and ‘if’.",
                    "You hear each sentence once, so do not plan what to say; concentrate on listening.",
                    "In this lab the sentence text stays hidden until you press Check, to match the real test."
                ]
            },
            {
                heading: "2. How to hold a sentence in memory",
                intro: "Your memory works in meaning chunks of about three to five words.",
                bullets: [
                    "Split the sentence by meaning: subject, verb phrase, place, time.",
                    "Picture the situation as you listen; a mental image is easier to remember than a list of words.",
                    "Silently rehearse the first chunk while the speaker finishes, but never stop listening.",
                    "For long sentences, remember the opening and closing words first; the middle follows from the meaning."
                ]
            },
            {
                heading: "3. Pronunciation details that earn credit",
                intro: "Clear, natural delivery matters as much as remembering the words.",
                bullets: [
                    "Stress content words (nouns, main verbs, adjectives) and shorten small words such as ‘the’ and ‘to’.",
                    "Link words smoothly: ‘moved to’ sounds like ‘moovd-too’.",
                    "Pronounce final consonants and endings (-s, -ed); they carry grammar meaning.",
                    "Let your voice fall at the end of a statement and rise slightly in a question.",
                    "If you slip, keep going. A smooth, almost perfect sentence beats a perfect one with long pauses."
                ]
            }
        ],
        sets: [
            {
                id: "g1", title: "Guided set 1 · Campus basics",
                instruction: "Press Listen, then Record and repeat the sentence. Press Check to review your self-assessment and see the text.",
                items: [
                    SR("You are at a campus orientation.", "The library is open until ten o’clock on weekdays.", "Final consonants and numbers", "Say ‘o’clock’ and the final -s on ‘weekdays’ completely."),
                    SR("You are asking about an office.", "The registration office moved to the second floor last week.", "Meaning chunks", "Chunk it: the registration office / moved to the second floor / last week."),
                    SR("A guide is explaining a rule.", "Students who finish early may leave the room quietly.", "Relative clause", "‘Who finish early’ is one unit; keep the rhythm steady.")
                ]
            },
            {
                id: "g2", title: "Guided set 2 · Longer sentences",
                instruction: "These sentences are longer. Remember the meaning chunks, then repeat them smoothly.",
                items: [
                    SR("You are listening to a lecturer.", "Although the lecture was long, most students took careful notes.", "Contrast clause", "Pause slightly after the comma, then continue with steady stress."),
                    SR("You are visiting an advising office.", "If you need help with your schedule, please visit the advising center.", "Conditional clause", "Stress ‘help’, ‘schedule’, and ‘advising’; shorten the small words."),
                    SR("You are at a museum.", "The museum offers free admission to visitors under the age of twelve.", "Long noun phrase", "Link ‘under the age of’ smoothly and finish with a clear ‘twelve’.")
                ]
            }
        ]
    },

    /* ------------------------------------------------------
       TASK 2 — TAKE AN INTERVIEW
       ------------------------------------------------------ */
    interview: {
        id: "interview",
        title: "Take an Interview",
        icon: "🎤",
        shortDescription: "Answer interview questions with clear, organised, extended responses.",
        facts: [
            { value: "4 questions", label: "Take an Interview items", note: "ETS lists 4 interview questions in the Speaking section." },
            { value: "45 seconds", label: "Per response", note: "ETS allows about 45 seconds to answer each question." },
            { value: "About 8 minutes", label: "Whole Speaking section", note: "ETS gives roughly 8 minutes for all Speaking tasks together." }
        ],
        explanation: "A recorded interviewer asks four questions on one topic about your experiences and opinions. You hear each question only once, with no replay and no preparation time, and you respond in about 45 seconds. A strong answer responds directly, develops an idea with a reason and an example, flows in a clear order, and uses accurate, varied language. There is no time to prepare, so you need a reliable answer structure ready in your head.",
        strategy: [
            "Listen for the key words (each question is heard only once), then answer in your first sentence without delay.",
            "Give one clear reason, using ‘because’ or ‘one reason is that’.",
            "Add a specific example from real life (‘For example, last semester…’).",
            "Finish with a short closing sentence that links back to the question.",
            "Keep speaking at a steady pace; if you make an error, fix it quickly and continue."
        ],
        mistakes: [
            "Starting with a long pause or a vague opening such as ‘Well, it is difficult to say…’.",
            "Giving only an opinion with no reason or example.",
            "Memorising a script that does not fit the question.",
            "Speaking too fast, which makes pronunciation and grammar unclear.",
            "Stopping early and leaving most of the 45 seconds unused.",
            "Waiting for the question to be repeated; there is no replay, so catch the key words the first time."
        ],
        lessonModules: [
            {
                heading: "1. What the task asks you to do",
                intro: "You answer questions as if you were in a real interview, with no preparation time before each one.",
                bullets: [
                    "Questions are audio only: you hear each one once, with no replay and nothing written on screen. Topics are familiar: study habits, free time, technology, community.",
                    "A good answer is on topic, developed, and easy to follow.",
                    "Delivery counts too: clear pronunciation, natural pace, and confident intonation.",
                    "In this lab a 45-second timer runs while you record; press Stop early if you finish."
                ]
            },
            {
                heading: "2. A simple structure: Answer, Reason, Example, Close",
                intro: "Use the same four moves every time, then fill them with ideas that fit the question.",
                bullets: [
                    "Answer: ‘I prefer studying with others.’",
                    "Reason: ‘The main reason is that explaining ideas helps me remember them.’",
                    "Example: ‘For example, before my last exam, my friends and I quizzed each other.’",
                    "Close: ‘That is why group study works best for me.’"
                ]
            },
            {
                heading: "3. Sounding natural and fluent",
                intro: "Fluency is about steady flow, not speed.",
                bullets: [
                    "Use linking phrases (‘besides’, ‘as a result’, ‘for instance’) to connect ideas.",
                    "Use simple, accurate grammar rather than complex sentences you cannot control.",
                    "Replace silence with a short phrase such as ‘Let me explain’, then continue.",
                    "Aim for about 90 to 110 words in 45 seconds.",
                    "Practise answering aloud every day; your first recording is always the hardest."
                ]
            }
        ],
        sets: [
            {
                id: "g1", title: "Guided set 1 · Study and free time",
                instruction: "Press Hear the question, then Record and answer in about 45 seconds. The question text stays hidden until you press Check to compare your answer with a model and review the useful phrases.",
                items: [
                    SI("Study habits", "Do you prefer to study alone or with other people? Explain why.",
                        "I prefer studying with other people. The main reason is that explaining ideas to friends helps me understand them better. For example, before my last biology exam, three classmates and I met in the library and quizzed each other. When someone made a mistake, we corrected it together, and I remembered the answers much more easily. Studying alone can be quiet, but it is also easy to get distracted. That is why I choose group study whenever I can.",
                        "I prefer … because …|The main reason is that …|For example, …|That is why …", "Notice how each sentence has a job: answer, reason, example, close."),
                    SI("Free time", "What is a hobby you would recommend to a new student, and why?",
                        "I would recommend joining a sports club. First, it helps new students meet people quickly, because everyone shares the same interest. For instance, when I started university, I joined the volleyball team and made close friends in the first month. In addition, exercise reduces stress during busy weeks. Overall, a sports club is a simple way to feel at home on campus.",
                        "I would recommend …|First, …|For instance, …|In addition, …|Overall, …", "Use ‘First’ and ‘In addition’ to give your answer a visible shape.")
                ]
            },
            {
                id: "g2", title: "Guided set 2 · Technology and community",
                instruction: "Answer directly in your first sentence, then support it with a reason and an example.",
                items: [
                    SI("Technology", "How has technology changed the way people learn?",
                        "Technology has made learning faster and more flexible. One big change is that students can find information in seconds instead of searching in a library for hours. For example, I often watch short video lessons when I do not understand a topic in class. However, technology can also be distracting, so students need self-control. On balance, I think it has changed learning for the better.",
                        "… has made … more …|One big change is that …|However, …|On balance, …", "A short ‘However’ sentence shows balance without needing extra time."),
                    SI("Community", "Is it better to live close to your school or farther away? Why?",
                        "I think it is better to live close to school. The main advantage is that you save a lot of time every day. For example, my cousin travels two hours daily, and he is often too tired to study. When you live nearby, you can sleep more and join after-class activities. Of course, rent can be higher near campus, but the time saved is worth it.",
                        "I think it is better to …|The main advantage is that …|For example, …|Of course, … but …", "‘Of course, … but …’ lets you admit the other side in one sentence.")
                ]
            }
        ]
    }
};

/* =========================================================
   PROGRESS (localStorage, safe if blocked)
   ========================================================= */

function loadTOEFLSpeakingProgress() {
    try {
        const raw = window.localStorage.getItem(TOEFL_SPEAKING_STORAGE_KEY);
        const data = raw ? JSON.parse(raw) : null;
        if (data && data.sets) return data;
    } catch (error) { /* ignore */ }
    return { sets: {} };
}
function saveTOEFLSpeakingProgress() {
    try { window.localStorage.setItem(TOEFL_SPEAKING_STORAGE_KEY, JSON.stringify(toeflSpeakingProgress)); } catch (error) { /* ignore */ }
}
let toeflSpeakingProgress = loadTOEFLSpeakingProgress();

function getTOEFLSpeakingBankSets(taskId) {
    const bank = window.toeflSpeakingBank;
    return bank && Array.isArray(bank[taskId]) ? bank[taskId] : [];
}
function isTOEFLSpeakingSetMastered(setId) {
    const entry = toeflSpeakingProgress.sets[setId];
    return !!entry && entry.best >= toeflSpeakingMastery.pct;
}
function getTOEFLSpeakingMasteredCount(taskId) {
    return getTOEFLSpeakingBankSets(taskId).filter(set => isTOEFLSpeakingSetMastered(set.id)).length;
}
function escapeTOEFLSpeakingHTML(value) {
    return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[ch]));
}
const spEsc = escapeTOEFLSpeakingHTML;

/* =========================================================
   STYLES (small, injected once; shared hub styles come from reading)
   ========================================================= */

function injectTOEFLSpeakingStyles() {
    if (typeof injectTOEFLReadingStyles === "function") injectTOEFLReadingStyles();
    if (document.getElementById("toefl-speaking-styles")) return;
    const style = document.createElement("style");
    style.id = "toefl-speaking-styles";
    style.textContent = `
#toefl-speaking-screen .toefl-reading-targets,#toefl-speaking-task-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.sp-card-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;width:100%;margin-top:auto}
.sp-card-progress{margin:0 0 14px;font-size:14px;color:#4b5563}
.sp-card-progress.is-done{color:#166534;font-weight:700}
.sp-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:16px 0}
.sp-fact{border:1px solid #e5e7eb;border-radius:12px;padding:14px;background:#fff;text-align:left}
.sp-fact strong{display:block;color:#1d4ed8;font-size:18px;margin-bottom:4px}
.sp-fact span{font-size:13px;color:#4b5563;line-height:1.5}
.sp-item{background:#fff;border:1px solid #e5e7eb;border-radius:13px;padding:18px;margin:14px 0;text-align:left}
.sp-scenario{margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:#6b7280}
.sp-question{margin:0 0 12px;font-size:19px;line-height:1.5}
.sp-hidden-note{margin:0 0 12px;color:#4b5563;font-size:14px}
.sp-controls{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:10px 0}
.sp-controls button{min-height:44px}
.sp-rec.is-recording{background:#dc2626;border-color:#dc2626;color:#fff}
.sp-timer{flex:1 1 140px;height:8px;border-radius:999px;background:#e5e7eb;overflow:hidden}
.sp-timer-bar{height:100%;width:0;background:#2563eb;transition:width .2s linear}
.sp-time{font-size:13px;font-weight:700;color:#374151;min-width:44px}
.sp-msg{font-size:14px;color:#991b1b;margin:6px 0}
.sp-msg:empty{display:none}
.sp-audio{display:none;width:100%;margin-top:8px}
.sp-checklist{display:grid;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid #e5e7eb}
.sp-checklist-title{font-weight:700;font-size:14px;margin:0}
.sp-check{display:flex;gap:9px;align-items:flex-start;line-height:1.5;font-size:15px;cursor:pointer}
.sp-check input{margin-top:4px;width:18px;height:18px}
.sp-reveal{display:none;margin-top:14px;padding:13px 15px;border-radius:10px;background:#eff6ff;border:1px solid #bfdbfe;line-height:1.65;font-size:15px}
.sp-reveal.is-open{display:block}
.sp-reveal p{margin:6px 0}
.sp-reveal ul{margin:6px 0 0;padding-left:20px}
.sp-item-score{font-weight:700;color:#1d4ed8}
.sp-result{margin-top:16px;line-height:1.65}
.sp-result:empty{display:none}
.sp-result p{margin:5px 0 0;color:#4b5563}
.sp-hub-group{margin:18px 0 8px;font-size:18px}
.sp-hub-row{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin:8px 0;text-align:left}
.sp-hub-row.is-mastered{border-color:#16a34a;background:#f0fdf4}
.sp-hub-meta{font-size:13px;color:#4b5563;margin-top:3px}
.sp-badge{display:inline-block;padding:4px 9px;border-radius:999px;font-size:12px;font-weight:700;background:#f3f4f6;color:#4b5563}
.sp-badge.is-done{background:#dcfce7;color:#166534}
@media(max-width:850px){#toefl-speaking-screen .toefl-reading-targets,#toefl-speaking-task-grid,.sp-facts{grid-template-columns:1fr}}
`;
    document.head.appendChild(style);
}

/* =========================================================
   STATE + NAVIGATION
   ========================================================= */

const toeflSpeakingCompletedTasks = new Set();
let toeflSpeakingCurrentTask = null;
let toeflSpeakingSetIndex = 0;
let spState = null;          // { taskId, set, practice, strict, items:[{played,recorded}], checked }

function spActivity() { return document.getElementById("toefl-speaking-activity"); }

function showTOEFLSpeaking() {
    injectTOEFLSpeakingStyles();
    spCleanup();
    if (typeof hideAllScreens === "function") hideAllScreens();
    const screen = document.getElementById("toefl-speaking-screen");
    if (!screen) return;
    screen.style.display = "block";
    document.getElementById("toefl-speaking-home").style.display = "block";
    spActivity().style.display = "none";
    renderTOEFLSpeakingTaskCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToTOEFLSpeakingHome() {
    spCleanup();
    document.getElementById("toefl-speaking-home").style.display = "block";
    spActivity().style.display = "none";
    renderTOEFLSpeakingTaskCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTOEFLSpeakingTaskCards() {
    const container = document.getElementById("toefl-speaking-task-grid");
    if (!container) return;
    container.innerHTML = "";
    Object.values(toeflSpeakingTasks).forEach(task => {
        const completed = toeflSpeakingCompletedTasks.has(task.id);
        const total = getTOEFLSpeakingBankSets(task.id).length;
        const goal = Math.min(toeflSpeakingMastery.goals[task.id] || total, total || 1);
        const mastered = getTOEFLSpeakingMasteredCount(task.id);
        const goalReached = total > 0 && mastered >= goal;
        const card = document.createElement("article");
        card.className = "toefl-reading-task-card";
        card.innerHTML = `
<div class="toefl-reading-task-icon" aria-hidden="true">${task.icon}</div>
<div class="toefl-reading-card-status ${completed ? "is-complete" : ""}">${completed ? "✓ Lesson completed" : `${task.sets.length} guided sets`}</div>
<h3>${spEsc(task.title)}</h3>
<p>${spEsc(task.shortDescription)}</p>
<p class="sp-card-progress ${goalReached ? "is-done" : ""}">${total ? `Practice: ${mastered} of ${goal} mastery sets ${goalReached ? "✓" : ""}` : "Practice bank not loaded"}</p>
<div class="sp-card-actions">
<button type="button" class="secondary-button" data-action="learn">📘 Learn</button>
<button type="button" class="start-button" data-action="practice">🎯 Practice</button>
</div>`;
        card.querySelector('[data-action="learn"]').addEventListener("click", () => openTOEFLSpeakingTask(task.id));
        card.querySelector('[data-action="practice"]').addEventListener("click", () => openTOEFLSpeakingPractice(task.id));
        container.appendChild(card);
    });
    const count = toeflSpeakingCompletedTasks.size;
    const totalTasks = Object.keys(toeflSpeakingTasks).length;
    const progress = document.getElementById("toefl-speaking-overall-progress");
    if (progress) progress.textContent = `${count} of ${totalTasks} lessons completed`;
    const bar = document.getElementById("toefl-speaking-overall-bar");
    if (bar) bar.style.width = `${(count / totalTasks) * 100}%`;
}

function spOpenActivity(html) {
    document.getElementById("toefl-speaking-home").style.display = "none";
    const activity = spActivity();
    activity.style.display = "block";
    activity.innerHTML = html;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return activity;
}

/* =========================================================
   LEARN PAGE
   ========================================================= */

function openTOEFLSpeakingTask(taskId) {
    spCleanup();
    toeflSpeakingCurrentTask = taskId;
    toeflSpeakingSetIndex = 0;
    renderTOEFLSpeakingLearn();
}

function renderTOEFLSpeakingLearn() {
    const task = toeflSpeakingTasks[toeflSpeakingCurrentTask];
    const facts = task.facts.map(f => `<div class="sp-fact"><strong>${spEsc(f.value)}</strong><span><b>${spEsc(f.label)}.</b> ${spEsc(f.note)}</span></div>`).join("");
    const strategy = task.strategy.map((s, i) => `<li><span>${i + 1}</span><p>${spEsc(s)}</p></li>`).join("");
    const mistakes = task.mistakes.map(m => `<li>${spEsc(m)}</li>`).join("");
    const modules = task.lessonModules.map(m => `
<div class="toefl-reading-deep-module"><h4>${spEsc(m.heading)}</h4><p>${spEsc(m.intro)}</p><ul>${m.bullets.map(b => `<li>${spEsc(b)}</li>`).join("")}</ul></div>`).join("");

    spOpenActivity(`
<div class="toefl-reading-activity-topbar">
    <button type="button" class="secondary-button" onclick="backToTOEFLSpeakingHome()">← Speaking home</button>
    <span class="toefl-reading-set-label">${spEsc(task.title)} · Learn</span>
</div>
<div class="sp-facts">${facts}</div>
<div class="toefl-reading-lesson-grid">
    <div class="toefl-reading-explainer"><p class="course-label">THE TASK</p><h3>${spEsc(task.title)}</h3><p>${spEsc(task.explanation)}</p></div>
    <div class="toefl-reading-strategy"><h3>Strategy</h3><ol class="toefl-reading-strategy-list" style="list-style:none;padding:0;margin:0">${strategy}</ol></div>
</div>
<details class="toefl-reading-mistakes"><summary>Common mistakes to avoid</summary><ul>${mistakes}</ul></details>
<div class="toefl-reading-deep-lesson">
    <div class="toefl-reading-deep-lesson-heading"><p class="course-label">TEACHING NOTES</p><h3>Understand the task in depth</h3></div>
    <div class="toefl-reading-deep-grid">${modules}</div>
</div>
<div class="toefl-reading-practice-panel" id="sp-set-area"></div>`);
    renderSpeakingSet(task, task.sets[toeflSpeakingSetIndex], false, document.getElementById("sp-set-area"));
}

function nextTOEFLSpeakingGuidedSet() {
    const task = toeflSpeakingTasks[toeflSpeakingCurrentTask];
    spCleanup();
    if (toeflSpeakingSetIndex < task.sets.length - 1) {
        toeflSpeakingSetIndex++;
        renderTOEFLSpeakingLearn();
        const area = document.getElementById("sp-set-area");
        if (area) area.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        toeflSpeakingCompletedTasks.add(task.id);
        backToTOEFLSpeakingHome();
    }
}

/* =========================================================
   PRACTICE HUB + PRACTICE SETS
   ========================================================= */

function openTOEFLSpeakingPractice(taskId) {
    spCleanup();
    toeflSpeakingCurrentTask = taskId;
    renderTOEFLSpeakingPracticeHub(taskId);
}

function renderTOEFLSpeakingPracticeHub(taskId) {
    const task = toeflSpeakingTasks[taskId];
    const sets = getTOEFLSpeakingBankSets(taskId);
    const goal = Math.min(toeflSpeakingMastery.goals[taskId] || sets.length, sets.length || 1);
    const mastered = getTOEFLSpeakingMasteredCount(taskId);
    let body = "";
    if (!sets.length) {
        body = `<p>The practice bank is not loaded yet.</p>`;
    } else {
        [1, 2, 3].forEach(level => {
            const group = sets.filter(s => s.level === level);
            if (!group.length) return;
            body += `<h4 class="sp-hub-group">${toeflSpeakingLevelNames[level]}</h4>`;
            group.forEach(set => {
                const entry = toeflSpeakingProgress.sets[set.id];
                const done = isTOEFLSpeakingSetMastered(set.id);
                body += `
<div class="sp-hub-row ${done ? "is-mastered" : ""}">
    <div><strong>${spEsc(set.title)}</strong><div class="sp-hub-meta">${set.items.length} items${entry ? ` · Best ${entry.best}% · ${entry.attempts} attempt${entry.attempts === 1 ? "" : "s"}` : " · Not attempted"}</div></div>
    <div><span class="sp-badge ${done ? "is-done" : ""}">${done ? "✓ Mastered" : `Goal ${toeflSpeakingMastery.pct}%`}</span>
    <button type="button" class="${done ? "secondary-button" : "start-button"}" onclick="openTOEFLSpeakingPracticeSet('${taskId}','${set.id}')">${entry ? "Practise again" : "Start"}</button></div>
</div>`;
            });
        });
    }
    spOpenActivity(`
<div class="toefl-reading-activity-topbar">
    <button type="button" class="secondary-button" onclick="backToTOEFLSpeakingHome()">← Speaking home</button>
    <span class="toefl-reading-set-label">${spEsc(task.title)} · Practice</span>
</div>
<div class="toefl-reading-intro"><h3>${spEsc(task.title)} practice</h3>
<p>Self-review scores are saved on this device. Reach ${toeflSpeakingMastery.pct}% on a set to master it. Progress: <strong>${mastered} of ${goal}</strong> mastery sets.${taskId === "repeat" ? " In practice sets each sentence plays only once, like the real test." : " In practice sets each question plays only once and is not shown on screen, like the real test."}</p></div>
${body}
${sets.length ? `<button type="button" class="secondary-button" onclick="resetTOEFLSpeakingProgress('${taskId}')">Reset ${spEsc(task.title)} progress</button>` : ""}`);
}

function resetTOEFLSpeakingProgress(taskId) {
    if (!window.confirm("Reset saved practice progress for this task?")) return;
    getTOEFLSpeakingBankSets(taskId).forEach(set => { delete toeflSpeakingProgress.sets[set.id]; });
    saveTOEFLSpeakingProgress();
    renderTOEFLSpeakingPracticeHub(taskId);
}

function openTOEFLSpeakingPracticeSet(taskId, setId) {
    spCleanup();
    const set = getTOEFLSpeakingBankSets(taskId).find(s => s.id === setId);
    if (!set) return;
    toeflSpeakingCurrentTask = taskId;
    const task = toeflSpeakingTasks[taskId];
    const activity = spOpenActivity(`
<div class="toefl-reading-activity-topbar">
    <button type="button" class="secondary-button" onclick="openTOEFLSpeakingPractice('${taskId}')">← Practice hub</button>
    <span class="toefl-reading-set-label">${spEsc(task.title)} · Practice</span>
</div>
<div class="toefl-reading-practice-panel" id="sp-set-area"></div>`);
    renderSpeakingSet(task, set, true, document.getElementById("sp-set-area"));
}

/* =========================================================
   SET RENDERER (shared by guided Learn sets and Practice sets)
   ========================================================= */

function spItemHTML(taskId, item, i, strict) {
    const isRepeat = taskId === "repeat";
    const checks = toeflSpeakingChecklists[taskId].map((c, k) =>
        `<label class="sp-check"><input type="checkbox" data-sp-check="${i}" value="${k}"><span>${spEsc(c)}</span></label>`).join("");
    const prompt = isRepeat
        ? `<p class="sp-scenario">Item ${i + 1} · ${spEsc(item.scenario)}</p><p class="sp-hidden-note">The sentence is hidden, as in the real test. Listen, then repeat it.</p>`
        : `<p class="sp-scenario">Question ${i + 1} · ${spEsc(item.topic)}</p><p class="sp-hidden-note">The interviewer’s question is audio only, as in the real test. Listen carefully, then answer straight away.</p>`;
    const timer = isRepeat ? "" : `<div class="sp-timer"><div class="sp-timer-bar" id="sp-bar-${i}"></div></div>`;
    const reveal = isRepeat
        ? `<p><strong>Sentence:</strong> ${spEsc(item.text)}</p><p><strong>Focus:</strong> ${spEsc(item.focus)}</p><p><strong>Tip:</strong> ${spEsc(item.tip)}</p>`
        : `<p><strong>Question:</strong> ${spEsc([item.intro, item.question].filter(Boolean).join(" "))}</p><p><strong>Model answer:</strong> ${spEsc(item.model)}</p><p><strong>Useful phrases:</strong></p><ul>${item.phrases.map(p => `<li>${spEsc(p)}</li>`).join("")}</ul>${item.tip ? `<p><strong>Tip:</strong> ${spEsc(item.tip)}</p>` : ""}`;
    return `
<div class="sp-item" id="sp-item-${i}">
    ${prompt}
    <div class="sp-controls">
        <button type="button" class="secondary-button" data-sp-listen="${i}">🔊 ${isRepeat ? (strict ? "Listen (once)" : "Listen") : (strict ? "Hear the question (once)" : "Hear the question")}</button>
        <button type="button" class="start-button sp-rec" data-sp-rec="${i}">⏺ Record</button>
        ${timer}<span class="sp-time" id="sp-time-${i}">${isRepeat ? "" : "0:45"}</span>
    </div>
    <div class="sp-msg" id="sp-msg-${i}"></div>
    <audio class="sp-audio" id="sp-audio-${i}" controls></audio>
    <div class="sp-checklist"><p class="sp-checklist-title">Self-review (tick what is true, then press Check)</p>${checks}</div>
    <div class="sp-reveal" id="sp-reveal-${i}">${reveal}</div>
</div>`;
}

function renderSpeakingSet(task, set, practice, area) {
    const strict = practice;
    spState = { taskId: task.id, set, practice, strict, checked: false, items: set.items.map(() => ({ played: 0, recorded: false })) };
    area.innerHTML = `
<div class="toefl-reading-practice-heading"><h3>${spEsc(set.title)}</h3><span class="toefl-reading-progress-pill">${set.items.length} items</span></div>
<p class="toefl-reading-instruction">${spEsc(set.instruction || "Listen, record, then self-review.")}</p>
${set.items.map((item, i) => spItemHTML(task.id, item, i, strict)).join("")}
<div class="toefl-reading-actions"><button type="button" class="start-button" id="sp-check-btn">Check my self-review</button></div>
<div class="sp-result" id="sp-result"></div>`;

    area.querySelectorAll("[data-sp-listen]").forEach(btn => btn.addEventListener("click", () => spListen(Number(btn.dataset.spListen), btn)));
    area.querySelectorAll("[data-sp-rec]").forEach(btn => btn.addEventListener("click", () => spToggleRecord(Number(btn.dataset.spRec))));
    document.getElementById("sp-check-btn").addEventListener("click", spCheckSet);
}

/* =========================================================
   AUDIO: model voice + learner recording
   ========================================================= */

let spRecorder = null, spStream = null, spChunks = [], spRecIndex = -1, spTimerId = null, spStartedAt = 0;
let spUrls = [];

function spSpeak(text, rate) {
    if (!("speechSynthesis" in window)) return false;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = rate || 0.95;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => /en[-_]US/i.test(v.lang)) || voices.find(v => /^en/i.test(v.lang));
    if (voice) utter.voice = voice;
    window.speechSynthesis.speak(utter);
    return true;
}

/* Model audio: audio/speaking/<id>.mp3 (then .wav), falling back to browser TTS.
   id = sp-<task>-<setId>-<NN>, e.g. sp-repeat-g1-01, sp-interview-i3-02 */
let spModelAudio = null;

function spAudioId(i) {
    return `sp-${spState.taskId}-${spState.set.id}-${String(i + 1).padStart(2, "0")}`;
}

function spStopModel() {
    if (spModelAudio) {
        spModelAudio.onerror = null;
        try { spModelAudio.pause(); } catch (e) { /* ignore */ }
        spModelAudio = null;
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function spPlayModel(id, text, rate, onFail) {
    spStopModel();
    const sources = [`audio/speaking/${id}.mp3`, `audio/speaking/${id}.wav`];
    const tryNext = () => {
        const src = sources.shift();
        if (!src) {
            if (!spSpeak(text, rate)) onFail();
            return;
        }
        const audio = new Audio(src);
        spModelAudio = audio;
        audio.onerror = () => { if (spModelAudio === audio) tryNext(); };
        const started = audio.play();
        if (started && started.catch) {
            started.catch(() => { if (spModelAudio === audio && audio.error) tryNext(); });
        }
    };
    tryNext();
}

function spListen(i, btn) {
    if (!spState) return;
    const item = spState.set.items[i];
    const state = spState.items[i];
    const msg = document.getElementById(`sp-msg-${i}`);
    if (spState.strict && state.played >= 1) return;
    const text = spState.taskId === "repeat" ? item.text : [item.intro, item.question].filter(Boolean).join(" ");
    msg.textContent = "";
    spPlayModel(spAudioId(i), text, spState.taskId === "repeat" ? 0.92 : 0.95, () => {
        msg.textContent = "The model audio could not be played. Check your connection or try Chrome, Edge, or Safari.";
    });
    state.played++;
    if (spState.strict) { btn.disabled = true; btn.textContent = "🔊 Played"; }
}

function spSetRecUI(i, on) {
    const btn = document.querySelector(`[data-sp-rec="${i}"]`);
    if (!btn) return;
    btn.classList.toggle("is-recording", on);
    btn.textContent = on ? "⏹ Stop" : "⏺ Record again";
}

function spStopRecording() {
    if (spTimerId) { clearInterval(spTimerId); spTimerId = null; }
    const index = spRecIndex;
    if (spRecorder && spRecorder.state === "recording") { try { spRecorder.stop(); } catch (e) { /* ignore */ } }
    spRecorder = null;
    spRecIndex = -1;
    if (index >= 0) spSetRecUI(index, false);
}

async function spToggleRecord(i) {
    if (spRecIndex === i) { spStopRecording(); return; }
    spStopRecording();
    spStopModel();
    const msg = document.getElementById(`sp-msg-${i}`);
    if (!navigator.mediaDevices || !window.MediaRecorder) {
        msg.textContent = "Recording is not supported in this browser. Practise aloud, then use the self-review checklist.";
        return;
    }
    try {
        spStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (error) {
        msg.textContent = "Microphone access was blocked. Allow the microphone in your browser, or practise aloud and use the checklist.";
        return;
    }
    msg.textContent = "";
    spChunks = [];
    const recorder = new MediaRecorder(spStream);
    spRecorder = recorder;
    spRecIndex = i;
    recorder.ondataavailable = e => { if (e.data && e.data.size) spChunks.push(e.data); };
    recorder.onstop = () => {
        const blob = new Blob(spChunks, { type: recorder.mimeType || "audio/webm" });
        const url = URL.createObjectURL(blob);
        spUrls.push(url);
        const audio = document.getElementById(`sp-audio-${i}`);
        if (audio) { audio.src = url; audio.style.display = "block"; }
        if (spState && spState.items[i]) spState.items[i].recorded = true;
        if (spStream) { spStream.getTracks().forEach(t => t.stop()); spStream = null; }
    };
    recorder.start();
    spSetRecUI(i, true);
    spStartedAt = Date.now();
    const limit = SP_LIMITS[spState.taskId] * 1000;
    const bar = document.getElementById(`sp-bar-${i}`);
    const label = document.getElementById(`sp-time-${i}`);
    spTimerId = setInterval(() => {
        const elapsed = Date.now() - spStartedAt;
        if (bar) bar.style.width = `${Math.min(100, (elapsed / limit) * 100)}%`;
        if (label && spState.taskId === "interview") {
            const left = Math.max(0, Math.ceil((limit - elapsed) / 1000));
            label.textContent = `0:${String(left).padStart(2, "0")}`;
        }
        if (elapsed >= limit) spStopRecording();
    }, 200);
}

function spCleanup() {
    spStopRecording();
    if (spStream) { spStream.getTracks().forEach(t => t.stop()); spStream = null; }
    spStopModel();
    spUrls.forEach(url => URL.revokeObjectURL(url));
    spUrls = [];
}

/* =========================================================
   CHECK + RESULTS
   ========================================================= */

function spCheckSet() {
    if (!spState || spState.checked) return;
    spCleanup();
    spState.checked = true;
    const { taskId, set, practice } = spState;
    const total = toeflSpeakingChecklists[taskId].length;
    let sum = 0;
    set.items.forEach((item, i) => {
        const ticked = document.querySelectorAll(`[data-sp-check="${i}"]:checked`).length;
        sum += ticked / total;
        document.querySelectorAll(`[data-sp-check="${i}"]`).forEach(box => { box.disabled = true; });
        const reveal = document.getElementById(`sp-reveal-${i}`);
        reveal.classList.add("is-open");
        reveal.insertAdjacentHTML("afterbegin", `<p class="sp-item-score">Self-review: ${ticked} / ${total}</p>`);
    });
    const pct = Math.round((sum / set.items.length) * 100);
    document.getElementById("sp-check-btn").disabled = true;
    const result = document.getElementById("sp-result");
    const note = `<p>This score comes from your own ticks, so it is only as accurate as your honesty. Replay your recording next to the model and be strict.</p>`;

    if (practice) {
        const entry = toeflSpeakingProgress.sets[set.id] || { best: 0, attempts: 0 };
        entry.best = Math.max(entry.best, pct);
        entry.attempts += 1;
        toeflSpeakingProgress.sets[set.id] = entry;
        saveTOEFLSpeakingProgress();
        const mastered = pct >= toeflSpeakingMastery.pct;
        const bank = getTOEFLSpeakingBankSets(taskId);
        const next = bank[bank.findIndex(s => s.id === set.id) + 1];
        result.innerHTML = `<strong>${mastered ? "✓ Mastered! " : ""}Self-review: ${pct}%</strong> (best ${entry.best}%)${note}
<div class="toefl-reading-actions">
<button type="button" class="secondary-button" onclick="openTOEFLSpeakingPracticeSet('${taskId}','${set.id}')">Retry this set</button>
${next ? `<button type="button" class="start-button" onclick="openTOEFLSpeakingPracticeSet('${taskId}','${next.id}')">Next set →</button>` : ""}
<button type="button" class="secondary-button" onclick="openTOEFLSpeakingPractice('${taskId}')">Practice hub</button></div>`;
    } else {
        const task = toeflSpeakingTasks[taskId];
        const last = toeflSpeakingSetIndex >= task.sets.length - 1;
        result.innerHTML = `<strong>Self-review: ${pct}%</strong>${note}
<div class="toefl-reading-actions">
<button type="button" class="start-button" onclick="nextTOEFLSpeakingGuidedSet()">${last ? "Finish lesson ✓" : "Next guided set →"}</button>
<button type="button" class="secondary-button" onclick="openTOEFLSpeakingPractice('${taskId}')">Go to Practice</button></div>`;
    }
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* =========================================================
   CONNECT THE SPEAKING CARD + STOP AUDIO WHEN LEAVING
   (wraps displayTOEFLSections and hideAllScreens; no edit to script.js)
   ========================================================= */

(function connectTOEFLSpeaking() {
    if (typeof window.displayTOEFLSections === "function" && !window.displayTOEFLSections.__speakingConnected) {
        const original = window.displayTOEFLSections;
        const wrapped = function () {
            const result = original.apply(this, arguments);
            document.querySelectorAll("#toefl-sections-container .toefl-section-card").forEach(card => {
                const heading = card.querySelector("h3");
                if (heading && heading.textContent.trim() === "Speaking" && !card.querySelector(".toefl-section-start")) {
                    const button = document.createElement("button");
                    button.type = "button";
                    button.className = "start-button toefl-section-start";
                    button.textContent = "Start Speaking Pass →";
                    button.addEventListener("click", showTOEFLSpeaking);
                    card.appendChild(button);
                }
            });
            return result;
        };
        wrapped.__speakingConnected = true;
        window.displayTOEFLSections = wrapped;
    }
    if (typeof window.hideAllScreens === "function" && !window.hideAllScreens.__speakingConnected) {
        const originalHide = window.hideAllScreens;
        const wrappedHide = function () { spCleanup(); return originalHide.apply(this, arguments); };
        wrappedHide.__speakingConnected = true;
        window.hideAllScreens = wrappedHide;
    }
})();
