/* =========================================================
   TOEFL iBT WRITING — original interactive learning section
   Static-site friendly: no libraries, APIs, or back end.
   Learn (lessons + guided sets) and Practice (separate bank,
   loaded from toefl-writing-practice.js).
   Format facts were checked against the ETS TOEFL iBT 2026 test
   specification and the ETS test-content page.
   ========================================================= */

// WS(context, "chunk|chunk|…" in correct order, endPunctuation, skill, explanation, optional alternative order, hint)
const WS = (ctx, chunks, end, skill, explanation, alt, hint) => ({
    ctx, chunks: chunks.split("|"), end, skill, explanation, hint: hint || "",
    alts: alt ? [alt.split("|")] : []
});

const toeflWritingTasks = {

    /* ------------------------------------------------------
       TASK 1 — BUILD A SENTENCE
       ------------------------------------------------------ */
    sentence: {
        id: "sentence",
        title: "Build a Sentence",
        icon: "🧩",
        shortDescription: "Arrange words and phrases into a correct sentence that fits a short situation.",
        facts: {
            items: [
                { value: "10 items", label: "Build a Sentence items", note: "ETS lists 10 items of this type among the 12 items in the whole Writing section." },
                { value: "1 point each", label: "Machine scored", note: "ETS describes rule-based, exact-match scoring for this task type, with a maximum of 1 point per item." },
                { value: "About 23 minutes", label: "Whole Writing section", note: "ETS gives roughly 23 minutes for all Writing tasks together and does not publish separate task times." }
            ],
            note: "The Writing section is linear, so every test taker on a form sees the same tasks (ETS). ETS also says some Writing tasks involve completing partial sentences from provided vocabulary. Notes are allowed during the test, but writing-assistance software is not permitted."
        },
        explanation: "You read a short situation and arrange the words and phrases you are given into one grammatical sentence that fits it. The task rewards control of word order, verb forms, and clause patterns rather than vocabulary or spelling, because the words are supplied. Each item is checked automatically, so a correct sentence earns the point and an incorrect one does not.",
        strategy: [
            "Read the situation and decide what kind of sentence is needed: statement, question, polite request, or reported speech.",
            "Find the subject and the main verb group first, then attach objects, places, and times.",
            "Keep fixed patterns together, such as ‘as … as’, ‘not only … but also’, and verb + preposition pairs.",
            "Build the whole sentence, then read it aloud in your head to test grammar and meaning.",
            "Press Check only after you have reviewed agreement, tense, and end punctuation."
        ],
        mistakes: [
            "Using question order in an embedded question (‘I don’t know where is the exit’).",
            "Using statement order in a direct question.",
            "Splitting a fixed pattern such as ‘the more … the better …’.",
            "Building a grammatical sentence that does not answer the situation (wrong tense or person).",
            "Leaving a tile unused or forgetting the punctuation clue at the end."
        ],
        lessonModules: [
            {
                heading: "1. What the task asks you to do",
                intro: "In Build a Sentence you read a short situation and arrange the words and phrases you are given into one sentence that fits it. In this lab every piece is used exactly once and each item is checked automatically.",
                bullets: [
                    "Treat each item as a puzzle with a meaning clue: the situation tells you what the finished sentence must say.",
                    "The pieces are supplied, so you are tested on grammar and word order, not on spelling or vocabulary.",
                    "Some items tell you how to begin, for example ‘Begin with If’, so that only one natural order is possible.",
                    "ETS says the real tasks can also involve completing partial sentences using provided vocabulary, so practise reading every given piece for grammatical clues.",
                    "In this lab you can move pieces in and out of the sentence until you press Check, just as you would review your answers before submitting."
                ]
            },
            {
                heading: "2. Read the situation first",
                intro: "The situation tells you the type of sentence. Decide that before you touch the pieces.",
                bullets: [
                    "Ask who is speaking to whom and what they want to say: give information, ask a question, make a polite request, or report something.",
                    "Look for tense clues such as yesterday, since, next week, or last year.",
                    "If the situation is a question you must ask, the finished sentence usually ends with a question mark.",
                    "If the situation says ‘Begin with …’, place that piece first, then build the rest around it."
                ]
            },
            {
                heading: "3. Find the core: subject, verb, object",
                intro: "Every sentence has a core. Build it first and add the extra information around it.",
                bullets: [
                    "Look for the subject: a pronoun or a noun phrase such as ‘the class’ or ‘my teacher’.",
                    "Find the verb group: an auxiliary and a main verb belong together (have been studying, will send, must be submitted).",
                    "Place the object after the verb. Then add place, manner, and time information.",
                    "Prepositions stay with the noun phrase they introduce: ‘on’ + ‘the kitchen table’.",
                    "Pieces that contain a verb (such as ‘who is sitting’) are usually clauses that attach to a noun, not the main verb."
                ]
            },
            {
                heading: "4. Statement word order",
                intro: "English statements follow a stable order. Use it as your default map.",
                bullets: [
                    "Basic order: subject, verb, object, then place, then time (‘We visited the museum on Friday’).",
                    "Adverbs of frequency such as usually, often, and never come before the main verb but after the verb ‘be’ (‘I usually walk’, ‘She is often late’).",
                    "Adjectives come before nouns, and a linking verb is followed by an adjective (‘It was cold’).",
                    "Time phrases are flexible and can begin or end a sentence, but they rarely sit between a verb and its object.",
                    "Comparisons use a comparative followed by ‘than’, or ‘as … as’ for equality."
                ]
            },
            {
                heading: "5. Questions and inversion",
                intro: "Questions change the order of the auxiliary verb and the subject.",
                bullets: [
                    "Yes/no questions begin with the auxiliary: Did you enjoy the film? Have you finished? Can I submit it?",
                    "Wh- questions use a question word, then the auxiliary, then the subject: Where does the bus leave?",
                    "After ‘do’, ‘does’, or ‘did’ the main verb is in the base form: Did you stay? (not Did you stayed?).",
                    "With the verb ‘be’ no ‘do’ is needed: Where is the post office?",
                    "When the question word is the subject, the order stays the same as a statement: Who called you?"
                ]
            },
            {
                heading: "6. Embedded questions and reported speech",
                intro: "When a question is inside another sentence, the order goes back to statement order. This is one of the most tested patterns.",
                bullets: [
                    "Embedded question: I don’t know where the exit is (not where is the exit).",
                    "Polite frames such as ‘Could you tell me …’ and ‘Do you know …’ are followed by statement order: Could you tell me where I can buy tickets?",
                    "Yes/no questions inside sentences use if or whether: She asked whether we had finished.",
                    "No ‘do’ support inside the embedded part: He wanted to know how long the trip takes.",
                    "Reported speech often moves the verb back in time: will becomes would, is becomes was, and have finished becomes had finished.",
                    "Check the end punctuation: a polite frame that begins as a question ends with a question mark, but a reported question is a statement and ends with a full stop."
                ]
            },
            {
                heading: "7. Clauses: relative, noun, and adverbial",
                intro: "Clause pieces add information. Attach each clause to the word it describes.",
                bullets: [
                    "Relative clauses follow the noun they describe: the woman who is sitting at the desk; the book that I borrowed; the café where we met.",
                    "Who is for people, which is for things, that can be used for both, and whose shows possession.",
                    "Noun clauses can be subjects or objects: What surprised me was the speed; I believe that schools should teach financial skills.",
                    "Adverbial clauses begin with because, although, while, when, so … that, and similar words. A clause placed first is usually followed by a comma.",
                    "Participle clauses such as ‘Having finished the report, she left’ show an earlier action."
                ]
            },
            {
                heading: "8. Verb forms: tense, passive, and modals",
                intro: "The verb group must be complete and in the right form.",
                bullets: [
                    "Present perfect: have/has + past participle, often with since or for (I have been studying since this morning).",
                    "Continuous forms use be + -ing (he is playing; we are going to visit).",
                    "Passive voice uses be + past participle, with by + the agent when needed (the letter was written by a student).",
                    "Modals are followed by the base verb (will send, can be seen); past modals use have + past participle (should have called).",
                    "Watch verb patterns: forgot to bring, expect someone to approve, is used to make."
                ]
            },
            {
                heading: "9. Conditionals and comparisons",
                intro: "These patterns are fixed. If you recognise them, the order almost builds itself.",
                bullets: [
                    "First conditional: if + present, will + base verb (If I finish early, I will help).",
                    "Second conditional: if + past, would + base verb (If it rained, we would move the event).",
                    "Third conditional: if + past perfect, would have + past participle (If we had left earlier, we would have caught the train).",
                    "Unless means ‘if not’ and is followed by a positive verb: Unless you register today, you will miss the deadline.",
                    "Correlative patterns: the more … the better …; as fast as; not only … but also …; so difficult that …."
                ]
            },
            {
                heading: "10. A 20-second checking routine",
                intro: "Before you press Check, run the same quick test every time.",
                bullets: [
                    "Read the finished sentence aloud in your head. Does it sound like natural English?",
                    "Check subject–verb agreement and the form of every verb.",
                    "Make sure every piece is used once and the sentence answers the situation (right tense, right person).",
                    "Check that the sentence starts and ends correctly: a capital letter, a comma after a fronted clause, and a question mark only for direct questions."
                ]
            }
        ],
        sets: [
            {
                type: "sentence", title: "Guided practice 1 · Statement order",
                instruction: "Each item shows a grammar hint. Build the sentence, review it, and press Check when you are ready.",
                items: [
                    WS("A friend asks where you study.", "I|study|at|the university library", ".", "stmt", "Subject + verb + place.", "", "Start with the subject and the verb, then add the place."),
                    WS("Your teacher asks what you read.", "I|read|an interesting article|yesterday", ".", "stmt", "The object comes before the time word.", "", "The time word usually comes last."),
                    WS("A colleague asks how long the trip takes.", "the trip|takes|about|three hours", ".", "stmt", "‘About’ comes before the number phrase.", "", "‘About’ introduces the amount of time."),
                    WS("Your friend asks what you do after class.", "I|often|go|to the gym", ".", "stmt", "Adverbs of frequency come before the main verb.", "", "Frequency adverbs sit before the main verb."),
                    WS("A neighbour asks why you moved.", "we|moved|because|the old apartment|was too small", ".", "stmt", "‘Because’ introduces a clause that gives the reason.", "", "‘Because’ + a full clause gives the reason.")
                ]
            },
            {
                type: "sentence", title: "Guided practice 2 · Questions",
                instruction: "Build each question. Remember that questions invert the auxiliary and the subject.",
                items: [
                    WS("Ask where your friend lives.", "where|do|you|live", "?", "ques", "Question word + do + subject + base verb.", "", "Question word first, then the auxiliary."),
                    WS("Ask whether she has a spare pen.", "do|you|have|a spare pen", "?", "ques", "Yes/no questions begin with the auxiliary.", "", "A yes/no question starts with the auxiliary."),
                    WS("Ask how often the bus comes.", "how often|does|the bus|come", "?", "ques", "Question phrase + does + subject + base verb.", "", "After ‘does’ use the base verb."),
                    WS("Ask what he is reading.", "what|are|you|reading", "?", "ques", "Question word + be + subject + -ing form.", "", "The verb ‘be’ comes before the subject."),
                    WS("Ask whether the shop is open today.", "is|the shop|open|today", "?", "ques", "With ‘be’ the verb comes before the subject in a question.", "", "No ‘do’ is needed with ‘be’.")
                ]
            },
            {
                type: "sentence", title: "Guided practice 3 · Clauses and reported speech",
                instruction: "Attach each clause to the right word and keep statement order after question words.",
                items: [
                    WS("Say what you don’t know.", "I|don’t know|where|she lives", ".", "emb", "After ‘where’ use statement order: subject + verb.", "", "No inversion after the question word."),
                    WS("Describe the man by the door.", "the man|who|is standing|by the door|is my uncle", ".", "cls", "The ‘who’ clause follows the noun it describes.", "", "Put the ‘who’ clause directly after ‘the man’."),
                    WS("Report what she said.", "she|said|that|she|was busy", ".", "emb", "Reported statement: said + that + clause.", "", "‘That’ introduces the reported clause."),
                    WS("Explain what you learned.", "I|learned|that|practice|improves|writing", ".", "cls", "‘Learned that’ is followed by a full clause.", "", "A ‘that’ clause needs its own subject and verb."),
                    WS("Describe the restaurant.", "the restaurant|where|we ate|was|very crowded", ".", "cls", "‘Where’ introduces a clause about a place.", "", "Attach ‘where we ate’ to ‘the restaurant’.")
                ]
            }
        ]
    },

    /* ------------------------------------------------------
       TASK 2 — WRITE AN EMAIL
       ------------------------------------------------------ */
    email: {
        id: "email",
        title: "Write an Email",
        icon: "✉️",
        shortDescription: "Write a clear, polite email that covers every required point for a specific reader.",
        facts: {
            items: [
                { value: "1 task", label: "Write an Email", note: "ETS lists one Email item in the Writing section." },
                { value: "Up to 5 points", label: "AI scored", note: "ETS lists a maximum of 5 points and says AI scoring looks at features such as fluency, coherence, and grammar." },
                { value: "Multi-sentence text", label: "What you write", note: "ETS describes the skill as writing appropriate multi-sentence text. Prompts can include audience, purpose, and tone cues." }
            ],
            note: "ETS does not publish a word count or a separate time limit for this task in its specification, so the 80–140 word range used in this lab is a practice target, not an official rule. Notes are allowed during the test, but writing-assistance software is not permitted."
        },
        explanation: "You read a short scenario that names a reader and several things your email must do, then write a multi-sentence email. The writing is scored by AI for qualities such as fluency, coherence, and grammar, so a strong email covers every required point, sounds appropriate for the reader, and is easy to follow. In this lab you write, press Check, and then review your response against a checklist and a model.",
        strategy: [
            "Read the scenario and underline the reader, the purpose, and each required point.",
            "Plan in one minute: opening purpose, one point per paragraph, closing request or thanks.",
            "Choose a greeting, tone, and closing that fit the reader.",
            "Cover every required point clearly with one specific detail each.",
            "Reread for grammar, spelling, and missing points before you check."
        ],
        mistakes: [
            "Leaving out one of the required points.",
            "Using a tone that is too casual or too stiff for the reader.",
            "Writing one long paragraph with no clear structure.",
            "Being vague (‘there is a problem’) instead of giving one detail.",
            "Repeating the same words and sentence patterns throughout."
        ],
        lessonModules: [
            {
                heading: "1. What the task asks you to do",
                intro: "You receive a scenario with a reader, a purpose, and several points your email must cover. You then write a multi-sentence email that does the job well.",
                bullets: [
                    "ETS lists one Email item in the Writing section, scored by AI up to 5 points. It looks at features such as fluency, coherence, and grammar.",
                    "ETS says prompts can include the audience, purpose, and situation. These cues tell you which tone and level of formality to use.",
                    "ETS does not publish a word count in its specification. In this lab, aim for roughly 80–140 words as a practice target.",
                    "You may take notes during the test, but writing-assistance software is not permitted, so practise without it."
                ]
            },
            {
                heading: "2. Read the prompt like a checklist",
                intro: "Most low-scoring emails miss something that was clearly requested. Treat the prompt as a list of jobs.",
                bullets: [
                    "Underline the reader: a professor, a manager, a classmate, a customer service team.",
                    "Underline the verbs in the instructions: explain, ask, suggest, describe, offer, thank.",
                    "Number the required points so that you can tick them off in your plan.",
                    "Notice tone clues. ‘Professor’ and ‘customer service’ suggest a formal tone; ‘teammate’ allows a friendlier, semi-formal tone."
                ]
            },
            {
                heading: "3. Plan in one minute",
                intro: "A short plan stops you from forgetting a point or rambling.",
                bullets: [
                    "Opening: who you are (if needed) and why you are writing, in one sentence.",
                    "Body: one point per paragraph, or two short related points together, in a logical order.",
                    "Closing: the action you want, a thank-you, and a polite sign-off.",
                    "Jot keywords, not sentences: ‘laptop broke Mon / half finished / ask Fri’."
                ]
            },
            {
                heading: "4. Greeting, closing, and format",
                intro: "The frame of an email tells the reader that you understand the situation.",
                bullets: [
                    "Formal greetings: Dear Professor Allen, Dear Ms Torres, Dear Customer Service Team. Semi-formal: Hello Priya, Hi Jordan.",
                    "Formal closings: Sincerely, Best regards, Kind regards, Respectfully. Semi-formal: Best, Best wishes, Thanks.",
                    "End with your name on its own line.",
                    "State the purpose in the first sentence rather than hiding it in a long introduction.",
                    "Separate paragraphs with a blank line so that the structure is easy to see."
                ]
            },
            {
                heading: "5. Tone and register",
                intro: "Tone is a matter of word choice and grammar. The reader should feel respected and the request should sound reasonable.",
                bullets: [
                    "Polite requests: Could you please …? Would it be possible to …? I would be grateful if you could ….",
                    "Softening: Unfortunately, I am unable to …; I was wondering whether …; Perhaps … could ….",
                    "Avoid slang, text abbreviations, and exclamation marks in formal emails. Use few contractions in formal writing.",
                    "Apologise once, clearly, rather than many times. Thank the reader at the end."
                ]
            },
            {
                heading: "6. Be specific",
                intro: "Specific details make an email feel real and help the reader act.",
                bullets: [
                    "Give dates, days, times, names, and numbers: ‘by next Friday’, ‘apartment 4B’, ‘order number 58214’.",
                    "Support each required point with one concrete detail rather than a general statement.",
                    "Avoid vague words such as thing, stuff, a lot, and problem when a precise word exists.",
                    "Do not invent unnecessary details. Use only those that help you complete the required points."
                ]
            },
            {
                heading: "7. Cohesion and paragraphs",
                intro: "Cohesion means that the reader can follow your ideas without effort.",
                bullets: [
                    "Use linking words with a clear job: Unfortunately (a problem), However (contrast), In addition (another point), Therefore (result), In the meantime (an interim step).",
                    "Give each paragraph one purpose, and begin it with a sentence that shows that purpose.",
                    "Use pronouns and repeated key nouns to connect sentences, but vary your sentence openings.",
                    "End with a sentence that tells the reader what to do next."
                ]
            },
            {
                heading: "8. Grammar and vocabulary range",
                intro: "AI scoring looks at the quality of your language. Accuracy comes first; range adds value.",
                bullets: [
                    "Mix short and longer sentences. Use because, so that, which, and although to combine ideas.",
                    "Choose tenses carefully: present perfect for a problem that began earlier and continues (has not worked since Monday), simple past for finished events, modals for requests.",
                    "Replace repeated words with precise alternatives: request, ask for; difficult, challenging; fix, repair, resolve.",
                    "A simple sentence that is correct is better than a complex sentence with errors."
                ]
            },
            {
                heading: "9. Phrase bank by function",
                intro: "Learn phrases by purpose so that you can adapt them to any scenario. Do not memorise whole emails.",
                bullets: [
                    "Requesting: I am writing to ask whether …; Would it be possible to …?; Could you please confirm …?",
                    "Explaining: This is because …; Unfortunately, …; As a result, …",
                    "Apologising: I apologise for the inconvenience; I am sorry for any trouble this may cause.",
                    "Complaining politely: I am writing about …; I would appreciate it if …; I would prefer …",
                    "Suggesting: Perhaps … could …; One option would be to …; Alternatively, …",
                    "Thanking: Thank you for considering my request; I appreciate your help."
                ]
            },
            {
                heading: "10. A 60-second final check",
                intro: "Reserve the last minute for checking. It improves almost every response.",
                bullets: [
                    "Did I cover every required point clearly?",
                    "Does the tone suit the reader, and do the greeting and closing match?",
                    "Are my paragraphs organised with one purpose each?",
                    "Scan for common errors: verb forms, subject–verb agreement, articles, prepositions, spelling, and punctuation.",
                    "Is the email long enough to develop each point without repeating itself?"
                ]
            }
        ],
        sets: [
            {
                type: "email", id: "ge1", title: "Guided practice 1 · Asking for Feedback",
                audience: "Teacher · semi-formal", targetMin: 80, targetMax: 140,
                instruction: "Use the sentence frames if you need them. Write your email, review it, then press Check.",
                scenario: "You wrote a draft of an essay for your English teacher. Write an email asking for feedback before the final deadline.",
                goals: ["Say which assignment you are writing about and mention your draft", "Ask for specific feedback on what you want checked", "Say when you need the feedback and thank your teacher"],
                keywords: [["essay", "draft", "assignment", "attached", "attach", "paper"], ["feedback", "comments", "organization", "organisation", "examples", "conclusion", "check", "advice"], ["by", "due", "friday", "wednesday", "deadline", "thank"]],
                frames: ["Opening: I am writing to ask whether you could look at my draft of …", "Details: I would especially like feedback on … and …", "Deadline: The final version is due on …, so I would be grateful for your comments by …", "Closing: Thank you very much for your time and help."],
                model: "Dear Ms Walker,\n\nI am writing to ask whether you could look at my draft essay on climate change and local farming. I have attached it to this email.\n\nI would especially like feedback on the organization of my paragraphs and on whether my examples are convincing. I am also unsure about my conclusion, so any advice would be very helpful.\n\nThe final version is due on Friday, so I would be grateful for your comments by Wednesday if possible.\n\nThank you very much for your time and help.\n\nBest regards,\nNadia"
            },
            {
                type: "email", id: "ge2", title: "Guided practice 2 · Rescheduling an Appointment",
                audience: "Language center · formal", targetMin: 80, targetMax: 140,
                instruction: "Use the sentence frames if you need them. Write your email, review it, then press Check.",
                scenario: "You have an appointment at a language center on Tuesday at 4:00 p.m., but you now have an exam at that time. Write an email to reschedule.",
                goals: ["Say which appointment you have and why you cannot attend", "Suggest one or two alternative times", "Apologise for the inconvenience and ask for confirmation"],
                keywords: [["appointment", "tuesday", "exam", "unable", "cannot", "unfortunately", "attend"], ["wednesday", "thursday", "instead", "alternative", "would it be possible", "after", "morning", "flexible"], ["apologise", "apologize", "sorry", "inconvenience", "confirm", "grateful"]],
                frames: ["Opening: I have an appointment on … at …, but unfortunately …", "Alternatives: Would it be possible to move it to … or …?", "Closing: I apologise for the inconvenience, and I would be grateful if you could confirm …"],
                model: "Dear Mr Davies,\n\nI have an appointment at the language center on Tuesday at 4:00 p.m., but unfortunately I have an exam at that time and will not be able to attend.\n\nWould it be possible to move the appointment to Wednesday after 3:00 p.m. or to any time on Thursday morning? I am flexible on both days.\n\nI apologize for the inconvenience, and I would be grateful if you could confirm a new time by email.\n\nThank you for your understanding.\n\nSincerely,\nHamza Ali"
            }
        ]
    },

    /* ------------------------------------------------------
       TASK 3 — WRITE FOR AN ACADEMIC DISCUSSION
       ------------------------------------------------------ */
    discussion: {
        id: "discussion",
        title: "Write for an Academic Discussion",
        icon: "💬",
        shortDescription: "Join an online class discussion with a clear position, developed support, and a reply to classmates.",
        facts: {
            items: [
                { value: "1 task", label: "Write for an Academic Discussion", note: "ETS lists one item of this type in the Writing section." },
                { value: "Up to 5 points", label: "AI scored", note: "ETS lists a maximum of 5 points and says AI scoring looks at features such as fluency, coherence, and grammar." },
                { value: "Paragraph-length", label: "What you write", note: "ETS describes academic paragraph text that presents a clear, well-supported argument using varied grammar and vocabulary." }
            ],
            note: "ETS does not publish a word count or a separate time limit for this task in its specification, so the 100–180 word range used in this lab is a practice target, not an official rule. Notes are allowed during the test, but writing-assistance software is not permitted."
        },
        explanation: "You read a professor’s question and the posts of two classmates, then write your own contribution to the discussion. A strong post states a clear position, supports it with developed reasons and an example, responds to at least one classmate’s idea, and uses varied, accurate language. In this lab you write, press Check, and then review your response against a checklist and a model.",
        strategy: [
            "Read the professor’s question and summarise each classmate’s position in a few words.",
            "Choose the position you can support best with a specific reason and example.",
            "Plan: position, developed support, response to a classmate, short conclusion.",
            "Name at least one classmate and add something new to their idea.",
            "Reread for clear position, accurate grammar, and varied vocabulary before you check."
        ],
        mistakes: [
            "Stating an opinion without explaining or illustrating it.",
            "Only repeating what the classmates already said.",
            "Never mentioning a classmate’s idea.",
            "Using absolute words such as always, never, and everyone, which are hard to defend.",
            "Writing short, simple sentences throughout with no variety or linking."
        ],
        lessonModules: [
            {
                heading: "1. What the task asks you to do",
                intro: "You join an online class discussion. A professor asks a question, two classmates give different views, and you write a post that adds your own contribution.",
                bullets: [
                    "ETS lists one Academic Discussion item, scored by AI up to 5 points. ETS describes the skill as writing academic paragraph text with a clear, well-supported argument and varied grammar and vocabulary.",
                    "ETS does not publish a word count in its specification. In this lab, aim for roughly 100–180 words as a practice target.",
                    "Your post should answer the professor’s question, not just comment on the students’ posts.",
                    "You may take notes during the test, but writing-assistance software is not permitted."
                ]
            },
            {
                heading: "2. Read the discussion strategically",
                intro: "You have little time. Read for the question and the positions, not for every word.",
                bullets: [
                    "Underline the professor’s exact question. Your answer must respond to it.",
                    "Summarise each classmate in about five words: ‘alone, fewer distractions’; ‘groups, different explanations’.",
                    "Notice what is missing: a third option, a deeper reason, an example, or a limit to a claim.",
                    "Do not copy phrases from the posts. Paraphrase them in your own words."
                ]
            },
            {
                heading: "3. Choose a position quickly",
                intro: "Pick a position you can defend with specific content. Time spent hesitating is time lost.",
                bullets: [
                    "Choose the side for which you can think of a concrete example or experience.",
                    "Partial agreement is acceptable if it is clear: ‘I mostly agree with Ana, but only when …’.",
                    "Do not stay in the middle without direction. State what you think and why.",
                    "Your position should appear in the first one or two sentences."
                ]
            },
            {
                heading: "4. A reliable structure",
                intro: "A simple structure keeps the post clear and makes development easier.",
                bullets: [
                    "Sentence 1–2: your position, with a brief reaction to a classmate if natural.",
                    "Sentence 3–5: your main reason, explained and illustrated with an example.",
                    "Sentence 6: respond to the other classmate (agree, extend, or politely disagree).",
                    "Last sentence: a short conclusion that returns to your position.",
                    "Five to seven well-developed sentences are better than ten thin ones."
                ]
            },
            {
                heading: "5. Engage with your classmates",
                intro: "The task is a discussion. Showing that you read and understood the other posts is part of the job.",
                bullets: [
                    "Name the classmate and paraphrase their idea accurately: ‘Ana points out that …’; ‘Ben raises a valid concern about …’.",
                    "Agree and extend: ‘I agree with Ben, and I would add that …’.",
                    "Disagree politely: ‘Ana makes a good point, but she overlooks …’.",
                    "Add something new. A post that only repeats the classmates adds little."
                ]
            },
            {
                heading: "6. Develop your support",
                intro: "Development is the difference between a claim and an argument.",
                bullets: [
                    "Use a ladder: reason, explanation of why it matters, example, effect.",
                    "Types of support: personal experience, a realistic example, a consequence, a comparison.",
                    "Be specific: ‘a friend who works in software finishes complex tasks faster at home’ is stronger than ‘some people work better at home’.",
                    "One well-developed reason is better than three reasons with no explanation."
                ]
            },
            {
                heading: "7. Academic style and precision",
                intro: "The tone should be clear, polite, and fairly formal, like a contribution to a seminar.",
                bullets: [
                    "Hedge claims that are not always true: may, often, tends to, in many cases.",
                    "Avoid absolute words such as always, never, everyone, and nobody unless they are accurate.",
                    "Use precise words: improve, reduce, encourage, prevent, depend on, benefit.",
                    "Vary how you introduce opinions instead of repeating ‘I think’: I believe, In my view, I would argue that."
                ]
            },
            {
                heading: "8. Grammar variety and cohesion",
                intro: "Varied, accurate grammar helps you present a more sophisticated argument.",
                bullets: [
                    "Combine ideas with because, although, while, whereas, and so that.",
                    "Use a relative clause or participle phrase to add detail: a policy that gives students more choice.",
                    "Use transitions with a clear function: For example, However, Therefore, In addition, Instead.",
                    "Use conditionals for consequences: If schools limited homework, students would sleep more.",
                    "Check accuracy as you vary: a simple correct sentence is better than a complex incorrect one."
                ]
            },
            {
                heading: "9. A 90-second final check",
                intro: "Use the same check every time so that it becomes automatic.",
                bullets: [
                    "Is my position clear in the first two sentences?",
                    "Did I explain one reason and give a specific example?",
                    "Did I mention a classmate by name and respond to their idea?",
                    "Have I avoided copying wording from the posts?",
                    "Scan for verb forms, agreement, articles, spelling, and punctuation."
                ]
            }
        ],
        sets: [
            {
                type: "discussion", id: "gd1", title: "Guided practice 1 · Printed Books or E-books",
                targetMin: 100, targetMax: 180,
                instruction: "Use the sentence frames if you need them. Write your post, review it, then press Check.",
                professor: { name: "Dr. Moreno", text: "In our media course, we are discussing how people read today. Some readers prefer printed books, while others prefer e-books. Which do you think is better for learning, and why?" },
                students: [{ name: "Lena", text: "Printed books are better because it is easier to concentrate without notifications." }, { name: "Karim", text: "E-books are better because I can carry hundreds of books and search for words instantly." }],
                goals: ["State your own position clearly", "Support it with at least one developed reason or example", "Respond to at least one classmate’s idea by name"],
                frames: ["Position: I think … is better for learning because …", "Support: For example, …", "Engage: I agree with … that …, but …", "Conclusion: Overall, …"],
                model: "I think printed books are better for learning, although e-books have clear advantages. Lena makes a good point that notifications interrupt concentration, and I have noticed the same problem when I read on my phone. When I study from a printed textbook, I stay on the page longer and remember the structure of the chapter more easily. Karim is right that e-books are portable and searchable, which is useful when I need to find a specific term quickly. However, for deep reading, I believe focus matters more than convenience. For example, I finished a long novel in print in two weeks, but my e-book attempts took twice as long."
            },
            {
                type: "discussion", id: "gd2", title: "Guided practice 2 · Online Classes",
                targetMin: 100, targetMax: 180,
                instruction: "Use the sentence frames if you need them. Write your post, review it, then press Check.",
                professor: { name: "Professor Ward", text: "Many universities now offer a large number of courses online. Should universities offer more online classes? Give reasons for your view." },
                students: [{ name: "Zara", text: "Yes. Online classes are flexible and allow people with jobs to study." }, { name: "Paul", text: "No. Students learn more when they discuss ideas face to face with their teacher and classmates." }],
                goals: ["State your own position clearly", "Support it with at least one developed reason or example", "Respond to at least one classmate’s idea by name"],
                frames: ["Position: I believe universities should … because …", "Support: For instance, …", "Engage: … raises an important concern about …, but …", "Conclusion: Therefore, …"],
                model: "I believe universities should offer more online classes, as long as they keep a strong in-person core. Zara is right that flexibility allows working adults and students in distant towns to study. For example, my cousin completed a business course online while working full time, which would have been impossible on campus. Paul raises an important concern about discussion, but modern platforms already allow live seminars and group chats that recreate much of that interaction. Therefore, a mixture of online lectures and in-person workshops would give students access without sacrificing real conversation. Universities should expand online options while preserving face-to-face time where it matters most."
            }
        ]
    }
};

/* =========================================================
   SETTINGS, LABELS, AND SAVED PROGRESS
   ========================================================= */

const TOEFL_WRITING_STORAGE_KEY = "toeflWritingProgress.v1";
const toeflWritingMastery = { pct: 80, goals: { sentence: 6, email: 5, discussion: 5 } };

const toeflWritingSkillLabels = {
    sentence: { stmt: "Statement word order", ques: "Questions and inversion", emb: "Embedded questions and reported speech", cls: "Relative and noun clauses", vb: "Tenses, passives and modals", cond: "Conditionals and comparisons" },
    email: { resp: "Covers every required point", tone: "Tone and format", org: "Organisation and cohesion", lang: "Grammar and vocabulary" },
    discussion: { opinion: "Clear position", support: "Reasons and examples", engage: "Engaging with classmates", org: "Organisation and cohesion", lang: "Grammar and vocabulary" }
};
const toeflWritingLevelNames = { 1: "Level 1 · Foundation", 2: "Level 2 · Core", 3: "Level 3 · Advanced" };

function loadTOEFLWritingProgress() {
    try {
        const raw = window.localStorage.getItem(TOEFL_WRITING_STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") return { sets: parsed.sets || {}, skills: parsed.skills || {} };
        }
    } catch (error) { /* storage unavailable: progress lasts for this visit only */ }
    return { sets: {}, skills: {} };
}

function saveTOEFLWritingProgress() {
    try { window.localStorage.setItem(TOEFL_WRITING_STORAGE_KEY, JSON.stringify(toeflWritingProgress)); } catch (error) { /* ignore */ }
}

let toeflWritingProgress = loadTOEFLWritingProgress();

function getTOEFLWritingBankSets(taskId) {
    const bank = window.toeflWritingBank;
    return bank && Array.isArray(bank[taskId]) ? bank[taskId] : [];
}

function isTOEFLWritingSetMastered(setId) {
    const entry = toeflWritingProgress.sets[setId];
    return !!entry && entry.best >= toeflWritingMastery.pct;
}

function getTOEFLWritingMasteredCount(taskId) {
    return getTOEFLWritingBankSets(taskId).filter(set => isTOEFLWritingSetMastered(set.id)).length;
}

function injectTOEFLWritingStyles() {
    if (typeof injectTOEFLReadingStyles === "function") injectTOEFLReadingStyles();   // shared hub styles
    if (document.getElementById("toefl-writing-extra-css")) return;
    const style = document.createElement("style");
    style.id = "toefl-writing-extra-css";
    style.textContent = `
.toefl-write-item{border:1px solid #e5e7eb;border-radius:16px;padding:14px;margin:12px 0;background:#fff}
.toefl-write-item.is-correct{border-color:#a7f3d0;background:#f0fdf4}
.toefl-write-item.is-incorrect{border-color:#fecaca;background:#fef2f2}
.toefl-write-ctx{margin:4px 0 6px;font-weight:700;line-height:1.5}
.toefl-write-hint{margin:0 0 8px;font-size:14px;color:#92400e;background:#fffbeb;border-radius:10px;padding:6px 10px}
.toefl-write-answer{min-height:52px;display:flex;flex-wrap:wrap;gap:6px;padding:10px;border:2px dashed #cbd5e1;border-radius:12px;background:#f8fafc;align-items:center}
.toefl-write-placeholder{color:#94a3b8;font-size:14px}
.toefl-write-tile{border:1px solid #cbd5e1;background:#fff;border-radius:10px;padding:8px 12px;font:inherit;cursor:pointer;min-height:40px;color:#111827}
.toefl-write-tile.is-placed{background:#dbeafe;border-color:#93c5fd}
.toefl-write-tile:disabled{cursor:default;opacity:.85}
.toefl-write-bank{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;min-height:44px}
.toefl-write-preview{margin:8px 0 0;font-size:15px;color:#334155;font-style:italic;min-height:22px}
.toefl-write-item-actions{display:flex;gap:8px;margin-top:8px}
.toefl-write-item-actions button{margin:0}
.toefl-write-feedback{margin-top:10px;line-height:1.55}
.toefl-write-prompt{background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;padding:16px;margin:12px 0}
.toefl-write-prompt h4{margin:0 0 6px}
.toefl-write-prompt ul{margin:6px 0 0;padding-left:20px;line-height:1.6}
.toefl-write-post{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:10px 12px;margin:8px 0;line-height:1.55}
.toefl-write-post strong{display:block;font-size:13px;color:#4338ca}
.toefl-write-frames{background:#fffbeb;border:1px solid #fde68a;border-radius:14px;padding:12px 14px;margin:12px 0}
.toefl-write-frames ul{margin:6px 0 0;padding-left:20px;line-height:1.6}
.toefl-write-textarea{width:100%;min-height:260px;padding:14px;border-radius:14px;border:1px solid #cbd5e1;font:inherit;line-height:1.6;resize:vertical;box-sizing:border-box}
.toefl-write-textarea:disabled{background:#f1f5f9;color:#334155}
.toefl-write-counter{margin:6px 0 12px;font-size:14px;color:#475569}
.toefl-write-counter.is-ok{color:#047857;font-weight:700}
.toefl-write-counter.is-over{color:#b45309;font-weight:700}
.toefl-write-review{margin-top:18px;display:none;gap:14px}
.toefl-write-review.is-visible{display:grid}
.toefl-write-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:14px 16px}
.toefl-write-card h4{margin:0 0 8px}
.toefl-write-quick{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px}
.toefl-write-quick div{background:#f8fafc;border-radius:12px;padding:8px 10px;font-size:13px;color:#475569}
.toefl-write-quick strong{display:block;font-size:18px;color:#111827}
.toefl-write-check-item{display:block;padding:10px 12px;border:1px solid #e5e7eb;border-radius:12px;margin:8px 0;background:#f9fafb;line-height:1.5;cursor:pointer}
.toefl-write-check-item input{margin-right:8px}
.toefl-write-check-item .toefl-write-hintline{display:block;font-size:12px;margin-top:3px;color:#6b7280}
.toefl-write-check-item .toefl-write-hintline.is-ok{color:#047857}
.toefl-write-check-item .toefl-write-hintline.is-warn{color:#b45309}
.toefl-write-model{white-space:pre-wrap;line-height:1.65;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:12px 14px;margin-top:8px}
.toefl-write-note{font-size:12px;color:#6b7280;margin:6px 0 0}
@media (max-width:600px){.toefl-write-tile{padding:8px 10px}}
`;
    document.head.appendChild(style);
}

/* =========================================================
   SESSION STATE
   ========================================================= */

const toeflWritingCompletedTasks = new Set();
let toeflWritingCurrentTask = null;
let toeflWritingSetIndex = 0;
let toeflWritingMode = "learn";          // "learn" or "practice"
let toeflWritingActiveSet = null;        // the practice set or prompt being attempted
let toeflWritingBuild = [];              // Build a Sentence state, one entry per item
let toeflWritingChecked = false;
let toeflWritingChecklist = [];
let toeflWritingTimerId = null;
let toeflWritingStartedAt = 0;

function getActiveTOEFLWritingPractice() {
    if (toeflWritingMode === "practice" && toeflWritingActiveSet) return toeflWritingActiveSet;
    return toeflWritingTasks[toeflWritingCurrentTask].sets[toeflWritingSetIndex];
}

function stopTOEFLWritingTimer() {
    if (toeflWritingTimerId) { clearInterval(toeflWritingTimerId); toeflWritingTimerId = null; }
}

function formatTOEFLWritingTime(milliseconds) {
    const total = Math.max(0, Math.round(milliseconds / 1000));
    return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

function startTOEFLWritingTimer() {
    stopTOEFLWritingTimer();
    toeflWritingStartedAt = Date.now();
    toeflWritingTimerId = setInterval(() => {
        const el = document.getElementById("toefl-writing-timer");
        if (!el) { stopTOEFLWritingTimer(); return; }
        el.textContent = formatTOEFLWritingTime(Date.now() - toeflWritingStartedAt);
    }, 1000);
}

function shuffleTOEFLWritingArray(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function escapeTOEFLWritingHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getTOEFLWritingSetType(taskId) {
    return taskId === "sentence" ? "sentence" : taskId;
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function showTOEFLWriting() {
    injectTOEFLWritingStyles();
    stopTOEFLWritingTimer();
    if (typeof hideAllScreens === "function") hideAllScreens();
    const screen = document.getElementById("toefl-writing-screen");
    if (!screen) return;
    screen.style.display = "block";
    document.getElementById("toefl-writing-home").style.display = "block";
    document.getElementById("toefl-writing-activity").style.display = "none";
    renderTOEFLWritingTaskCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTOEFLWritingTaskCards() {
    const container = document.getElementById("toefl-writing-task-grid");
    if (!container) return;
    container.innerHTML = "";

    Object.values(toeflWritingTasks).forEach(task => {
        const completed = toeflWritingCompletedTasks.has(task.id);
        const total = getTOEFLWritingBankSets(task.id).length;
        const goal = Math.min(toeflWritingMastery.goals[task.id] || total, total || 1);
        const mastered = getTOEFLWritingMasteredCount(task.id);
        const goalReached = total > 0 && mastered >= goal;
        const card = document.createElement("article");
        card.className = "toefl-reading-task-card";
        card.innerHTML = `
<div class="toefl-reading-task-icon" aria-hidden="true">${task.icon}</div>
<div class="toefl-reading-card-status ${completed ? "is-complete" : ""}">${completed ? "✓ Lesson completed" : `${task.sets.length} guided sets`}</div>
<h3>${escapeTOEFLWritingHTML(task.title)}</h3>
<p>${escapeTOEFLWritingHTML(task.shortDescription)}</p>
<p class="toefl-reading-card-progress ${goalReached ? "is-done" : ""}">${total ? `Practice: ${mastered} of ${goal} mastery sets ${goalReached ? "✓" : ""}` : "Practice bank not loaded"}</p>
<div class="toefl-reading-card-actions">
<button type="button" class="secondary-button" data-action="learn">📘 Learn</button>
<button type="button" class="start-button" data-action="practice">🎯 Practice</button>
</div>
`;
        card.querySelector('[data-action="learn"]').addEventListener("click", () => openTOEFLWritingTask(task.id));
        card.querySelector('[data-action="practice"]').addEventListener("click", () => openTOEFLWritingPractice(task.id));
        container.appendChild(card);
    });

    const count = toeflWritingCompletedTasks.size;
    const totalTasks = Object.keys(toeflWritingTasks).length;
    const progress = document.getElementById("toefl-writing-overall-progress");
    if (progress) progress.textContent = `${count} of ${totalTasks} lessons completed`;
    const bar = document.getElementById("toefl-writing-overall-bar");
    if (bar) bar.style.width = `${(count / totalTasks) * 100}%`;
}

function backToTOEFLWritingHome() {
    stopTOEFLWritingTimer();
    const home = document.getElementById("toefl-writing-home");
    const activity = document.getElementById("toefl-writing-activity");
    if (!home || !activity) return;
    home.style.display = "block";
    activity.style.display = "none";
    renderTOEFLWritingTaskCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   LEARN PAGE
   ========================================================= */

function openTOEFLWritingTask(taskId) {
    if (!toeflWritingTasks[taskId]) return;
    injectTOEFLWritingStyles();
    stopTOEFLWritingTimer();
    toeflWritingMode = "learn";
    toeflWritingActiveSet = null;
    toeflWritingCurrentTask = taskId;
    toeflWritingSetIndex = 0;
    document.getElementById("toefl-writing-home").style.display = "none";
    document.getElementById("toefl-writing-activity").style.display = "block";
    renderTOEFLWritingLearn();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTOEFLWritingLearn() {
    const task = toeflWritingTasks[toeflWritingCurrentTask];
    const set = task.sets[toeflWritingSetIndex];
    const container = document.getElementById("toefl-writing-activity");
    toeflWritingChecked = false;

    const strategyHTML = task.strategy.map((item, index) => `<li><span>${index + 1}</span><p>${escapeTOEFLWritingHTML(item)}</p></li>`).join("");
    const mistakesHTML = task.mistakes.map(item => `<li>${escapeTOEFLWritingHTML(item)}</li>`).join("");
    const modulesHTML = task.lessonModules.map(module => `
<article class="toefl-reading-deep-module">
<h4>${escapeTOEFLWritingHTML(module.heading)}</h4>
<p>${escapeTOEFLWritingHTML(module.intro)}</p>
<ul>${module.bullets.map(item => `<li>${escapeTOEFLWritingHTML(item)}</li>`).join("")}</ul>
</article>`).join("");

    const facts = task.facts;
    const factsHTML = `
<section class="toefl-reading-facts" aria-label="Key facts about this task">
<p class="course-label">KEY FACTS</p>
<div class="toefl-reading-targets">${facts.items.map(item => `<div class="toefl-reading-target"><strong>${escapeTOEFLWritingHTML(item.value)}</strong><span><b>${escapeTOEFLWritingHTML(item.label)}.</b> ${escapeTOEFLWritingHTML(item.note)}</span></div>`).join("")}</div>
<p class="toefl-reading-instruction">${escapeTOEFLWritingHTML(facts.note)} <em>Checked against the ETS TOEFL iBT 2026 test specification, which ETS says may receive minor revisions.</em></p>
</section>`;

    const hasBank = getTOEFLWritingBankSets(task.id).length > 0;
    const isSentence = set.type === "sentence";
    const pillText = isSentence ? `${set.items.length} items` : "1 response";

    container.innerHTML = `
<div class="toefl-reading-activity-topbar">
<button type="button" class="secondary-button" onclick="backToTOEFLWritingHome()">← Writing tasks</button>
<span class="toefl-reading-set-label">LEARN · Guided practice ${toeflWritingSetIndex + 1} of ${task.sets.length}</span>
${hasBank ? `<button type="button" class="start-button" onclick="openTOEFLWritingPractice('${task.id}')">Go to Practice →</button>` : ""}
</div>

${factsHTML}

<div class="toefl-reading-lesson-grid">
<section class="toefl-reading-explainer">
<p class="course-label">TASK EXPLANATION</p>
<h3>${task.icon} ${escapeTOEFLWritingHTML(task.title)}</h3>
<p>${escapeTOEFLWritingHTML(task.explanation)}</p>
</section>
<section class="toefl-reading-strategy">
<h3>Quick strategy</h3>
<ol class="toefl-reading-strategy-list">${strategyHTML}</ol>
</section>
</div>

<section class="toefl-reading-deep-lesson" aria-label="Detailed lesson">
<div class="toefl-reading-deep-lesson-heading">
<p class="course-label">LEARN THE METHOD</p>
<h3>Understand the task before you practise</h3>
<p>Work through the explanations, then use the guided practice below. When you are ready for much more practice, use the Practice page.</p>
</div>
<div class="toefl-reading-deep-grid">${modulesHTML}</div>
</section>

<details class="toefl-reading-mistakes">
<summary>Common mistakes to avoid</summary>
<ul>${mistakesHTML}</ul>
</details>

<section class="toefl-reading-practice-panel">
<div class="toefl-reading-practice-heading">
<div><p class="course-label">GUIDED PRACTICE</p><h3>${escapeTOEFLWritingHTML(set.title)}</h3></div>
<span class="toefl-reading-progress-pill" id="toefl-writing-set-progress">${pillText}</span>
</div>
<p class="toefl-reading-instruction">${escapeTOEFLWritingHTML(set.instruction)}</p>
${isSentence ? renderTOEFLWritingSentenceSet(set, true) : renderTOEFLWritingResponse(task.id, set, true)}
<div class="toefl-reading-set-result" id="toefl-writing-set-result" aria-live="polite"></div>
<button type="button" class="start-button toefl-reading-continue" id="toefl-writing-continue" style="display:none" onclick="nextTOEFLWritingGuidedSet()">Continue →</button>
</section>
`;
    if (isSentence) initTOEFLWritingSentenceSet(set);
}

function nextTOEFLWritingGuidedSet() {
    const task = toeflWritingTasks[toeflWritingCurrentTask];
    if (toeflWritingSetIndex < task.sets.length - 1) {
        toeflWritingSetIndex++;
        renderTOEFLWritingLearn();
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        toeflWritingCompletedTasks.add(task.id);
        backToTOEFLWritingHome();
    }
}

/* =========================================================
   PRACTICE HUB
   ========================================================= */

function openTOEFLWritingPractice(taskId) {
    if (!toeflWritingTasks[taskId]) return;
    injectTOEFLWritingStyles();
    stopTOEFLWritingTimer();
    toeflWritingMode = "practice";
    toeflWritingActiveSet = null;
    toeflWritingCurrentTask = taskId;
    document.getElementById("toefl-writing-home").style.display = "none";
    document.getElementById("toefl-writing-activity").style.display = "block";
    renderTOEFLWritingPracticeHub(taskId);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function describeTOEFLWritingSet(taskId, set) {
    if (taskId === "sentence") return `${set.items.length} items`;
    if (taskId === "email") return `${set.audience} · ${set.targetMin}–${set.targetMax} words`;
    return `2 classmates · ${set.targetMin}–${set.targetMax} words`;
}

function renderTOEFLWritingPracticeHub(taskId) {
    const task = toeflWritingTasks[taskId];
    const sets = getTOEFLWritingBankSets(taskId);
    const container = document.getElementById("toefl-writing-activity");

    if (!sets.length) {
        container.innerHTML = `
<div class="toefl-reading-activity-topbar"><button type="button" class="secondary-button" onclick="backToTOEFLWritingHome()">← Writing tasks</button></div>
<p class="toefl-reading-instruction">The practice bank could not be loaded. Check that <strong>toefl-writing-practice.js</strong> is in the repository and linked in index.html.</p>`;
        return;
    }

    const pct = toeflWritingMastery.pct;
    const goal = Math.min(toeflWritingMastery.goals[taskId] || sets.length, sets.length);
    const mastered = getTOEFLWritingMasteredCount(taskId);
    const attemptedSets = sets.filter(set => toeflWritingProgress.sets[set.id]);
    const averageBest = attemptedSets.length
        ? Math.round(attemptedSets.reduce((sum, set) => sum + toeflWritingProgress.sets[set.id].best, 0) / attemptedSets.length)
        : 0;
    const totalAttempts = attemptedSets.reduce((sum, set) => sum + toeflWritingProgress.sets[set.id].attempts, 0);
    const goalReached = mastered >= goal;
    const isSentence = taskId === "sentence";
    const unit = isSentence ? "sets" : "prompts";

    const labels = toeflWritingSkillLabels[taskId];
    const skillRows = Object.keys(labels).map(key => {
        const stat = toeflWritingProgress.skills[`${taskId}:${key}`];
        if (!stat || !stat.t) {
            return `<div class="toefl-reading-skill-row"><span>${escapeTOEFLWritingHTML(labels[key])}</span><div class="toefl-reading-skill-bar"><span style="width:0%"></span></div><span class="toefl-reading-skill-note">–</span></div>`;
        }
        const value = Math.round((stat.c / stat.t) * 100);
        const tone = value >= pct ? "is-strong" : (value < 70 && stat.t >= 4 ? "is-weak" : "");
        return `<div class="toefl-reading-skill-row"><span>${escapeTOEFLWritingHTML(labels[key])}</span><div class="toefl-reading-skill-bar ${tone}"><span style="width:${value}%"></span></div><span>${value}%</span></div>`;
    }).join("");

    const nextSet = sets.find(set => !isTOEFLWritingSetMastered(set.id));
    const lowestSet = sets.slice().sort((a, b) => ((toeflWritingProgress.sets[a.id] || { best: 0 }).best) - ((toeflWritingProgress.sets[b.id] || { best: 0 }).best))[0];
    const startSet = nextSet || lowestSet;
    const startLabel = !attemptedSets.length ? `Start with the first ${isSentence ? "set" : "prompt"} →` : (nextSet ? `Continue with the next ${isSentence ? "set" : "prompt"} →` : "Review your weakest one →");

    const levelsHTML = [1, 2, 3].map(level => {
        const levelSets = sets.filter(set => set.level === level);
        if (!levelSets.length) return "";
        const tiles = levelSets.map(set => {
            const entry = toeflWritingProgress.sets[set.id];
            const isMastered = isTOEFLWritingSetMastered(set.id);
            const badge = !entry
                ? `<span class="toefl-reading-badge">Not started</span>`
                : (isMastered
                    ? `<span class="toefl-reading-badge is-mastered">✓ Mastered · best ${entry.best}%</span>`
                    : `<span class="toefl-reading-badge is-progress">Best ${entry.best}% · try again</span>`);
            return `
<div class="toefl-reading-set-tile ${isMastered ? "is-mastered" : ""}">
<h5>${escapeTOEFLWritingHTML(set.title)}</h5>
<span class="toefl-reading-set-meta">${escapeTOEFLWritingHTML(describeTOEFLWritingSet(taskId, set))}${entry ? ` · ${entry.attempts} attempt${entry.attempts === 1 ? "" : "s"}` : ""}</span>
${badge}
<button type="button" class="${entry ? "secondary-button" : "start-button"}" onclick="openTOEFLWritingPracticeSet('${taskId}','${set.id}')">${entry ? "Practise again" : "Start"}</button>
</div>`;
        }).join("");
        return `<section class="toefl-reading-level"><h4>${toeflWritingLevelNames[level]}</h4><div class="toefl-reading-set-grid">${tiles}</div></section>`;
    }).join("");

    const scoreNote = isSentence
        ? `Score ${pct}% or higher on ${goal} different sets. The target is a practical benchmark for this lab, not an official score.`
        : `Complete the review checklist and reach ${pct}% or higher on ${goal} different prompts. For this task the score is your own self-review, so be honest. The target is a practical benchmark, not an official score.`;

    container.innerHTML = `
<div class="toefl-reading-activity-topbar">
<button type="button" class="secondary-button" onclick="backToTOEFLWritingHome()">← Writing tasks</button>
<span class="toefl-reading-set-label">PRACTICE</span>
<button type="button" class="secondary-button" onclick="openTOEFLWritingTask('${taskId}')">📘 Review the lesson</button>
</div>

<div class="toefl-reading-practice-hub">
<div class="toefl-reading-hub-head">
<p class="course-label">PRACTICE</p>
<h3>${task.icon} ${escapeTOEFLWritingHTML(task.title)}</h3>
<p>Apply what you learned. Work from Level 1 to Level 3. Check your work only when you are ready; your scores are saved on this device.</p>
</div>

<section class="toefl-reading-mastery">
<h4>${goalReached ? "🏆 Mastery goal reached" : "Your mastery goal"}</h4>
<p class="toefl-reading-skill-note">${escapeTOEFLWritingHTML(scoreNote)}</p>
<div class="toefl-reading-progress-track"><div class="toefl-reading-progress-bar" style="width:${Math.min(100, Math.round((mastered / goal) * 100))}%"></div></div>
<div class="toefl-reading-stat-row">
<div class="toefl-reading-stat"><strong>${mastered} / ${goal}</strong><span>${unit[0].toUpperCase() + unit.slice(1)} mastered</span></div>
<div class="toefl-reading-stat"><strong>${attemptedSets.length} / ${sets.length}</strong><span>${unit[0].toUpperCase() + unit.slice(1)} tried</span></div>
<div class="toefl-reading-stat"><strong>${attemptedSets.length ? averageBest + "%" : "–"}</strong><span>Average best score</span></div>
</div>
<div class="toefl-reading-hub-actions">
<button type="button" class="start-button" onclick="openTOEFLWritingPracticeSet('${taskId}','${startSet.id}')">${startLabel}</button>
${totalAttempts ? `<button type="button" class="secondary-button" onclick="resetTOEFLWritingProgress('${taskId}')">Reset this progress</button>` : ""}
</div>
</section>

<section class="toefl-reading-skill-panel">
<h4>Skill breakdown</h4>
<p class="toefl-reading-skill-note">Accuracy across all your practice attempts. Orange means more practice would help.</p>
${skillRows}
</section>

${levelsHTML}
</div>
`;
}

function resetTOEFLWritingProgress(taskId) {
    if (!window.confirm("Reset your saved practice progress for this task on this device?")) return;
    getTOEFLWritingBankSets(taskId).forEach(set => { delete toeflWritingProgress.sets[set.id]; });
    Object.keys(toeflWritingSkillLabels[taskId]).forEach(key => { delete toeflWritingProgress.skills[`${taskId}:${key}`]; });
    saveTOEFLWritingProgress();
    renderTOEFLWritingPracticeHub(taskId);
}

/* =========================================================
   PRACTICE SET PAGE
   ========================================================= */

function openTOEFLWritingPracticeSet(taskId, setId) {
    const sets = getTOEFLWritingBankSets(taskId);
    const set = sets.find(item => item.id === setId);
    if (!set) return;
    injectTOEFLWritingStyles();
    toeflWritingMode = "practice";
    toeflWritingCurrentTask = taskId;
    toeflWritingActiveSet = set;
    toeflWritingChecked = false;
    document.getElementById("toefl-writing-home").style.display = "none";
    document.getElementById("toefl-writing-activity").style.display = "block";
    renderTOEFLWritingPracticeSet(taskId, set);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTOEFLWritingPracticeSet(taskId, set) {
    const task = toeflWritingTasks[taskId];
    const sets = getTOEFLWritingBankSets(taskId);
    const index = sets.findIndex(item => item.id === set.id);
    const isSentence = taskId === "sentence";
    const container = document.getElementById("toefl-writing-activity");
    const pillText = isSentence ? `${set.items.length} items` : "1 response";

    container.innerHTML = `
<div class="toefl-reading-activity-topbar">
<button type="button" class="secondary-button" onclick="openTOEFLWritingPractice('${taskId}')">← Practice hub</button>
<span class="toefl-reading-set-label">${toeflWritingLevelNames[set.level]} · ${isSentence ? "Set" : "Prompt"} ${index + 1} of ${sets.length}</span>
</div>

<section class="toefl-reading-practice-panel">
<div class="toefl-reading-practice-heading">
<div><p class="course-label">PRACTICE · ${escapeTOEFLWritingHTML(task.title.toUpperCase())}</p><h3>${escapeTOEFLWritingHTML(set.title)}</h3></div>
<div class="toefl-reading-heading-right">
<span class="toefl-reading-timer" id="toefl-writing-timer" aria-label="Elapsed time">0:00</span>
<span class="toefl-reading-progress-pill" id="toefl-writing-set-progress">${pillText}</span>
</div>
</div>
${isSentence ? `<p class="toefl-reading-instruction">${escapeTOEFLWritingHTML(set.instruction)}</p>` : ""}
${isSentence ? renderTOEFLWritingSentenceSet(set, false) : renderTOEFLWritingResponse(taskId, set, false)}
<div class="toefl-reading-set-result" id="toefl-writing-set-result" aria-live="polite"></div>
</section>
`;
    if (isSentence) initTOEFLWritingSentenceSet(set);
    startTOEFLWritingTimer();
}

function retryTOEFLWritingPracticeSet() {
    if (toeflWritingActiveSet) openTOEFLWritingPracticeSet(toeflWritingCurrentTask, toeflWritingActiveSet.id);
}

function nextTOEFLWritingPracticeSet() {
    const sets = getTOEFLWritingBankSets(toeflWritingCurrentTask);
    const index = sets.findIndex(item => toeflWritingActiveSet && item.id === toeflWritingActiveSet.id);
    const next = sets[index + 1];
    if (next) openTOEFLWritingPracticeSet(toeflWritingCurrentTask, next.id);
    else openTOEFLWritingPractice(toeflWritingCurrentTask);
}

function finishTOEFLWritingPractice(items, noteHTML) {
    stopTOEFLWritingTimer();
    const taskId = toeflWritingCurrentTask;
    const set = toeflWritingActiveSet;
    const elapsed = Date.now() - toeflWritingStartedAt;
    const total = items.length;
    const correct = items.filter(item => item.correct).length;
    const percent = Math.round((correct / total) * 100);

    const entry = toeflWritingProgress.sets[set.id] || { best: 0, attempts: 0 };
    entry.attempts += 1;
    entry.best = Math.max(entry.best, percent);
    entry.last = percent;
    entry.date = Date.now();
    toeflWritingProgress.sets[set.id] = entry;

    items.forEach(item => {
        const key = `${taskId}:${item.skill}`;
        const stat = toeflWritingProgress.skills[key] || { c: 0, t: 0 };
        stat.t += 1;
        if (item.correct) stat.c += 1;
        toeflWritingProgress.skills[key] = stat;
    });
    saveTOEFLWritingProgress();

    const labels = toeflWritingSkillLabels[taskId];
    const missed = {};
    items.filter(item => !item.correct).forEach(item => { missed[item.skill] = (missed[item.skill] || 0) + 1; });
    const missedText = Object.keys(missed).sort((a, b) => missed[b] - missed[a]).map(key => `${labels[key] || key} (${missed[key]})`).join(", ");

    const sets = getTOEFLWritingBankSets(taskId);
    const goal = Math.min(toeflWritingMastery.goals[taskId] || sets.length, sets.length);
    const masteredCount = getTOEFLWritingMasteredCount(taskId);
    const reached = percent >= toeflWritingMastery.pct;
    const message = reached
        ? `Mastery score reached. You have mastered ${masteredCount} of ${goal} needed for this task.`
        : `Below the ${toeflWritingMastery.pct}% mastery line. Study the explanations${taskId === "sentence" ? "" : " and the model"}, then try again.`;
    const hasNext = sets.findIndex(item => item.id === set.id) < sets.length - 1;

    const result = document.getElementById("toefl-writing-set-result");
    result.innerHTML = `
<strong>${taskId === "sentence" ? "Result" : "Self-review score"}: ${correct} / ${total} (${percent}%) · Time ${formatTOEFLWritingTime(elapsed)}</strong>
<p>${escapeTOEFLWritingHTML(message)}</p>
${noteHTML || ""}
${missedText ? `<p><strong>Review these skills:</strong> ${escapeTOEFLWritingHTML(missedText)}</p>` : ""}
<div class="toefl-reading-result-actions">
<button type="button" class="secondary-button" onclick="retryTOEFLWritingPracticeSet()">Try again</button>
<button type="button" class="start-button" onclick="nextTOEFLWritingPracticeSet()">${hasNext ? (taskId === "sentence" ? "Next set →" : "Next prompt →") : "Back to practice hub"}</button>
<button type="button" class="secondary-button" onclick="openTOEFLWritingPractice('${taskId}')">Practice hub</button>
</div>`;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* =========================================================
   BUILD A SENTENCE
   ========================================================= */

function normalizeTOEFLWritingSentence(text) {
    return String(text).toLowerCase().replace(/[.,!?;:]/g, "").replace(/\s+/g, " ").trim();
}

function renderTOEFLWritingSentenceSet(set, guided) {
    let html = `<div class="toefl-reading-questions">`;
    set.items.forEach((item, index) => {
        html += `
<article class="toefl-write-item" id="toefl-write-item-${index}">
<p class="toefl-reading-question-number">Item ${index + 1} of ${set.items.length}</p>
<p class="toefl-write-ctx">${escapeTOEFLWritingHTML(item.ctx)}</p>
${guided && item.hint ? `<p class="toefl-write-hint">💡 ${escapeTOEFLWritingHTML(item.hint)}</p>` : ""}
<div class="toefl-write-answer" id="toefl-write-answer-${index}" aria-label="Your sentence"></div>
<p class="toefl-write-preview" id="toefl-write-preview-${index}"></p>
<div class="toefl-write-bank" id="toefl-write-bank-${index}" aria-label="Available words and phrases"></div>
<div class="toefl-write-item-actions"><button type="button" class="secondary-button" id="toefl-write-clear-${index}" onclick="clearTOEFLWritingItem(${index})">Clear</button></div>
<div class="toefl-write-feedback" id="toefl-write-feedback-${index}" aria-live="polite"></div>
</article>`;
    });
    html += `</div><div class="toefl-reading-actions"><button type="button" class="start-button" id="toefl-writing-check-sentences" onclick="checkTOEFLWritingSentences()">Check answers</button></div>`;
    return html;
}

function initTOEFLWritingSentenceSet(set) {
    toeflWritingBuild = set.items.map(item => {
        const tiles = item.chunks.map((text, id) => ({ id, text }));
        const correctOrder = tiles.map(tile => tile.id).join(",");
        let order = shuffleTOEFLWritingArray(tiles.map(tile => tile.id));
        for (let tries = 0; tries < 6 && order.join(",") === correctOrder; tries++) order = shuffleTOEFLWritingArray(order);
        return { tiles, order, placed: [] };
    });
    set.items.forEach((item, index) => refreshTOEFLWritingItem(index));
}

function assembleTOEFLWritingSentence(item, state, withEnd) {
    const text = state.placed.map(id => state.tiles[id].text).join(" ");
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1) + (withEnd && state.placed.length === state.tiles.length ? item.end : "");
}

function refreshTOEFLWritingItem(index) {
    const practice = getActiveTOEFLWritingPractice();
    const item = practice.items[index];
    const state = toeflWritingBuild[index];
    const answer = document.getElementById(`toefl-write-answer-${index}`);
    const bank = document.getElementById(`toefl-write-bank-${index}`);
    const preview = document.getElementById(`toefl-write-preview-${index}`);
    if (!answer || !bank || !preview) return;

    answer.innerHTML = state.placed.length
        ? state.placed.map((id, position) => `<button type="button" class="toefl-write-tile is-placed" ${toeflWritingChecked ? "disabled" : ""} onclick="removeTOEFLWritingTile(${index}, ${position})" aria-label="Remove ${escapeTOEFLWritingHTML(state.tiles[id].text)}">${escapeTOEFLWritingHTML(state.tiles[id].text)}</button>`).join("")
        : `<span class="toefl-write-placeholder">Tap the words below to build your sentence.</span>`;

    const remaining = state.order.filter(id => !state.placed.includes(id));
    bank.innerHTML = remaining.map(id => `<button type="button" class="toefl-write-tile" ${toeflWritingChecked ? "disabled" : ""} onclick="placeTOEFLWritingTile(${index}, ${id})">${escapeTOEFLWritingHTML(state.tiles[id].text)}</button>`).join("");
    preview.textContent = assembleTOEFLWritingSentence(item, state, true);

    const clear = document.getElementById(`toefl-write-clear-${index}`);
    if (clear) clear.disabled = toeflWritingChecked;
}

function placeTOEFLWritingTile(index, tileId) {
    if (toeflWritingChecked) return;
    const state = toeflWritingBuild[index];
    if (state.placed.includes(tileId)) return;
    state.placed.push(tileId);
    refreshTOEFLWritingItem(index);
    updateTOEFLWritingSentenceProgress();
}

function removeTOEFLWritingTile(index, position) {
    if (toeflWritingChecked) return;
    toeflWritingBuild[index].placed.splice(position, 1);
    refreshTOEFLWritingItem(index);
    updateTOEFLWritingSentenceProgress();
}

function clearTOEFLWritingItem(index) {
    if (toeflWritingChecked) return;
    toeflWritingBuild[index].placed = [];
    refreshTOEFLWritingItem(index);
    updateTOEFLWritingSentenceProgress();
}

function updateTOEFLWritingSentenceProgress() {
    const complete = toeflWritingBuild.filter(state => state.placed.length === state.tiles.length).length;
    const progress = document.getElementById("toefl-writing-set-progress");
    if (progress) progress.textContent = `${complete}/${toeflWritingBuild.length} sentences built`;
}

function checkTOEFLWritingSentences() {
    if (toeflWritingChecked) return;
    const practice = getActiveTOEFLWritingPractice();
    const incomplete = toeflWritingBuild.filter(state => state.placed.length !== state.tiles.length).length;
    if (incomplete > 0 && !window.confirm(`${incomplete} sentence${incomplete === 1 ? " is" : "s are"} not finished. Check anyway? Unfinished sentences count as incorrect.`)) return;

    toeflWritingChecked = true;
    const results = [];
    practice.items.forEach((item, index) => {
        const state = toeflWritingBuild[index];
        const attempt = state.placed.map(id => state.tiles[id].text).join(" ");
        const accepted = [item.chunks].concat(item.alts || []).map(order => normalizeTOEFLWritingSentence(order.join(" ")));
        const correct = state.placed.length === state.tiles.length && accepted.includes(normalizeTOEFLWritingSentence(attempt));
        results.push({ skill: item.skill, correct });

        const model = item.chunks.join(" ");
        const modelText = model.charAt(0).toUpperCase() + model.slice(1) + item.end;
        const card = document.getElementById(`toefl-write-item-${index}`);
        card.classList.add(correct ? "is-correct" : "is-incorrect");
        const feedback = document.getElementById(`toefl-write-feedback-${index}`);
        feedback.innerHTML = correct
            ? `<strong>✓ Correct.</strong> ${escapeTOEFLWritingHTML(item.explanation)}`
            : `<strong>✗ Not quite.</strong> Model sentence: <strong>${escapeTOEFLWritingHTML(modelText)}</strong><br>${escapeTOEFLWritingHTML(item.explanation)}${(item.alts || []).length ? " Another order is also acceptable for this item." : ""}`;
        refreshTOEFLWritingItem(index);
    });

    const button = document.getElementById("toefl-writing-check-sentences");
    if (button) button.disabled = true;
    const correctCount = results.filter(r => r.correct).length;
    const progress = document.getElementById("toefl-writing-set-progress");
    if (progress) progress.textContent = `${correctCount}/${results.length} correct`;

    if (toeflWritingMode === "practice") {
        finishTOEFLWritingPractice(results);
    } else {
        const result = document.getElementById("toefl-writing-set-result");
        result.innerHTML = `<strong>Your result: ${correctCount} / ${results.length}</strong><p>Read the explanation for every item, including the ones you got right.</p>`;
        document.getElementById("toefl-writing-continue").style.display = "inline-flex";
    }
}

/* =========================================================
   WRITE AN EMAIL / WRITE FOR AN ACADEMIC DISCUSSION
   ========================================================= */

function renderTOEFLWritingResponse(taskId, set, guided) {
    const isEmail = taskId === "email";
    const goalsHTML = set.goals.map(goal => `<li>${escapeTOEFLWritingHTML(goal)}</li>`).join("");
    let promptHTML;
    if (isEmail) {
        promptHTML = `
<div class="toefl-write-prompt">
<p class="course-label">SCENARIO · ${escapeTOEFLWritingHTML(set.audience)}</p>
<p>${escapeTOEFLWritingHTML(set.scenario)}</p>
<p><strong>In your email, you should:</strong></p>
<ul>${goalsHTML}</ul>
</div>`;
    } else {
        promptHTML = `
<div class="toefl-write-prompt">
<p class="course-label">ACADEMIC DISCUSSION</p>
<div class="toefl-write-post"><strong>${escapeTOEFLWritingHTML(set.professor.name)} (professor)</strong>${escapeTOEFLWritingHTML(set.professor.text)}</div>
${set.students.map(student => `<div class="toefl-write-post"><strong>${escapeTOEFLWritingHTML(student.name)}</strong>${escapeTOEFLWritingHTML(student.text)}</div>`).join("")}
<p><strong>In your post, you should:</strong></p>
<ul>${goalsHTML}</ul>
</div>`;
    }
    const framesHTML = guided && set.frames
        ? `<div class="toefl-write-frames"><strong>Sentence frames (guided practice only)</strong><ul>${set.frames.map(frame => `<li>${escapeTOEFLWritingHTML(frame)}</li>`).join("")}</ul></div>`
        : "";

    return `
${promptHTML}
${framesHTML}
<label for="toefl-write-textarea"><strong>Your ${isEmail ? "email" : "post"}</strong></label>
<textarea id="toefl-write-textarea" class="toefl-write-textarea" spellcheck="true" placeholder="Type your ${isEmail ? "email" : "post"} here. You can edit it until you press Check." oninput="handleTOEFLWritingInput()"></textarea>
<div class="toefl-write-counter" id="toefl-write-counter">0 words · practice target ${set.targetMin}–${set.targetMax}</div>
<div class="toefl-reading-actions">
<button type="button" class="start-button" id="toefl-writing-check-response" onclick="checkTOEFLWritingResponse()">Check my response</button>
<button type="button" class="secondary-button" id="toefl-writing-clear-response" onclick="clearTOEFLWritingResponse()">Clear response</button>
</div>
<div class="toefl-write-review" id="toefl-write-review" aria-live="polite"></div>`;
}

function countTOEFLWritingWords(text) {
    const trimmed = String(text).trim();
    return trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
}

function handleTOEFLWritingInput() {
    const practice = getActiveTOEFLWritingPractice();
    const area = document.getElementById("toefl-write-textarea");
    const counter = document.getElementById("toefl-write-counter");
    if (!area || !counter) return;
    const words = countTOEFLWritingWords(area.value);
    counter.textContent = `${words} word${words === 1 ? "" : "s"} · practice target ${practice.targetMin}–${practice.targetMax}`;
    counter.classList.toggle("is-ok", words >= practice.targetMin && words <= practice.targetMax);
    counter.classList.toggle("is-over", words > practice.targetMax);
    const progress = document.getElementById("toefl-writing-set-progress");
    if (progress && !toeflWritingChecked) progress.textContent = `${words} words`;
}

function clearTOEFLWritingResponse() {
    if (toeflWritingChecked) return;
    const area = document.getElementById("toefl-write-textarea");
    if (!area) return;
    if (area.value.trim() && !window.confirm("Clear everything you have written?")) return;
    area.value = "";
    handleTOEFLWritingInput();
    area.focus();
}

const TOEFL_WRITING_STOPWORDS = new Set(["about", "after", "again", "also", "because", "before", "being", "could", "every", "their", "there", "these", "those", "which", "while", "would", "other", "should", "where", "think", "people", "student", "students"]);
const TOEFL_WRITING_LINKERS = ["however", "moreover", "furthermore", "in addition", "for example", "for instance", "therefore", "as a result", "because", "although", "while", "whereas", "on the other hand", "in contrast", "instead", "unfortunately", "in the meantime", "alternatively", "overall", "such as", "so that", "perhaps", "since", "unless", "finally", "first", "also"];

function analyzeTOEFLWritingText(text, taskId, set) {
    const trimmed = String(text).trim();
    const lower = trimmed.toLowerCase();
    const words = countTOEFLWritingWords(trimmed);
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(part => part.trim()).length : 0;
    const sentences = trimmed ? Math.max(1, (trimmed.match(/[^.!?]+[.!?]+/g) || []).length) : 0;
    const linkers = TOEFL_WRITING_LINKERS.filter(linker => new RegExp(`(^|[^a-z])${linker}([^a-z]|$)`).test(lower));
    const counts = {};
    (lower.match(/[a-z’']{5,}/g) || []).forEach(word => { if (!TOEFL_WRITING_STOPWORDS.has(word)) counts[word] = (counts[word] || 0) + 1; });
    const repeated = Object.keys(counts).filter(word => counts[word] >= 4).sort((a, b) => counts[b] - counts[a]).slice(0, 4);
    const lines = trimmed.split(/\n/).filter(line => line.trim());
    const greeting = /^(dear|hello|hi|good (morning|afternoon|evening)|to whom)/i.test(lines[0] || "");
    const closing = /(regards|sincerely|best wishes|best,|thank you|thanks|respectfully|yours|cheers)/i.test(lines.slice(-3).join(" "));
    const opinion = /(i (strongly |firmly )?(believe|think|agree|disagree|feel|support|oppose)|in my (opinion|view|experience)|i would argue|i do not think|i don’t think|i don't think)/i.test(lower);
    const example = /(for example|for instance|such as|e\.g\.|in my experience|in my own)/i.test(lower);
    const names = (set.students || []).filter(student => lower.includes(student.name.toLowerCase())).map(student => student.name);
    const goalHits = (set.keywords || []).map(list => list.some(keyword => lower.includes(keyword)));
    return { words, paragraphs, sentences, average: sentences ? Math.round(words / sentences) : 0, linkers, repeated, greeting, closing, opinion, example, names, goalHits };
}

function buildTOEFLWritingChecklist(taskId, set, analysis) {
    const inRange = analysis.words >= set.targetMin && analysis.words <= set.targetMax;
    const lengthHint = { ok: inRange, text: `${analysis.words} words (practice target ${set.targetMin}–${set.targetMax})` };
    const linkHint = { ok: analysis.linkers.length >= 2, text: analysis.linkers.length ? `Linking words found: ${analysis.linkers.slice(0, 5).join(", ")}` : "No linking words detected" };
    const repeatHint = { ok: analysis.repeated.length === 0, text: analysis.repeated.length ? `Words used four or more times: ${analysis.repeated.join(", ")}` : "No heavily repeated words detected" };

    if (taskId === "email") {
        return [
            ...set.goals.map((goal, index) => ({ skill: "resp", text: `I clearly covered this point: ${goal}.`, hint: { ok: analysis.goalHits[index], text: analysis.goalHits[index] ? "Related words found" : "Related words not found; check this point yourself" } })),
            { skill: "tone", text: "I used a suitable greeting and closing for this reader.", hint: { ok: analysis.greeting && analysis.closing, text: `Greeting ${analysis.greeting ? "found" : "not found"} · closing ${analysis.closing ? "found" : "not found"}` } },
            { skill: "tone", text: "My tone is polite and matches the reader, with no slang.", hint: null },
            { skill: "org", text: "My email has a clear opening purpose, a developed body, and a closing.", hint: { ok: analysis.paragraphs >= 3, text: `${analysis.paragraphs} paragraph${analysis.paragraphs === 1 ? "" : "s"}` } },
            { skill: "org", text: "I used linking words and short paragraphs so the email is easy to follow.", hint: linkHint },
            { skill: "org", text: "My length is within the practice target.", hint: lengthHint },
            { skill: "lang", text: "My sentences are complete and accurate (agreement, tenses, articles).", hint: null },
            { skill: "lang", text: "I varied my sentence structures and vocabulary instead of repeating the same words.", hint: repeatHint },
            { skill: "lang", text: "I reread to check spelling and punctuation.", hint: null }
        ];
    }
    return [
        { skill: "opinion", text: "I state my position clearly in the first sentences.", hint: { ok: analysis.opinion, text: analysis.opinion ? "Opinion wording found" : "No opinion phrase detected; check your first sentences" } },
        { skill: "opinion", text: "My position answers the professor’s question directly.", hint: null },
        { skill: "support", text: "I explain at least one reason instead of only stating it.", hint: null },
        { skill: "support", text: "I include a specific example, experience, or consequence.", hint: { ok: analysis.example, text: analysis.example ? "Example wording found" : "No example marker detected; check yourself" } },
        { skill: "engage", text: "I mention at least one classmate by name and respond to their idea.", hint: { ok: analysis.names.length > 0, text: analysis.names.length ? `Mentioned: ${analysis.names.join(", ")}` : "No classmate name found" } },
        { skill: "engage", text: "I add something new instead of only repeating the posts.", hint: null },
        { skill: "org", text: "My post is organised: position, support, then a conclusion or contrast.", hint: null },
        { skill: "org", text: "I used linking words to connect my ideas.", hint: linkHint },
        { skill: "org", text: "My length is within the practice target.", hint: lengthHint },
        { skill: "lang", text: "I used varied grammar (for example clauses with although, because, or which) accurately.", hint: null },
        { skill: "lang", text: "I used precise vocabulary and avoided repeating the same words.", hint: repeatHint },
        { skill: "lang", text: "I checked spelling, punctuation, tenses, and articles.", hint: null }
    ];
}

function checkTOEFLWritingResponse() {
    if (toeflWritingChecked) return;
    const taskId = toeflWritingCurrentTask;
    const set = getActiveTOEFLWritingPractice();
    const area = document.getElementById("toefl-write-textarea");
    const words = countTOEFLWritingWords(area.value);
    if (words < 20 && !window.confirm("Your response is very short. Check anyway?")) return;

    toeflWritingChecked = true;
    area.disabled = true;
    document.getElementById("toefl-writing-check-response").disabled = true;
    const clear = document.getElementById("toefl-writing-clear-response");
    if (clear) clear.disabled = true;

    const analysis = analyzeTOEFLWritingText(area.value, taskId, set);
    toeflWritingChecklist = buildTOEFLWritingChecklist(taskId, set, analysis);

    const quickHTML = `
<div class="toefl-write-quick">
<div><strong>${analysis.words}</strong>words</div>
<div><strong>${analysis.paragraphs}</strong>paragraphs</div>
<div><strong>${analysis.sentences}</strong>sentences</div>
<div><strong>${analysis.average}</strong>words per sentence</div>
<div><strong>${analysis.linkers.length}</strong>linking words</div>
</div>`;

    const checklistHTML = toeflWritingChecklist.map((item, index) => `
<label class="toefl-write-check-item">
<input type="checkbox" id="toefl-write-check-${index}" data-check-index="${index}">${escapeTOEFLWritingHTML(item.text)}
${item.hint ? `<span class="toefl-write-hintline ${item.hint.ok ? "is-ok" : "is-warn"}">${item.hint.ok ? "✔" : "⚠"} ${escapeTOEFLWritingHTML(item.hint.text)}</span>` : ""}
</label>`).join("");

    const guided = toeflWritingMode === "learn";
    const review = document.getElementById("toefl-write-review");
    review.innerHTML = `
<div class="toefl-write-card">
<h4>1. Quick checks (automatic)</h4>
${quickHTML}
<p class="toefl-write-note">These counts are simple measurements. They do not predict an ETS score, which depends on how well your ideas, organisation, and language work together.</p>
</div>
<div class="toefl-write-card">
<h4>2. Self-review checklist</h4>
<p class="toefl-write-note">Compare your response with the checklist and the model below, then tick only what you honestly did. The ✔ and ⚠ notes are automatic hints and can be wrong.</p>
${checklistHTML}
</div>
<div class="toefl-write-card">
<h4>3. A model response</h4>
<p class="toefl-write-note">One possible strong response, not the only correct one. Compare ideas, organisation, and language rather than copying phrases.</p>
<div class="toefl-write-model">${escapeTOEFLWritingHTML(set.model)}</div>
</div>
<div class="toefl-reading-actions">
<button type="button" class="start-button" id="toefl-writing-save-review" onclick="saveTOEFLWritingReview()">${guided ? "Finish review" : "Save my review"}</button>
</div>`;
    review.classList.add("is-visible");
    const progress = document.getElementById("toefl-writing-set-progress");
    if (progress) progress.textContent = `${analysis.words} words · review below`;
    review.scrollIntoView({ behavior: "smooth", block: "start" });
}

function saveTOEFLWritingReview() {
    const button = document.getElementById("toefl-writing-save-review");
    if (!button || button.disabled) return;
    const items = toeflWritingChecklist.map((item, index) => ({
        skill: item.skill,
        correct: !!document.getElementById(`toefl-write-check-${index}`).checked
    }));
    button.disabled = true;
    document.querySelectorAll("[data-check-index]").forEach(box => { box.disabled = true; });

    if (toeflWritingMode === "practice") {
        finishTOEFLWritingPractice(items, `<p class="toefl-write-note">This score comes from your own checklist, so it is only as accurate as your self-review.</p>`);
    } else {
        const ticked = items.filter(item => item.correct).length;
        const result = document.getElementById("toefl-writing-set-result");
        result.innerHTML = `<strong>Self-review: ${ticked} / ${items.length}</strong><p>Use the checklist items you did not tick as your goals for the next response. Then continue, or try the Practice page for more prompts.</p>`;
        document.getElementById("toefl-writing-continue").style.display = "inline-flex";
    }
}

/* =========================================================
   CONNECT THE WRITING CARD TO THE TOEFL COURSE SCREEN
   (wraps displayTOEFLSections from script.js; no edit to script.js needed)
   ========================================================= */

(function connectTOEFLWritingCard() {
    if (typeof window.displayTOEFLSections !== "function" || window.displayTOEFLSections.__writingConnected) return;
    const original = window.displayTOEFLSections;
    const wrapped = function () {
        const result = original.apply(this, arguments);
        document.querySelectorAll("#toefl-sections-container .toefl-section-card").forEach(card => {
            const heading = card.querySelector("h3");
            if (heading && heading.textContent.trim() === "Writing" && !card.querySelector(".toefl-section-start")) {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "start-button toefl-section-start";
                button.textContent = "Start Writing Pass →";
                button.addEventListener("click", showTOEFLWriting);
                card.appendChild(button);
            }
        });
        return result;
    };
    wrapped.__writingConnected = true;
    window.displayTOEFLSections = wrapped;
})();
