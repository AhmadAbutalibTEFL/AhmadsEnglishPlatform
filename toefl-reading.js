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
        explanation: "You complete partially shown words inside a short academic-style passage. The printed beginning, exact number of missing letters, sentence grammar, spelling, and the relationship between ideas all help you identify the missing ending.",
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
        lessonModules: [
            {
                heading: "1. What you see and what is scored",
                intro: "You read a short academic-style paragraph with ten incomplete words in this practice set. The beginning of each target word is printed. Every empty letter slot represents one letter you must supply. Type only the missing letters: do not repeat the printed beginning.",
                bullets: [
                    "Read the whole paragraph once before typing. The topic and the complete sentences give clues to words that seem uncertain in isolation.",
                    "Use the visible beginning and the number of slots together. The same beginning can lead to several words, but the required length rules out many of them.",
                    "Spelling is part of the task. A word that makes perfect sense but has a missing, doubled, or misplaced letter is not an exact match.",
                    "The passage gives you the information you need. You do not need specialist knowledge of the topic to recover a word from its grammar and context."
                ]
            },
            {
                heading: "2. A four-step routine for every gap",
                intro: "Use the same order each time. It reduces random guessing and makes your reasoning repeatable under time pressure.",
                bullets: [
                    "Read for meaning first: finish the sentence and understand how it connects to the paragraph. Do not stop at the first unfamiliar blank.",
                    "Name the job of the missing word: noun, main verb, adjective, adverb, connector, preposition, or part of a fixed phrase. The words around the gap often reveal this.",
                    "Generate a likely word, then test its beginning and length. Check the spelling letter by letter before you enter it.",
                    "Reread the complete sentence with the word restored. It must fit grammar, meaning, and the relationship between ideas—not just one of those clues.",
                    "If no answer is emerging, leave the gap temporarily and solve an easier one. Later sentences may reveal the contrast, cause, or topic that unlocks it."
                ]
            },
            {
                heading: "3. Let grammar narrow the possibilities",
                intro: "Before searching your vocabulary, decide what kind of word can fit in the sentence. This usually reduces the number of realistic choices.",
                bullets: [
                    "A determiner such as ‘the’ or ‘these’ is often followed by a noun or noun phrase: check whether the noun should be singular or plural.",
                    "After a modal verb such as ‘can’ or ‘may’, the next verb is normally in its base form. Do not add -s, -ed, or -ing unless the structure calls for it.",
                    "An adjective commonly appears before a noun; an adverb can modify a verb or an adjective. Look at the word immediately after the gap as well as the word before it.",
                    "Possessives and quantity words provide number clues. ‘People’s ___’ can require a noun such as ‘awareness’; ‘these ___’ often points to a plural noun.",
                    "Do not rely on grammar alone when two forms are possible. Meaning, collocation, the visible letters, and the slot count must agree too."
                ]
            },
            {
                heading: "4. High-value language patterns",
                intro: "Many gaps test the language that holds academic sentences together, not rare subject terminology.",
                bullets: [
                    "Connectors: first decide the relationship. A contrast calls for a contrast marker; an added point calls for an additive connector; a result calls for a result connector. The sentence before the gap is often essential.",
                    "Fixed phrases: academic English repeatedly uses combinations such as ‘as a result of’, ‘in contrast to’, ‘play a role in’, and ‘contribute to’. Learn the complete phrase, not only one word from it.",
                    "Word-family endings: -tion and -ment often form nouns; -ity can form nouns; -ive, -ous, and -ical often form adjectives; -ly often forms adverbs. These are clues, not absolute rules.",
                    "Inflections change a word to fit its sentence: plural -s, third-person -s, past -ed, comparative -er, and -ing forms. Check the sentence structure before choosing the ending.",
                    "Spelling patterns deserve attention too: double consonants, silent letters, and endings such as -ence/-ance can make a familiar word difficult to reconstruct accurately."
                ]
            },
            {
                heading: "5. Worked examples: explain the answer, do not just guess",
                intro: "Read each example as a sequence of clues. In the live practice, the missing letters are represented by separate slots so you can count them visually.",
                bullets: [
                    "‘increase people’s aware____ of the issue’: the possessive phrase needs a noun. ‘Awareness’ names knowledge or understanding, and it fits the meaning; the four missing letters are n-e-s-s.",
                    "‘the results can be reward___’: after ‘can be’, an adjective can describe the experience. ‘Rewarding’ means satisfying or worthwhile; the missing ending is i-n-g.",
                    "‘city planners may design green__ spaces’: ‘spaces’ is a noun, so an adjective fits before it. If the sentence compares these spaces with existing ones, ‘greener’ expresses that comparison; the missing ending is e-r.",
                    "When two words both fit the grammar, use the rest of the evidence. A noun and an -ing form can sometimes occupy a similar position, so visible letters and the number of slots become decisive."
                ]
            },
            {
                heading: "6. Common errors and how to repair them",
                intro: "Use this checklist when an answer is close but does not fit.",
                bullets: [
                    "Meaning-only guessing: ask what grammatical job the word must do, then reread the whole sentence.",
                    "Ignoring the slot count: count the missing letters before committing to a candidate.",
                    "Entering the whole word: the beginning is already printed, so enter only the letters that are absent.",
                    "Spelling by sound: verify the written form, including double letters and the final suffix.",
                    "Spending too long on one blank: move on, collect clues from the rest of the paragraph, and return. A sensible second pass is often more productive than repeated guessing."
                ]
            }
        ],
        sets: [
            {
                type: "cloze",
                title: "Practice 1 · Community Gardens",
                instruction: "Read the whole paragraph first. Complete each word by entering one letter in each slot; the printed beginning is already supplied.",
                parts: [
                    "Community gardens can ",
                    { prefix: "transfor", suffix: "m", word: "transform", explanation: "The modal verb ‘can’ is followed by a base-form verb. ‘Transform’ means change something or turn it into something different." },
                    " unused land into spaces for ",
                    { prefix: "grow", suffix: "ing", word: "growing", explanation: "Here, ‘for’ introduces the activity the spaces support, so the -ing form ‘growing’ fits the phrase ‘spaces for growing food’." },
                    " food. They encourage ",
                    { prefix: "neighbo", suffix: "rs", word: "neighbors", explanation: "The sentence refers to the people who live nearby. A plural noun is needed because the gardens bring multiple people together." },
                    " to work together and develop a ",
                    { prefix: "stron", suffix: "g", word: "strong", explanation: "An adjective describes the noun ‘sense’. ‘Strong sense of community’ is a natural collocation." },
                    " sense of community. The gardens also provide a ",
                    { prefix: "practi", suffix: "cal", word: "practical", explanation: "The word comes before the noun ‘way’, so an adjective is required. ‘Practical’ means useful in real situations." },
                    " way to learn about soil and seasons. This experience can increase people's ",
                    { prefix: "aware", suffix: "ness", word: "awareness", explanation: "The phrase ‘increase people’s…’ needs a noun. ‘Awareness’ means knowledge or understanding; the missing ending is -ness." },
                    " of the importance of fresh food. Gardeners may grow ",
                    { prefix: "season", suffix: "al", word: "seasonal", explanation: "The word describes ‘vegetables’, so an adjective is needed. ‘Seasonal’ means available or appropriate in a particular season." },
                    " vegetables that are fresh and ",
                    { prefix: "afforda", suffix: "ble", word: "affordable", explanation: "The adjective describes vegetables that people can buy without spending too much. The suffix -able helps form adjectives meaning ‘can be…’." },
                    ". Volunteers often plan planting days together and share their harvest with nearby families. Although maintaining a garden requires ",
                    { prefix: "regula", suffix: "r", word: "regular", explanation: "The adjective ‘regular’ describes the noun ‘effort’. It means steady or happening repeatedly." },
                    " effort, the results can be ",
                    { prefix: "reward", suffix: "ing", word: "rewarding", explanation: "After ‘can be’, an adjective can describe the experience. ‘Rewarding’ means satisfying or worthwhile." },
                    "."
                ]
            },
            {
                type: "cloze",
                title: "Practice 2 · Urban Birds",
                instruction: "Read the paragraph for meaning, then complete each word. Every letter slot represents one missing letter.",
                parts: [
                    "City birds often build nests on buildings, where they find ",
                    { prefix: "protect", suffix: "ion", word: "protection", explanation: "After ‘find’, the sentence needs a noun meaning safety from harm. The ending -ion forms the noun ‘protection’." },
                    " from predators. Food is ",
                    { prefix: "readi", suffix: "ly", word: "readily", explanation: "The word modifies ‘available’, so an adverb is needed. ‘Readily’ means easily or without difficulty." },
                    " available near people. However, city life brings challenges. Bright lights can ",
                    { prefix: "disrup", suffix: "t", word: "disrupt", explanation: "After the modal ‘can’, use the base form of a verb. ‘Disrupt’ means interrupt or disturb a normal process." },
                    " normal activity patterns, and traffic creates ",
                    { prefix: "danger", suffix: "s", word: "dangers", explanation: "The sentence refers to several risks, so the plural noun ‘dangers’ fits." },
                    ". Researchers study how birds respond to these ",
                    { prefix: "change", suffix: "s", word: "changes", explanation: "The determiner ‘these’ points to more than one change, so the plural form is required." },
                    ". Findings may help planners design ",
                    { prefix: "green", suffix: "er", word: "greener", explanation: "The comparison is with current city spaces. The comparative adjective ‘greener’ fits before the noun ‘spaces’." },
                    " spaces. Planting local flowers and trees can support ",
                    { prefix: "biolog", suffix: "ical", word: "biological", explanation: "The adjective ‘biological’ modifies ‘diversity’ in the phrase ‘biological diversity’. The ending -ical often forms adjectives." },
                    " diversity. These habitats are more ",
                    { prefix: "suita", suffix: "ble", word: "suitable", explanation: "After ‘more’, an adjective is needed. ‘Suitable’ means right or appropriate for a purpose." },
                    " for wildlife when planners choose ",
                    { prefix: "nat", suffix: "ive", word: "native", explanation: "The adjective ‘native’ describes plants that naturally belong to an area. The surrounding phrase identifies the kind of plants being chosen." },
                    " plants. Such changes may benefit birds and people who share their ",
                    { prefix: "environ", suffix: "ment", word: "environment", explanation: "The possessive ‘their’ is followed by a noun. ‘Environment’ means the surroundings in which a person or animal lives." },
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
        explanation: "These are short practical texts such as notices, emails, messages, schedules, and instructions. The task checks purpose, important details, restrictions, deadlines, and implied meaning. The text itself contains the evidence needed for the answer.",
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
        lessonModules: [
            {
                heading: "1. Start with the writer’s purpose",
                intro: "Daily-life texts include notices, emails, messages, instructions, schedules, and short information texts. Ask what the writer wants the reader to know or do before you focus on small details.",
                bullets: [
                    "Identify the text type and audience. A notice may announce an event; an email may update a plan; instructions may explain what is required.",
                    "Use the heading, subject line, opening sentence, and final request as fast clues to the purpose.",
                    "Separate the main purpose from a single detail. A message about a trip may mention lunch, transport, and attendance, but only one of those may be the reason it was written."
                ]
            },
            {
                heading: "2. Scan with the question in mind",
                intro: "You do not need to reread every line at the same speed. Let the question tell you which detail to find.",
                bullets: [
                    "For a time or deadline, scan for days, dates, clock times, and words such as ‘by’, ‘before’, ‘until’, and ‘instead of’.",
                    "For a place, scan for building names, room numbers, entrances, online portals, or named areas.",
                    "For an action, look for imperative verbs and obligation language such as ‘please bring’, ‘must register’, ‘may use’, or ‘reply by’.",
                    "After you find the relevant line, read the whole sentence. Conditions and exceptions are often nearby."
                ]
            },
            {
                heading: "3. Treat conditions and changes carefully",
                intro: "Small words can change what an answer means. Exams often test whether you notice the difference between what is required, optional, allowed, or prohibited.",
                bullets: [
                    "‘Bring a laptop if you have one’ is not the same as ‘You must bring a laptop’. Distinguish advice from a requirement.",
                    "‘The bus leaves at 8:15 instead of 8:45’ gives a change to the departure time; it does not necessarily change the day or destination.",
                    "‘Food is not allowed in the exhibition rooms, but it may be eaten outside’ contains both a restriction and an exception.",
                    "A deadline usually limits when an action must happen. Do not choose an answer that confuses the registration deadline with the event date."
                ]
            },
            {
                heading: "4. Explicit facts versus inference",
                intro: "A detail answer is stated directly. An inference is not copied word for word, but it must follow from the information in the text.",
                bullets: [
                    "For a detail, locate the exact words that answer the question and check that no condition changes them.",
                    "For an inference, combine one or two clear clues. Do not invent a reason, policy, or outcome that the writer never supports.",
                    "Eliminate options that are too broad, contradict a stated condition, or include an attractive detail that does not answer the question."
                ]
            },
            {
                heading: "5. A quick worked example",
                intro: "Message: ‘The lab closes at 4:00 on Friday. Return borrowed equipment by 3:30. Students who have booked a desk may stay until closing.’",
                bullets: [
                    "Question: ‘When must equipment be returned?’ Find the exact action phrase ‘Return borrowed equipment by 3:30.’ The answer is 3:30, not the 4:00 closing time.",
                    "Question: ‘Can every student stay until 4:00?’ No. The permission applies only to students who have booked a desk.",
                    "The method is to match the question to the relevant detail, then check the condition that goes with it."
                ]
            }
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
        explanation: "A short university-style passage explains a topic, process, finding, or relationship. Questions test the central point, supporting details, vocabulary in context, inferences, and why the author included a sentence or example. Use the passage—not outside knowledge—as your evidence.",
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
        lessonModules: [
            {
                heading: "1. Build a simple map of the passage",
                intro: "Academic passages explain a process, concept, study, or relationship. You do not need outside knowledge; your job is to understand what this passage says and how its ideas connect.",
                bullets: [
                    "Read the opening carefully to identify the topic and the main point the author makes about it.",
                    "Notice each paragraph’s job: introduce a concept, describe a process, provide evidence, compare explanations, or discuss a consequence.",
                    "Track signal words such as ‘however’, ‘because’, ‘for example’, ‘as a result’, and ‘in contrast’. They show how claims and evidence fit together.",
                    "Keep a short mental map rather than memorising every sentence. You can return to the passage when a detail question asks for evidence."
                ]
            },
            {
                heading: "2. Match the question type to the right method",
                intro: "Different questions require different reading moves. First identify what the question is asking for.",
                bullets: [
                    "Main idea: choose the option that covers the passage’s central point and scope. An interesting detail is too narrow; a sweeping claim is too broad.",
                    "Stated detail: return to the relevant sentence and compare its exact meaning with the options. Watch for changed quantities, causes, or conditions.",
                    "Vocabulary in context: read the word with its sentence and neighbouring ideas. Try a possible substitute and check whether the sentence still means the same thing.",
                    "Inference: combine clues that the author actually provides. The answer should be a reasonable conclusion, not a new fact or an outside opinion.",
                    "Author purpose: ask why the sentence, example, contrast, or study result appears there. It may illustrate a claim, explain a cause, or show a limitation."
                ]
            },
            {
                heading: "3. Use evidence to eliminate distractors",
                intro: "An option may repeat words from the passage but still be wrong. Judge the relationship between the option and the author’s claim, not just shared vocabulary.",
                bullets: [
                    "Find the sentence or pair of sentences that supports the option. If you cannot point to evidence, be cautious.",
                    "Check for reversals: an option can say that a cause is an effect, that a risk is a benefit, or that a possibility is certain.",
                    "Check scope: ‘some species’ does not mean ‘all species’; ‘may help’ does not mean ‘always prevents’.",
                    "Watch extreme words such as ‘only’, ‘always’, ‘never’, and ‘completely’. They are wrong when the passage makes a qualified claim.",
                    "Prefer the option that answers the exact question, even if another option contains a true fact from a different part of the passage."
                ]
            },
            {
                heading: "4. Work through vocabulary and inference",
                intro: "The surrounding idea is often more useful than the word in isolation.",
                bullets: [
                    "For an unfamiliar word, ask whether it expresses a positive or negative idea, an action or a quality, and a relationship such as cause or contrast.",
                    "Read the sentence before and after the word. Definitions, examples, contrasts, and results may explain it indirectly.",
                    "For inference, write the chain in simple form: passage clue A + passage clue B → likely conclusion. If the conclusion needs a third, unsupported assumption, it is probably too far."
                ]
            },
            {
                heading: "5. A quick worked example",
                intro: "Passage idea: ‘Some coastal plants survive in salty soil. Their leaves limit water loss, while their roots help anchor loose sediment.’",
                bullets: [
                    "A question asking for the main idea should cover adaptations to coastal conditions, not only the leaves or only the roots.",
                    "A detail question about sediment should be answered from the root sentence, not from what you know about plants in general.",
                    "An inference might be that these roots can help stabilise a shoreline. It is not justified to claim that they stop every form of erosion."
                ]
            }
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
    let lessonHTML = task.strategy.map((item, index) => `<li><span>${index + 1}</span><p>${escapeTOEFLReadingHTML(item)}</p></li>`).join("");
    let mistakesHTML = task.mistakes.map(item => `<li>${escapeTOEFLReadingHTML(item)}</li>`).join("");
    const detailedLessonHTML = (task.lessonModules || []).map((module, index) => {
        const bullets = (module.bullets || []).map(item => `<li>${escapeTOEFLReadingHTML(item)}</li>`).join("");
        return `
            <article class="toefl-reading-deep-module">
                <h4>${escapeTOEFLReadingHTML(module.heading)}</h4>
                <p>${escapeTOEFLReadingHTML(module.intro)}</p>
                <ul>${bullets}</ul>
            </article>`;
    }).join("");

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
                <h3>${task.icon} ${escapeTOEFLReadingHTML(task.title)}</h3>
                <p>${escapeTOEFLReadingHTML(task.explanation)}</p>
            </section>
            <section class="toefl-reading-strategy">
                <h3>Quick strategy</h3>
                <ol class="toefl-reading-strategy-list">${lessonHTML}</ol>
            </section>
        </div>
        <section class="toefl-reading-deep-lesson" aria-label="Detailed lesson">
            <div class="toefl-reading-deep-lesson-heading">
                <p class="course-label">LEARN THE METHOD</p>
                <h3>Understand the task before you practise</h3>
                <p>Work through the explanations, notice the clues, and use the same reasoning in the practice below.</p>
            </div>
            <div class="toefl-reading-deep-grid">${detailedLessonHTML}</div>
        </section>
        <details class="toefl-reading-mistakes">
            <summary>Common mistakes to avoid</summary>
            <ul>${mistakesHTML}</ul>
        </details>
        <section class="toefl-reading-practice-panel">
            <div class="toefl-reading-practice-heading">
                <div><p class="course-label">INTERACTIVE PRACTICE</p><h3>${escapeTOEFLReadingHTML(practice.title)}</h3></div>
                <span class="toefl-reading-progress-pill" id="toefl-reading-set-progress">${practice.type === "cloze" ? `${practice.parts.filter(p => typeof p === "object").length} word gaps` : `${practice.questions.length} questions`}</span>
            </div>
            <p class="toefl-reading-instruction">${escapeTOEFLReadingHTML(practice.instruction)}</p>
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
            const missing = String(part.word).slice(String(part.prefix).length);
            const slots = Array.from({ length: missing.length }, (_, letterIndex) => `
                <input
                    type="text"
                    class="toefl-cloze-letter"
                    maxlength="1"
                    inputmode="text"
                    autocomplete="off"
                    autocapitalize="none"
                    spellcheck="false"
                    aria-label="Missing letter ${letterIndex + 1} of ${missing.length} for word ${blankIndex + 1}"
                    data-cloze-input="${blankIndex}"
                    data-cloze-letter-index="${letterIndex}"
                    oninput="handleTOEFLReadingClozeInput(event)"
                    onkeydown="handleTOEFLReadingClozeKeydown(event)"
                    onpaste="handleTOEFLReadingClozePaste(event)"
                >`).join("");
            html += `
                <span class="toefl-cloze-item" data-cloze-index="${blankIndex}" data-cloze-length="${missing.length}">
                    <span class="toefl-cloze-prefix">${escapeTOEFLReadingHTML(part.prefix)}</span><span class="toefl-cloze-slots" aria-label="${missing.length} missing letters">${slots}</span>
                    <span class="toefl-cloze-feedback" data-cloze-feedback="${blankIndex}" aria-live="polite"></span>
                </span>`;
            blankIndex++;
        }
    });
    html += "</p></div><div class='toefl-reading-actions'><button type='button' class='start-button' id='toefl-reading-check-cloze' onclick='checkTOEFLReadingCloze()'>Check answers</button><button type='button' class='secondary-button' onclick='resetTOEFLReadingPractice()'>Reset answers</button></div>";
    return html;
}

function handleTOEFLReadingClozeInput(event) {
    const input = event.target;
    if (!input.matches("[data-cloze-input]")) return;
    input.value = input.value.replace(/[^a-z]/gi, "").slice(-1).toLowerCase();
    const groupIndex = Number(input.dataset.clozeInput);
    const letters = Array.from(document.querySelectorAll(`[data-cloze-input="${groupIndex}"]`));
    const current = Number(input.dataset.clozeLetterIndex);
    if (!input.value) return;
    if (letters[current + 1]) {
        letters[current + 1].focus();
        return;
    }
    // After the final missing letter in a word, move to the next word's first slot.
    const nextWordFirstSlot = document.querySelector(`[data-cloze-input="${groupIndex + 1}"][data-cloze-letter-index="0"]`);
    if (nextWordFirstSlot) nextWordFirstSlot.focus();
}

function handleTOEFLReadingClozeKeydown(event) {
    const input = event.target;
    if (!input.matches("[data-cloze-input]")) return;
    const groupIndex = input.dataset.clozeInput;
    const letters = Array.from(document.querySelectorAll(`[data-cloze-input="${groupIndex}"]`));
    const current = Number(input.dataset.clozeLetterIndex);
    if (event.key === "Backspace" && !input.value && letters[current - 1]) {
        event.preventDefault();
        letters[current - 1].focus();
        letters[current - 1].value = "";
    } else if (event.key === "ArrowLeft" && letters[current - 1]) {
        event.preventDefault();
        letters[current - 1].focus();
    } else if (event.key === "ArrowRight" && letters[current + 1]) {
        event.preventDefault();
        letters[current + 1].focus();
    }
}

function handleTOEFLReadingClozePaste(event) {
    const input = event.target;
    if (!input.matches("[data-cloze-input]")) return;
    const clipboard = event.clipboardData || window.clipboardData;
    const pasted = clipboard ? clipboard.getData("text").replace(/[^a-z]/gi, "").toLowerCase() : "";
    if (pasted.length <= 1) return;
    event.preventDefault();
    const groupIndex = input.dataset.clozeInput;
    const letters = Array.from(document.querySelectorAll(`[data-cloze-input="${groupIndex}"]`));
    const start = Number(input.dataset.clozeLetterIndex);
    Array.from(pasted).slice(0, letters.length - start).forEach((letter, offset) => {
        letters[start + offset].value = letter;
    });
    const nextIndex = Math.min(start + pasted.length, letters.length - 1);
    if (letters[nextIndex]) letters[nextIndex].focus();
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
        const inputs = Array.from(document.querySelectorAll(`[data-cloze-input="${index}"]`));
        const inputValue = inputs.map(input => input.value.trim()).join("");
        const correct = inputValue.toLowerCase() === blank.suffix.toLowerCase();
        if (correct) correctCount++;
        inputs.forEach(input => {
            input.disabled = true;
            input.classList.add(correct ? "is-correct" : "is-incorrect");
        });
        const item = document.querySelector(`[data-cloze-index="${index}"]`);
        if (item) item.classList.add(correct ? "is-correct" : "is-incorrect");
        const feedback = document.querySelector(`[data-cloze-feedback="${index}"]`);
        feedback.className = `toefl-cloze-feedback ${correct ? "feedback-correct" : "feedback-incorrect"}`;
        feedback.innerHTML = `${correct ? "✓ Correct" : `Missing letters: <strong>${escapeTOEFLReadingHTML(blank.suffix)}</strong>`}<br><span><strong>${escapeTOEFLReadingHTML(blank.word)}</strong> — ${escapeTOEFLReadingHTML(blank.explanation)}</span>`;
    });
    toeflReadingClozeChecked = true;
    const checkButton = document.getElementById("toefl-reading-check-cloze");
    if (checkButton) checkButton.disabled = true;
    const result = document.getElementById("toefl-reading-set-result");
    result.innerHTML = `<strong>Your result: ${correctCount} / ${blanks.length}</strong><p>Each word is checked for an exact missing-letter match. Review the reasoning under each gap, then retry the passage to practise again.</p>`;
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
