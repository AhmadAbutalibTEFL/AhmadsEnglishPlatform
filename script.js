const courses = [
    {
        id: "ela",
        title: "ELA",
        mark: "ELA",
        description: "English Language Arts: reading, writing, language, and literary skills.",
        available: false
    },
    {
        id: "digital-sat",
        title: "Digital SAT",
        mark: "SAT",
        description: "Reading and Writing preparation organized by skills and difficulty.",
        available: false
    },
    {
        id: "est",
        title: "EST",
        mark: "EST",
        description: "Structured EST preparation in Grammar, Reading, and Practice.",
        available: true
    },
    {
        id: "ielts",
        title: "IELTS",
        mark: "IELTS",
        description: "IELTS preparation for Listening, Reading, Writing, and Speaking.",
        available: false
    },
    {
    id: "toefl",
    title: "TOEFL",
    mark: "TOEFL",
    description: "TOEFL preparation covering Reading, Listening, Speaking, and Writing.",
    available: true
},
    {
        id: "general-english",
        title: "General English",
        mark: "GE",
        description: "Build practical English skills for communication and everyday use.",
        available: false
    },
    {
        id: "young-learners",
        title: "English for Young Learners",
        mark: "YL",
        description: "Engaging English learning designed for younger learners.",
        available: false
    },
    {
        id: "teacher-training",
        title: "Teacher Training",
        mark: "TT",
        description: "Professional development for English language teachers.",
        available: false
    }
];

const toeflSections = [
    {
        id: "reading",
        title: "Reading",
        icon: "📖",
        description: "Develop vocabulary and understand everyday and academic texts.",
        items: 50,
        baseTime: "~30 minutes",
        tasks: [
            "Complete the Words",
            "Read in Daily Life",
            "Read an Academic Passage"
        ]
    },
    {
        id: "listening",
        title: "Listening",
        icon: "🎧",
        description: "Understand spoken responses, conversations, announcements, and academic talks.",
        items: 47,
        baseTime: "~29 minutes",
        tasks: [
            "Listen and Choose a Response",
            "Listen to a Conversation",
            "Listen to an Announcement",
            "Listen to an Academic Talk"
        ]
    },
    {
        id: "writing",
        title: "Writing",
        icon: "✍️",
        description: "Build accurate sentences and communicate effectively in writing.",
        items: 12,
        baseTime: "~23 minutes",
        tasks: [
            "Build a Sentence",
            "Write an Email",
            "Write for an Academic Discussion"
        ]
    },
    {
        id: "speaking",
        title: "Speaking",
        icon: "🎙️",
        description: "Improve pronunciation, fluency, and spoken responses.",
        items: 11,
        baseTime: "~8 minutes",
        tasks: [
            "Listen and Repeat",
            "Take an Interview"
        ]
    }
];


function createCourseCard(course) {
    const card = document.createElement("article");
    card.className = "course-card " + (course.available ? "course-card-active" : "course-card-coming-soon");

    const buttonLabel = course.available ? "Open Course →" : "Coming Soon";
    const ariaLabel = course.available
        ? "Open " + course.title + " course"
        : course.title + " is planned and not available yet";

    card.innerHTML = `
        <div class="course-card-head">
            <span class="course-mark" aria-hidden="true">${course.mark}</span>
            <div class="course-card-title">
                <h4>${course.title}</h4>
                <span class="course-status ${course.available ? "course-status-available" : "course-status-planned"}">
                    ${course.available ? "Available" : "Planned"}
                </span>
            </div>
        </div>

        <p class="course-desc">${course.description}</p>

        <button type="button" class="${course.available ? "start-button" : "secondary-button"}" aria-label="${ariaLabel}">
            ${buttonLabel}
        </button>
    `;

    card.querySelector("button").onclick = function () {
        if (course.id === "est") {
            showESTCourse();
        } else if (course.id === "toefl") {
            showTOEFLCourse();
        } else {
            showComingSoon(course.title);
        }
    };

    return card;
}

function displayCourses() {
    const container = document.getElementById("courses-container");
    container.innerHTML = "";

    const groups = [
        {
            title: "Available now",
            note: "",
            gridClass: "course-grid course-grid-available",
            list: courses.filter(course => course.available)
        },
        {
            title: "In planning",
            note: "These courses are planned but not available yet.",
            gridClass: "course-grid course-grid-planned",
            list: courses.filter(course => !course.available)
        }
    ];

    groups.forEach(group => {
        if (!group.list.length) return;

        const wrapper = document.createElement("div");
        wrapper.className = "course-group";

        const heading = document.createElement("h3");
        heading.className = "course-group-title";
        heading.textContent = group.title;
        wrapper.appendChild(heading);

        if (group.note) {
            const note = document.createElement("p");
            note.className = "course-group-note";
            note.textContent = group.note;
            wrapper.appendChild(note);
        }

        const grid = document.createElement("div");
        grid.className = group.gridClass;
        group.list.forEach(course => grid.appendChild(createCourseCard(course)));
        wrapper.appendChild(grid);

        container.appendChild(wrapper);
    });
}


function displayTOEFLSections() {
    const container = document.getElementById("toefl-sections-container");
    container.innerHTML = "";

    toeflSections.forEach(section => {
        const card = document.createElement("div");
        card.className = "toefl-section-card";

        const tasksHTML = section.tasks.map(task => `<li>${task}</li>`).join("");
        card.innerHTML = `
            <div class="toefl-section-icon">${section.icon}</div>
            <h3>${section.title}</h3>
            <p>${section.description}</p>
            <div class="toefl-section-meta">
                <span>${section.items} items</span>
                <span>${section.baseTime} base time</span>
            </div>
            <ul class="toefl-task-list">${tasksHTML}</ul>
        `;

        const sectionStarts = {
            reading:   { label: "Start Reading Pass →",   fn: "showTOEFLReading" },
            listening: { label: "Start Listening Pass →", fn: "showTOEFLListening" },
            writing:   { label: "Start Writing Pass →",   fn: "showTOEFLWriting" },
            speaking:  { label: "Start Speaking Pass →",  fn: "showTOEFLSpeaking" }
        };
        const start = sectionStarts[section.id];
        if (start && typeof window[start.fn] === "function") {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "start-button toefl-section-start";
            button.textContent = start.label;
            button.addEventListener("click", window[start.fn]);
            card.appendChild(button);
        }

        container.appendChild(card);
    });
}



function showTOEFLCourse() {

    hideAllScreens();

    document.getElementById("toefl-course-screen").style.display = "block";

    displayTOEFLSections();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
// ===== EST course map (data lives in est-data.js) =====

const EST_KIND_LABELS = {
    intro: "Intro",
    grammar: "Grammar",
    reading: "Reading",
    test: "Test",
    revision: "Revision",
    practice: "Practice"
};

const EST_KIND_ORDER = ["intro", "grammar", "reading", "test", "revision", "practice"];

const EST_STATUS_TEXT = {
    live: "Available",
    prepared: "Prepared, not on the site yet",
    planned: "Planned"
};

function estEscape(value) {
    return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function getESTSessionList() {
    return Array.isArray(window.estSessions) ? window.estSessions : [];
}

function getESTSession(number) {
    return getESTSessionList().find(session => session.number === Number(number)) || null;
}

function getESTSessionTitle(session) {
    const parts = ["intro", "grammar", "reading", "test", "revision"]
        .reduce((list, kind) => list.concat(
            session.components.filter(c => c.kind === kind).map(c => c.short || c.title)
        ), []);

    return parts.length ? parts.join(" & ") : "Session " + session.number;
}

function getESTSessionStatus(session) {
    const statuses = session.components.map(c => c.status);
    const live = statuses.filter(s => s === "live").length;

    if (live === statuses.length) return { id: "live", text: "Available" };
    if (live > 0) return { id: "partial", text: "Partly available" };
    if (statuses.indexOf("prepared") !== -1) return { id: "prepared", text: "In preparation" };
    return { id: "planned", text: "Planned" };
}

function formatESTComponent(component) {
    return estEscape(component.title) + (component.page ? " (p. " + component.page + ")" : "");
}

function getESTComponentSource(component) {
    if (!component.book) return "";
    const chapter = component.chapter === null || component.chapter === undefined
        ? ""
        : " \u00b7 Ch. " + component.chapter;
    const page = component.page ? " \u00b7 p. " + component.page : "";
    return "Erica Meltzer, " + component.book + chapter + page;
}

function displayESTStatusSummary() {
    const target = document.getElementById("est-status-summary");
    if (!target) return;

    const lessons = [];
    getESTSessionList().forEach(session => {
        session.components.forEach(c => {
            if (c.kind === "grammar" || c.kind === "reading") lessons.push(c);
        });
    });

    const count = status => lessons.filter(c => c.status === status).length;

    target.textContent =
        "Grammar and Reading lessons: " + count("live") + " of " + lessons.length +
        " on the site now, " + count("prepared") + " prepared and being added, " +
        count("planned") + " planned.";
}

function displayESTSessions() {
    const container = document.getElementById("est-sessions-container");

    container.innerHTML = "";

    displayESTStatusSummary();

    getESTSessionList().forEach(session => {

        const status = getESTSessionStatus(session);
        const isOpenable = status.id === "live" || status.id === "partial";

        const card = document.createElement("div");
        card.className = "session-card";

        if (isOpenable) {
            card.classList.add("session-card-active");
        }

        const rows = EST_KIND_ORDER.map(kind => {
            const items = session.components.filter(c => c.kind === kind);
            if (!items.length) return "";
            return `
            <div class="session-row">
                <strong>${EST_KIND_LABELS[kind]}:</strong>
                ${items.map(formatESTComponent).join("; ")}
            </div>`;
        }).join("");

        card.innerHTML = `
            <div class="session-number">
                Session ${session.number}
            </div>

            <h3>${estEscape(getESTSessionTitle(session))}</h3>

            ${rows}

            <p class="est-session-status est-session-status-${status.id}">${status.text}</p>

            <button type="button"
                class="${isOpenable ? "start-button" : "secondary-button"} session-button">
                ${isOpenable ? "Open Session \u2192" : "View Session"}
            </button>
        `;

        card.querySelector("button").addEventListener("click", function () {
            showESTSession(session.number);
        });

        container.appendChild(card);
    });
}

function renderESTSession(session) {
    const status = getESTSessionStatus(session);
    const intros = {
        live: "This session is available.",
        partial: "Part of this session is available. The rest is on the way.",
        prepared: "The teaching materials for this session are prepared and are being added to the site. Nothing here is open yet.",
        planned: "This session is part of the course plan. Its lessons have not been prepared yet."
    };

    document.getElementById("est-session-label").textContent = "EST \u00b7 SESSION " + session.number;
    document.getElementById("est-session-title").textContent = getESTSessionTitle(session);
    document.getElementById("est-session-intro").textContent = intros[status.id];

    const list = document.getElementById("est-session-components");
    list.innerHTML = "";

    EST_KIND_ORDER.forEach(kind => {
        session.components.filter(c => c.kind === kind).forEach(component => {
            const card = document.createElement("div");
            card.className = "component-card est-component-card";

            const source = getESTComponentSource(component);

            card.innerHTML = `
                <p class="est-component-kind">${EST_KIND_LABELS[kind]}</p>
                <h3>${estEscape(component.title)}</h3>
                ${source ? `<span class="component-source">${estEscape(source)}</span>` : ""}
                <p class="est-component-status est-component-status-${component.status}">${EST_STATUS_TEXT[component.status]}</p>
            `;

            if (component.status === "live" && component.test) {
                const testButton = document.createElement("button");
                testButton.type = "button";
                testButton.className = "start-button";
                testButton.textContent = "Start Test \u2192";
                testButton.addEventListener("click", function () { showESTTest(component.test); });
                card.appendChild(testButton);
            } else if (component.status === "live" && component.lesson) {
                const lessonButton = document.createElement("button");
                lessonButton.type = "button";
                lessonButton.className = "start-button";
                lessonButton.textContent = "Open Lesson \u2192";
                lessonButton.addEventListener("click", function () { showESTLesson(component.lesson); });
                card.appendChild(lessonButton);
            } else if (component.status === "live" && component.action && typeof window[component.action] === "function") {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "start-button";
                button.textContent = "Open Lesson \u2192";
                button.addEventListener("click", function () { window[component.action](); });
                card.appendChild(button);
            }

            list.appendChild(card);
        });
    });

    const previous = getESTSession(session.number - 1);
    const next = getESTSession(session.number + 1);

    const prevButton = document.getElementById("est-session-prev");
    const nextButton = document.getElementById("est-session-next");

    prevButton.style.display = previous ? "" : "none";
    nextButton.style.display = next ? "" : "none";

    prevButton.onclick = previous ? function () { showESTSession(previous.number); } : null;
    nextButton.onclick = next ? function () { showESTSession(next.number); } : null;

    if (previous) prevButton.textContent = "\u2190 Session " + previous.number;
    if (next) nextButton.textContent = "Session " + next.number + " \u2192";
}

// ===== Parts of Speech Quiz =====

// ===== Parts of Speech Learning Content =====

const partsOfSpeech = [
    {
        name: "Verb",
        meaning: "An action or a state.",
        examples: "be, have, seem, go, study, believe"
    },

    {
        name: "Noun",
        meaning: "A person, place, thing, or idea.",
        examples: "bicycle, teacher, Chicago, idea, development"
    },

    {
        name: "Pronoun",
        meaning: "Takes the place of a noun.",
        examples: "she, you, we, him, it, they"
    },

    {
        name: "Preposition",
        meaning: "Shows time or location.",
        examples: "in, on, under, before, after, between"
    },

    {
        name: "Conjunction",
        meaning: "Connects words, phrases, or ideas.",
        examples: "and, but, although, yet, because"
    },

    {
        name: "Adverb",
        meaning: "Gives more information about a verb, phrase, or another adverb.",
        examples: "slowly, loudly, strongly"
    },

    {
        name: "Adjective",
        meaning: "Gives information about a noun or pronoun.",
        examples: "large, pretty, interesting, solid, wide"
    }
];

const questions = [
    {
        sentence: "The students study every evening.",
        targetWord: "study",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Verb",
        explanation: "Study is a verb because it shows an action."
    },

    {
        sentence: "The students study every evening.",
        targetWord: "students",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Noun",
        explanation: "Students is a noun because it names people."
    },

    {
        sentence: "They study every evening.",
        targetWord: "They",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Pronoun",
        explanation: "They is a pronoun because it takes the place of a noun."
    },

    {
        sentence: "The books are on the table.",
        targetWord: "on",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Preposition",
        explanation: "On is a preposition because it shows location."
    },

    {
        sentence: "I studied, but I was tired.",
        targetWord: "but",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Conjunction",
        explanation: "But is a conjunction because it connects ideas."
    },

    {
        sentence: "She walked slowly.",
        targetWord: "slowly",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Adverb",
        explanation: "Slowly is an adverb because it gives more information about the verb walked."
    },

    {
        sentence: "It was a cold morning.",
        targetWord: "cold",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Adjective",
        explanation: "Cold is an adjective because it gives information about the noun morning."
    },

    {
        sentence: "The teacher explained the rule.",
        targetWord: "explained",
        choices: [
            "Noun",
            "Verb",
            "Pronoun",
            "Preposition",
            "Conjunction",
            "Adverb",
            "Adjective"
        ],
        correctAnswer: "Verb",
        explanation: "Explained is a verb because it shows an action."
    }
];


let currentQuestion = 0;
let score = 0;
// ===== Learn Mode =====

function showLearnMode() {
    hideAllScreens();

    document.getElementById("learn-screen").style.display = "block";

    displayPartsOfSpeech();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function displayPartsOfSpeech() {

    const container = document.getElementById("parts-container");

    container.innerHTML = "";

    partsOfSpeech.forEach(part => {

        const card = document.createElement("div");

        card.className = "part-card";

        card.innerHTML = `
            <h3>${part.name}</h3>

            <p>
                <strong>Meaning:</strong>
                ${part.meaning}
            </p>

            <p>
                <strong>Examples:</strong>
                ${part.examples}
            </p>
        `;

        container.appendChild(card);
    });
}


function backToHome() {
    showCourseHub();
}

// ===== Learn the strategy =====

function showStrategyMode() {
    hideAllScreens();

    document.getElementById("strategy-screen").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ===== Start the Quiz =====

function startPractice() {
    currentQuestion = 0;
    score = 0;

    hideAllScreens();

    document.getElementById("practice-screen").style.display = "block";

    showQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function exitPractice() {
    currentQuestion = 0;
    score = 0;
    showESTSession2();
}

// ===== Show a Question =====

function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

   const highlightedSentence = question.sentence.replace(
    question.targetWord,
    `<strong>${question.targetWord}</strong>`
);

document.getElementById("sentence").innerHTML = highlightedSentence;

    document.getElementById("target-word").textContent =
        question.targetWord;

    document.getElementById("feedback").textContent = "";
    const progress =
    ((currentQuestion + 1) / questions.length) * 100;

document.getElementById("progress-bar").style.width =
    progress + "%";

document.getElementById("next-button").style.display = "none";

renderAnswerButtons(question.choices);
}

function renderAnswerButtons(choices) {

    const container = document.getElementById("answers");

    container.innerHTML = "";

    choices.forEach(choice => {

        const button = document.createElement("button");

        button.className = "answer-button";
        button.textContent = choice;

        button.onclick = function () {
            checkAnswer(choice);
        };

        container.appendChild(button);
    });
}

// ===== Check the Answer =====

function checkAnswer(answer) {

    const question = questions[currentQuestion];

    const feedback = document.getElementById("feedback");

    document.querySelectorAll(".answer-button").forEach(button => {
        button.disabled = true;
    });


    if (answer === question.correctAnswer) {

        score++;

        feedback.textContent =
            "✅ Correct! " + question.explanation;

    } else {

        feedback.textContent =
            "❌ Not quite. The correct answer is " +
            question.correctAnswer +
            ". " +
            question.explanation;
    }


    document.getElementById("next-button").style.display = "inline-block";
    document.getElementById("feedback").scrollIntoView({
    behavior: "smooth",
    block: "center"
});
}


// ===== Next Question =====

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();
    }
}


// ===== Show Results =====

function showResults() {

    document.getElementById("practice-screen").style.display = "none";

    document.getElementById("results-screen").style.display = "block";

    document.getElementById("score").textContent =
        `${score} / ${questions.length}`;
}


// ===== Restart Quiz =====

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("results-screen").style.display = "none";

    document.getElementById("practice-screen").style.display = "block";

    showQuestion();
}


function hideAllScreens() {
    const screens = document.querySelectorAll(".hero");

    screens.forEach(screen => {
        screen.style.display = "none";
    });
}


function showCourseHub() {
    hideAllScreens();

    document.getElementById("welcome-screen").style.display = "block";

    displayCourses();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showESTCourse() {
    hideAllScreens();

    document.getElementById("est-course-screen").style.display = "block";

    displayESTSessions();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showESTSession2() {
    hideAllScreens();

    document.getElementById("est-session-2-screen").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showESTSession(number) {
    const session = getESTSession(number);

    if (!session) {
        showESTCourse();
        return;
    }

    // Session 2 already has its own screen with the Parts of Speech lesson.
    if (session.number === 2) {
        showESTSession2();
        return;
    }

    hideAllScreens();

    renderESTSession(session);

    document.getElementById("est-session-screen").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showComingSoon(courseName) {
    alert(`${courseName} is coming soon.`);
}

displayCourses();

