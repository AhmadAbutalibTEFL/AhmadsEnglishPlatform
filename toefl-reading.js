/* =========================================================
   TOEFL iBT READING — original interactive learning section
   Static-site friendly: no libraries, APIs, or back end.
   ========================================================= */

const toeflReadingTasks = {
    complete: {
        id: "complete",
        title: "Complete the Words",
        icon: "🔤",
        shortDescription: "Use grammar, word forms, and context to complete missing parts of words.",
        explanation: "You read a short passage. Some words are incomplete, and you supply the missing letters. The surrounding sentence gives clues about meaning and grammar.",
        strategy: [
            "Read the full sentence before completing a word.",
            "Use the sentence meaning to predict the whole word.",
            "Check the part of speech and the grammar around the gap.",
            "Read the completed sentence again to check that it makes sense."
        ],
        mistakes: [
            "Guessing from the first letters without reading the sentence.",
            "Writing a word with the right meaning but the wrong grammatical form.",
            "Entering the whole word when the box asks for the missing letters only."
        ],
        sets: [
            {
                type: "cloze",
                title: "Practice 1 · Community Gardens",
                instruction: "Type the missing letters only. Use the sentence to help you decide which word form fits.",
                parts: [
                    "Community gardens can ",
                    { prefix: "transfor", suffix: "m", word: "transform", explanation: "The sentence needs a verb meaning to change something." },
                    " unused land into spaces for ",
                    { prefix: "grow", suffix: "ing", word: "growing", explanation: "After ‘for’ here, the -ing form describes the activity the spaces support." },
                    " food. They encourage ",
                    { prefix: "neighbo", suffix: "rs", word: "neighbors", explanation: "The sentence needs a plural noun for the people in a local area." },
                    " to work together and develop a ",
                    { prefix: "stron", suffix: "g", word: "strong", explanation: "An adjective is needed before the noun ‘sense’." },
                    " sense of community. The gardens also provide a ",
                    { prefix: "practi", suffix: "cal", word: "practical", explanation: "An adjective is needed before the noun ‘way’. The complete word is ‘practical’." },
                    " way to learn about soil and seasons. This experience can increase people's ",
                    { prefix: "aware", suffix: "ness", word: "awareness", explanation: "The phrase ‘increase people's…’ needs a noun. ‘Awareness’ means knowledge or understanding." },
                    " of the importance of fresh food. Although maintaining a garden requires ",
                    { prefix: "regula", suffix: "r", word: "regular", explanation: "An adjective is needed before the noun ‘effort’. ‘Regular’ means happening often or consistently." },
                    " effort, the results can be ",
                    { prefix: "reward", suffix: "ing", word: "rewarding", explanation: "After ‘can be’, an adjective describing the experience is needed. ‘Rewarding’ means satisfying or valuable." },
                    "."
                ]
            },
            {
                type: "cloze",
                title: "Practice 2 · Urban Birds",
                instruction: "Complete each word by typing the missing letters in its box.",
                parts: [
                    "Many birds have adapted to life in cities. Some species build nests on buildings, where they can find ",
                    { prefix: "protect", suffix: "ion", word: "protection", explanation: "After ‘find’, the sentence needs a noun meaning safety from harm." },
                    " from some predators. Food is also often ",
                    { prefix: "readi", suffix: "ly", word: "readily", explanation: "An adverb modifies ‘available’ and means easily or quickly." },
                    " available near people. However, city life brings challenges. Bright lights can ",
                    { prefix: "disrup", suffix: "t", word: "disrupt", explanation: "After ‘can’, use the base form of a verb. ‘Disrupt’ means interrupt or disturb." },
                    " normal patterns of activity, and traffic creates ",
                    { prefix: "danger", suffix: "s", word: "dangers", explanation: "The sentence needs a plural noun because it refers to more than one possible risk." },
                    ". Researchers study how birds respond to these ",
                    { prefix: "change", suffix: "s", word: "changes", explanation: "The demonstrative ‘these’ is followed here by a plural noun." },
                    ". Their findings may help city planners design ",
                    { prefix: "green", suffix: "er", word: "greener", explanation: "The comparison with current city design requires the comparative adjective ‘greener’." },
                    " spaces. Adding trees and planting local flowers can support ",
                    { prefix: "biolog", suffix: "ical", word: "biological", explanation: "The adjective ‘biological’ describes the noun ‘diversity’ in the phrase ‘biological diversity’." },
                    " diversity. These changes may benefit birds as well as the people who share their ",
                    { prefix: "environ", suffix: "ment", word: "environment", explanation: "The phrase ‘share their…’ needs a noun naming the surroundings in which they live." },
                    "."
                ]
            }
        ]
    },
    daily: {
        id: "daily",
        title: "Read in Daily Life",
        icon: "📩",
        shortDescription: "Read practical texts such as notices, schedules, messages, and emails.",
        explanation: "These texts are written for a real-world purpose: to inform, request, invite, explain, or give instructions. You need to locate key details and understand what the reader should do.",
        strategy: [
            "Identify the text type and its purpose first.",
            "Scan for names, dates, times, locations, conditions, and actions.",
            "Match the question to the exact line or detail that answers it.",
            "For an inference, choose what the information supports—not what merely sounds possible."
        ],
        mistakes: [
            "Reading every word slowly before checking what the question asks.",
            "Missing conditions such as ‘only’, ‘by Friday’, or ‘if space is available’.",
            "Choosing an answer that adds information not stated in the text."
        ],
        sets: [
            {
                type: "mcq",
                title: "Practice 1 · Library Workshop Notice",
                materialTitle: "RESEARCH SMART: FREE LIBRARY WORKSHOP",
                material: "Thursday, 4:00–5:15 p.m. · Learning Centre, Room 204\nLearn how to search the library catalogue, evaluate online sources, and record references. Bring a laptop if you have one. The workshop is free, but places are limited to 20 students. Register through the student portal by Wednesday at 6:00 p.m. Students who register will receive a confirmation email.",
                instruction: "Read the notice and answer each question. Select one answer for each item.",
                questions: [
                    { question: "What is the main purpose of the notice?", choices: ["To announce a change in library opening hours", "To invite students to a research workshop", "To ask students to return laptops", "To advertise a paid online course"], answer: 1, explanation: "The notice describes a free workshop and tells students when, where, and how to register." },
                    { question: "What must a student do to reserve a place?", choices: ["Email the workshop teacher after Thursday", "Bring a laptop to Room 204", "Register through the student portal by Wednesday evening", "Pay a fee at the Learning Centre"], answer: 2, explanation: "The notice explicitly says to register through the student portal by Wednesday at 6:00 p.m." },
                    { question: "Which statement is true about laptops?", choices: ["Every student must borrow one from the library", "Students should bring one if they have one", "Only students with laptops can register", "The workshop takes place in a computer shop"], answer: 1, explanation: "‘Bring a laptop if you have one’ makes it helpful but not compulsory." },
                    { question: "Why should students register early?", choices: ["The workshop has a limited number of places", "The event lasts all day", "The student portal closes for the month", "The workshop fee increases on Thursday"], answer: 0, explanation: "The notice says places are limited to 20 students, so registration does not guarantee unlimited space." }
                ]
            },
            {
                type: "mcq",
                title: "Practice 2 · Email from a Course Tutor",
                materialTitle: "EMAIL · FIELD TRIP UPDATE",
                material: "Subject: Friday's visit to the science museum\n\nHi everyone,\n\nThe museum visit will still take place on Friday, but our bus will leave school at 8:15 a.m. instead of 8:45. Please arrive by 8:00 so we can check attendance. The museum has asked us not to bring food into the exhibition rooms; you may eat your packed lunch in the outdoor picnic area. If it rains, we will use the covered seating area beside the main entrance.\n\nPlease reply to this email by Thursday afternoon if you can no longer attend.\n\nBest,\nMs Patel",
                instruction: "Use the email to answer the questions. Pay close attention to the changes and conditions.",
                questions: [
                    { question: "What has changed about the trip?", choices: ["The destination", "The day of the visit", "The bus departure time", "The lunch arrangement"], answer: 2, explanation: "The bus now leaves at 8:15 a.m. rather than 8:45 a.m.; the visit is still on Friday." },
                    { question: "Why should students arrive by 8:00 a.m.?", choices: ["To buy breakfast", "So attendance can be checked before departure", "To choose museum groups", "To meet the museum director"], answer: 1, explanation: "Ms Patel states that the early arrival gives the group time to check attendance." },
                    { question: "Where may students eat their packed lunch?", choices: ["Inside every exhibition room", "On the bus only", "In the outdoor picnic area", "At the school cafeteria"], answer: 2, explanation: "Food is not allowed in the exhibition rooms, but students may use the outdoor picnic area." },
                    { question: "What should a student do if they cannot attend?", choices: ["Call the museum on Friday", "Reply to the email by Thursday afternoon", "Wait until the bus arrives", "Ask another student to register them"], answer: 1, explanation: "The final paragraph asks students who can no longer attend to reply by Thursday afternoon." }
                ]
            }
        ]
    },
    academic: {
        id: "academic",
        title: "Read an Academic Passage",
        icon: "🔬",
        shortDescription: "Understand the main idea, supporting details, vocabulary, and implied meaning in academic texts.",
        explanation: "Academic passages explain a topic, process, or finding. Questions may ask for the main idea, a stated detail, an inference, the meaning of a word in context, or the purpose of a sentence.",
        strategy: [
            "Read the passage to understand its topic and overall point.",
            "For a detail question, return to the part of the passage that discusses the topic.",
            "For vocabulary, replace the word with each option and check the meaning in context.",
            "For an inference, combine the passage's clues without adding an unsupported assumption.",
            "For a purpose question, ask why the author included that sentence or example."
        ],
        mistakes: [
            "Selecting an option that repeats a word from the passage but changes the idea.",
            "Confusing the topic with the author's main point about the topic.",
            "Treating a possible explanation as a fact when the passage does not support it."
        ],
        sets: [
            {
                type: "mcq",
                title: "Practice 1 · Mangrove Forests",
                materialTitle: "WHY MANGROVES MATTER",
                material: "Mangrove forests grow along tropical and subtropical coastlines, where salt-tolerant trees thrive in tidal water. Their tangled roots slow moving water and trap sediment, helping protect shorelines from erosion. The roots also create sheltered habitats for young fish, crabs, and other small animals. Many species use these areas as nurseries before moving into deeper water.\n\nMangroves can also store large amounts of carbon in their trunks, roots, and the soil beneath them. When forests are cleared, some of this stored carbon may be released into the atmosphere. Yet mangroves face pressure from coastal development, pollution, and the conversion of wetlands into other land uses. Protecting these forests therefore supports both coastal communities and wildlife.",
                instruction: "Read the passage. Choose the best answer for each question.",
                questions: [
                    { question: "What is the passage mainly about?", choices: ["How tropical trees are used to produce timber", "The ecological value of mangroves and the threats they face", "Why most fish avoid shallow coastal water", "The history of coastal cities in tropical regions"], answer: 1, explanation: "Both paragraphs describe benefits provided by mangroves and pressures that threaten them." },
                    { question: "According to the passage, how do mangrove roots help protect shorelines?", choices: ["They increase the speed of tidal water", "They remove all salt from seawater", "They slow water and trap sediment", "They prevent coastal development"], answer: 2, explanation: "The first paragraph directly states that tangled roots slow moving water and trap sediment, reducing erosion." },
                    { question: "The word ‘sheltered’ in the first paragraph is closest in meaning to:", choices: ["Protected", "Distant", "Crowded", "Temporary"], answer: 0, explanation: "The roots create habitats where young animals have some protection from water movement and danger." },
                    { question: "What can be inferred about young fish that use mangrove habitats?", choices: ["They may move to other waters as they develop", "They can survive only in freshwater", "They destroy the roots that protect them", "They remain in the same place throughout life"], answer: 0, explanation: "The passage says many species use the areas as nurseries before moving into deeper water." },
                    { question: "Why does the author mention carbon stored in mangrove soil?", choices: ["To show that mangroves have no effect on climate", "To explain another benefit of mangroves and a consequence of clearing them", "To argue that all soils contain the same amount of carbon", "To describe how fish obtain food"], answer: 1, explanation: "The carbon detail adds another environmental benefit and explains why clearing forests can release stored carbon." }
                ]
            },
            {
                type: "mcq",
                title: "Practice 2 · Sleep and Memory",
                materialTitle: "SLEEP AND LEARNING",
                material: "Learning does not end when a person closes a book. During sleep, the brain continues to process some of the information gathered during the day. Researchers have found evidence that sleep helps stabilize certain memories, making them easier to retrieve later. This process does not mean that every detail is stored perfectly; rather, some information becomes more durable over time.\n\nThe relationship between sleep and learning is one reason that regular rest is often recommended during periods of study. Staying awake longer may create extra time for practice, but fatigue can reduce attention and make new information harder to understand. The most useful study schedule therefore balances focused practice with sufficient sleep, rather than treating sleep as time that can always be sacrificed.",
                instruction: "Read the passage and answer the questions. Use the author's exact claims as evidence.",
                questions: [
                    { question: "What is the main point of the passage?", choices: ["People should stop studying during the day", "Sleep can support memory, so study plans should include enough rest", "Every memory becomes permanent after one night", "Researchers have proved that practice is unnecessary"], answer: 1, explanation: "The passage explains how sleep can stabilize some memories and recommends balancing study with rest." },
                    { question: "According to the passage, what may happen to some memories during sleep?", choices: ["They become easier to retrieve later", "They are all deleted", "They are changed into new facts", "They stop being processed by the brain"], answer: 0, explanation: "The first paragraph says sleep helps stabilize certain memories, making them easier to retrieve later." },
                    { question: "The word ‘durable’ in the first paragraph is closest in meaning to:", choices: ["Confusing", "Long-lasting", "Unimportant", "Immediate"], answer: 1, explanation: "Here, ‘durable’ describes information that remains stable over time—long-lasting information." },
                    { question: "What can be inferred about studying while very tired?", choices: ["It always produces higher scores", "It may be less effective because attention can decrease", "It removes the need to review information", "It improves every type of memory equally"], answer: 1, explanation: "The passage states that fatigue can reduce attention and make new information harder to understand." },
                    { question: "Why does the author contrast extra study time with fatigue?", choices: ["To argue that all studying should happen at night", "To explain why more study time is not always better if it reduces rest and attention", "To suggest that students should never practise", "To show that sleep and memory are unrelated"], answer: 1, explanation: "The contrast supports the conclusion that a useful schedule balances focused practice with sufficient sleep." }
                ]
            }
        ]
    }
};

const toeflReadingCompletedTasks = new Set();
let toeflReadingCurrentTask = null;
let toeflReadingSetIndex = 0;
let toeflReadingAnswers = {};
let toeflReadingClozeChecked = false;

function showTOEFLReading() {
    if (typeof hideAllScreens === "function") hideAllScreens();
    const screen = document.getElementById("toefl-reading-screen");
    if (!screen) return;
    screen.style.display = "block";
    document.getElementById("toefl-reading-home").style.display = "block";
    document.getElementById("toefl-reading-activity").style.display = "none";
    renderTOEFLReadingTaskCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTOEFLReadingTaskCards() {
    const container = document.getElementById("toefl-reading-task-grid");
    if (!container) return;
    container.innerHTML = "";

    Object.values(toeflReadingTasks).forEach(task => {
        const completed = toeflReadingCompletedTasks.has(task.id);
        const card = document.createElement("article");
        card.className = "toefl-reading-task-card";
        card.innerHTML = `
            <div class="toefl-reading-task-icon" aria-hidden="true">${task.icon}</div>
            <div class="toefl-reading-card-status ${completed ? "is-complete" : ""}">${completed ? "✓ Completed" : `${task.sets.length} practice sets`}</div>
            <h3>${task.title}</h3>
            <p>${task.shortDescription}</p>
            <button type="button" class="start-button">${completed ? "Practise Again →" : "Learn & Practise →"}</button>
        `;
        card.querySelector("button").addEventListener("click", () => openTOEFLReadingTask(task.id));
        container.appendChild(card);
    });

    const count = toeflReadingCompletedTasks.size;
    const progress = document.getElementById("toefl-reading-overall-progress");
    if (progress) progress.textContent = `${count} of 3 task types completed`;
    const bar = document.getElementById("toefl-reading-overall-bar");
    if (bar) bar.style.width = `${(count / 3) * 100}%`;
}

function openTOEFLReadingTask(taskId) {
    if (!toeflReadingTasks[taskId]) return;
    toeflReadingCurrentTask = taskId;
    toeflReadingSetIndex = 0;
    toeflReadingAnswers = {};
    toeflReadingClozeChecked = false;
    document.getElementById("toefl-reading-home").style.display = "none";
    document.getElementById("toefl-reading-activity").style.display = "block";
    renderTOEFLReadingActivity();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTOEFLReadingActivity() {
    const task = toeflReadingTasks[toeflReadingCurrentTask];
    const practice = task.sets[toeflReadingSetIndex];
    const container = document.getElementById("toefl-reading-activity");
    let lessonHTML = task.strategy.map((item, index) => `<li><span>${index + 1}</span><p>${item}</p></li>`).join("");
    let mistakesHTML = task.mistakes.map(item => `<li>${item}</li>`).join("");

    let practiceHTML = "";
    if (practice.type === "cloze") {
        practiceHTML = renderTOEFLReadingCloze(practice);
    } else {
        practiceHTML = renderTOEFLReadingMCQ(practice);
    }

    const setLabel = `Practice ${toeflReadingSetIndex + 1} of ${task.sets.length}`;
    container.innerHTML = `
        <div class="toefl-reading-activity-topbar">
            <button type="button" class="secondary-button" onclick="backToTOEFLReadingHome()">← Reading tasks</button>
            <span class="toefl-reading-set-label">${setLabel}</span>
        </div>
        <div class="toefl-reading-lesson-grid">
            <section class="toefl-reading-explainer">
                <p class="course-label">TASK EXPLANATION</p>
                <h3>${task.icon} ${task.title}</h3>
                <p>${task.explanation}</p>
            </section>
            <section class="toefl-reading-strategy">
                <h3>Strategy to use</h3>
                <ol class="toefl-reading-strategy-list">${lessonHTML}</ol>
            </section>
        </div>
        <details class="toefl-reading-mistakes">
            <summary>Common mistakes to avoid</summary>
            <ul>${mistakesHTML}</ul>
        </details>
        <section class="toefl-reading-practice-panel">
            <div class="toefl-reading-practice-heading">
                <div><p class="course-label">INTERACTIVE PRACTICE</p><h3>${practice.title}</h3></div>
                <span class="toefl-reading-progress-pill" id="toefl-reading-set-progress">${practice.type === "cloze" ? `${practice.parts.filter(p => typeof p === "object").length} word gaps` : `${practice.questions.length} questions`}</span>
            </div>
            <p class="toefl-reading-instruction">${practice.instruction}</p>
            ${practiceHTML}
            <div class="toefl-reading-set-result" id="toefl-reading-set-result" aria-live="polite"></div>
            <button type="button" class="start-button toefl-reading-continue" id="toefl-reading-continue" style="display:none" onclick="nextTOEFLReadingSet()">Continue →</button>
        </section>
    `;
}

function renderTOEFLReadingCloze(practice) {
    let html = "<div class='toefl-reading-passage toefl-reading-cloze-passage'><p>";
    let blankIndex = 0;
    practice.parts.forEach(part => {
        if (typeof part === "string") {
            html += escapeTOEFLReadingHTML(part);
        } else {
            html += `
                <span class="toefl-cloze-item" data-cloze-index="${blankIndex}">
                    <span class="toefl-cloze-prefix">${escapeTOEFLReadingHTML(part.prefix)}</span><input type="text" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Missing letters for word ${blankIndex + 1}" data-cloze-input="${blankIndex}" placeholder="letters" />
                    <span class="toefl-cloze-feedback" data-cloze-feedback="${blankIndex}" aria-live="polite"></span>
                </span>`;
            blankIndex++;
        }
    });
    html += "</p></div><div class='toefl-reading-actions'><button type='button' class='start-button' id='toefl-reading-check-cloze' onclick='checkTOEFLReadingCloze()'>Check answers</button><button type='button' class='secondary-button' onclick='resetTOEFLReadingPractice()'>Reset answers</button></div>";
    return html;
}

function renderTOEFLReadingMCQ(practice) {
    let html = `<div class="toefl-reading-source"><h4>${practice.materialTitle}</h4><p>${escapeTOEFLReadingHTML(practice.material).replace(/\n/g, "<br>")}</p></div>`;
    html += `<div class="toefl-reading-questions">`;
    practice.questions.forEach((question, questionIndex) => {
        const options = question.choices.map((choice, choiceIndex) => `
            <button type="button" class="toefl-reading-option" data-reading-question="${questionIndex}" data-reading-choice="${choiceIndex}" onclick="selectTOEFLReadingAnswer(${questionIndex}, ${choiceIndex})">
                <span class="toefl-reading-option-letter">${String.fromCharCode(65 + choiceIndex)}</span><span>${escapeTOEFLReadingHTML(choice)}</span>
            </button>`).join("");
        html += `
            <article class="toefl-reading-question-card" id="toefl-reading-question-${questionIndex}">
                <p class="toefl-reading-question-number">Question ${questionIndex + 1} of ${practice.questions.length}</p>
                <h4>${escapeTOEFLReadingHTML(question.question)}</h4>
                <div class="toefl-reading-options">${options}</div>
                <div class="toefl-reading-answer-feedback" id="toefl-reading-feedback-${questionIndex}" aria-live="polite"></div>
            </article>`;
    });
    html += "</div>";
    return html;
}

function selectTOEFLReadingAnswer(questionIndex, choiceIndex) {
    if (Object.prototype.hasOwnProperty.call(toeflReadingAnswers, questionIndex)) return;
    const task = toeflReadingTasks[toeflReadingCurrentTask];
    const practice = task.sets[toeflReadingSetIndex];
    const question = practice.questions[questionIndex];
    toeflReadingAnswers[questionIndex] = choiceIndex;
    const buttons = document.querySelectorAll(`[data-reading-question="${questionIndex}"]`);
    buttons.forEach(button => {
        button.disabled = true;
        const optionIndex = Number(button.dataset.readingChoice);
        if (optionIndex === question.answer) button.classList.add("is-correct");
        if (optionIndex === choiceIndex && choiceIndex !== question.answer) button.classList.add("is-incorrect");
    });
    const feedback = document.getElementById(`toefl-reading-feedback-${questionIndex}`);
    const correct = choiceIndex === question.answer;
    feedback.className = `toefl-reading-answer-feedback ${correct ? "feedback-correct" : "feedback-incorrect"}`;
    feedback.innerHTML = `<strong>${correct ? "Correct." : `Not quite. The correct answer is ${String.fromCharCode(65 + question.answer)}.`}</strong> ${escapeTOEFLReadingHTML(question.explanation)}`;

    const answered = Object.keys(toeflReadingAnswers).length;
    const correctCount = Object.entries(toeflReadingAnswers).filter(([index, selected]) => practice.questions[Number(index)].answer === selected).length;
    const progress = document.getElementById("toefl-reading-set-progress");
    if (progress) progress.textContent = `${answered}/${practice.questions.length} answered · ${correctCount} correct`;
    if (answered === practice.questions.length) {
        const result = document.getElementById("toefl-reading-set-result");
        result.innerHTML = `<strong>Practice result: ${correctCount} / ${practice.questions.length}</strong><p>Review the explanations above, especially any question you missed.</p>`;
        document.getElementById("toefl-reading-continue").style.display = "inline-flex";
    }
}

function checkTOEFLReadingCloze() {
    if (toeflReadingClozeChecked) return;
    const task = toeflReadingTasks[toeflReadingCurrentTask];
    const practice = task.sets[toeflReadingSetIndex];
    const blanks = practice.parts.filter(part => typeof part === "object");
    let correctCount = 0;
    blanks.forEach((blank, index) => {
        const input = document.querySelector(`[data-cloze-input="${index}"]`);
        const feedback = document.querySelector(`[data-cloze-feedback="${index}"]`);
        const value = input.value.trim().replace(/\s+/g, "");
        const correct = value.toLowerCase() === blank.suffix.toLowerCase();
        if (correct) correctCount++;
        input.disabled = true;
        input.classList.add(correct ? "is-correct" : "is-incorrect");
        feedback.className = `toefl-cloze-feedback ${correct ? "feedback-correct" : "feedback-incorrect"}`;
        feedback.innerHTML = `${correct ? "✓ Correct" : `Correct ending: <strong>${escapeTOEFLReadingHTML(blank.suffix)}</strong>`}<br><span>${escapeTOEFLReadingHTML(blank.word)} — ${escapeTOEFLReadingHTML(blank.explanation)}</span>`;
    });
    toeflReadingClozeChecked = true;
    const checkButton = document.getElementById("toefl-reading-check-cloze");
    if (checkButton) checkButton.disabled = true;
    const result = document.getElementById("toefl-reading-set-result");
    result.innerHTML = `<strong>Your result: ${correctCount} / ${blanks.length}</strong><p>Read each completed word in context. Notice how grammar and meaning helped you choose its form.</p>`;
    const progress = document.getElementById("toefl-reading-set-progress");
    if (progress) progress.textContent = `${correctCount}/${blanks.length} correct`;
    document.getElementById("toefl-reading-continue").style.display = "inline-flex";
}

function resetTOEFLReadingPractice() {
    toeflReadingAnswers = {};
    toeflReadingClozeChecked = false;
    renderTOEFLReadingActivity();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextTOEFLReadingSet() {
    const task = toeflReadingTasks[toeflReadingCurrentTask];
    if (toeflReadingSetIndex < task.sets.length - 1) {
        toeflReadingSetIndex++;
        toeflReadingAnswers = {};
        toeflReadingClozeChecked = false;
        renderTOEFLReadingActivity();
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        toeflReadingCompletedTasks.add(task.id);
        backToTOEFLReadingHome();
    }
}

function backToTOEFLReadingHome() {
    const home = document.getElementById("toefl-reading-home");
    const activity = document.getElementById("toefl-reading-activity");
    if (!home || !activity) return;
    home.style.display = "block";
    activity.style.display = "none";
    renderTOEFLReadingTaskCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeTOEFLReadingHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
