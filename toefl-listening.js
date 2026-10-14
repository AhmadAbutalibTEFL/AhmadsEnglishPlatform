/* =========================================================
   TOEFL iBT LISTENING — original interactive learning section
   Static-site friendly: no libraries, APIs, or back end.
   Learn (lesson + 2 guided sets per task) and Practice (separate
   bank loaded from toefl-listening-practice.js -> window.toeflListeningBank).
   AUDIO: for each unit the page tries audio/listening/<unit.id>.mp3,
   then .wav. If neither file exists it silently uses browser speech
   synthesis. Drop a file in the folder and it is used automatically.
   Practice = audio plays once + Check button (answers can be changed first).
   ========================================================= */

const TOEFL_LISTENING_STORAGE_KEY = "toeflListeningProgress.v1";
const toeflListeningMastery = { pct: 80, goals: { choose: 2, conversation: 2, announcement: 2, talk: 2 } };
const toeflListeningLevelNames = { 1: "Level 1 · Foundation", 2: "Level 2 · Core", 3: "Level 3 · Advanced" };
const LS_AUDIO_DIR = "audio/listening/";

// L(speaker, expression cue, text) · Q(question, options, answer index, why) · U(audio id, context, lines, questions)
const L = (sp, cue, text) => ({ sp, cue, text });
const Q = (q, opts, ans, why) => ({ q, opts, ans, why });
const U = (id, ctx, lines, qs) => ({ id, ctx, lines, qs });
const CR = (id, ctx, cue, text, opts, ans, why) => U(id, ctx, [L("Speaker", cue, text)], [Q("Choose the best response.", opts, ans, why)]);

const toeflListeningTasks = {

    /* ------------------------------------------------------
       TASK 1 — LISTEN AND CHOOSE A RESPONSE
       ------------------------------------------------------ */
    choose: {
        id: "choose", title: "Listen and Choose a Response", icon: "💬",
        shortDescription: "Hear one short line and pick the most natural reply.",
        facts: [
            { value: "Heard once", label: "One listening", note: "The audio plays one time, so listen for the purpose of the speaker's words straight away." },
            { value: "Best reply", label: "One correct answer", note: "You choose the response that fits the situation, the meaning, and the tone." },
            { value: "Very short", label: "Brief audio", note: "Because the line is short, every word, especially question words, matters." }
        ],
        explanation: "You hear a short sentence from a classmate, a staff member, or a friend. Then you choose the reply that sounds most natural. The task checks whether you understood the speaker's purpose (a request, a question, an opinion, a problem), not just the words.",
        strategy: [
            "Decide what the speaker wants: information, permission, advice, an opinion, or help.",
            "Listen to the question word (who, where, when, why, how) or the request form (Could you…, Do you mind…).",
            "Think of a natural reply in your own head before you read the options.",
            "Remove replies that repeat a word from the audio but answer a different question.",
            "Choose the option that fits both the meaning and the polite tone."
        ],
        mistakes: [
            "Choosing an option because it repeats a word you heard (for example ‘library’ or ‘deadline’).",
            "Choosing a reply with the right topic but the wrong tense or the wrong question type.",
            "Ignoring tone: a polite request needs a polite answer, not a flat ‘Yes.’"
        ],
        lessonModules: [
            { heading: "Know the speaker's purpose", intro: "Every short line has a job. Name the job first.", bullets: ["A request (Could you…? Do you mind…?) needs agreement, refusal, or an alternative.", "A ‘where / when / how’ question needs a matching piece of information.", "A problem or opinion (‘I'm thinking about dropping…’) usually needs advice or a reaction."] },
            { heading: "Beware of sound-alike traps", intro: "Wrong options often copy words from the audio.", bullets: ["The trap repeats a word but changes the meaning.", "The trap answers a different question (a ‘when’ answer to a ‘where’ question).", "The correct option often uses different words with the same idea."] },
            { heading: "Match the tone", intro: "Natural replies sound right for the situation.", bullets: ["Polite requests get polite replies (‘Not at all, here you go.’).", "Apologies get acceptance or reassurance.", "Suggestions get agreement, a reason, or a counter-suggestion."] }
        ],
        sets: [
            { id: "gc1", title: "Everyday requests", instruction: "Five short lines. Press Listen, choose a reply, then press Check. You can change answers before checking and replay the audio in this guided set.", units: [
                CR("lc-g1-01", "A classmate is speaking to you.", "politely", "Do you mind if I borrow your charger for a few minutes?", ["Not at all, here you go.", "I borrowed it yesterday.", "It is a new phone.", "Yes, the charger is black."], 0, "A polite request for permission needs agreement. The other options repeat words but do not answer."),
                U("lc-g1-02", "You are at a bus stop.", [L("Speaker", "curious", "Excuse me, does this bus go to the main library?")], [Q("Choose the best response.", ["I returned the book on Monday.", "The library opens at nine.", "Yes, it stops right in front of it.", "No, I have not read it."], 2, "The question asks about the route, so the answer must confirm or deny it.")]),
                CR("lc-g1-03", "A friend is speaking to you.", "worried", "I'm thinking about dropping my chemistry class. What do you think?", ["The chemistry lab is on the third floor.", "I dropped my keys in the lab.", "It was a very long class.", "I would talk to your advisor before you decide."], 3, "The speaker asks for advice. Only one option gives advice."),
                CR("lc-g1-04", "A classmate is speaking to you.", "friendly", "Would you rather meet at the café or at the library?", ["Yes, I would.", "The café is fine. The library is too quiet for talking.", "I met her at the library last week.", "Café prices are going up."], 1, "This is a choice question. The correct reply chooses one place and gives a reason."),
                CR("lc-g1-05", "A classmate is speaking to you.", "apologetic", "I'm sorry, I missed the last part. Could you repeat the deadline?", ["I missed the bus too.", "Yes, it was the last part.", "I will deadline it tomorrow.", "Sure. It's this Friday at five."], 3, "The speaker wants the deadline repeated, so the answer gives the deadline.")
            ] },
            { id: "gc2", title: "Opinions and suggestions", instruction: "Five short lines. Choose the most natural reply, then press Check.", units: [
                CR("lc-g2-01", "A friend is speaking to you.", "interested", "How did your presentation go this morning?", ["I will present at noon.", "It went better than I expected.", "The presentation room is big.", "Yes, I did it this morning."], 1, "‘How did it go?’ asks for an evaluation, not a time or a place."),
                CR("lc-g2-02", "A teammate is speaking to you.", "suggesting", "Why don't we start the project outline tonight?", ["Because the project is long.", "I started the project last month.", "The outline was yesterday.", "Good idea, but I have a lab until eight."], 3, "‘Why don't we…?’ is a suggestion here, not a real ‘why’ question. The reply reacts to the suggestion."),
                CR("lc-g2-03", "A classmate is speaking to you.", "puzzled", "I haven't received the schedule for next week. Have you?", ["Yes, I scheduled it.", "Not yet. I'll ask the office about it.", "Next week is busy.", "I received a gift."], 1, "The reply answers ‘Have you?’ and adds a helpful next step."),
                CR("lc-g2-04", "A new student is speaking to you.", "hesitant", "Could you tell me where the registration office is?", ["I registered for three classes.", "The office is very busy.", "It's in the administration building, next to the bookstore.", "Yes, I could tell you."], 2, "The speaker needs a location. A bare ‘Yes’ does not give one."),
                CR("lc-g2-05", "A classmate is speaking to you.", "frustrated", "That lecture was so confusing. Did you understand it?", ["Only partly. Maybe we could review the notes together.", "I lectured yesterday.", "The professor wore a blue jacket.", "Yes, it is confusing."], 0, "The reply answers the question honestly and offers a solution.")
            ] }
        ]
    },

    /* ------------------------------------------------------
       TASK 2 — LISTEN TO A CONVERSATION
       ------------------------------------------------------ */
    conversation: {
        id: "conversation", title: "Listen to a Conversation", icon: "🗣️",
        shortDescription: "Follow two speakers in a campus situation and answer questions.",
        facts: [
            { value: "Heard once", label: "One listening", note: "The conversation plays one time, so take quick notes on the problem and the solution." },
            { value: "Two speakers", label: "Student + staff or student", note: "Track who says what: the speaker with the problem and the speaker with the solution." },
            { value: "Gist + detail", label: "Question types", note: "Expect questions about the purpose, specific details, and what a speaker will do next." }
        ],
        explanation: "You hear a realistic conversation, such as a student talking to an advisor or two students planning work. The questions ask why the conversation happens, what the details are, and what a speaker will probably do next.",
        strategy: [
            "In the first lines, find the purpose: what problem or request starts the talk?",
            "Note who speaks (student, advisor, classmate) and what each person wants.",
            "Write short notes: problem → reasons → solution → next step.",
            "Listen for reason words: because, so, since, but, however, instead.",
            "For ‘what will they do next’ questions, listen to the last two or three lines."
        ],
        mistakes: [
            "Choosing a detail from early in the conversation that was later changed or rejected.",
            "Mixing up the speakers' opinions or plans.",
            "Answering with something that is true in real life but was not said in the audio."
        ],
        lessonModules: [
            { heading: "Problem → solution structure", intro: "Most campus conversations follow a simple path.", bullets: ["Opening: greeting and purpose.", "Middle: the problem and the reasons it matters.", "Ending: the solution or the next step."] },
            { heading: "Rejected ideas", intro: "Speakers often suggest something and then reject it.", bullets: ["Listen for ‘but’, ‘unfortunately’, ‘I can't because…’.", "The rejected idea is often a wrong option.", "The accepted idea usually comes after the rejection."] },
            { heading: "Next-step questions", intro: "The answer is in the closing lines.", bullets: ["Listen for ‘I'll…’, ‘Let's…’, ‘I'd + verb’.", "Check who will do the action.", "Ignore actions that happened earlier."] }
        ],
        sets: [
            { id: "gv1", title: "Advisor meeting", instruction: "Listen to the conversation, answer the three questions, then press Check.", units: [
                U("lv-g1-01", "A student speaks with her academic advisor.", [
                    L("Maya", "friendly", "Hi, Mr. Evans. Thanks for seeing me. I wanted to ask about my schedule for next semester."),
                    L("Mr. Evans", "warm", "Of course. What seems to be the problem?"),
                    L("Maya", "concerned", "I'm registered for biology and statistics, but both are on Tuesday and Thursday mornings, and the labs overlap by thirty minutes."),
                    L("Mr. Evans", "thoughtful", "Ah, that happens sometimes. Have you checked whether another section of statistics is open?"),
                    L("Maya", "disappointed", "I did. There's an evening section, but I work at the library until six on those days."),
                    L("Mr. Evans", "helpful", "I see. Well, biology has a Friday lab section as well. If you switch to that, there's no overlap, and your work hours stay the same."),
                    L("Maya", "surprised", "Oh, I didn't know about the Friday lab. Is there still space?"),
                    L("Mr. Evans", "serious", "I think so, but it fills up fast. I'd register today if I were you."),
                    L("Maya", "relieved", "Great. I'll do it right after this meeting. Thanks!")
                ], [
                    Q("Why does Maya meet with her advisor?", ["She wants to drop a class.", "Two of her labs overlap.", "She needs a job at the library.", "She missed a registration deadline."], 1, "She says both labs are at the same time and overlap by thirty minutes."),
                    Q("Why can't Maya take the evening statistics section?", ["It is already full.", "The lab is too difficult.", "She works until six on those days.", "It meets on Friday."], 2, "She explains that she works at the library until six."),
                    Q("What will Maya most likely do next?", ["Register for the Friday biology lab.", "Ask for a new job.", "Take statistics in the evening.", "Wait until next week."], 0, "The advisor suggests the Friday lab and she says she will register right after the meeting.")
                ])
            ] },
            { id: "gv2", title: "Group project", instruction: "Listen to the conversation, answer the three questions, then press Check.", units: [
                U("lv-g2-01", "Two students talk about a group presentation.", [
                    L("Lena", "worried", "Omar, did you see the email from Professor Hart? She moved our group presentation up to next Wednesday."),
                    L("Omar", "shocked", "What? That's a whole week earlier. We haven't even picked our case study yet."),
                    L("Lena", "thinking", "I know. I was thinking we could use the coffee-farming example from class. There's plenty of data online."),
                    L("Omar", "hesitant", "That works, but I'm worried about the survey part. Last time, collecting responses took forever."),
                    L("Lena", "confident", "Then let's skip a new survey and use the public data instead. We can compare two regions."),
                    L("Omar", "pleased", "Smart. Then I'll build the slides and you can write the script?"),
                    L("Lena", "cheerful", "Deal. Let's meet in the study room tomorrow after lunch to split the sections.")
                ], [
                    Q("What is the students' main problem?", ["They disagree about the topic.", "Their presentation date has moved earlier.", "They cannot find a study room.", "Professor Hart is absent."], 1, "Lena says the presentation was moved up by a week."),
                    Q("Why is Omar unsure about a survey?", ["Surveys are not allowed.", "He does not know the topic.", "It took too long last time.", "Lena dislikes surveys."], 2, "He says collecting responses took forever last time."),
                    Q("What do the students decide to do?", ["Collect new survey responses.", "Use public data and divide the work.", "Ask the professor for more time.", "Choose a different class."], 1, "They agree to use public data, and Omar will do the slides while Lena writes the script.")
                ])
            ] }
        ]
    },

    /* ------------------------------------------------------
       TASK 3 — LISTEN TO AN ANNOUNCEMENT
       ------------------------------------------------------ */
    announcement: {
        id: "announcement", title: "Listen to an Announcement", icon: "📢",
        shortDescription: "Understand a campus notice and the details that affect you.",
        facts: [
            { value: "Heard once", label: "One listening", note: "The announcement plays one time, so catch the main change and the key details." },
            { value: "One speaker", label: "Notice or update", note: "A staff member gives information about a change, a rule, or an event." },
            { value: "Details", label: "What matters", note: "Questions focus on the purpose, times, places, reasons, and what listeners should do." }
        ],
        explanation: "You hear a short announcement, such as a library update, a transportation change, or a lab rule. The questions check whether you understand what changed, why it changed, and what listeners need to do.",
        strategy: [
            "Listen for the purpose in the first sentence: what is changing or being announced?",
            "Catch the numbers: times, dates, places, and amounts.",
            "Listen for the reason (because of, due to) and the action (please, you must, should).",
            "Notice contrast words (still, no longer, instead) because they separate old from new.",
            "Match each detail to the right group of people."
        ],
        mistakes: [
            "Mixing up the old information with the new information.",
            "Choosing the wrong time or place because two similar ones were mentioned.",
            "Missing the final instruction, which often becomes a question."
        ],
        lessonModules: [
            { heading: "Find the change", intro: "Most announcements describe a change.", bullets: ["Look for words like starting, no longer, instead, moved, extended.", "Ask: what was before, and what is now?", "Note the start date of the change."] },
            { heading: "Numbers and places", intro: "Details are easy to confuse.", bullets: ["Write numbers as you hear them.", "Link each number to a noun (the café closes at nine).", "Check any ‘two hours later’ type of calculation."] },
            { heading: "Listener actions", intro: "Announcements tell people what to do.", bullets: ["Listen for ‘please’, ‘make sure’, ‘you must’.", "The last sentences often contain the action.", "Conditions begin with ‘if’."] }
        ],
        sets: [
            { id: "ga1", title: "Library hours", instruction: "Listen to the announcement, answer the three questions, then press Check.", units: [
                U("la-g1-01", "A library staff member makes an announcement.", [
                    L("Speaker", "clear and friendly", "Attention, students. This is an update from the university library. Starting next Monday, the main library will stay open until midnight on weeknights, two hours later than usual, to support students during final exams. The quiet study floors on levels three and four will remain silent zones, but the first floor will have group study tables where conversation is allowed. Please note that the café will close at nine, so bring snacks if you plan to stay late. Finally, library cards must be shown at the entrance after ten p.m. Thank you, and good luck with your exams.")
                ], [
                    Q("What is the main purpose of the announcement?", ["To announce a new café.", "To describe longer library hours for exams.", "To ask students to study in groups.", "To explain how to get a library card."], 1, "The speaker announces that the library will stay open later during final exams."),
                    Q("What will happen to the café?", ["It will close at nine.", "It will open at midnight.", "It will move to the first floor.", "It will offer snacks all night."], 0, "The speaker says the café will close at nine."),
                    Q("What must students do after ten p.m.?", ["Leave the building.", "Study on the first floor.", "Show their library cards.", "Be quiet on every floor."], 2, "Library cards must be shown at the entrance after ten p.m.")
                ])
            ] },
            { id: "ga2", title: "Shuttle route change", instruction: "Listen to the announcement, answer the three questions, then press Check.", units: [
                U("la-g2-01", "A transportation office makes an announcement.", [
                    L("Speaker", "calm and informative", "Good afternoon, everyone. Due to construction on North Road, the campus shuttle will use a different route starting Thursday. The shuttle will no longer stop at the engineering building. Instead, riders should get off at the new stop beside the science library, which is about a five-minute walk. Shuttles will still run every fifteen minutes. A map of the new route is posted on the student portal. If you have trouble walking long distances, please call the transportation office for a special pickup.")
                ], [
                    Q("Why is the shuttle route changing?", ["The shuttle is too slow.", "A road is under construction.", "The engineering building is closed.", "There are fewer riders."], 1, "The change is due to construction on North Road."),
                    Q("Where should engineering students get off now?", ["At the engineering building.", "At the student portal.", "Beside the science library.", "On North Road."], 2, "The new stop is beside the science library, about five minutes away on foot."),
                    Q("What should students who have difficulty walking do?", ["Use the student portal map.", "Wait for a faster shuttle.", "Walk to the old stop.", "Call the transportation office."], 3, "The speaker says to call the transportation office for a special pickup.")
                ])
            ] }
        ]
    },

    /* ------------------------------------------------------
       TASK 4 — LISTEN TO AN ACADEMIC TALK
       ------------------------------------------------------ */
    talk: {
        id: "talk", title: "Listen to an Academic Talk", icon: "🎓",
        shortDescription: "Follow a short lecture: main idea, details, examples, and purpose.",
        facts: [
            { value: "Heard once", label: "One listening", note: "The talk plays one time, so note the main idea and each example as you listen." },
            { value: "Academic", label: "Lecture-style language", note: "A professor explains a concept and supports it with examples or research." },
            { value: "Main idea → detail", label: "Question focus", note: "Expect questions about the main idea, details, why an example was used, and what is implied." }
        ],
        explanation: "You hear a short talk in the style of a university lecture. The speaker introduces an idea, explains it, and supports it with an example. The questions check the main idea, important details, the purpose of an example, and what the speaker suggests.",
        strategy: [
            "Listen for the topic in the first two sentences.",
            "Notice signals for examples (for instance, a classic example) and results (so, as a result).",
            "Note the cause-and-effect chain in a few words (otters ↓ → urchins ↑ → kelp ↓).",
            "Ask why the professor mentions each example: what idea does it support?",
            "Use the closing lines to confirm the main point and any advice."
        ],
        mistakes: [
            "Choosing a true detail that is too small to be the main idea.",
            "Confusing the example with the concept it illustrates.",
            "Choosing an answer that sounds scientific but was not said in the talk."
        ],
        lessonModules: [
            { heading: "Main idea vs detail", intro: "The main idea covers the whole talk, not one sentence.", bullets: ["The main idea is usually stated near the beginning and repeated at the end.", "Details answer how, why, or what happened.", "If an option is true but covers only one part, it is probably a detail."] },
            { heading: "Why an example is used", intro: "Examples support a bigger point.", bullets: ["Ask what idea the example proves.", "Listen for the sentence just before and just after the example.", "Purpose questions use words like ‘Why does the professor mention…?’"] },
            { heading: "Cause and effect", intro: "Academic talks often explain chains of events.", bullets: ["Listen for because, led to, as a result, so.", "Write the chain in short symbols.", "Do not reverse cause and effect."] }
        ],
        sets: [
            { id: "gt1", title: "Keystone species", instruction: "Listen to the talk, answer the four questions, then press Check.", units: [
                U("lt-g1-01", "A biology professor gives a short lecture.", [
                    L("Professor", "engaging and clear", "Let's begin with a simple question: what happens to an ecosystem if one animal disappears? Sometimes, very little. But for a small group of animals, called keystone species, the effects are huge. The sea otter is a classic example. Sea otters eat sea urchins, and sea urchins eat kelp. When hunters nearly wiped out sea otters along the Pacific coast, the urchin population exploded. The urchins grazed down the kelp forests until only bare rock remained. And remember, kelp forests are not just plants. They shelter fish, crabs, and many other species. So, losing the otters meant losing the habitat for dozens of animals. Interestingly, when conservation programs brought the otters back, the kelp began to recover. Notice that sea otters are not the most numerous animals in this ecosystem. A keystone species matters because of what it does, not because of how many there are. For next class, think of another ecosystem where one species might play this role.")
                ], [
                    Q("What is the main topic of the talk?", ["How hunters protect ecosystems.", "How one species can have a large effect on an ecosystem.", "Why kelp grows faster than other plants.", "How sea urchins find food."], 1, "The professor defines keystone species and uses sea otters as an example."),
                    Q("Why did the kelp forests disappear?", ["Sea otters ate the kelp.", "Fish moved to deeper water.", "Conservation programs removed them.", "More urchins grazed on the kelp."], 3, "Without otters, the urchin population grew and the urchins ate the kelp."),
                    Q("Why does the professor mention fish and crabs?", ["To show that kelp forests support other animals.", "To explain what otters eat.", "To compare them with urchins.", "To describe a conservation program."], 0, "They show that losing kelp meant losing habitat for many species."),
                    Q("What does the professor imply about keystone species?", ["They are always the largest animals.", "Their importance does not depend on their numbers.", "They are found only in the ocean.", "They never need protection."], 1, "She says a keystone species matters because of what it does, not how many there are.")
                ])
            ] },
            { id: "gt2", title: "The spacing effect", instruction: "Listen to the talk, answer the four questions, then press Check.", units: [
                U("lt-g2-01", "A psychology professor gives a short lecture.", [
                    L("Professor", "lively and confident", "Many students believe the best way to prepare for an exam is to study one subject for hours the night before. Psychologists call this massed practice, and it feels productive, because the material seems familiar. But research on memory has shown a better method, called the spacing effect. In one classic experiment, two groups learned the same list of vocabulary words. One group studied for three hours in a single day. The other studied for one hour on three separate days. A week later, the second group remembered significantly more words. Why? Researchers suggest that when you return to material after a break, you have to work to recall it, and that effort strengthens the memory. So cramming may help you pass tomorrow's quiz, but it doesn't help you remember the material next month. That said, spacing takes planning. You can't start the day before the exam. So, if you have a test in two weeks, start now and review in short sessions.")
                ], [
                    Q("What is the main point of the talk?", ["Cramming is the fastest way to learn.", "Studying in separate sessions is more effective than cramming.", "Vocabulary is harder than other subjects.", "Students should avoid exams."], 1, "The talk compares massed practice with the spacing effect and favors spacing."),
                    Q("How did the two groups in the experiment differ?", ["One group studied different words.", "One group studied three hours in one day; the other studied one hour on three days.", "One group used a computer.", "One group took the test earlier."], 1, "The groups studied the same words but with different schedules."),
                    Q("According to researchers, why does spacing work?", ["Breaks make the material easier to forget.", "Recalling material after a break strengthens memory.", "Short sessions are more fun.", "Students sleep more."], 1, "Researchers say the effort of recalling after a break strengthens memory."),
                    Q("What does the professor suggest students do?", ["Study for hours the night before.", "Skip review sessions.", "Start early and review in short sessions.", "Study only the easy topics."], 2, "She advises starting now and reviewing in short sessions.")
                ])
            ] }
        ]
    }
};

/* =========================================================
   PROGRESS + HELPERS
   ========================================================= */

function loadTOEFLListeningProgress() {
    try {
        const raw = window.localStorage.getItem(TOEFL_LISTENING_STORAGE_KEY);
        const data = raw ? JSON.parse(raw) : null;
        if (data && data.sets) return data;
    } catch (error) { /* ignore */ }
    return { sets: {} };
}
function saveTOEFLListeningProgress() {
    try { window.localStorage.setItem(TOEFL_LISTENING_STORAGE_KEY, JSON.stringify(toeflListeningProgress)); } catch (error) { /* ignore */ }
}
let toeflListeningProgress = loadTOEFLListeningProgress();

function getTOEFLListeningBankSets(taskId) {
    const bank = window.toeflListeningBank;
    return bank && Array.isArray(bank[taskId]) ? bank[taskId] : [];
}
function isTOEFLListeningSetMastered(setId) {
    const entry = toeflListeningProgress.sets[setId];
    return !!entry && entry.best >= toeflListeningMastery.pct;
}
function getTOEFLListeningMasteredCount(taskId) {
    return getTOEFLListeningBankSets(taskId).filter(set => isTOEFLListeningSetMastered(set.id)).length;
}
const lsEsc = value => String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[ch]));

/* =========================================================
   STYLES
   ========================================================= */

function injectTOEFLListeningStyles() {
    if (typeof injectTOEFLReadingStyles === "function") injectTOEFLReadingStyles();
    if (document.getElementById("toefl-listening-styles")) return;
    const style = document.createElement("style");
    style.id = "toefl-listening-styles";
    style.textContent = `
#toefl-listening-screen .toefl-reading-targets,#toefl-listening-task-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.ls-card-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;width:100%;margin-top:auto}
.ls-card-progress{margin:0 0 14px;font-size:14px;color:#4b5563}
.ls-card-progress.is-done{color:#166534;font-weight:700}
.ls-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:16px 0}
.ls-fact{border:1px solid #e5e7eb;border-radius:12px;padding:14px;background:#fff;text-align:left}
.ls-fact strong{display:block;color:#1d4ed8;font-size:18px;margin-bottom:4px}
.ls-fact span{font-size:13px;color:#4b5563;line-height:1.5}
.ls-unit{background:#fff;border:1px solid #e5e7eb;border-radius:13px;padding:18px;margin:14px 0;text-align:left}
.ls-ctx{margin:0 0 10px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:#6b7280}
.ls-controls{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:6px 0 12px}
.ls-controls button{min-height:44px}
.ls-msg{font-size:14px;color:#991b1b}
.ls-msg:empty{display:none}
.ls-q{margin:14px 0 0;padding-top:12px;border-top:1px solid #e5e7eb}
.ls-qtext{margin:0 0 10px;font-size:17px;line-height:1.5;font-weight:600}
.ls-opt{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;margin:6px 0;border:1px solid #e5e7eb;border-radius:10px;cursor:pointer;line-height:1.5;font-size:15px}
.ls-opt input{margin-top:4px;width:18px;height:18px}
.ls-opt.is-correct{border-color:#16a34a;background:#f0fdf4}
.ls-opt.is-wrong{border-color:#dc2626;background:#fef2f2}
.ls-why{display:none;margin:8px 0 0;font-size:14px;color:#374151;line-height:1.6}
.ls-why.is-open{display:block}
.ls-transcript{display:none;margin-top:14px;padding:13px 15px;border-radius:10px;background:#eff6ff;border:1px solid #bfdbfe;line-height:1.65;font-size:15px}
.ls-transcript.is-open{display:block}
.ls-transcript p{margin:6px 0}
.ls-result{margin-top:16px;line-height:1.65}
.ls-result:empty{display:none}
.ls-result p{margin:5px 0 0;color:#4b5563}
.ls-hub-group{margin:18px 0 8px;font-size:18px}
.ls-hub-row{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 16px;margin:8px 0;text-align:left}
.ls-hub-row.is-mastered{border-color:#16a34a;background:#f0fdf4}
.ls-hub-meta{font-size:13px;color:#4b5563;margin-top:3px}
.ls-badge{display:inline-block;padding:4px 9px;border-radius:999px;font-size:12px;font-weight:700;background:#f3f4f6;color:#4b5563}
.ls-badge.is-done{background:#dcfce7;color:#166534}
@media(max-width:850px){#toefl-listening-screen .toefl-reading-targets,#toefl-listening-task-grid,.ls-facts{grid-template-columns:1fr}}
`;
    document.head.appendChild(style);
}

/* =========================================================
   STATE + NAVIGATION
   ========================================================= */

const toeflListeningCompletedTasks = new Set();
let toeflListeningCurrentTask = null;
let toeflListeningSetIndex = 0;
let lsState = null;   // { taskId, set, practice, strict, checked, played:[] }

function lsActivity() { return document.getElementById("toefl-listening-activity"); }

function showTOEFLListening() {
    injectTOEFLListeningStyles();
    lsCleanup();
    if (typeof hideAllScreens === "function") hideAllScreens();
    const screen = document.getElementById("toefl-listening-screen");
    if (!screen) return;
    screen.style.display = "block";
    document.getElementById("toefl-listening-home").style.display = "block";
    lsActivity().style.display = "none";
    renderTOEFLListeningTaskCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToTOEFLListeningHome() {
    lsCleanup();
    document.getElementById("toefl-listening-home").style.display = "block";
    lsActivity().style.display = "none";
    renderTOEFLListeningTaskCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTOEFLListeningTaskCards() {
    const container = document.getElementById("toefl-listening-task-grid");
    if (!container) return;
    container.innerHTML = "";
    Object.values(toeflListeningTasks).forEach(task => {
        const completed = toeflListeningCompletedTasks.has(task.id);
        const total = getTOEFLListeningBankSets(task.id).length;
        const goal = Math.min(toeflListeningMastery.goals[task.id] || total, total || 1);
        const mastered = getTOEFLListeningMasteredCount(task.id);
        const goalReached = total > 0 && mastered >= goal;
        const card = document.createElement("article");
        card.className = "toefl-reading-task-card";
        card.innerHTML = `
<div class="toefl-reading-task-icon" aria-hidden="true">${task.icon}</div>
<div class="toefl-reading-card-status ${completed ? "is-complete" : ""}">${completed ? "✓ Lesson completed" : `${task.sets.length} guided sets`}</div>
<h3>${lsEsc(task.title)}</h3>
<p>${lsEsc(task.shortDescription)}</p>
<p class="ls-card-progress ${goalReached ? "is-done" : ""}">${total ? `Practice: ${mastered} of ${goal} mastery sets ${goalReached ? "✓" : ""}` : "Practice bank not loaded"}</p>
<div class="ls-card-actions">
<button type="button" class="secondary-button" data-action="learn">📘 Learn</button>
<button type="button" class="start-button" data-action="practice">🎯 Practice</button>
</div>`;
        card.querySelector('[data-action="learn"]').addEventListener("click", () => openTOEFLListeningTask(task.id));
        card.querySelector('[data-action="practice"]').addEventListener("click", () => openTOEFLListeningPractice(task.id));
        container.appendChild(card);
    });
    const count = toeflListeningCompletedTasks.size;
    const totalTasks = Object.keys(toeflListeningTasks).length;
    const progress = document.getElementById("toefl-listening-overall-progress");
    if (progress) progress.textContent = `${count} of ${totalTasks} lessons completed`;
    const bar = document.getElementById("toefl-listening-overall-bar");
    if (bar) bar.style.width = `${(count / totalTasks) * 100}%`;
}

function lsOpenActivity(html) {
    document.getElementById("toefl-listening-home").style.display = "none";
    const activity = lsActivity();
    activity.style.display = "block";
    activity.innerHTML = html;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return activity;
}

/* =========================================================
   LEARN PAGE
   ========================================================= */

function openTOEFLListeningTask(taskId) {
    lsCleanup();
    toeflListeningCurrentTask = taskId;
    toeflListeningSetIndex = 0;
    renderTOEFLListeningLearn();
}

function renderTOEFLListeningLearn() {
    const task = toeflListeningTasks[toeflListeningCurrentTask];
    const facts = task.facts.map(f => `<div class="ls-fact"><strong>${lsEsc(f.value)}</strong><span><b>${lsEsc(f.label)}.</b> ${lsEsc(f.note)}</span></div>`).join("");
    const strategy = task.strategy.map((s, i) => `<li><span>${i + 1}</span><p>${lsEsc(s)}</p></li>`).join("");
    const mistakes = task.mistakes.map(m => `<li>${lsEsc(m)}</li>`).join("");
    const modules = task.lessonModules.map(m => `
<div class="toefl-reading-deep-module"><h4>${lsEsc(m.heading)}</h4><p>${lsEsc(m.intro)}</p><ul>${m.bullets.map(b => `<li>${lsEsc(b)}</li>`).join("")}</ul></div>`).join("");

    lsOpenActivity(`
<div class="toefl-reading-activity-topbar">
    <button type="button" class="secondary-button" onclick="backToTOEFLListeningHome()">← Listening home</button>
    <span class="toefl-reading-set-label">${lsEsc(task.title)} · Learn</span>
</div>
<div class="ls-facts">${facts}</div>
<div class="toefl-reading-lesson-grid">
    <div class="toefl-reading-explainer"><p class="course-label">THE TASK</p><h3>${lsEsc(task.title)}</h3><p>${lsEsc(task.explanation)}</p></div>
    <div class="toefl-reading-strategy"><h3>Strategy</h3><ol class="toefl-reading-strategy-list" style="list-style:none;padding:0;margin:0">${strategy}</ol></div>
</div>
<details class="toefl-reading-mistakes"><summary>Common mistakes to avoid</summary><ul>${mistakes}</ul></details>
<div class="toefl-reading-deep-lesson">
    <div class="toefl-reading-deep-lesson-heading"><p class="course-label">TEACHING NOTES</p><h3>Understand the task in depth</h3></div>
    <div class="toefl-reading-deep-grid">${modules}</div>
</div>
<div class="toefl-reading-practice-panel" id="ls-set-area"></div>`);
    renderListeningSet(task, task.sets[toeflListeningSetIndex], false, document.getElementById("ls-set-area"));
}

function nextTOEFLListeningGuidedSet() {
    const task = toeflListeningTasks[toeflListeningCurrentTask];
    lsCleanup();
    if (toeflListeningSetIndex < task.sets.length - 1) {
        toeflListeningSetIndex++;
        renderTOEFLListeningLearn();
        const area = document.getElementById("ls-set-area");
        if (area) area.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        toeflListeningCompletedTasks.add(task.id);
        backToTOEFLListeningHome();
    }
}

/* =========================================================
   PRACTICE HUB + PRACTICE SETS
   ========================================================= */

function openTOEFLListeningPractice(taskId) {
    lsCleanup();
    toeflListeningCurrentTask = taskId;
    renderTOEFLListeningPracticeHub(taskId);
}

function renderTOEFLListeningPracticeHub(taskId) {
    const task = toeflListeningTasks[taskId];
    const sets = getTOEFLListeningBankSets(taskId);
    const goal = Math.min(toeflListeningMastery.goals[taskId] || sets.length, sets.length || 1);
    const mastered = getTOEFLListeningMasteredCount(taskId);
    let body = "";
    if (!sets.length) {
        body = `<p>The practice bank is not loaded yet.</p>`;
    } else {
        [1, 2, 3].forEach(level => {
            const group = sets.filter(s => s.level === level);
            if (!group.length) return;
            body += `<h4 class="ls-hub-group">${toeflListeningLevelNames[level]}</h4>`;
            group.forEach(set => {
                const entry = toeflListeningProgress.sets[set.id];
                const done = isTOEFLListeningSetMastered(set.id);
                const qCount = set.units.reduce((n, u) => n + u.qs.length, 0);
                body += `
<div class="ls-hub-row ${done ? "is-mastered" : ""}">
    <div><strong>${lsEsc(set.title)}</strong><div class="ls-hub-meta">${qCount} questions${entry ? ` · Best ${entry.best}% · ${entry.attempts} attempt${entry.attempts === 1 ? "" : "s"}` : " · Not attempted"}</div></div>
    <div><span class="ls-badge ${done ? "is-done" : ""}">${done ? "✓ Mastered" : `Goal ${toeflListeningMastery.pct}%`}</span>
    <button type="button" class="${done ? "secondary-button" : "start-button"}" onclick="openTOEFLListeningPracticeSet('${taskId}','${set.id}')">${entry ? "Practise again" : "Start"}</button></div>
</div>`;
            });
        });
    }
    lsOpenActivity(`
<div class="toefl-reading-activity-topbar">
    <button type="button" class="secondary-button" onclick="backToTOEFLListeningHome()">← Listening home</button>
    <span class="toefl-reading-set-label">${lsEsc(task.title)} · Practice</span>
</div>
<div class="toefl-reading-intro"><h3>${lsEsc(task.title)} practice</h3>
<p>Scores are saved on this device. Reach ${toeflListeningMastery.pct}% on a set to master it. Progress: <strong>${mastered} of ${goal}</strong> mastery sets. In practice sets each audio plays only once, like the real test, and answers are shown only after you press Check.</p></div>
${body}
${sets.length ? `<button type="button" class="secondary-button" onclick="resetTOEFLListeningProgress('${taskId}')">Reset ${lsEsc(task.title)} progress</button>` : ""}`);
}

function resetTOEFLListeningProgress(taskId) {
    if (!window.confirm("Reset saved practice progress for this task?")) return;
    getTOEFLListeningBankSets(taskId).forEach(set => { delete toeflListeningProgress.sets[set.id]; });
    saveTOEFLListeningProgress();
    renderTOEFLListeningPracticeHub(taskId);
}

function openTOEFLListeningPracticeSet(taskId, setId) {
    lsCleanup();
    const set = getTOEFLListeningBankSets(taskId).find(s => s.id === setId);
    if (!set) return;
    toeflListeningCurrentTask = taskId;
    const task = toeflListeningTasks[taskId];
    lsOpenActivity(`
<div class="toefl-reading-activity-topbar">
    <button type="button" class="secondary-button" onclick="openTOEFLListeningPractice('${taskId}')">← Practice hub</button>
    <span class="toefl-reading-set-label">${lsEsc(task.title)} · Practice</span>
</div>
<div class="toefl-reading-practice-panel" id="ls-set-area"></div>`);
    renderListeningSet(task, set, true, document.getElementById("ls-set-area"));
}

/* =========================================================
   SET RENDERER (shared by guided Learn sets and Practice sets)
   ========================================================= */

function lsUnitHTML(unit, i, strict, task) {
    const questions = unit.qs.map((q, j) => `
<div class="ls-q" id="ls-q-${i}-${j}">
    <p class="ls-qtext">${unit.qs.length > 1 ? `${j + 1}. ` : ""}${lsEsc(q.q)}</p>
    ${q.opts.map((o, k) => `<label class="ls-opt"><input type="radio" name="ls-${i}-${j}" value="${k}"><span>${lsEsc(o)}</span></label>`).join("")}
    <p class="ls-why" id="ls-why-${i}-${j}"><strong>Why:</strong> ${lsEsc(q.why)}</p>
</div>`).join("");
    const multi = new Set(unit.lines.map(l => l.sp)).size > 1;
    const transcript = unit.lines.map(l => `<p>${multi ? `<strong>${lsEsc(l.sp)}:</strong> ` : ""}${lsEsc(l.text)}</p>`).join("");
    return `
<div class="ls-unit" id="ls-unit-${i}">
    <p class="ls-ctx">Audio ${i + 1} · ${lsEsc(unit.ctx)}</p>
    <div class="ls-controls">
        <button type="button" class="secondary-button" data-ls-listen="${i}">🔊 ${strict ? "Listen (once)" : "Listen"}</button>
        <span class="ls-msg" id="ls-msg-${i}"></span>
    </div>
    ${questions}
    <div class="ls-transcript" id="ls-transcript-${i}"><p><strong>Transcript</strong></p>${transcript}</div>
</div>`;
}

function renderListeningSet(task, set, practice, area) {
    lsStop();
    lsState = { taskId: task.id, set, practice, strict: practice, checked: false, played: set.units.map(() => 0) };
    const qCount = set.units.reduce((n, u) => n + u.qs.length, 0);
    area.innerHTML = `
<div class="toefl-reading-practice-heading"><h3>${lsEsc(set.title)}</h3><span class="toefl-reading-progress-pill">${qCount} question${qCount === 1 ? "" : "s"}</span></div>
<p class="toefl-reading-instruction">${lsEsc(set.instruction || "Listen, choose your answers, then press Check.")}</p>
${set.units.map((u, i) => lsUnitHTML(u, i, practice, task)).join("")}
<div class="toefl-reading-actions"><button type="button" class="start-button" id="ls-check-btn">Check my answers</button></div>
<div class="ls-result" id="ls-result"></div>`;
    area.querySelectorAll("[data-ls-listen]").forEach(btn => btn.addEventListener("click", () => lsListen(Number(btn.dataset.lsListen), btn)));
    document.getElementById("ls-check-btn").addEventListener("click", lsCheckSet);
}

/* =========================================================
   AUDIO: real file first, browser speech as a silent fallback
   ========================================================= */

let lsAudio = null, lsToken = 0;
const lsMissingAudio = new Set();   // unit ids with no audio file found

function lsStop() {
    lsToken++;
    if (lsAudio) { lsAudio.onerror = null; lsAudio.onended = null; lsAudio.pause(); lsAudio = null; }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function lsCleanup() { lsStop(); lsState = null; }

function lsPlayUnit(unit, onFail) {
    lsStop();
    const token = lsToken;
    if (lsMissingAudio.has(unit.id)) { if (!lsSpeak(unit, token)) onFail(); return; }
    const exts = ["mp3", "wav"];
    const tryFile = idx => {
        if (token !== lsToken) return;
        if (idx >= exts.length) { lsMissingAudio.add(unit.id); if (!lsSpeak(unit, token)) onFail(); return; }
        const audio = new Audio(`${LS_AUDIO_DIR}${unit.id}.${exts[idx]}`);
        lsAudio = audio;
        audio.onerror = () => { if (token === lsToken) tryFile(idx + 1); };
        const started = audio.play();
        if (started && started.catch) started.catch(() => { /* error event handles missing files */ });
    };
    tryFile(0);
}

function lsSpeak(unit, token) {
    if (!("speechSynthesis" in window)) return false;
    const synth = window.speechSynthesis;
    synth.cancel();
    const all = synth.getVoices();
    const us = all.filter(v => /en[-_]US/i.test(v.lang));
    const voices = us.length ? us : all.filter(v => /^en/i.test(v.lang));
    const names = [];
    const queue = [];
    unit.lines.forEach(line => {
        if (!names.includes(line.sp)) names.push(line.sp);
        const k = names.indexOf(line.sp);
        (line.text.match(/[^.!?]+[.!?]*/g) || [line.text]).forEach(chunk => queue.push({ text: chunk.trim(), k }));
    });
    const next = () => {
        if (token !== lsToken) return;
        const item = queue.shift();
        if (!item || !item.text) { if (item) next(); return; }
        const utter = new SpeechSynthesisUtterance(item.text);
        utter.lang = "en-US";
        utter.rate = 0.95;
        utter.pitch = item.k % 2 ? 0.8 : 1;
        if (voices.length) utter.voice = voices[item.k % voices.length];
        utter.onend = next;
        utter.onerror = next;
        synth.speak(utter);
    };
    next();
    return true;
}

function lsListen(i, btn) {
    if (!lsState) return;
    if (lsState.strict && !lsState.checked && lsState.played[i] >= 1) return;
    const msg = document.getElementById(`ls-msg-${i}`);
    msg.textContent = "";
    lsPlayUnit(lsState.set.units[i], () => { msg.textContent = "Your browser cannot play audio. Try Chrome, Edge, or Safari."; });
    lsState.played[i]++;
    if (lsState.strict && !lsState.checked) { btn.disabled = true; btn.textContent = "🔊 Played"; }
}

/* =========================================================
   CHECK + RESULT
   ========================================================= */

function lsCheckSet() {
    if (!lsState || lsState.checked) return;
    const { set, practice, taskId } = lsState;
    let total = 0, right = 0, unanswered = 0;
    set.units.forEach((u, i) => u.qs.forEach((q, j) => {
        total++;
        if (!document.querySelector(`input[name="ls-${i}-${j}"]:checked`)) unanswered++;
    }));
    if (unanswered && !window.confirm(`${unanswered} question${unanswered === 1 ? " is" : "s are"} unanswered. Check anyway?`)) return;

    lsStop();
    lsState.checked = true;
    set.units.forEach((u, i) => {
        u.qs.forEach((q, j) => {
            const sel = document.querySelector(`input[name="ls-${i}-${j}"]:checked`);
            const picked = sel ? Number(sel.value) : -1;
            if (picked === q.ans) right++;
            document.querySelectorAll(`input[name="ls-${i}-${j}"]`).forEach(input => {
                input.disabled = true;
                const label = input.closest(".ls-opt");
                const k = Number(input.value);
                if (k === q.ans) label.classList.add("is-correct");
                else if (k === picked) label.classList.add("is-wrong");
            });
            document.getElementById(`ls-why-${i}-${j}`).classList.add("is-open");
        });
        document.getElementById(`ls-transcript-${i}`).classList.add("is-open");
        const btn = document.querySelector(`[data-ls-listen="${i}"]`);
        if (btn) { btn.disabled = false; btn.textContent = "🔊 Replay"; }
    });

    const pct = Math.round((right / total) * 100);
    const mastered = pct >= toeflListeningMastery.pct;
    let extra = "";
    if (practice) {
        const entry = toeflListeningProgress.sets[set.id] || { best: 0, attempts: 0 };
        entry.best = Math.max(entry.best, pct);
        entry.attempts++;
        toeflListeningProgress.sets[set.id] = entry;
        saveTOEFLListeningProgress();
        extra = `<p>Best score on this set: ${entry.best}%.</p>`;
    }
    const nextStep = practice
        ? `<div class="toefl-reading-actions" style="margin-top:12px"><button type="button" class="start-button" onclick="openTOEFLListeningPracticeSet('${taskId}','${set.id}')">Try again</button> <button type="button" class="secondary-button" onclick="openTOEFLListeningPractice('${taskId}')">← Practice hub</button></div>`
        : `<div class="toefl-reading-actions" style="margin-top:12px"><button type="button" class="secondary-button" onclick="renderTOEFLListeningLearn()">Try this set again</button> <button type="button" class="start-button" onclick="nextTOEFLListeningGuidedSet()">${toeflListeningSetIndex < toeflListeningTasks[taskId].sets.length - 1 ? "Next guided set →" : "Finish lesson ✓"}</button></div>`;
    document.getElementById("ls-result").innerHTML = `
<h3>${right} of ${total} correct (${pct}%)</h3>
<p>${mastered ? "Excellent. This is a mastery-level score." : `Mastery goal: ${toeflListeningMastery.pct}%. Read the explanations, replay the audio, and try again.`}</p>${extra}${nextStep}`;
    document.getElementById("ls-result").scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("ls-check-btn").disabled = true;
}
