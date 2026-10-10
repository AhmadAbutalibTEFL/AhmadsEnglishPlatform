/* =========================================================
   TOEFL iBT READING — original interactive learning section
   Static-site friendly: no libraries, APIs, or back end.
   Pass 1 (expanded): deeper lessons, more practice sets.
   All passages, questions, and explanations are original.
   ========================================================= */

const toeflReadingTasks = {

    /* ------------------------------------------------------
       TASK 1 — COMPLETE THE WORDS
       ------------------------------------------------------ */
    complete: {
        id: "complete",
        title: "Complete the Words",
        icon: "🔤",
        shortDescription: "Rebuild partly shown words in an academic paragraph using grammar, connectors, and context.",
        facts: {
            items: [
                { value: "10 words", label: "Partly shown words per paragraph", note: "The beginning of each word is printed; you type only the missing letters." },
                { value: "About 70–90 words", label: "Typical paragraph length", note: "Based on published practice material. The ETS specification gives no exact length for this task." },
                { value: "50 items · ~30 min", label: "Whole Reading section (ETS)", note: "Complete the Words, Read in Daily Life, and Read an Academic Passage share this section." }
            ],
            note: "How many paragraphs you see depends on how the adaptive section routes you, and sources differ: some prep sites report two paragraphs, while the ETS blueprint lists a target of 30 Complete the Words items across the section. Check the official ETS practice materials for the current number."
        },
        explanation: "You read a short academic-style paragraph in which several words are only partly shown. The beginning of each word is printed, and each missing letter has its own slot. You type only the missing letters. The task rewards careful reading, because the missing words are usually recoverable from grammar, from the relationship between ideas, and from the exact number of missing letters.",
        strategy: [
            "Read the whole paragraph once before typing anything.",
            "Decide what job the missing word does: connector, verb, noun, adjective, adverb, or preposition.",
            "Combine the printed beginning, the number of slots, and the sentence meaning.",
            "Check the spelling letter by letter, then reread the sentence.",
            "If a gap is blocking you, skip it and return after solving the easier ones."
        ],
        mistakes: [
            "Guessing from the first letters without reading the sentence.",
            "Ignoring the number of slots, which is a built-in clue.",
            "Typing the whole word instead of only the missing letters.",
            "Choosing a word that fits the meaning but not the grammar.",
            "Spelling a word the way it sounds instead of the way it is written."
        ],
        lessonModules: [
            {
                heading: "1. What the task asks you to do",
                intro: "In each practice paragraph here, ten words are incomplete. The printed beginning stays on the screen and every missing letter has its own slot. Your job is to supply exactly the missing letters.",
                bullets: [
                    "The number of slots is information. If a word begins with ‘con’ and has four slots, your answer must have seven letters in total.",
                    "Spelling counts. A word with the right meaning but one wrong, missing, or doubled letter is not an exact match.",
                    "You do not need specialist knowledge. The paragraph supplies the topic, and grammar plus connectors supply most of the rest.",
                    "Format facts: practice paragraphs usually run about 70–90 words with 10 gaps. The Reading section as a whole has 50 items and about 30 minutes of base time (ETS). The number of paragraphs you meet depends on the adaptive route, so check the current ETS practice materials."
                ]
            },
            {
                heading: "2. A four-step routine for every gap",
                intro: "Use the same order each time. A routine reduces guessing and keeps you calm when the clock is running.",
                bullets: [
                    "Read first. Finish the sentence, then read the sentence before it. Many gaps depend on what the previous sentence said.",
                    "Name the job. Ask whether the gap needs a connector, a noun, a verb, an adjective, an adverb, or a preposition.",
                    "Test candidates. Think of a word that fits the job, then check it against the printed letters and the slot count.",
                    "Verify. Type the letters, reread the whole sentence, and confirm that grammar, meaning, and spelling all agree.",
                    "Skip and return if you are stuck. A later sentence often reveals the contrast, the cause, or the topic you were missing."
                ]
            },
            {
                heading: "3. Let grammar narrow the options",
                intro: "Before searching your memory for vocabulary, decide what kind of word can appear in the gap. This removes most wrong candidates immediately.",
                bullets: [
                    "After a modal verb such as can, may, or must, expect a base-form verb: can adapt, may help. Do not add -s, -ed, or -ing.",
                    "After a determiner such as the, these, or some, expect a noun phrase. Check whether the noun should be singular or plural.",
                    "Before a noun, expect an adjective: a reliable method. Before an adjective or a verb, an adverb is often possible: highly effective, quickly changes.",
                    "After to, decide whether it is an infinitive (to observe) or a preposition (to a decision). The following word tells you which.",
                    "Subject–verb agreement helps: ‘the results show’ but ‘the result shows’. A plural subject usually means a verb without -s.",
                    "Grammar rarely works alone. Confirm every candidate with meaning, the printed letters, and the slot count."
                ]
            },
            {
                heading: "4. Connectors: decide the relationship first",
                intro: "Many gaps in academic paragraphs are connectors. Do not search for a word first; decide how the two ideas relate, then choose a connector that expresses that relationship.",
                bullets: [
                    "Contrast: however, nevertheless, although, whereas, unlike, in contrast, yet. Ask whether the second idea goes against the first.",
                    "Addition: moreover, furthermore, in addition, also, besides. Ask whether the second idea adds another point in the same direction.",
                    "Result: therefore, consequently, as a result, thus, so. Ask whether the second idea happens because of the first.",
                    "Reason: because, since, as, due to, owing to. Ask whether the clause explains why something happened.",
                    "Condition and alternative: if, unless, otherwise, provided that. ‘Otherwise’ means ‘if not’; it warns about what would happen if the condition is not met.",
                    "Time: after, before, while, during, until, once. Check whether the events happen at the same time or one after the other.",
                    "Punctuation helps. A connector at the start of a sentence is usually followed by a comma. A word after a semicolon is often a connector such as ‘however’ or ‘otherwise’."
                ]
            },
            {
                heading: "5. Fixed phrases and collocations",
                intro: "Academic English repeats the same word combinations. If you recognise the phrase, the missing word often appears automatically. Learn phrases, not isolated words.",
                bullets: [
                    "as a result of, in contrast to, in addition to, according to, depend on, rely on, lead to, contribute to, play a role in.",
                    "a wide range of, a number of, a variety of, the majority of, in terms of, on the other hand, for example, for instance.",
                    "Verb + preposition pairs are common targets: focus on, result in, consist of, account for, benefit from.",
                    "Collocations pair words that sound natural together: conduct research, draw a conclusion, raise awareness, reach an agreement, face a challenge.",
                    "When you see a printed beginning that matches a phrase you know, test the whole phrase aloud in your head before typing."
                ]
            },
            {
                heading: "6. Word families and endings",
                intro: "The ending of a word often shows its job. Use endings as clues, not as absolute rules, and always confirm with the sentence.",
                bullets: [
                    "Noun endings: -tion, -sion, -ment, -ness, -ity, -ance, -ence, -ism, -er/-or (a person or thing that does something).",
                    "Adjective endings: -ive, -ous, -ful, -less, -al, -ical, -able, -ible, -ic.",
                    "Adverb ending: -ly. Be careful: some adverbs have no -ly (fast, well), and some -ly words are adjectives (friendly).",
                    "Verb endings: -ize/-ise, -ify, -en, -ate. Verbs also change with the sentence: study, studies, studied, studying.",
                    "Comparatives and superlatives: -er and -est, or more/most. A comparison usually contains than, or a context that sets two things side by side.",
                    "Prefixes add meaning: un-, re-, dis-, mis-, over-, under-. If the printed beginning is a prefix, ask what the base word could be."
                ]
            },
            {
                heading: "7. Spelling traps",
                intro: "The task is about written English, so sound-based guessing is risky. Check the form you type.",
                bullets: [
                    "Double letters: occur, occurred, necessary, accommodate. Count the slots; a double letter changes the length.",
                    "-ence/-ance and -ible/-able endings look similar and are often confused. The printed beginning and the slot count help you decide.",
                    "Silent or unexpected letters: knowledge, receive, environment, government. Learn the spelling of academic words as whole shapes.",
                    "Plural and singular endings can differ by one letter. Look at the verb and determiner nearby to decide.",
                    "Keep British or American spelling consistent within the task if the paragraph shows a clear pattern, but check the printed letters first."
                ]
            },
            {
                heading: "8. Worked examples (written out so you can see the reasoning)",
                intro: "These examples are not part of the practice sets. Read the reasoning, then use the same steps in the live gaps.",
                bullets: [
                    "‘Heavy rain fell all night. As a re____, several roads closed.’ The fixed phrase ‘as a ___’ links a cause to a result. The beginning ‘re’ plus four slots gives r-e-s-u-l-t, and the missing letters are s-u-l-t.",
                    "‘Students who read widely tend to ac____ new vocabulary quickly.’ After ‘to’ comes a base verb, and the meaning is ‘gain’. The word ‘acquire’ fits, and the missing letters are q-u-i-r-e.",
                    "‘The experiment produced reli____ results.’ Before the noun ‘results’ an adjective is needed, and -able forms adjectives meaning ‘can be …’. The word is ‘reliable’ and the missing ending is a-b-l-e.",
                    "‘The first method was cheap; ho____, it was slow.’ The sentence changes direction, so a contrast connector is required. The beginning ‘ho’ points to ‘however’, and the missing letters are w-e-v-e-r.",
                    "‘Please submit the form by Friday; other____, we cannot process it.’ After the semicolon the sentence warns about what happens if the condition is not met. The beginning ‘other’ plus ‘wise’ gives ‘otherwise’."
                ]
            },
            {
                heading: "9. Pacing and repair strategies",
                intro: "If your answers are close but wrong, change the way you work rather than guessing harder.",
                bullets: [
                    "Do a fast first pass. Fill the gaps you are sure about, then return to the uncertain ones with more context.",
                    "Keep an error log of the words you missed. Sort them into connector, grammar form, collocation, or spelling mistakes, and practise the weakest type.",
                    "If two candidates fit the grammar, check the slot count. The count usually removes one of them.",
                    "Always reread the finished paragraph. A wrong word often sounds odd when you read the whole sentence aloud in your head.",
                    "Do not spend more than a short moment on one gap. One missed word costs less than three rushed ones."
                ]
            }
        ],
        sets: [
            {
                type: "cloze",
                title: "Practice 1 · Tide Pools",
                instruction: "Read the whole paragraph first. Each slot is one missing letter; the printed beginning is already supplied.",
                parts: [
                    "Tide pools are small areas of seawater that stay on rocky shores ",
                    { prefix: "aft", suffix: "er", word: "after", explanation: "Time relationship: the water stays behind once the tide has gone out. ‘After’ shows that one event follows another." },
                    " the tide goes out. ",
                    { prefix: "Sin", suffix: "ce", word: "Since", explanation: "The first clause gives the reason for the second: conditions change quickly, so the animals must cope. ‘Since’ introduces a reason." },
                    " conditions change quickly, the animals living ",
                    { prefix: "th", suffix: "ere", word: "there", explanation: "The sentence needs an adverb of place referring back to the tide pools. ‘Living there’ means living in that place." },
                    " must cope with heat, salt, and waves. Sea stars, for example, ",
                    { prefix: "cli", suffix: "ng", word: "cling", explanation: "The plural subject ‘sea stars’ needs a base-form verb. ‘Cling tightly to’ describes how the animals hold on to rocks." },
                    " tightly to rocks, ",
                    { prefix: "whi", suffix: "le", word: "while", explanation: "The sentence compares two groups: sea stars cling, while crabs hide. ‘While’ can show contrast between two actions." },
                    " crabs hide ",
                    { prefix: "bene", suffix: "ath", word: "beneath", explanation: "A preposition of position is needed before ‘stones’. ‘Beneath’ means under or below." },
                    " stones. Scientists often visit these habitats ",
                    { prefix: "bec", suffix: "ause", word: "because", explanation: "The clause after the gap explains why scientists visit. ‘Because’ introduces the reason." },
                    " they offer a simple way to observe how organisms ",
                    { prefix: "ada", suffix: "pt", word: "adapt", explanation: "After ‘how organisms’ a base-form verb is needed, and the paragraph is about coping with changing conditions. ‘Adapt’ means change to suit new conditions." },
                    ". ",
                    { prefix: "Alth", suffix: "ough", word: "Although", explanation: "The idea of a small pool contrasts with the idea of many species. ‘Although’ introduces a contrast and is followed by a subject and verb." },
                    " each pool is small, it can ",
                    { prefix: "con", suffix: "tain", word: "contain", explanation: "After ‘can’ use a base-form verb. ‘Contain’ means hold or include, and it takes the object ‘dozens of species’." },
                    " dozens of species."
                ]
            },
            {
                type: "cloze",
                title: "Practice 2 · Bike-Sharing",
                instruction: "Decide first whether each gap is a connector, a verb, an adjective, or another kind of word. Then check the slot count.",
                parts: [
                    "Bike-sharing schemes allow residents to ",
                    { prefix: "bor", suffix: "row", word: "borrow", explanation: "After ‘to’, a base-form verb is needed. ‘Borrow’ means take something for a short time, and it contrasts with ‘return’ later in the sentence." },
                    " a bicycle for a short trip and return it to any station. ",
                    { prefix: "Unl", suffix: "ike", word: "Unlike", explanation: "The sentence contrasts the shared system with private ownership. ‘Unlike’ is a preposition introducing something different." },
                    " private ownership, the system requires no storage space or maintenance. ",
                    { prefix: "Conse", suffix: "quently", word: "Consequently", explanation: "The second sentence is a result of the first: no storage or maintenance means more people can use bicycles. ‘Consequently’ shows result." },
                    ", more people can travel short distances without using a car. ",
                    { prefix: "How", suffix: "ever", word: "However", explanation: "The sentence turns from advantages to a limitation, so a contrast connector is needed. ‘However’ is followed by a comma." },
                    ", the schemes ",
                    { prefix: "dep", suffix: "end", word: "depend", explanation: "The plural subject ‘the schemes’ needs a verb without -s. ‘Depend on’ is a fixed verb–preposition pair." },
                    " on careful planning. Stations must be ",
                    { prefix: "loc", suffix: "ated", word: "located", explanation: "After ‘must be’, a past participle can describe position. ‘Located near’ means placed near." },
                    " near homes, offices, and train stops; ",
                    { prefix: "other", suffix: "wise", word: "otherwise", explanation: "After the semicolon, the sentence names what happens if the condition is not met. ‘Otherwise’ means if not." },
                    ", bicycles may remain unused. City officials also ",
                    { prefix: "mon", suffix: "itor", word: "monitor", explanation: "After the adverb ‘also’ and the plural subject, use a base-form verb. ‘Monitor’ means watch and check." },
                    " demand ",
                    { prefix: "throug", suffix: "hout", word: "throughout", explanation: "‘Throughout the year’ means during the whole year. The slot count separates it from the shorter word ‘through’." },
                    " the year, ",
                    { prefix: "adjus", suffix: "ting", word: "adjusting", explanation: "A present participle introduces an action that follows from monitoring. ‘Adjusting the number of bicycles’ describes the result of watching demand." },
                    " the number of bicycles when needed."
                ]
            },
            {
                type: "cloze",
                title: "Practice 3 · Learning a Language",
                instruction: "This paragraph has several linking words. Decide the relationship between the ideas before you choose each connector.",
                parts: [
                    "Learning a language ",
                    { prefix: "requ", suffix: "ires", word: "requires", explanation: "The singular subject ‘learning’ takes a verb ending in -s. ‘Requires’ means needs." },
                    " regular exposure. ",
                    { prefix: "Rese", suffix: "arch", word: "Research", explanation: "The verb ‘suggests’ is singular, so the subject must be a singular or uncountable noun. ‘Research’ fits and is uncountable." },
                    " suggests that short daily sessions are more ",
                    { prefix: "effe", suffix: "ctive", word: "effective", explanation: "After ‘more’, an adjective is needed, and the comparison with ‘than’ shows that one method works better. ‘Effective’ means successful." },
                    " than one long weekly lesson. A learner who studies for ten minutes each morning may remember more vocabulary than someone who studies for two hours once a week. ",
                    { prefix: "Mor", suffix: "eover", word: "Moreover", explanation: "The next sentence adds another point in the same direction, so an additive connector is needed. ‘Moreover’ means in addition." },
                    ", learners who speak early usually gain ",
                    { prefix: "confi", suffix: "dence", word: "confidence", explanation: "‘Gain’ needs a noun object, and ‘confidence’ means belief in your own ability. It also matches the idea that speaking early helps." },
                    " faster. ",
                    { prefix: "Nevert", suffix: "heless", word: "Nevertheless", explanation: "The sentence admits that mistakes happen but says they are still natural, so it opposes the expected worry. ‘Nevertheless’ means in spite of that." },
                    ", mistakes remain a ",
                    { prefix: "nat", suffix: "ural", word: "natural", explanation: "Before the noun ‘part’ an adjective is needed. ‘A natural part of the process’ means a normal and expected part." },
                    " part of the process. Teachers ",
                    { prefix: "there", suffix: "fore", word: "therefore", explanation: "The teachers’ advice follows from the idea that mistakes are natural. ‘Therefore’ shows result or consequence." },
                    " encourage students to practice ",
                    { prefix: "des", suffix: "pite", word: "despite", explanation: "‘Despite’ is a preposition meaning ‘even with’, and it is followed by a noun phrase: ‘despite occasional errors’." },
                    " occasional errors, ",
                    { prefix: "rat", suffix: "her", word: "rather", explanation: "‘Rather than’ is a fixed phrase meaning ‘instead of’. It contrasts practising with waiting." },
                    " than waiting until they feel perfect."
                ]
            }
        ]
    },

    /* ------------------------------------------------------
       TASK 2 — READ IN DAILY LIFE
       ------------------------------------------------------ */
    daily: {
        id: "daily",
        title: "Read in Daily Life",
        icon: "📩",
        shortDescription: "Read notices, emails, and messages and answer questions about purpose, details, conditions, and inference.",
        facts: {
            items: [
                { value: "2 or 3 questions", label: "Per text", note: "ETS describes Read in Daily Life as 2-item and 3-item sets." },
                { value: "15–50 words and longer", label: "Text length", note: "ETS says easier reading texts are typically 15–50 words and harder ones can reach about 200. Prep sites report Daily Life texts of roughly 40–140 words." },
                { value: "Signs, menus, emails, posts", label: "Typical formats", note: "ETS names signs, menus, emails, and social media posts as examples of everyday stimuli." }
            ],
            note: "The text stays on screen while you answer. ETS lists 5–15 scored items for this task type across the Reading section, and the exact number depends on the adaptive route."
        },
        explanation: "These are short practical texts of the kind people meet every day: notices, emails, messages, and announcements. The questions test purpose, specific details, conditions and instructions, and simple inferences. The evidence is always in the text, so your job is to find the right detail and notice the small words that change its meaning.",
        strategy: [
            "Identify the text type and why it was written.",
            "Read the question before scanning for the exact detail.",
            "Check times, dates, places, conditions, and exceptions around the detail.",
            "For an inference, choose the option the text supports, not one that merely sounds possible.",
            "Eliminate options that add information or contradict a stated condition."
        ],
        mistakes: [
            "Reading everything slowly before checking what the question asks.",
            "Missing words such as only, unless, instead of, or by.",
            "Choosing a true-sounding option that the text never says.",
            "Mixing up two similar details such as a deadline and an event time.",
            "Answering about the whole text when the question asks about one line."
        ],
        lessonModules: [
            {
                heading: "1. Start with purpose and audience",
                intro: "Before you look for any detail, decide what the writer wants the reader to know or do. The type of text and its audience often answer a purpose question immediately.",
                bullets: [
                    "A notice usually informs a group or gives instructions. An email may update, request, confirm, or explain. A message between friends may arrange or change a plan.",
                    "Use the heading, subject line, first sentence, and last sentence as fast clues to purpose.",
                    "Distinguish the main purpose from supporting details. A message may mention lunch, transport, and attendance, but only one of these may be the reason it was written.",
                    "Ask who the reader is. Instructions for residents, students, or customers imply different actions."
                ]
            },
            {
                heading: "2. Scan with the question in mind",
                intro: "You do not read every line at the same speed. The question tells you what to look for, so let it guide your eyes.",
                bullets: [
                    "For time, scan for days, dates, clock times, and words such as by, before, until, from, and instead of.",
                    "For place, scan for building names, room numbers, entrances, zones, and online portals.",
                    "For an action, look for verbs such as bring, register, reply, collect, return, and pay, and for obligation language such as must, should, and please.",
                    "After you find the line, read the full sentence and the sentence next to it. Conditions and exceptions are often nearby."
                ]
            },
            {
                heading: "3. Conditions, limits, and changes",
                intro: "Small words change meaning. Tests often check whether you notice the difference between required, optional, allowed, limited, and changed.",
                bullets: [
                    "‘Bring a laptop if you have one’ gives advice. ‘You must bring a laptop’ gives a rule.",
                    "‘Places are limited to 20’ means not everyone may get a place; it does not say how fast places will go.",
                    "‘The bus leaves at 8:15 instead of 8:45’ changes the time only. The day and place stay the same unless the text says otherwise.",
                    "‘Food is not allowed in the rooms, but you may eat outside’ contains a restriction and an exception. Check both parts.",
                    "A deadline limits when an action can happen. Do not confuse the registration deadline with the event time."
                ]
            },
            {
                heading: "4. Explicit detail versus inference",
                intro: "A detail is stated in the text. An inference is not copied word for word, but it must follow directly from the information given.",
                bullets: [
                    "For a detail question, find the exact words that answer it and confirm that no condition changes the answer.",
                    "For an inference question, combine one or two clear clues. If you need an extra assumption, the option is too far.",
                    "Wrong options often repeat words from the text but change the idea. Compare meaning, not vocabulary.",
                    "Eliminate options that are too extreme, contradict a condition, or answer a different question."
                ]
            },
            {
                heading: "5. Common trap types",
                intro: "Recognising the trap helps you avoid it.",
                bullets: [
                    "Time swap: the option gives a real time from the text, but it is the wrong event (for example the closing time instead of the return deadline).",
                    "Unsupported addition: the option sounds reasonable but adds a fact the text never mentions (a fee, a penalty, a reason).",
                    "Reversal: the option says the opposite of a condition (required instead of optional).",
                    "Partial truth: the option is correct for one group but the question asks about another.",
                    "Too general: the option states a true idea that is broader than the specific detail asked for."
                ]
            },
            {
                heading: "6. A quick worked example",
                intro: "Text: ‘The studio closes at 6:00 on Friday. Return borrowed cameras by 5:30. Students who booked a locker may collect their things until closing.’",
                bullets: [
                    "Question: When must cameras be returned? The sentence ‘Return borrowed cameras by 5:30’ answers directly. The answer is 5:30, not 6:00.",
                    "Question: Can every student collect items until 6:00? No. The permission applies only to students who booked a locker.",
                    "Method: match the question to the exact line, then check the condition attached to that line."
                ]
            },
            {
                heading: "7. Short texts and longer texts",
                intro: "Everyday stimuli range from a few lines on a sign to a full email. The method is the same, but the pressure points are different.",
                bullets: [
                    "Short texts (signs, menu cards, posts of roughly 15–50 words): every line may matter. Read all of it, then check any limit words such as only, until, or not included.",
                    "Longer texts (emails and notices of about 80–200 words): decide the purpose first, then use the question to find the right paragraph or line.",
                    "Texts are often shown in a realistic layout with a heading, times, or a price list. Use that layout as a map for scanning.",
                    "Sets contain two or three questions. Questions on the same text often test different skills: one for purpose or detail, another for a condition or an inference."
                ]
            }
        ],
        sets: [
            {
                type: "mcq",
                title: "Practice 1 · Café Door Sign (short text)",
                materialTitle: "SIGN · HARBOUR CAFÉ",
                material: "HARBOUR CAFÉ\nOpen 7:00 a.m.–3:00 p.m., Monday to Saturday\nKitchen closes at 2:30 p.m.\nClosed on Sundays and public holidays\nDogs welcome on the terrace only",
                instruction: "Short texts such as signs are read quickly but completely. Answer both questions using only the sign.",
                questions: [
                    { question: "What can be learned from the sign?", choices: ["Food can be ordered until 3:00 p.m.", "The café is open on Sundays", "The kitchen closes half an hour before the café does", "Dogs are welcome inside the café"], answer: 2, explanation: "The café closes at 3:00 p.m. but the kitchen closes at 2:30 p.m., which is thirty minutes earlier. The sign also says the café is closed on Sundays and limits dogs to the terrace." },
                    { question: "Where may customers bring a dog?", choices: ["Anywhere in the café", "Only on the terrace", "Only before the café opens", "Nowhere on the premises"], answer: 1, explanation: "The last line says dogs are welcome on the terrace only. The word ‘only’ rules out the main room." }
                ]
            },
            {
                type: "mcq",
                title: "Practice 2 · Text Message (short text)",
                materialTitle: "TEXT MESSAGE · FROM DANA",
                material: "Hi Sam! Change of plan: the study group is moving from the library to my place because the library’s group rooms are fully booked. Come at 6:30 instead of 6:00 so I have time to set up. Could you bring the printed notes? I’ll order pizza, so no need to eat first.",
                instruction: "Read the message and answer both questions.",
                questions: [
                    { question: "Why has the location of the study group changed?", choices: ["Dana would rather host", "The library’s group rooms are fully booked", "The library closes early", "Sam asked to change it"], answer: 1, explanation: "Dana gives the reason directly: the group rooms at the library are fully booked." },
                    { question: "What does Dana ask Sam to do?", choices: ["Order the pizza", "Arrive at 6:00", "Bring the printed notes", "Book another room"], answer: 2, explanation: "The question ‘Could you bring the printed notes?’ is the request. Dana will order the pizza, and the new arrival time is 6:30." }
                ]
            },
            {
                type: "mcq",
                title: "Practice 3 · Lunch Menu Card",
                materialTitle: "MENU CARD · LUNCH SPECIAL",
                material: "Lunch special: soup and a sandwich, $9. Served 11:30 a.m.–2:00 p.m., weekdays only. Choose tomato or lentil soup. Sandwiches: cheese, egg, or chicken (chicken adds $1.50). Drinks are not included.",
                instruction: "Use the menu card to answer the three questions. Watch for extra charges and limits.",
                questions: [
                    { question: "When is the lunch special available?", choices: ["Every day from 11:30 a.m.", "On weekends only", "From 2:00 p.m. on weekdays", "On weekdays from 11:30 a.m. to 2:00 p.m."], answer: 3, explanation: "The card says the special is served 11:30 a.m.–2:00 p.m. and weekdays only." },
                    { question: "How much is the special with a chicken sandwich (no drink)?", choices: ["$10.50", "$9.00", "$7.50", "$12.00"], answer: 0, explanation: "The base price is $9, and chicken adds $1.50, so the total is $10.50." },
                    { question: "What is not included in the special price?", choices: ["The soup", "The sandwich", "A drink", "A choice of filling"], answer: 2, explanation: "The last sentence says drinks are not included. The soup and sandwich are part of the $9 price, and the customer chooses the filling." }
                ]
            },
            {
                type: "mcq",
                title: "Practice 4 · Library Workshop Notice",
                materialTitle: "RESEARCH SMART: FREE LIBRARY WORKSHOP",
                material: "Thursday, 4:00–5:15 p.m. · Learning Centre, Room 204\nLearn how to search the library catalogue, evaluate online sources, and record references. Bring a laptop if you have one. The workshop is free, but places are limited to 20 students. Register through the student portal by Wednesday at 6:00 p.m. Students who register will receive a confirmation email.",
                instruction: "Read the notice and answer the three questions.",
                questions: [
                    { question: "What is the main purpose of the notice?", choices: ["To announce a change in library opening hours", "To ask students to return laptops", "To invite students to a research workshop", "To advertise a paid online course"], answer: 2, explanation: "The notice describes a free workshop and tells students when it takes place, where it is, and how to register." },
                    { question: "What must a student do to reserve a place?", choices: ["Register through the student portal by Wednesday evening", "Pay a fee at the Learning Centre", "Email the workshop teacher after Thursday", "Bring a laptop to Room 204"], answer: 0, explanation: "The notice says to register through the student portal by Wednesday at 6:00 p.m. There is no fee, and a laptop is optional." },
                    { question: "Which statement about laptops is supported by the notice?", choices: ["Every student must borrow one from the library", "Only students with laptops can register", "The workshop takes place in a computer shop", "Students should bring one if they have one"], answer: 3, explanation: "‘Bring a laptop if you have one’ is advice, not a requirement, so the other options add rules the notice does not state." }
                ]
            },
            {
                type: "mcq",
                title: "Practice 5 · Email from a Course Tutor",
                materialTitle: "EMAIL · FIELD TRIP UPDATE",
                material: "Subject: Friday's visit to the science museum\n\nHi everyone,\n\nThe museum visit will still take place on Friday, but our bus will leave school at 8:15 a.m. instead of 8:45. Please arrive by 8:00 so we can check attendance. The museum has asked us not to bring food into the exhibition rooms; you may eat your packed lunch in the outdoor picnic area. If it rains, we will use the covered seating area beside the main entrance.\n\nPlease reply to this email by Thursday afternoon if you can no longer attend.\n\nBest,\nMs Patel",
                instruction: "Use the email to answer the three questions. Pay close attention to the changes and conditions.",
                questions: [
                    { question: "What has changed about the trip?", choices: ["The destination", "The day of the visit", "The lunch arrangement", "The bus departure time"], answer: 3, explanation: "The bus now leaves at 8:15 a.m. rather than 8:45 a.m. The visit is still on Friday, and the lunch rule is an additional note." },
                    { question: "Where may students eat their packed lunch?", choices: ["Inside every exhibition room", "In the outdoor picnic area", "On the bus only", "At the school cafeteria"], answer: 1, explanation: "Food is not allowed in the exhibition rooms, but the email says students may use the outdoor picnic area." },
                    { question: "What should a student do if they can no longer attend?", choices: ["Call the museum on Friday", "Wait until the bus arrives", "Reply to the email by Thursday afternoon", "Ask another student to register them"], answer: 2, explanation: "The final paragraph asks students who cannot attend to reply by Thursday afternoon." }
                ]
            },
            {
                type: "mcq",
                title: "Practice 6 · Building Water Notice",
                materialTitle: "NOTICE TO RESIDENTS · WATER MAINTENANCE",
                material: "Tuesday, 9:00 a.m.–1:00 p.m. · Building B only\nThe water supply to Building B will be turned off while engineers replace a pipe. Residents of Building A will not be affected. Please store water for cooking and washing before 9:00 a.m. Drinking water will be available from a temporary tank in the car park, next to the bicycle racks. When the supply returns, water may look cloudy for a short time; run the cold tap for two minutes before using it. If the work finishes early, a notice will be posted in the lobby.",
                instruction: "Read the notice and choose the best answer. The answer is always supported by the text.",
                questions: [
                    { question: "Which residents will be without water on Tuesday?", choices: ["Everyone in the complex", "Residents of Building A", "Residents of Building B", "Only residents on the top floors"], answer: 2, explanation: "The heading and the first sentences say Building B only, and Building A will not be affected." },
                    { question: "What should a resident do if the water looks cloudy afterwards?", choices: ["Contact the engineers immediately", "Boil it before drinking", "Wait until the next day", "Run the cold tap for two minutes"], answer: 3, explanation: "The notice says cloudiness is expected for a short time and advises running the cold tap for two minutes before using the water." },
                    { question: "Where can residents get drinking water during the shut-off?", choices: ["At the lobby desk", "From a temporary tank in the car park", "From the engineers at the pipe", "From the taps in Building A"], answer: 1, explanation: "The notice states that drinking water will be available from a temporary tank in the car park, next to the bicycle racks." }
                ]
            }
        ]
    },

    /* ------------------------------------------------------
       TASK 3 — READ AN ACADEMIC PASSAGE
       ------------------------------------------------------ */
    academic: {
        id: "academic",
        title: "Read an Academic Passage",
        icon: "🔬",
        shortDescription: "Understand main ideas, details, vocabulary, inference, and purpose in university-style passages.",
        facts: {
            items: [
                { value: "5 questions", label: "Per passage", note: "Prep sources report one passage with five multiple-choice questions. ETS lists 5–15 items for this task type." },
                { value: "Up to about 200 words", label: "Passage length", note: "ETS says extended academic texts may reach about 200 words. Earlier TOEFL passages were much longer, roughly 700 words." },
                { value: "Five skills", label: "What is tested", note: "Main ideas, key details, inferred meanings, idea relationships, and rhetorical structure (ETS wording, summarised)." }
            ],
            note: "The passage stays visible while you answer, and a question may refer to any part of it, so build the habit of finding evidence rather than relying on memory."
        },
        explanation: "A short university-style passage explains a topic, process, finding, or relationship. Questions test the central point, supporting details, vocabulary in context, reasonable inferences, and why the author included a sentence or example. Use the passage, not outside knowledge, as your evidence.",
        strategy: [
            "Read for the topic, the author’s main point, and the way the paragraphs are organised.",
            "For a detail question, search the whole passage for the sentence that discusses the topic; do not expect the question to name a paragraph.",
            "For vocabulary, test each option in the sentence and check the meaning.",
            "For an inference, combine passage clues without adding an unsupported assumption.",
            "For a purpose question, ask why the sentence or example is there."
        ],
        mistakes: [
            "Choosing an option that repeats words from the passage but changes the idea.",
            "Confusing the topic with the main point about the topic.",
            "Treating a possibility (may, can) as a certainty.",
            "Using outside knowledge instead of the passage.",
            "Choosing an option that is true but answers a different question."
        ],
        lessonModules: [
            {
                heading: "1. Build a simple map of the passage",
                intro: "Academic passages explain a concept, a process, a study, or a relationship. You do not need background knowledge, but you do need a quick picture of how the ideas fit together.",
                bullets: [
                    "Read the opening for the topic and the author’s main point about it.",
                    "Give each paragraph a job: introduce an idea, give evidence, explain a cause, compare options, or discuss a limit.",
                    "Watch signal words. However and yet signal contrast; for example signals an illustration; therefore and as a result signal a consequence; in addition signals another point.",
                    "Keep a short mental map instead of memorising every sentence. You can return to the text for details."
                ]
            },
            {
                heading: "2. Main idea versus topic versus detail",
                intro: "Many wrong answers are true statements at the wrong level.",
                bullets: [
                    "The topic is the subject area (for example, coastal forests). The main idea says what the author claims about it.",
                    "A correct main-idea option covers both paragraphs or the whole development of the passage.",
                    "An option that is too narrow describes one example or one detail. An option that is too broad goes beyond the passage.",
                    "Check your choice by asking whether every major part of the passage supports it."
                ]
            },
            {
                heading: "3. Stated detail questions",
                intro: "These questions ask what the passage says about one point. The answer is a paraphrase of a sentence in the text.",
                bullets: [
                    "Find the sentence that discusses the topic, then compare its exact meaning with each option.",
                    "Wrong options often change a number, a cause, a condition, or the direction of a relationship.",
                    "Be careful with qualifiers. ‘Some’ is not ‘all’; ‘may’ is not ‘will’; ‘often’ is not ‘always’.",
                    "Choose the option that restates the passage in other words, not the one that copies the most words."
                ]
            },
            {
                heading: "4. Vocabulary in context",
                intro: "You are asked what a word means in this passage, not what it can mean in a dictionary.",
                bullets: [
                    "Read the sentence before and after the word. Definitions, examples, and contrasts often explain it indirectly.",
                    "Decide whether the word expresses a positive or negative idea, an action or a quality, and how it relates to the surrounding words.",
                    "Replace the word with each option. The sentence should keep the same meaning and sound natural.",
                    "Beware of common meanings. A familiar meaning may be a distractor when the passage uses a different one."
                ]
            },
            {
                heading: "5. Inference questions",
                intro: "An inference is a conclusion that the passage supports without stating it directly.",
                bullets: [
                    "Find the clues first, then decide what follows from them.",
                    "A correct inference needs only the passage clues. If you must add a new fact or opinion, the option is too far.",
                    "Write the chain in simple form: clue A + clue B → conclusion. If the chain needs a third unsupported step, reject the option.",
                    "Qualified claims need qualified inferences. If the passage says ‘may help’, an option that says ‘always prevents’ is too strong."
                ]
            },
            {
                heading: "6. Author purpose and organisation",
                intro: "These questions ask why the author included a sentence, example, or contrast.",
                bullets: [
                    "An example usually illustrates a claim. A contrast usually limits or complicates a claim. A statistic usually supports a claim.",
                    "Look at the sentence before and after the one in the question. Its job is shown by the way it connects to those neighbours.",
                    "Choose the option that names the job the sentence does in the passage, not merely its topic."
                ]
            },
            {
                heading: "7. Beating distractors with evidence",
                intro: "Make every answer earn its place by pointing to the text.",
                bullets: [
                    "Find the sentence or pair of sentences that supports your option. If you cannot, be cautious.",
                    "Check for reversals: cause and effect swapped, benefit and risk swapped, possibility treated as certainty.",
                    "Check scope: one place does not mean everywhere, and one study does not mean every study.",
                    "Watch extreme words such as only, always, never, completely, and all. They are wrong when the passage makes a qualified claim.",
                    "After you answer, write a one-sentence reason. If you cannot, review the text again."
                ]
            }
        ],
        sets: [
            {
                type: "mcq",
                title: "Practice 1 · Mangrove Forests",
                materialTitle: "WHY MANGROVES MATTER",
                material: "Mangrove forests grow along tropical and subtropical coastlines, where salt-tolerant trees thrive in tidal water. Their tangled roots slow moving water and trap sediment, helping protect shorelines from erosion. The roots also create sheltered habitats for young fish, crabs, and other small animals. Many species use these areas as nurseries before moving into deeper water.\n\nMangroves can also store large amounts of carbon in their trunks, roots, and the soil beneath them. When forests are cleared, some of this stored carbon may be released into the atmosphere. Yet mangroves face pressure from coastal development, pollution, and the conversion of wetlands into other land uses. Protecting these forests therefore supports both coastal communities and wildlife.\n\nRestoration can help, but it is slow. Planting young trees in suitable tidal areas can bring back part of the lost habitat. However, a newly planted forest may need decades before it stores as much carbon or shelters as many animals as an older one. Restoration also depends on repairing the natural flow of tidal water to the site; without it, many seedlings fail to survive.",
                instruction: "Read the passage. Choose the best answer for each question. A question can refer to any part of the passage.",
                questions: [
                    { question: "What is the passage mainly about?", choices: ["How tropical trees are used to produce timber", "The history of coastal cities in tropical regions", "Why most fish avoid shallow coastal water", "The benefits of mangroves, the pressures on them, and the challenges of restoring them"], answer: 3, explanation: "The three paragraphs cover what mangroves provide, what threatens them, and why restoration is slow. The other options are unrelated or far too narrow." },
                    { question: "According to the passage, how do mangrove roots help protect shorelines?", choices: ["They increase the speed of tidal water", "They slow water and trap sediment", "They remove all salt from seawater", "They prevent coastal development"], answer: 1, explanation: "The first paragraph states that tangled roots slow moving water and trap sediment, which reduces erosion." },
                    { question: "The word ‘sheltered’ in the first paragraph is closest in meaning to:", choices: ["protected", "distant", "crowded", "temporary"], answer: 0, explanation: "The roots create places where young animals have protection from danger and strong water movement." },
                    { question: "What can be inferred about a newly planted mangrove forest?", choices: ["It will quickly match the benefits of an older forest", "It does not need the natural flow of tidal water", "It may take a long time to provide the same benefits as an older forest", "It cannot store any carbon"], answer: 2, explanation: "The third paragraph says a newly planted forest may need decades before it stores as much carbon or shelters as many animals as an older one." },
                    { question: "Why does the author mention carbon stored in mangrove soil?", choices: ["To show that mangroves have no effect on climate", "To explain another benefit of mangroves and a consequence of clearing them", "To argue that all soils contain the same amount of carbon", "To describe how fish obtain food"], answer: 1, explanation: "The carbon detail adds another environmental benefit and explains why clearing forests can release carbon back into the atmosphere." }
                ]
            },
            {
                type: "mcq",
                title: "Practice 2 · Sleep and Memory",
                materialTitle: "SLEEP AND LEARNING",
                material: "Learning does not end when a person closes a book. During sleep, the brain continues to process some of the information gathered during the day. Researchers have found evidence that sleep helps stabilize certain memories, making them easier to retrieve later. This process does not mean that every detail is stored perfectly; rather, some information becomes more durable over time.\n\nThe relationship between sleep and learning is one reason that regular rest is often recommended during periods of study. Staying awake longer may create extra time for practice, but fatigue can reduce attention and make new information harder to understand. The most useful study schedule therefore balances focused practice with sufficient sleep, rather than treating sleep as time that can always be sacrificed.\n\nTiming may matter as well. Some studies suggest that reviewing material shortly before sleep can help, because the information is fresh when the brain begins processing it. Even so, a short review is not a substitute for understanding the material in the first place. A learner who has not grasped an idea during the day has little to stabilize at night.",
                instruction: "Read the passage and answer the questions. Use the author’s exact claims as evidence.",
                questions: [
                    { question: "What is the main point of the passage?", choices: ["People should stop studying during the day", "Every memory becomes permanent after one night", "Sleep can support memory, so study plans should include enough rest", "Researchers have proved that practice is unnecessary"], answer: 2, explanation: "The passage explains that sleep can stabilize some memories and recommends balancing study with rest." },
                    { question: "According to the passage, why might reviewing material shortly before sleep help?", choices: ["The information is still fresh when the brain begins processing it", "Sleep removes the need to understand the material", "The brain stops processing information during review", "Fatigue improves attention"], answer: 0, explanation: "The third paragraph says the information is fresh when the brain begins processing it. It also warns that review cannot replace understanding." },
                    { question: "The word ‘durable’ in the first paragraph is closest in meaning to:", choices: ["confusing", "immediate", "unimportant", "long-lasting"], answer: 3, explanation: "Here ‘durable’ describes information that stays stable over time, which means long-lasting." },
                    { question: "What can be inferred about studying while very tired?", choices: ["It always produces higher scores", "It may be less effective because attention can decrease", "It removes the need to review information", "It improves every type of memory equally"], answer: 1, explanation: "The passage says fatigue can reduce attention and make new information harder to understand." },
                    { question: "Why does the author contrast extra study time with fatigue?", choices: ["To argue that all studying should happen at night", "To suggest that students should never practise", "To show that more study time is not always better if it reduces rest and attention", "To show that sleep and memory are unrelated"], answer: 2, explanation: "The contrast supports the conclusion that a useful schedule balances focused practice with sufficient sleep." }
                ]
            },
            {
                type: "mcq",
                title: "Practice 3 · Why Cities Feel Hotter",
                materialTitle: "THE URBAN HEAT ISLAND",
                material: "Cities often feel warmer than the surrounding countryside, a pattern known as the urban heat island effect. Dark roofs and pavements absorb sunlight during the day and release it slowly after sunset, so temperatures fall less at night in built-up areas. Buildings also block wind, which reduces natural cooling. In addition, there are fewer plants to shade the ground or release moisture into the air.\n\nPlanners have tested several responses. Painting roofs in light colours reflects more sunlight, and planting trees along streets provides shade. Yet these measures work best when applied widely; a single green roof may lower temperatures inside one building without noticeably changing the surrounding neighbourhood.\n\nThe effect matters for more than comfort. Warm nights give people less chance to recover from daytime heat, and they increase the demand for air conditioning. That demand raises electricity use, which in turn can add to the heat released into city streets. Reducing the effect can therefore improve health and lower energy costs at the same time. Cities that plan for the effect early can often avoid the most expensive solutions later.",
                instruction: "Read the passage and choose the best answer. Base every answer on the text.",
                questions: [
                    { question: "What is the passage mainly about?", choices: ["Why dark roofs are cheaper than light roofs", "Why cities are warmer than the countryside, why this matters, and how planners respond", "How wind creates moisture in the air", "Why rural areas have no buildings"], answer: 1, explanation: "The first paragraph explains causes, the second describes planners’ responses, and the third explains why the effect matters." },
                    { question: "According to the passage, why do built-up areas cool less at night?", choices: ["Trees release heat after sunset", "Buildings produce moisture", "Wind speeds are higher in cities", "Dark surfaces release absorbed heat slowly"], answer: 3, explanation: "The passage says dark roofs and pavements absorb sunlight and release it slowly after sunset." },
                    { question: "The word ‘measures’ in the second paragraph is closest in meaning to:", choices: ["calculations", "rules", "actions", "sizes"], answer: 2, explanation: "Painting roofs and planting trees are steps planners take, so ‘measures’ means actions." },
                    { question: "What can be inferred about heavy air-conditioning use in a warm city?", choices: ["It may make the heat problem worse", "It removes the urban heat island effect", "It is used only in the countryside", "It lowers electricity use"], answer: 0, explanation: "The third paragraph says air-conditioning demand raises electricity use, which can add to the heat released into the streets." },
                    { question: "Why does the author include the example of a single green roof?", choices: ["To argue that green roofs should be banned", "To show why measures need to be applied widely to affect a whole area", "To explain how sunlight is absorbed", "To compare roofs in different countries"], answer: 1, explanation: "The example supports the point that measures work best when applied widely, since one roof has a limited local effect." }
                ]
            }
        ]
    }
};

/* =========================================================
   SESSION STATE
   ========================================================= */

const toeflReadingCompletedTasks = new Set();
let toeflReadingCurrentTask = null;
let toeflReadingSetIndex = 0;
let toeflReadingAnswers = {};
let toeflReadingClozeChecked = false;

/* =========================================================
   NAVIGATION
   ========================================================= */

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
<h3>${escapeTOEFLReadingHTML(task.title)}</h3>
<p>${escapeTOEFLReadingHTML(task.shortDescription)}</p>
<button type="button" class="start-button">${completed ? "Practise Again →" : "Learn & Practise →"}</button>
`;
        card.querySelector("button").addEventListener("click", () => openTOEFLReadingTask(task.id));
        container.appendChild(card);
    });

    const count = toeflReadingCompletedTasks.size;
    const total = Object.keys(toeflReadingTasks).length;
    const progress = document.getElementById("toefl-reading-overall-progress");
    if (progress) progress.textContent = `${count} of ${total} task types completed`;
    const bar = document.getElementById("toefl-reading-overall-bar");
    if (bar) bar.style.width = `${(count / total) * 100}%`;
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

function backToTOEFLReadingHome() {
    const home = document.getElementById("toefl-reading-home");
    const activity = document.getElementById("toefl-reading-activity");
    if (!home || !activity) return;
    home.style.display = "block";
    activity.style.display = "none";
    renderTOEFLReadingTaskCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   ACTIVITY RENDERING
   ========================================================= */

function renderTOEFLReadingActivity() {
    const task = toeflReadingTasks[toeflReadingCurrentTask];
    const practice = task.sets[toeflReadingSetIndex];
    const container = document.getElementById("toefl-reading-activity");

    const strategyHTML = task.strategy.map((item, index) =>
        `<li><span>${index + 1}</span><p>${escapeTOEFLReadingHTML(item)}</p></li>`).join("");
    const mistakesHTML = task.mistakes.map(item => `<li>${escapeTOEFLReadingHTML(item)}</li>`).join("");

    const detailedLessonHTML = (task.lessonModules || []).map(module => {
        const bullets = (module.bullets || []).map(item => `<li>${escapeTOEFLReadingHTML(item)}</li>`).join("");
        return `
<article class="toefl-reading-deep-module">
<h4>${escapeTOEFLReadingHTML(module.heading)}</h4>
<p>${escapeTOEFLReadingHTML(module.intro)}</p>
<ul>${bullets}</ul>
</article>`;
    }).join("");

    const facts = task.facts;
    const factsHTML = facts ? `
<section class="toefl-reading-facts" aria-label="Key facts about this task">
<p class="course-label">KEY FACTS</p>
<div class="toefl-reading-targets">${facts.items.map(item => `<div class="toefl-reading-target"><strong>${escapeTOEFLReadingHTML(item.value)}</strong><span><b>${escapeTOEFLReadingHTML(item.label)}.</b> ${escapeTOEFLReadingHTML(item.note)}</span></div>`).join("")}</div>
<p class="toefl-reading-instruction">${escapeTOEFLReadingHTML(facts.note)} <em>Checked against the ETS TOEFL iBT 2026 test specification, which ETS says may receive minor revisions.</em></p>
</section>` : "";

    const practiceHTML = practice.type === "cloze"
        ? renderTOEFLReadingCloze(practice)
        : renderTOEFLReadingMCQ(practice);

    const setLabel = `Practice ${toeflReadingSetIndex + 1} of ${task.sets.length}`;
    const gapCount = practice.type === "cloze" ? practice.parts.filter(p => typeof p === "object").length : 0;
    const pillText = practice.type === "cloze" ? `${gapCount} word gaps` : `${practice.questions.length} questions`;

    container.innerHTML = `
<div class="toefl-reading-activity-topbar">
<button type="button" class="secondary-button" onclick="backToTOEFLReadingHome()">← Reading tasks</button>
<span class="toefl-reading-set-label">${setLabel}</span>
</div>

${factsHTML}

<div class="toefl-reading-lesson-grid">
<section class="toefl-reading-explainer">
<p class="course-label">TASK EXPLANATION</p>
<h3>${task.icon} ${escapeTOEFLReadingHTML(task.title)}</h3>
<p>${escapeTOEFLReadingHTML(task.explanation)}</p>
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
<span class="toefl-reading-progress-pill" id="toefl-reading-set-progress">${pillText}</span>
</div>
<p class="toefl-reading-instruction">${escapeTOEFLReadingHTML(practice.instruction)}</p>
${practiceHTML}
<div class="toefl-reading-set-result" id="toefl-reading-set-result" aria-live="polite"></div>
<button type="button" class="start-button toefl-reading-continue" id="toefl-reading-continue" style="display:none" onclick="nextTOEFLReadingSet()">Continue →</button>
</section>
`;
}

/* =========================================================
   COMPLETE THE WORDS
   ========================================================= */

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
    result.innerHTML = `<strong>Your result: ${correctCount} / ${blanks.length}</strong><p>Each word is checked for an exact missing-letter match. Read the reasoning under every gap, including the ones you got right, then reset the passage to try it again.</p>`;
    const progress = document.getElementById("toefl-reading-set-progress");
    if (progress) progress.textContent = `${correctCount}/${blanks.length} correct`;
    document.getElementById("toefl-reading-continue").style.display = "inline-flex";
}

/* =========================================================
   MULTIPLE-CHOICE SETS
   ========================================================= */

function renderTOEFLReadingMCQ(practice) {
    let html = `<div class="toefl-reading-source"><h4>${escapeTOEFLReadingHTML(practice.materialTitle)}</h4><p>${escapeTOEFLReadingHTML(practice.material).replace(/\n/g, "<br>")}</p></div>`;
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

    document.querySelectorAll(`[data-reading-question="${questionIndex}"]`).forEach(button => {
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
        result.innerHTML = `<strong>Practice result: ${correctCount} / ${practice.questions.length}</strong><p>Review the explanations above, especially for any question you missed.</p>`;
        document.getElementById("toefl-reading-continue").style.display = "inline-flex";
    }
}

/* =========================================================
   SET FLOW
   ========================================================= */

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

function escapeTOEFLReadingHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
