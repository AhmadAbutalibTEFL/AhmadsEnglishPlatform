/* =========================================================
   IELTS MODULE: Phase 1 (foundation and dashboard)

   Everything lives under window.IELTS. The only global function is
   showIELTS(view, track), which navigation.js wraps (like showESTCourse
   etc.) so the browser history and #/ielts/... routes stay in one place.

   Views:  ""  dashboard      course   Guided Course overview
           library  Practice Library      listening  Listening hub
           reading | writing | speaking   planned-skill screens

   Listening content comes from ielts/listening-data.js (window.IELTS.listeningData).
   The introductory questionnaire scores answers locally; no audio or progress tracking is included yet.
   Load listening-data.js and then this file BEFORE navigation.js.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};

    var STORAGE_KEY = "ahmads-english.ielts.v1.track";

    var TRACKS = {
        academic: "Academic",
        general: "General Training"
    };
    var DEFAULT_TRACK = "academic";

    /* ---------- content (data-driven: extend these arrays later) ---------- */

    var SKILLS = [
        {
            id: "listening", icon: "🎧", title: "Listening",
            summary: "Follow spoken English and answer a range of question types.",
            available: true,
            statusText: "Interactive activity available",
            statusKind: "open"
        },
        { id: "reading", icon: "📖", title: "Reading",
          summary: "Build strategies for the IELTS Reading passages and question types.",
          available: true, statusText: "Lessons available", statusKind: "open" },
        { id: "writing", icon: "✍️", title: "Writing",
          summary: "Prepare for Writing Task 1 and Writing Task 2.",
          available: true, statusText: "Lessons available", statusKind: "open" },
        { id: "speaking", icon: "🎙️", title: "Speaking",
          summary: "Prepare for Speaking Parts 1 to 3.",
          available: true, statusText: "Lessons available", statusKind: "open" }
    ];

    // Based on the instructor's eight-session intensive course.
    // status: "planned" until real lessons and activities exist for that block.
    var COURSE = [
        { id: "s1", label: "Session 1", skill: "Listening", title: "Listening introduction",
          topics: ["Introduction to IELTS Listening", "Multiple choice", "Matching and classification"], status: "available", hub: "listening" },
        { id: "s2", label: "Session 2", skill: "Listening", title: "Listening question types and sub-skills",
          topics: ["Plan, map and diagram labelling", "Form, note, table and summary completion", "Sentence completion", "Short-answer questions", "Prediction: grammar form, synonyms, subject and function", "Paraphrasing: synonyms, word form, sentence structure, active/passive"], status: "available", hub: "listening" },
        { id: "s3-4", label: "Sessions 3\u20134", skill: "Reading", title: "Reading",
          topics: ["Skimming and scanning", "True / False / Not Given", "Matching headings", "Multiple choice", "Summary and sentence completion", "Short-answer questions"], status: "available", hub: "reading" },
        { id: "s5-6", label: "Sessions 5\u20136", skill: "Writing", title: "Writing Task 1 and Task 2",
          topics: ["Task 1: describing graphs, charts and diagrams", "Task 1: comparing and contrasting", "Task 2: planning and structuring an argument", "Task 2: coherence, cohesion and vocabulary range"], status: "available", hub: "writing" },
        { id: "s7-8", label: "Sessions 7\u20138", skill: "Speaking", title: "Speaking Parts 1\u20133",
          topics: ["Part 1: fluency and personal responses", "Part 2: organising a long turn", "Part 3: developing abstract discussion", "General guidance and band descriptors"], status: "available", hub: "speaking" }
    ];
    var COURSE_MOCKS = { title: "Two full mock exams", note: "Part of the overall course plan.", status: "planned" };

    var LISTENING_QUIZ = [
        { id: 1, type: "single", prompt: "How long is the Listening section of the IELTS test?", options: ["30 minutes", "40 minutes", "50 minutes", "15 minutes"], answer: "1", explanation: "For paper-based tests, allow about 30 minutes for Listening plus 10 minutes to transfer answers." },
        { id: 2, type: "single", prompt: "How much time is allotted for transferring answers onto the answer sheet in the Listening section?", options: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"], answer: "1" },
        { id: 3, type: "single", prompt: "In the computer-based IELTS, how much time is given for checking answers in the Listening section?", options: ["1 minute", "2 minutes", "3 minutes", "5 minutes"], answer: "1" },
        { id: 4, type: "single", prompt: "How many parts are there in the Listening section of the IELTS test?", options: ["2", "3", "4", "5"], answer: "2" },
        { id: 5, type: "single", prompt: "How many questions are there in each part of the Listening section?", options: ["5", "10", "15", "20"], answer: "1" },
        { id: 6, type: "single", prompt: "Which part of the Listening test involves a conversation between two speakers?", options: ["Part 1", "Part 2", "Part 3", "Part 4"], answer: "0" },
        { id: 7, type: "single", prompt: "What type of genre is typically found in Section 4 of the Listening test?", options: ["Conversation between two speakers", "Talk by one speaker about an everyday social topic", "Conversation between multiple speakers", "Academic lecture on a subject"], answer: "3", note: "Wording revised to make the intended answer unambiguous." },
        { id: 8, type: "single", prompt: "In which part of the Listening test is the topic focused on educational needs and training sessions?", options: ["Part 1", "Part 2", "Part 3", "Part 4"], answer: "2" },
        { id: 9, type: "single", prompt: "What is the maximum number of words allowed for writing answers in the Listening section?", options: ["One word", "Two words", "Three words", "It changes for the next set of questions"], answer: "3" },
        { id: 10, type: "single", prompt: "How many raw score points out of 40 are required to achieve a Listening band score of 7?", options: ["16", "23", "30", "35"], answer: "2" },
        { id: 11, type: "multi", prompt: "Questions 11–12. Which TWO of the following keys to success in the IELTS Listening section should you eliminate as irrelevant?", options: ["Practice", "Memorization", "Synonyms", "Identify Question Type", "Follow Answer Strategy", "Vocabulary", "Handwriting practice"], answer: ["1", "6"] }
    ];



    /* Instructor-aligned Listening teaching lessons. Mini-practices below are original
       illustrative text-based exercises, not publisher test items or audio simulations. */
    var LISTENING_LESSONS = [
      {id:"mcq",session:1,title:"Multiple Choice",type:"Question type",purpose:"Choose one answer or the required number of options. The recording may mention several options, so match meaning—not just repeated words.",before:["Read the task instruction first and mark how many answers are required.","Read the question and options; underline the key idea in each.","Predict synonyms and the kind of information that would prove each option."],during:["Follow the recording in question order.","Keep listening after a possible answer: speakers may correct themselves or reject an earlier idea.","Notice contrast and correction signals such as but, however, actually, although and instead."],after:["Check that you selected the required number of options.","Ask what evidence supports the choice and why the distractors are wrong."],dos:["Paraphrase options in your own words before listening.","Keep a tentative mark until the speaker finishes the idea."],donts:["Don't choose an option only because you hear the same word.","Don't stop listening after the first matching phrase."],example:"We first considered the 9 a.m. tour, but it was fully booked. The 11 a.m. tour still has places, so let's take that one.",question:"Which tour do they decide to take?",options:["The 9 a.m. tour","The 11 a.m. tour","They decide not to go"],answer:1,feedback:"The speaker rejects 9 a.m. because it is fully booked, then chooses 11 a.m. The first time mentioned is a distractor."},
      {id:"matching",session:1,title:"Matching and Classification",type:"Question type",purpose:"Match people, items or statements in the task to options. You must track which speaker or item each detail belongs to and recognise paraphrases.",before:["Read every option and identify the difference between them.","Predict how each option could be paraphrased.","Check whether options can be used once, more than once, or not at all."],during:["Follow the items in the order they appear in the recording, as the handout advises.","Listen for who said what, their opinion, and any change of view.","Mark an option used only if the instructions say it cannot be reused."],after:["Check that every question has a match and each match fits the correct person/item.","Review the words that signalled the match, not just a shared keyword."],dos:["Track speakers and their attitudes.","Use elimination carefully when an option is confirmed."],donts:["Don't assume a repeated word guarantees a match.","Don't cross out an option unless the instructions make it single-use."],example:"Mina: The online course is flexible, but I learn better when I can ask questions in person. Omar: I prefer online study because I can fit it around work.",question:"Who prefers online study because of work commitments?",options:["Mina","Omar","Both speakers"],answer:1,feedback:"Omar explicitly says he can fit online study around work. Mina values asking questions in person."},
      {id:"map",session:2,title:"Plan, Map and Diagram Labelling",type:"Question type",purpose:"Connect spoken directions or descriptions to a visual. The task may ask you to select a label from a list or write a word you hear.",before:["Read the title and instructions; inspect the whole visual.","Locate the entrance, compass points, corridors, landmarks and labels already supplied.","Trace the numbered route and predict likely direction language."],during:["Listen for signposting: first, next, opposite, beyond, on your left, at the far end.","Keep your position on the map as the speaker moves through the space.","Watch for corrections: a place may have moved or a first suggestion may be rejected."],after:["Check that each answer belongs in the numbered location.","Follow the word limit and copy labels accurately."],dos:["Use fixed landmarks to orient yourself.","Listen for relationships between places, not isolated nouns."],donts:["Don't guess from the picture alone.","Don't confuse left/right from the speaker's viewpoint with your own imagined viewpoint."],example:"Enter through the main door. The reception desk is straight ahead; the café is to its left. The library is beyond reception, at the end of the corridor.",question:"Which place is at the end of the corridor?",options:["The café","The library","The reception desk"],answer:1,feedback:"The speaker explicitly places the library at the end of the corridor. Reception is straight ahead and the café is to its left."},
      {id:"completion",session:2,title:"Form, Note, Table and Summary Completion",type:"Question type",purpose:"Fill gaps in an outline of facts or main ideas. Forms often capture details; notes and summaries condense information; tables organise categories; flow charts show stages.",before:["Read the word limit and the title.","Use the surrounding words to predict whether a name, number, noun, adjective or other form is needed.","Notice categories such as time, price, place, reason or stage."],during:["Listen for the idea even when the speaker uses different wording.","Wait for corrections and the completed meaning before writing.","Write the exact information needed; do not add words that are not required."],after:["Count words against the stated limit.","Check spelling, grammar, singular/plural and whether the answer fits the gap."],dos:["Predict the answer type before the audio reaches the gap.","Use headings and layout to organise your attention."],donts:["Don't exceed the word limit.","Don't write the first number or detail before the speaker corrects it."],example:"The workshop begins at 10:15. Sorry, that's the old schedule—the new start time is 10:50.",question:"What time does the workshop begin?",options:["10:15","10:50","11:15"],answer:1,feedback:"The speaker corrects the original time. The final confirmed time is 10:50."},
      {id:"sentence",session:2,title:"Sentence Completion",type:"Question type",purpose:"Complete a sentence that summarises important information from the recording. The missing words must fit both the meaning and the grammar of the sentence.",before:["Read the whole sentence, not only the gap.","Predict the grammar form and semantic category required.","Underline nearby clues and consider likely paraphrases."],during:["Listen for the idea expressed in the sentence, which may be paraphrased in the recording.","Use the words before and after the gap to locate the answer.","Listen through the end of the idea in case the speaker qualifies or corrects it."],after:["Read the completed sentence aloud mentally to check grammar and meaning.","Check spelling and the exact word limit."],dos:["Use context to predict whether a noun, verb, adjective or number is needed.","Check that the answer expresses the speaker's intended meaning."],donts:["Don't copy a nearby word that makes the sentence ungrammatical.","Don't assume the recording repeats the sentence word for word."],example:"The research team postponed the outdoor survey because of heavy rain.",question:"The outdoor survey was postponed because of ______.",options:["heavy rain","the research team","the equipment"],answer:0,feedback:"Heavy rain gives the reason and fits naturally after 'because of'."},
      {id:"short-answer",session:2,title:"Short-answer Questions",type:"Question type",purpose:"Answer direct questions with a brief fact from the recording, often a person, place, reason, number or object.",before:["Read each question and the word limit.","Identify exactly what is being asked: who, where, when, why, how many or what.","Predict the kind of answer and possible paraphrases."],during:["Listen for the specific fact that answers the question—not merely related information.","Pay attention to words before and after the answer, and to corrections."],after:["Answer only what is asked.","Check word count, spelling, number format and grammar."],dos:["Keep the answer concise and relevant.","Use the question's focus to filter details."],donts:["Don't give an explanation when only a name or number is requested.","Don't exceed the stated word limit."],example:"The visitor centre is open Tuesday to Sunday. On Mondays it is closed for maintenance.",question:"On which day is the visitor centre closed?",options:["Monday","Tuesday","Sunday"],answer:0,feedback:"The centre is closed on Mondays. Tuesday to Sunday are its opening days."},
      {id:"prediction",session:2,title:"Prediction Before Listening",type:"Sub-skill",purpose:"Use the preview time to predict what kind of information is likely to fill a gap or answer a question. Prediction narrows your attention; it does not guarantee the answer.",before:["Grammar: predict the form (noun, verb, adjective, number, etc.).","Synonyms: think of alternative expressions for key words.","Subject: identify whether you need a name, phone number, address, price or other detail.","Function: identify whether the task is asking for a label, list item, reason, instruction or example."],during:["Listen for meaning and the predicted category, while staying open to a different wording.","Adjust your prediction when the recording provides evidence."],after:["Check whether the answer fits the grammar and task purpose."],dos:["Use context clues in the words around the gap.","Make a quick prediction, then verify it from what you hear."],donts:["Don't treat a prediction as a fact.","Don't ignore an answer just because its wording differs from your prediction."],example:"Please call us on ______ to confirm your booking.",question:"What type of information is most likely required?",options:["A phone number","A person's opinion","A place description"],answer:0,feedback:"The verb 'call' and phrase 'confirm your booking' strongly suggest a phone number."},
      {id:"paraphrasing",session:2,title:"Recognising Paraphrasing",type:"Sub-skill",purpose:"The question paper and recording often express the same idea differently. Your job is to recognise meaning, not wait for identical words.",before:["Synonyms: cost → price; increasing → rising (context matters).","Word form: develop → development; grow → growth.","Sentence structure: combine ideas with a relative clause or other structure.","Active/passive: 'A tornado destroyed the house' ↔ 'The house was destroyed by a tornado'."],during:["Listen for equivalent meaning and relationships, not just matching vocabulary.","Check whether the same people, actions, time and cause are preserved."],after:["Verify that the paraphrase keeps the original meaning; synonyms are not always interchangeable."],dos:["Build synonym awareness in context.","Use grammar and surrounding meaning together."],donts:["Don't assume every similar word means exactly the same thing.","Don't match a keyword while ignoring a changed meaning or contrast."],example:"Question wording: The cost of transport increased. Recording wording: Travel became more expensive.",question:"Which paraphrase keeps the same meaning?",options:["Travel became cheaper.","Travel became more expensive.","Travel was cancelled."],answer:1,feedback:"'Cost increased' and 'became more expensive' express the same change."}
    ];

    /* Reading teaching lessons (Sessions 3–4). Original illustrative examples only;
       no Cambridge passages or official test items are reproduced. */
    var READING_LESSONS = [
      {id:"skimming",session:"3–4",title:"Skimming and Scanning",type:"Sub-skill",purpose:"Skimming means reading quickly for the overall meaning of a passage. Scanning means moving your eyes rapidly to find a specific piece of information. Both are essential time-management tools in the IELTS Reading test.",before:["Before skimming, read the title, headings and first sentence of each paragraph to predict the topic.","Before scanning, identify the key word or type of information you are looking for (a name, date, number, etc.)","Never read every word during the preview phase — save that depth for the question that needs it."],during:["Skim the whole passage first (about 2–3 minutes); resist the urge to read every sentence.","When a question points to a section, scan only that section for the answer.","Use paragraph numbers and text features (italics, bold, capitals) as navigation aids."],after:["Verify that the word or phrase you found actually answers the question — don't assume a keyword match is enough.","If you cannot find an answer after two scans, move on and return if time allows."],dos:["Skim first, then go back with the specific question in mind.","Use the structure of the passage (headings, topic sentences) to locate information faster."],donts:["Don't read the whole passage word for word before answering any questions.","Don't confuse skimming (general gist) with scanning (specific detail)."],example:"The article opens with a definition of urban heat islands, then discusses three causes across two paragraphs, and ends with proposed solutions.",question:"If a question asks for the 'proposed solutions', where would you scan?",options:["The opening definition paragraph","The final paragraph(s) near the end of the article","The two paragraphs on causes"],answer:1,feedback:"The article structure places solutions after causes, so scanning near the end is the most efficient approach."},
      {id:"tfng",session:"3–4",title:"True / False / Not Given",type:"Question type",purpose:"You must decide whether a statement agrees with the passage (True), contradicts it (False), or whether the passage contains no information about it (Not Given). 'Not Given' is the most commonly missed category.",before:["Read each statement carefully and identify the main claim — often a comparison, reason or quantity.","Underline the subject, verb and key qualifier (most, always, only, all, some).","Predict roughly where in the passage the information should be."],during:["Find the relevant part of the passage and compare its meaning to the statement — word for word is not enough; look at the overall meaning.","True: the passage clearly confirms the statement.","False: the passage clearly contradicts it.","Not Given: the topic may appear but the specific claim is neither confirmed nor denied."],after:["Double-check Not Given answers: search the whole passage once more before finalising.","Make sure you have not brought in outside knowledge — answers must come from the text."],dos:["Accept Not Given if the specific claim is simply absent, even if the topic is mentioned.","Compare the meaning of both the statement and the text, not just shared words."],donts:["Don't confuse False with Not Given — False needs a clear contradiction.","Don't rely on keywords alone; paraphrasing is common."],example:"Statement: 'The study concluded that coffee improves long-term memory in elderly patients.'\nPassage: 'Research showed that caffeine had a short-term alertness effect in participants over 60.'",question:"What is the correct answer for the statement above?",options:["True","False","Not Given"],answer:1,feedback:"The passage mentions short-term alertness, not long-term memory — this is a direct contradiction, so the answer is False."},
      {id:"matching-headings",session:"3–4",title:"Matching Headings",type:"Question type",purpose:"Match a list of headings to the paragraphs or sections of the passage. Each heading summarises the main idea of a paragraph, not just a detail mentioned in it.",before:["Read all the headings first so you know the range of options.","Note any headings that are very similar — these are the most likely traps.","Skim each paragraph for its main idea before reading options."],during:["Match the main idea of the paragraph to the heading that best covers the whole paragraph, not just one sentence.","Watch for headings that use synonyms of words in the paragraph.","Eliminate headings that only match a detail or a single sentence."],after:["Check that every used heading fits the paragraph's main point, not a supporting detail.","Verify that you have not used the same heading twice unless the instructions allow it."],dos:["Read the whole paragraph before choosing a heading.","Use the opening and closing sentences of each paragraph as guides to the main idea."],donts:["Don't choose a heading just because it shares a keyword with the paragraph.","Don't read the headings before you have skimmed the paragraphs — you may anchor to a word too early."],example:"Paragraph: 'Urban planners initially believed that wide roads would reduce congestion. However, studies in the 1990s demonstrated that increasing road capacity often attracted more drivers, worsening delays — a phenomenon now called induced demand.'",question:"Which heading best matches this paragraph?",options:["The history of road building","Why wider roads can increase congestion","Solutions proposed by urban planners"],answer:1,feedback:"The paragraph's main idea is that wider roads can worsen congestion (induced demand). The history of road building and proposed solutions are not the paragraph's focus."},
      {id:"reading-mcq",session:"3–4",title:"Multiple Choice",type:"Question type",purpose:"Choose the correct answer from three or four options, or identify two answers from a longer list. The options often paraphrase the passage and include attractive distractors.",before:["Read the question stem carefully — it sets the scope (e.g. 'according to the author', 'the main purpose').","Identify whether you need one or two answers.","Predict the type of information needed before finding it in the passage."],during:["Locate the relevant section of the passage by using a key word from the question stem.","Read the section carefully and compare each option against it.","Eliminate options that contradict the passage or go beyond what the passage says."],after:["Re-read the question and your selected option together to check it answers what was asked.","For two-answer questions, verify that both options are independently supported."],dos:["Use process of elimination — often three options are clearly wrong.","Pay attention to qualifying words (most, only, always, generally) in both the question and the options."],donts:["Don't choose an option just because it sounds plausible from general knowledge.","Don't read too quickly — distractors are often partly true."],example:"Question: According to the passage, why did the project fail?\na) Poor planning  b) Lack of funding  c) Unexpected weather  d) Staff shortages\nThe passage states: 'Despite a generous budget and experienced personnel, the project stalled after unseasonable flooding in the third quarter.'",question:"Which option is correct?",options:["a) Poor planning","b) Lack of funding","c) Unexpected weather"],answer:2,feedback:"The passage explicitly identifies unseasonable flooding as the cause. Budget (funding) was adequate, and staff (personnel) were experienced."},
      {id:"reading-completion",session:"3–4",title:"Summary and Sentence Completion",type:"Question type",purpose:"Fill a gap in a summary or sentence using words from the passage or from a box of options. The answer must fit both the meaning and the grammar of the gap.",before:["Read the whole summary or sentence before focusing on the gap.","Identify the grammatical form required (noun, verb, adjective, etc.).","Use surrounding words to predict the category of information needed."],during:["Locate the relevant part of the passage (the summary usually follows the passage order).","Find the word or phrase that paraphrases the meaning in the summary.","If a word box is given, read every option before selecting one."],after:["Read the completed summary aloud mentally to check grammar and meaning.","Count words against the limit (usually 'no more than two words and/or a number')."],dos:["Use the words before and after the gap as strong clues.","Copy words exactly from the passage when no word box is provided — do not change the form unless required."],donts:["Don't exceed the word limit.","Don't choose a word from the passage only because it appears near the topic — check it fits the gap."],example:"Summary gap: 'The ancient aqueducts allowed water to travel ______ from mountain sources to cities.'\nPassage: 'The engineering of Roman aqueducts exploited gravity to carry water downhill over great distances.'",question:"Which phrase best completes the gap?",options:["over great distances","by gravity alone","through underground channels"],answer:0,feedback:"'Over great distances' directly paraphrases the passage and fits the grammar of the gap. 'By gravity alone' distorts the meaning; underground channels are not mentioned."},
      {id:"reading-short-answer",session:"3–4",title:"Short-answer Questions",type:"Question type",purpose:"Answer questions about the passage using a small number of words taken directly from it. Answers are concise facts: a name, date, place, reason or object.",before:["Read the question carefully — identify what type of information is needed (who, what, where, when, why, how many).","Note the word limit: 'no more than three words' means one, two or three words, not four.","Predict roughly where in the passage the answer will be."],during:["Scan for the specific fact — do not copy large chunks of text.","Find the word or short phrase in the passage that directly answers the question."],after:["Check the word count and that the answer is grammatically sensible.","If a number and a unit are needed (e.g. '200 metres'), both may be required within the word limit."],dos:["Take words directly from the passage — do not paraphrase.","Answer the exact question asked; do not add context that was not asked for."],donts:["Don't exceed the word limit.","Don't write a full sentence when only a word or phrase is needed."],example:"Question (word limit: three words): 'What material did the researchers use to build the prototype?'\nPassage: 'The team constructed a working model using recycled carbon fibre, which proved both lightweight and durable.'",question:"What is the correct answer?",options:["recycled carbon fibre","lightweight and durable recycled carbon fibre","carbon fibre that was both lightweight and durable"],answer:0,feedback:"'Recycled carbon fibre' is three words, directly from the passage, and answers exactly what was asked."}
    ];


    /* Writing practice prompts — original examples only */
    
    /* Writing strategy lessons (Sessions 4–5). Authentic pedagogy from Ahmad's Intensive Course. */
    var WRITING_LESSONS = [
      {
        id: "task1-academic",
        session: "4–5",
        title: "Academic Task 1: Report Structure & Infographic Mastery",
        type: "Question type",
        purpose: "Master the 4-paragraph Academic report structure for graphs, charts, tables, and processes. Formulate clear overviews without data, avoid the 13 fatal report mistakes, and deploy precise trend vocabulary and data prepositions.",
        before: [
          "Identify the chart type (Line, Bar, Pie, Table, Process) and whether data is dynamic (over time) or static.",
          "Check units of measurement (percentages, tonnes, millions) and timeframes to select correct tenses.",
          "Formulate an Overview of 2 main features before writing: never include detailed numbers in the overview."
        ],
        during: [
          "Paragraph 1: Paraphrase the prompt using strong synonyms ('illustrates', 'compares', 'proportions').",
          "Paragraph 2: Write a 2-sentence Overview stating the most prominent trends or major differences.",
          "Paragraphs 3 & 4: Detail the first and second main features with precise figures, dates, and comparisons.",
          "Use varied trend vocabulary (soared, leveled off, fluctuated wildly) and correct prepositions ('peaked at', 'fell to', 'increased by')."
        ],
        after: [
          "Check word count: ensure you comfortably exceed the 150-word minimum (aim for 160–185 words).",
          "Ensure no personal opinions or speculative explanations are included (only report what the visual shows)."
        ],
        dos: [
          "Include a clear, distinct Overview paragraph — omitting an overview caps Task Achievement at Band 5.",
          "Group data logically into two body paragraphs rather than describing data point by point."
        ],
        donts: [
          "Don't give reasons why something happened (e.g. 'oil use rose because cars became popular') — this is penalized.",
          "Don't write more than 200 words; you need 40 minutes for Task 2 which carries double the weight."
        ],
        example: "Prompt: The line graph shows US energy consumption by fuel type from 1980 to 2030.\nDraft Overview: 'Overall, fossil fuels have been the dominant energy type and are projected to continue this trend into the future, whereas nuclear and renewable sources represent a small but steady share.'",
        question: "Why does the draft overview achieve Band 9 for Task Achievement?",
        options: [
          "It summarizes two main general trends clearly without quoting specific numerical data.",
          "It lists every single data point from 1980 to 2030.",
          "It provides the author's personal opinion about renewable green energy."
        ],
        answer: 0,
        feedback: "An IELTS Task 1 Overview must identify the main overall trends or key features in general terms without quoting detailed statistics, which belong in the body paragraphs."
      },
      {
        id: "task2-structure",
        session: "4–5",
        title: "Task 2: Essay Architecture (PEEL Method)",
        type: "Strategy",
        purpose: "Organise your essay into four crisp paragraphs: Introduction (paraphrase + thesis), two body paragraphs following PEEL (Point, Explanation, Example, Link), and a conclusive summary.",
        before: [
          "Analyse prompt keywords, scope, and instructions (e.g., 'Discuss both views', 'To what extent do you agree?').",
          "Spend 3-5 minutes outlining your two main arguments and specific supporting examples.",
          "Formulate a decisive thesis statement before writing a single body sentence."
        ],
        during: [
          "Begin every body paragraph with a distinct topic sentence stating your central point.",
          "Elaborate with explanation: why or how does this occur? Avoid unsubstantiated claims.",
          "Support with a concrete example or evidence, then link back to the prompt question."
        ],
        after: [
          "Review paragraph transitions (Furthermore, In contrast, Consequently).",
          "Check word count: ensure you comfortably exceed the 250-word requirement (target: 270-290 words)."
        ],
        dos: [
          "Follow the 4-paragraph blueprint for maximum structural clarity.",
          "Keep your personal opinion consistent throughout the essay if asked for your view."
        ],
        donts: [
          "Don't write more than two body paragraphs; two well-developed points score higher than four shallow ones.",
          "Don't introduce brand new arguments in your concluding paragraph."
        ],
        example: "Prompt: 'Some believe higher education should be free for all citizens.'\nTopic sentence: 'Primarily, state-funded higher education fosters social mobility by granting talented students access to professional careers irrespective of their socioeconomic background.'",
        question: "Which element of the PEEL model does the topic sentence above represent?",
        options: [
          "Point (Central claim of the paragraph)",
          "Explanation (Causal elaboration)",
          "Example (Empirical proof)"
        ],
        answer: 0,
        feedback: "The sentence directly states the primary argument (Point) of the body paragraph: promoting social mobility."
      },
      {
        id: "task2-types",
        session: "4–5",
        title: "Task 2: The 5 Question Types & Thesis Formulas",
        type: "Question type",
        purpose: "Master the 5 IELTS essay archetypes: Opinion (Agree/Disagree), Discussion (Discuss both views), Advantages/Disadvantages, Problem-Solution, and Two-Part questions.",
        before: [
          "Determine whether the prompt demands a one-sided argument, a balanced appraisal, or sequential problem-solving.",
          "Check whether your opinion is explicitly requested in the instruction prompt.",
          "Craft a tailored thesis statement that directly answers the specific prompt directive."
        ],
        during: [
          "For 'Discuss both views': devote one body paragraph to each perspective before declaring or confirming your stance.",
          "For 'Agree/Disagree': adopt a clear stance in the thesis and defend it coherently across both body paragraphs.",
          "For 'Causes/Solutions': dedicate Body 1 to root causes and Body 2 to pragmatic, viable countermeasures."
        ],
        after: [
          "Verify that your thesis statement perfectly aligns with your conclusion.",
          "Ensure both views were explored with equal depth in discussion essays."
        ],
        dos: [
          "Express your position clearly in the introduction and re-state it in the conclusion.",
          "Address all parts of a multi-part prompt to safeguard your Task Achievement band."
        ],
        donts: [
          "Don't sit on the fence without taking a position if the prompt asks 'give your own opinion'.",
          "Don't treat an Opinion essay as a Discussion essay without taking a firm stand."
        ],
        example: "Prompt: 'Some people argue that companies should allow staff to work remotely, while others feel office presence is vital. Discuss both views and give your opinion.'",
        question: "What is the recommended body paragraph allocation for this prompt?",
        options: [
          "Body 1: Arguments for remote work; Body 2: Arguments for office presence + Author's opinion",
          "Body 1: Why companies exist; Body 2: Technology tools",
          "Body 1: Author's opinion; Body 2: Advantages of commuting"
        ],
        answer: 0,
        feedback: "In a Discussion + Opinion essay, Body 1 examines the first perspective, and Body 2 examines the opposing perspective while integrating or leading into your reasoned verdict."
      },
      {
        id: "task1-letters",
        session: "4–5",
        title: "Task 1 (GT): Tone, Salutations & Bullet Coverage",
        type: "Question type",
        purpose: "Achieve band 8+ in General Training Task 1 by correctly identifying Formal, Semi-formal, or Informal register, adhering to appropriate salutations and sign-offs, and addressing all 3 prompt bullets.",
        before: [
          "Identify the recipient: unknown official (Formal), landlord or colleague (Semi-formal), or close friend (Informal).",
          "Underline all three bullet points in the prompt and allocate one paragraph per bullet.",
          "Select appropriate opening: 'Dear Sir or Madam,' vs 'Dear Mr. Davies,' vs 'Dear Jack,'."
        ],
        during: [
          "Formal: avoid contractions (write 'do not' instead of 'don't'), maintain polite, objective diction.",
          "Informal: use friendly expressions, contractions, and warm personal remarks.",
          "Cover all 3 bullets with equal detail; neglecting a bullet caps Task Achievement at Band 5."
        ],
        after: [
          "Check sign-off matches salutation: 'Yours faithfully' for 'Dear Sir/Madam', 'Yours sincerely' for named formal recipients, 'Warm regards' or 'Best wishes' for friends.",
          "Ensure minimum 150 words (aim for 160-180 words)."
        ],
        dos: [
          "Dedicate a separate paragraph to each of the three bullet points in the prompt.",
          "State the purpose of the letter immediately in the opening sentence."
        ],
        donts: [
          "Don't mix formal register with informal slang or contractions in business correspondence.",
          "Don't omit any sub-clauses in the bullet points (e.g. 'explain why and what you will do')."
        ],
        example: "Letter prompt addressed to a company manager whom you do not know by name.",
        question: "Which combination of opening and sign-off is convention-accurate?",
        options: [
          "Dear Sir or Madam, ... Yours faithfully,",
          "Dear Manager, ... Yours sincerely,",
          "Hi Sir, ... Best regards,"
        ],
        answer: 0,
        feedback: "When the recipient's name is unknown in British English IELTS conventions, open with 'Dear Sir or Madam,' and conclude with 'Yours faithfully,'."
      },
      {
        id: "task2-cohesion",
        session: "4–5",
        title: "Coherence, Cohesion & Advanced Framing",
        type: "Sub-skill",
        purpose: "Enhance your Coherence & Cohesion score to Band 8+ by using natural referencing (pronouns, substitution), varied sentence openers, and sophisticated transitional phrases instead of mechanical linkers.",
        before: [
          "Plan logical progression from universal premise to specific deduction.",
          "Identify opportunities for lexical cohesion (synonyms and conceptual rephrasing).",
          "Avoid overusing mechanical linkers like 'Firstly, Secondly, Thirdly, In addition, Furthermore, In conclusion'."
        ],
        during: [
          "Use demonstrative referencing ('This phenomenon', 'Such measures', 'These initiatives') to connect clauses seamlessly.",
          "Deploy concessive structures ('Although...', 'While it is true that..., nevertheless...').",
          "Vary sentence openings: participial clauses, prepositional phrases, and fronted adverbials."
        ],
        after: [
          "Verify that each sentence flows organically into the next without abrupt jumps.",
          "Check that pronouns clearly refer back to their antecedent without ambiguity."
        ],
        dos: [
          "Use referencing and substitution to create tight, seamless links between ideas.",
          "Use complex sentence structures to show relationships between cause, effect, and concession."
        ],
        donts: [
          "Don't start every sentence with a linking word or coordinating conjunction.",
          "Don't use empty cliché fillers like 'In a nutshell' or 'Every coin has two sides'."
        ],
        example: "Draft sentence: 'Some people prefer public transit. Firstly, it is cheap. Secondly, it is eco-friendly.'\nPolished revision: 'Commuters increasingly favour public transit not only because it represents a cost-effective alternative to vehicle ownership, but also because it substantially diminishes per-capita emissions.'",
        question: "Why is the polished revision rated higher for Coherence and Cohesion?",
        options: [
          "It integrates points into a cohesive complex sentence using 'not only... but also' rather than mechanical ordinal linkers.",
          "It uses more exclamation marks and informal vocabulary.",
          "It removes all references to costs and the environment."
        ],
        answer: 0,
        feedback: "The revised version uses sophisticated grammatical coordination ('not only... but also') and mature lexical phrasing, replacing rigid mechanical transitions with organic cohesion."
      }
    ];

    /* Speaking strategy lessons (Sessions 6–8). Authentic pedagogy from Ahmad's Intensive Course. */
    var SPEAKING_LESSONS = [
      {
        id: "speaking-part1",
        session: "6–8",
        title: "Part 1: Natural Fluency & Response Expansion",
        type: "Strategy",
        purpose: "Produce fluent, natural 2–3 sentence responses to everyday questions about home, studies, hobbies, and habits, expanding with reasons or examples without rambling.",
        before: [
          "Recognise that Part 1 is a warm-up; examiner wants natural conversational fluency, not an academic lecture.",
          "Prepare to answer immediately without long hesitations or pauses.",
          "Anticipate common categories: work, hometown, accommodation, technology, daily routines."
        ],
        during: [
          "Give a direct answer in the first sentence.",
          "Add 1–2 sentences explaining your reason, a quick personal detail, or a contrast ('Although I used to... nowadays I prefer...').",
          "Stop talking smoothly after 2–3 sentences; let the examiner ask the next question."
        ],
        after: [
          "Avoid memorised speeches—examiners penalise canned scripts immediately.",
          "Maintain confident eye contact and clear, natural intonation."
        ],
        dos: [
          "Answer the question directly, then expand with a reason, feeling, or example.",
          "Use discourse markers naturally: 'To be honest, ...', 'Actually, ...', 'I suppose...'."
        ],
        donts: [
          "Don't give blunt one-word 'Yes' or 'No' answers.",
          "Don't speak for 45+ seconds on a single Part 1 question; keep it concise and crisp."
        ],
        example: "Examiner: 'Do you prefer cooking at home or eating out?'\nCandidate: 'To be honest, I lean towards cooking at home most weekdays, mainly because it allows me to control ingredients and eat more healthily. That said, on weekends I do enjoy exploring local restaurants with friends.'",
        question: "Why is this candidate response considered Band 8+ for Part 1?",
        options: [
          "It answers directly, gives a clear reason, and adds a natural contrast while remaining concise.",
          "It recites a memorised recipe for 2 minutes.",
          "It gives a one-word answer."
        ],
        answer: 0,
        feedback: "The response is natural, directly answers the prompt, offers a reason ('control ingredients'), and adds a realistic contrast ('on weekends I do enjoy...') within two well-formed sentences."
      },
      {
        id: "speaking-part2",
        session: "6–8",
        title: "Part 2: 1-Minute Prep & 2-Minute Long Turn",
        type: "Strategy",
        purpose: "Maximise your 60-second preparation time to create a keyword roadmap, and sustain a fluent, well-structured 2-minute monologue covering all cue card prompts.",
        before: [
          "Write down 5–8 trigger words/phrases on your paper, not full sentences.",
          "Map your story chronologically: Background/Context -> Narrative details -> Climax/Reflection.",
          "Identify 2–3 high-level collocations or idioms relevant to the topic to deploy naturally."
        ],
        during: [
          "Begin with a confident opening that sets the scene.",
          "Follow your cue card bullets as a guide, but feel free to expand into related vivid details.",
          "Use the Past–Present–Future technique to keep speaking smoothly if you run out of things to say.",
          "Keep talking until the examiner stops you at the 2-minute mark."
        ],
        after: [
          "Answer the brief follow-up question in 1–2 short sentences.",
          "Don't worry if the examiner interrupts you—it simply means you reached the 2-minute limit."
        ],
        dos: [
          "Use your prep paper as a visual compass; glance down at keywords when transitioning.",
          "Use sensory details and feelings to make your narrative engaging and authentic."
        ],
        donts: [
          "Don't waste prep time writing complete grammatical sentences that you run out of time to finish.",
          "Don't stop speaking after 1 minute; aim for the full 1:45 to 2:00 minutes."
        ],
        example: "Cue card: 'Describe a memorable journey you took.'\nNotes written in 60s: '1. Summer 2023 - road trip south; 2. Broken GPS - scenic detour; 3. Mountain sunset; 4. Taught me to embrace the unexpected.'",
        question: "Why is this note-taking strategy effective for Part 2?",
        options: [
          "It uses concise bullet keywords that guide a chronological narrative without wasting time writing full sentences.",
          "It writes out an essay in full handwriting.",
          "It copies words from the dictionary."
        ],
        answer: 0,
        feedback: "Trigger keywords allow the candidate to plan a 4-stage chronological story in under 60 seconds without getting bogged down in grammar or spelling."
      },
      {
        id: "speaking-part3",
        session: "6–8",
        title: "Part 3: Abstract Analysis & Societal Perspectives",
        type: "Strategy",
        purpose: "Transition from personal anecdotes to analytical, societal discourse in Part 3. Provide extended, nuanced evaluations of complex global, economic, and cultural questions.",
        before: [
          "Recognise the shift: Part 3 is about society, trends, and future implications, NOT personal stories.",
          "Prepare signposting phrases for complex ideas: 'From an economic standpoint...', 'On a broader societal level...'."
        ],
        during: [
          "Structure answers using the A-R-E formula: Assertion (Direct idea), Reason (Why it occurs), Example/Evidence (Societal context).",
          "Speculate about future trends using modal verbs: 'could potentially lead to', 'is likely to trigger'.",
          "Present counter-arguments: 'While one could argue that..., on the other hand...'."
        ],
        after: [
          "Maintain fluency by using pauses for thought naturally: 'That is an intriguing question; looking at it from a macroeconomic perspective...'."
        ],
        dos: [
          "Broaden your perspective to include different demographic groups, generations, and cultures.",
          "Use conditional and speculative grammar ('If governments were to invest..., we would likely see...')."
        ],
        donts: [
          "Don't talk solely about yourself, your family, or your friends in Part 3.",
          "Don't give brief 5-second replies; Part 3 demands sustained, layered analysis."
        ],
        example: "Examiner: 'How will artificial intelligence affect the job market in the coming decades?'\nCandidate: 'On a macroeconomic scale, AI is almost certain to displace repetitive clerical functions; however, historically, technological shifts concurrently generate entirely new vocational sectors, particularly in system oversight and data ethics.'",
        question: "What makes this candidate's approach appropriate for Part 3?",
        options: [
          "It provides a balanced, societal analysis using high-level vocabulary ('macroeconomic scale', 'displace', 'vocational sectors') instead of a personal story.",
          "It talks about their personal computer games at home.",
          "It avoids answering the question."
        ],
        answer: 0,
        feedback: "The response addresses the question from a macro societal perspective, considers both displacement and new job creation, and employs advanced academic register."
      },
      {
        id: "speaking-idiomatic",
        session: "6–8",
        title: "Idiomatic Language & Natural Collocations",
        type: "Sub-skill",
        purpose: "Incorporate band 7+ and band 8+ idiomatic phraseology and topic-specific collocations seamlessly without sounding rehearsed or artificial.",
        before: [
          "Learn idioms in context with their exact prepositions and nuances.",
          "Avoid cliché, archaic idioms like 'raining cats and dogs' which examiners actively penalise.",
          "Focus on modern idioms used by educated native speakers (e.g., 'see eye to eye', 'at the eleventh hour', 'once in a blue moon')."
        ],
        during: [
          "Integrate idioms smoothly into normal syntax; do not announce them ('As the idiom says...').",
          "Ensure the grammatical form fits the sentence tense (e.g. 'we saw eye to eye' in past tense).",
          "Pair idioms with strong collocations: 'vital component', 'stark contrast', 'heavily reliant'."
        ],
        after: [
          "Never force an idiom where a simple, precise word would sound more natural."
        ],
        dos: [
          "Use idioms to express sentiment, nuance, or emphasis naturally.",
          "Match the idiom to the appropriate register and emotion."
        ],
        donts: [
          "Don't cram three idioms into one sentence.",
          "Don't use literal translations from your native language that do not exist in English."
        ],
        example: "'My colleague and I had radically different perspectives on the marketing strategy initially, but after hashing out the details over lunch, we finally saw eye to eye.'",
        question: "Which idiom is correctly used in this sentence?",
        options: [
          "saw eye to eye (agreed with each other)",
          "hash out (cut food)",
          "radically different (an archaic proverb)"
        ],
        answer: 0,
        feedback: "'Saw eye to eye' is used accurately in the past tense to denote reaching agreement after discussion."
      }
    ];

    var WRITING_PRACTICE = {
        task1: {
            title: "Academic Writing Task 1",
            prompt: "The bar chart below shows the percentage of adults in four countries who used the internet daily in 2010, 2015 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
            chartCaption: "Percentage of adults using the internet daily, by country and year (illustrative data)",
            chartHeaders: ["Country", "2010", "2015", "2020"],
            chartRows: [["South Korea", "72%", "83%", "96%"], ["Canada", "64%", "78%", "91%"], ["Brazil", "31%", "52%", "74%"], ["Nigeria", "9%", "24%", "43%"]],
            modelAnswer: "The bar chart illustrates how the proportion of adults accessing the internet daily changed across four countries between 2010 and 2020.\n\nOverall, all four countries experienced significant growth over the decade, though rates varied considerably. South Korea and Canada maintained consistently high usage, while Brazil and Nigeria started from much lower baselines.\n\nIn 2010, South Korea led at 72%, followed closely by Canada at 64%. Both continued rising steadily, reaching 96% and 91% respectively by 2020 — making South Korea the only country to approach near-universal daily use.\n\nBy contrast, Brazil and Nigeria began at 31% and just 9% respectively. Despite this, both showed impressive growth: Brazil more than doubled its figure to 74%, while Nigeria's proportion increased nearly fivefold to 43% — the steepest relative rise of all four nations.\n\nIn summary, while South Korea and Canada led throughout the period, the fastest relative growth occurred in the two countries with lower starting figures, narrowing though not closing the gap by 2020."
        },
        task2: {
            title: "Academic Writing Task 2",
            prompt: "In many countries, young people are spending increasing amounts of time on social media. Some people believe this has a negative effect on their education and social development. Others argue that social media provides valuable learning opportunities.\n\nDiscuss both views and give your own opinion.\n\nWrite at least 250 words.",
            modelAnswer: "Social media has become a defining feature of modern youth culture, and its influence on education and social development is a subject of ongoing debate. While some argue that it distracts young people from academic work and meaningful relationships, others contend that it offers genuine educational and social benefits. In my view, the impact of social media depends largely on how it is used.\n\nThose who are critical of social media point to its potential to reduce academic performance. Research consistently shows that students who spend extended periods scrolling through feeds tend to study for shorter periods and report greater difficulty concentrating. Furthermore, face-to-face social skills may deteriorate when a significant portion of social interaction moves online. For younger adolescents in particular, the pressure of online comparison can have a damaging effect on self-esteem.\n\nOn the other hand, proponents highlight social media's capacity to connect learners with information and communities that would otherwise be inaccessible. Educational content reaches millions of young people informally, often igniting interest in subjects beyond the school curriculum. Collaboration tools allow students to work on projects across geographical boundaries, developing digital literacy that is increasingly valued in the workforce.\n\nIn conclusion, I believe social media is neither inherently beneficial nor harmful — its impact is shaped by the habits and intentions of the individual user. Schools and families have an important role in helping young people develop a conscious and balanced approach to its use, so that its benefits can be realised without undermining their education or wellbeing."
        }
    };

    /* Speaking practice question bank — original questions and model answers */
    var SPEAKING_PRACTICE = {
        part1: {
            label: "Part 1 \u2014 Personal questions",
            info: "The examiner asks familiar questions about your life. Aim for 2\u20133 natural sentences per answer.",
            topics: [
                { topic: "Home and neighbourhood", questions: [
                    { q: "Where are you currently living?", model: "I'm living in a fairly central neighbourhood in [city]. I've been there for about three years now, and I find it very convenient for getting around the city." },
                    { q: "What do you like most about where you live?", model: "I really appreciate how close everything is \u2014 shops, public transport, parks. It makes daily life a lot less stressful than when I lived somewhere more remote." },
                    { q: "Do you prefer a house or an apartment? Why?", model: "I'd prefer a house eventually, mainly for the extra space and a garden. At the moment though, an apartment suits my lifestyle \u2014 it's easy to maintain and close to work." }
                ]},
                { topic: "Studies or work", questions: [
                    { q: "Are you currently studying or working?", model: "I'm working full-time in [field]. I've been there for several years and I find the work genuinely engaging most of the time." },
                    { q: "What do you enjoy most about your studies or job?", model: "Probably the variety \u2014 no two days are quite the same. I also value the people I work with; we have a strong team dynamic." },
                    { q: "Would you like to change your career or study area in the future?", model: "I'd like to develop further within my current field rather than change direction entirely. There's still a lot I want to learn." }
                ]},
                { topic: "Free time and hobbies", questions: [
                    { q: "What do you usually do in your free time?", model: "I tend to divide my free time between exercise and reading. I go running a few times a week and I'm always in the middle of some book \u2014 usually non-fiction." },
                    { q: "Is it important to have hobbies? Why?", model: "I think so, yes. Hobbies give you something to look forward to outside of work and they're a good way of meeting people who share your interests." },
                    { q: "Have your hobbies changed since you were younger?", model: "Quite a lot, actually. I used to be much more into team sports. As I've got older I've gravitated towards more independent activities I can fit around a busy schedule." }
                ]},
                { topic: "Technology", questions: [
                    { q: "How often do you use a smartphone in a typical day?", model: "Fairly constantly \u2014 for work emails, navigation, keeping in touch. I've been trying to put it away in the evenings though, and that's made a real difference to how I sleep." },
                    { q: "Do you think technology has improved our lives overall?", model: "On balance, yes, though it comes with real drawbacks. Access to information and healthcare advances are genuinely life-changing. The challenge is the way it can fragment our attention." },
                    { q: "What technology could you not live without?", model: "Probably my laptop, simply because so much of my work and study depends on it. I could manage without a smartphone far more easily than without reliable internet access." }
                ]},
                { topic: "Travel", questions: [
                    { q: "Do you enjoy travelling? Why or why not?", model: "Very much so. Travelling pushes me out of my comfort zone in a positive way \u2014 you encounter different ways of doing things, different food, different perspectives." },
                    { q: "What kind of place would you most like to visit?", model: "I'd love to spend time in Japan. The culture, the food, the contrast between ultra-modern cities and traditional rural areas \u2014 it seems like an extraordinary place to experience." },
                    { q: "Is it better to travel alone or with others?", model: "Both have advantages. Alone you have complete freedom to set your own pace. With others you share the experience, which can make things more memorable, though it requires compromise." }
                ]}
            ]
        },
        part2: {
            label: "Part 2 \u2014 Long turn",
            info: "You have 1 minute to prepare notes, then speak for up to 2 minutes. Use the timer below to practise under real conditions.",
            cards: [
                { title: "A time you helped someone", bullets: ["who you helped and why they needed help", "what you did to help them", "how long it took"], close: "and explain how you felt about helping them.", model: "I'd like to talk about a time I helped a close friend who was struggling with a demanding new role at work. She was feeling overwhelmed by the workload and unsure how to prioritise.\n\nWhat I did was fairly simple but I think it made a real difference. I set aside a couple of evenings to help her organise her tasks \u2014 we made a priority list, broke down bigger projects into smaller steps, and worked out a realistic schedule. I also just listened while she talked through what was stressing her.\n\nThe whole thing took about three or four evenings over two weeks \u2014 not a huge time commitment on my part, but for her it seemed to be the turning point.\n\nAs for how I felt \u2014 honestly, really satisfied. Seeing her gradually regain her confidence was very rewarding. It reminded me that small, practical acts of support can have a disproportionately large impact on someone who's struggling." },
                { title: "A book or film that had a strong effect on you", bullets: ["what the book or film was about", "when you encountered it", "why it made such an impression"], close: "and explain how it affected your thinking or behaviour.", model: "I'd like to describe a book that had quite a lasting effect on me \u2014 it's called Educated by Tara Westover. I read it about four years ago and I think about it often.\n\nIt's a memoir about a woman who grew up in a survivalist family with no formal education. Against enormous odds, she eventually earned a PhD from Cambridge. The book follows her journey from complete isolation to one of the most prestigious universities in the world.\n\nI came across it almost by accident \u2014 a colleague mentioned it and I downloaded it that evening. I finished it in about three days, which is unusually fast for me.\n\nWhat made it so powerful was the way it made me question assumptions I hadn't realised I was making \u2014 about education, family loyalty, and what we owe people who have caused us harm. In terms of how it affected me \u2014 I think it made me more grateful for access to education and more aware of how much depends on the circumstances of birth." },
                { title: "A skill you would like to learn", bullets: ["what the skill is", "why you want to learn it", "how you plan to learn it"], close: "and explain what difference it would make to your life.", model: "The skill I'd most like to develop is the ability to speak Spanish fluently. I have a basic level, enough to get by as a tourist, but I want to reach a point where I can follow a conversation at natural speed and express nuanced ideas.\n\nMy motivation is partly practical \u2014 Spanish is one of the most widely spoken languages in the world, and being fluent would open a much larger range of professional opportunities. But it's also personal \u2014 I have family connections to Latin America that I'd like to strengthen.\n\nIn terms of how I plan to learn: I use a language app daily for vocabulary, I'm working through an online course, and I've joined a conversation exchange group where I speak Spanish for thirty minutes then switch to English.\n\nIf I achieve real fluency, the difference to my life would be significant \u2014 not just practically, but in confidence. There's something about expressing yourself freely in another language that opens your world in a way that's hard to describe." }
            ]
        },
        part3: {
            label: "Part 3 \u2014 Discussion",
            info: "The examiner asks broader, abstract questions. Develop each answer: state a view \u2192 give a reason \u2192 add an example or qualification.",
            sets: [
                { theme: "Helping and community", questions: [
                    { q: "Do you think people in your country are generally willing to help strangers?", model: "It varies quite a bit depending on context. In visible emergencies most people respond instinctively. The willingness to help in less visible, more sustained ways \u2014 volunteering, charitable giving \u2014 is more uneven, and I think that reflects broader pressures of time and economic uncertainty." },
                    { q: "What are the long-term benefits of volunteering for the volunteer themselves?", model: "The evidence suggests volunteering benefits the volunteer quite substantially. People who volunteer regularly report higher life satisfaction and a stronger sense of purpose. There's also a skills dimension \u2014 leadership, communication, and organisational abilities developed through voluntary work translate directly into professional life." },
                    { q: "Has technology made it easier or harder for people to help each other?", model: "Both, and the balance is genuinely unclear. Technology has enabled extraordinary collective action \u2014 crowdfunding, disaster relief coordination, international volunteer networks. At the same time, online expressions of support can substitute for more meaningful engagement, giving people a sense of doing something when the actual impact is minimal." }
                ]},
                { theme: "Reading and education", questions: [
                    { q: "Why do you think reading for pleasure has declined in many countries?", model: "Partly it's competition from other media \u2014 streaming and social platforms are designed to be immediately engaging in a way that reading isn't, at least initially. But there's also a structural factor: if your early experience of reading was largely compulsory and school-based, you may not associate it with pleasure as an adult." },
                    { q: "Do you think governments should do more to promote reading habits?", model: "To a degree, yes. Public library funding, school reading programmes, and making books affordable are all reasonable areas for government involvement. Direct campaigns telling adults to 'read more' are probably less effective \u2014 habits are best formed early and through environments that make reading accessible and enjoyable." },
                    { q: "Is it more valuable to read widely or to read deeply in one area?", model: "I lean towards saying both have distinct value. Breadth builds connections between ideas and guards against narrow thinking. Depth is what allows genuine expertise, which most professions ultimately require. The ideal is probably a foundation of depth in one area combined with genuine curiosity across others." }
                ]},
                { theme: "Technology and society", questions: [
                    { q: "Are young people today better prepared for adult life than previous generations?", model: "In some respects, yes \u2014 they have greater access to information, broader global awareness, and digital skills that are genuinely valuable. In other respects I'm less certain. There are reasonable concerns about whether heavily managed, screen-mediated environments provide enough of the adversity and autonomy that build resilience and independent judgement." },
                    { q: "What role should social media companies play in protecting users' wellbeing?", model: "A more active one than they currently play, particularly for young users. There's substantial evidence that certain design features \u2014 infinite scroll, algorithmic amplification of emotionally charged content \u2014 are harmful for a portion of users. I think companies have a responsibility to address features that are demonstrably harmful, even when those features are also profitable." },
                    { q: "Is it possible to strike a healthy balance between technology use and offline life?", model: "Yes, but it requires deliberate effort in a way it perhaps didn't before. The technology is specifically designed to capture attention, so a passive approach \u2014 just hoping to find a natural balance \u2014 tends not to work well. The people who manage it best are those who have made explicit decisions about when and how they use technology." }
                ]}
            ]
        }
    };

    var VIEWS = { "": 1, course: 1, library: 1, listening: 1, reading: 1, writing: 1, speaking: 1 };

    /* ---------- state ---------- */

    var state = {
        view: "",
        track: loadTrack(),
        tab: { listening: "learn", reading: "learn", writing: "learn", speaking: "learn" },
        quiz: false,
        quizSubmitted: false,
        answers: {},
        lessonId: null,
        lessonChecked: false,
        lessonAnswer: null,
        audioAnswers: {},
        audioChecked: {},
        mapState: {},
        timelineOpen: false,
        writingTask: null,
        writingModelShown: {},
        speakingPart: 1,
        speakingCardIndex: 0,
        speakingTopicIndex: 0,
        speakingModelShown: {},
        speakingTimerPhase: null,
        speakingTimerStart: 0,
        // Authentic Practice extensions
        readingPassageId: null,
        readingAnswers: {},
        readingSubmitted: false,
        readingQuizActive: false,
        readingQuizAnswers: {},
        readingQuizSubmitted: false,
        listeningAuthMode: null,
        listeningAuthAnswers: {},
        listeningAuthSubmitted: false,
        writingAuthType: null,
        writingQuizActive: false,
        writingQuizAnswers: {},
        writingQuizSubmitted: false,
        speakingSubTab: "mocks",
        speakingMockIndex: 0,
        speakingQuizActive: false,
        speakingQuizAnswers: {},
        speakingQuizSubmitted: false,
        idiomFlipped: {},
        activeTimerSeconds: null,
        // Subskill Learning & Unified Practice Engine
        activeSubskill: null,
        subskillStage: 1,
        subskillPracticeMode: "guided",
        practiceQuestions: null,
        practiceSubskill: null,
        loadedMode: null,
        practiceAnswers: {},
        practiceChecked: {},
        practiceHintsRevealed: {},
        practiceSubmitted: false,
        timedQuestions: null,
        timedSubskill: null,
        timedAnswers: {},
        timedSecondsLeft: 375,
        timedSubmitted: false,
        timedTimerActive: false
    };
    var root = null;

    function validTrack(t) { return typeof t === "string" && Object.prototype.hasOwnProperty.call(TRACKS, t); }

    function loadTrack() {
        try {
            var v = window.localStorage.getItem(STORAGE_KEY);
            if (validTrack(v)) return v;
        } catch (e) { /* storage blocked or unavailable */ }
        return DEFAULT_TRACK;
    }

    function saveTrack(t) {
        try { window.localStorage.setItem(STORAGE_KEY, t); } catch (e) { /* ignore */ }
    }

    function skillById(id) {
        for (var i = 0; i < SKILLS.length; i++) if (SKILLS[i].id === id) return SKILLS[i];
        return null;
    }

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
        });
    }

    function trackLabel() { return TRACKS[state.track]; }

    /* ---------- rendering ---------- */

    function header(label, title, intro) {
        return '<div class="course-header">' +
            '<p class="course-label">' + esc(label) + '</p>' +
            '<h2 id="ielts-heading" tabindex="-1">' + esc(title) + '</h2>' +
            (intro ? '<p>' + esc(intro) + '</p>' : '') +
            '</div>';
    }

    function status(text, kind) {
        return '<span class="ielts-status ielts-status-' + kind + '">' + esc(text) + '</span>';
    }

    function goButton(label, view, cls) {
        return '<button type="button" class="' + cls + '" data-ielts-view="' + esc(view) + '">' + esc(label) + '</button>';
    }

    function backRow(buttons) {
        return '<div class="ielts-back-row">' + buttons + '</div>';
    }

    function trackPicker() {
        var html = '<div class="ielts-track" role="group" aria-label="IELTS test type">' +
            '<p class="ielts-track-title">Choose your test type</p><div class="ielts-track-options">';
        Object.keys(TRACKS).forEach(function (id) {
            var on = id === state.track;
            html += '<button type="button" class="ielts-track-btn' + (on ? ' ielts-track-on' : '') +
                '" data-ielts-track="' + id + '" aria-pressed="' + on + '">' + esc(TRACKS[id]) + '</button>';
        });
        html += '</div><p class="ielts-note">Your choice is saved on this device and in the page link. ' +
            'It matters most for Reading and Writing; Listening and Speaking are the same for both.</p></div>';
        return html;
    }

    function skillCard(skill, buttonLabel) {
        return '<article class="ielts-card ielts-skill-card">' +
            '<div class="ielts-skill-icon" aria-hidden="true">' + skill.icon + '</div>' +
            '<h3>' + esc(skill.title) + '</h3>' +
            status(skill.statusText, skill.statusKind) +
            '<p>' + esc(skill.summary) + '</p>' +
            goButton(buttonLabel, skill.id, skill.available ? 'start-button' : 'secondary-button') +
            '</article>';
    }

    function viewDashboard() {
        var html = header("IELTS · " + trackLabel().toUpperCase(), "IELTS Preparation",
            "Exam-authentic instruction and practice for all four skills.");
        html += trackPicker();

        // 1. Four Skill Cards (Front and center)
        html += '<div class="ielts-skill-grid" style="margin-top: 24px;">';
        SKILLS.forEach(function (s) {
            var extraBtn = "";
            if (s.id === "listening") {
                extraBtn = '<button type="button" class="ielts-quiz-link" data-ielts-quiz-start>Intro quiz →</button>';
            }
            html += '<article class="ielts-card ielts-home-card">' +
                '<div class="ielts-home-card-top">' +
                '<span class="ielts-skill-icon" aria-hidden="true">' + s.icon + '</span>' +
                '<h3>' + esc(s.title) + '</h3>' +
                '</div>' +
                '<p>' + esc(s.summary) + '</p>' +
                (extraBtn ? '<p class="ielts-note">' + extraBtn + '</p>' : '') +
                '<button type="button" class="start-button ielts-home-go" data-ielts-view="' + esc(s.id) + '">Open ' + esc(s.title) + ' →</button>' +
                '</article>';
        });
        html += '</div>';

        html += backRow('<button type="button" class="secondary-button" data-ielts-courses>← Back to Courses</button>');
        return html;
    }

    function viewCourse() {
        return viewDashboard();
    }

    function viewLibrary() {
        return viewDashboard();
    }

    function listeningTypes() {
        var out = [];
        ((ns.listeningData || {}).questionGroups || []).forEach(function (g) { out = out.concat(g.types); });
        return out;
    }

    function statusName(k) { return { available: "Available", preview: "Preview", planned: "Planned" }[k] || "Planned"; }

    function tabBar(skill, activeTab) {
        return '<div class="ielts-tab-bar" role="tablist" aria-label="' + esc(skill) + ' sections">' +
            ['learn', 'practise'].map(function(t) {
                var on = t === activeTab;
                return '<button type="button" role="tab" class="ielts-tab' + (on ? ' ielts-tab-on' : '') +
                    '" aria-selected="' + on + '" data-ielts-tab="' + esc(skill) + '|' + esc(t) + '">' +
                    (t === 'learn' ? 'Learn' : 'Practise') + '</button>';
            }).join('') +
            '</div>';
    }

    function renderAudioPracticeAll() {
        var bank = ns.audioPractice;
        if (!bank || !bank.tracks) return '';
        var inMap = mapTrackIds();
        var tracks = bank.tracks.filter(function (t) { return inMap.indexOf(t.id) === -1; });
        if (!tracks.length) return '';
        var html = '<section class="ielts-card ielts-audio-practice">' +
            '<p class="ielts-session-label">Audio mini-tasks · original practice material</p>' +
            '<h3>Listen and answer</h3>' +
            '<p>Listen once before checking your answer. You can reveal the transcript afterward to review the evidence.</p>';
        tracks.forEach(function(item, index) {
            var id = item.id;
            var chosen = state.audioAnswers[id];
            var checked = !!state.audioChecked[id];
            html += '<article class="ielts-audio-item"><h4>Practice ' + (index+1) + ': ' + esc(item.title) + '</h4>';
            html += '<audio controls preload="none" class="ielts-audio-player"><source src="audio/ielts-listening/' + esc(item.id) + '.mp3" type="audio/mpeg">Your browser does not support audio playback.</audio>';
            html += '<p><strong>' + esc(item.question) + '</strong></p><div class="ielts-practice-options">';
            item.options.forEach(function(opt, i) {
                html += '<label class="ielts-option"><input type="radio" name="audio-all-' + esc(item.id) + '" value="' + i + '" data-ielts-audio-answer="' + esc(item.id) + '"' + (String(chosen)===String(i)?' checked':'') + (checked?' disabled':'') + '> <span>' + esc(opt) + '</span></label>';
            });
            html += '</div>';
            if (!checked) html += '<button type="button" class="secondary-button" data-ielts-audio-check="' + esc(item.id) + '"' + (chosen===undefined?' disabled':'') + '>Check answer</button>';
            else html += '<p class="ielts-answer-feedback ' + (chosen===item.answer?'ielts-answer-correct':'ielts-answer-incorrect') + '"><strong>' + (chosen===item.answer?'Correct.':'Not quite.') + '</strong> ' + esc(item.feedback) + '</p><button type="button" class="secondary-button" data-ielts-audio-retry="' + esc(item.id) + '">Try again</button>';
            html += '<details class="ielts-transcript"><summary>Reveal transcript and speaker notes</summary><ol>';
            item.lines.forEach(function(line){ html += '<li><strong>' + esc(line.sp) + ':</strong> ' + esc(line.text) + '</li>'; });
            html += '</ol><p class="ielts-note">Transcript is provided for review after listening. This is original practice material, not an official IELTS recording.</p></details></article>';
        });
        html += '</section>';
        return html;
    }

    function renderAllMapExercises() {
        var bank = ns.audioPractice;
        return ((bank && bank.mapExercises) || []).map(renderMapExercise).join('');
    }

    function viewListening() {
        if (state.activeSubskill && ns.subskillEngine) {
            return ns.subskillEngine.renderSubskillLearning(state.activeSubskill, 'listening', state);
        }
        var html = header('IELTS · LISTENING · ' + trackLabel().toUpperCase(), 'Listening',
            'Prepare for IELTS Listening: official question types, worked strategies, and authentic practice.');
        html += trackPicker();
        if (ns.subskillEngine) {
            html += ns.subskillEngine.renderSubskillsGrid('listening');
        }
        html += backRow(goButton('← IELTS home', '', 'secondary-button'));
        return html;
    }

    function findListeningLesson(id) {
        for (var i = 0; i < LISTENING_LESSONS.length; i++) if (LISTENING_LESSONS[i].id === id) return LISTENING_LESSONS[i];
        return null;
    }

    function renderAudioPractice(lessonId) {
        var bank = ns.audioPractice;
        if (!bank) return '';
        var inMap = mapTrackIds();
        var ids = (bank.lessonTracks[lessonId] || []).filter(function (id) { return inMap.indexOf(id) === -1; });
        if (!ids.length) return '';
        var html = '<section class="ielts-card ielts-audio-practice"><p class="ielts-session-label">Audio practice · original practice material</p><h3>Listen and answer</h3><p>Listen once before checking your answer. You can reveal the transcript afterward to review the evidence.</p>';
        ids.forEach(function(id, index) {
            var item = bank.tracks.filter(function(t){return t.id === id;})[0];
            if (!item) return;
            var chosen = state.audioAnswers[id];
            var checked = !!state.audioChecked[id];
            html += '<article class="ielts-audio-item"><h4>Practice ' + (index+1) + ': ' + esc(item.title) + '</h4>';
            html += '<audio controls preload="none" class="ielts-audio-player"><source src="audio/ielts-listening/' + esc(item.id) + '.mp3" type="audio/mpeg">Your browser does not support audio playback.</audio>';
            html += '<p><strong>' + esc(item.question) + '</strong></p><div class="ielts-practice-options">';
            item.options.forEach(function(opt, i) {
                html += '<label class="ielts-option"><input type="radio" name="audio-' + esc(item.id) + '" value="' + i + '" data-ielts-audio-answer="' + esc(item.id) + '"' + (String(chosen)===String(i)?' checked':'') + (checked?' disabled':'') + '> <span>' + esc(opt) + '</span></label>';
            });
            html += '</div>';
            if (!checked) html += '<button type="button" class="secondary-button" data-ielts-audio-check="' + esc(item.id) + '"' + (chosen===undefined?' disabled':'') + '>Check answer</button>';
            else html += '<p class="ielts-answer-feedback ' + (chosen===item.answer?'ielts-answer-correct':'ielts-answer-incorrect') + '"><strong>' + (chosen===item.answer?'Correct.':'Not quite.') + '</strong> ' + esc(item.feedback) + '</p><button type="button" class="secondary-button" data-ielts-audio-retry="' + esc(item.id) + '">Try again</button>';
            html += '<details class="ielts-transcript"><summary>Reveal transcript and speaker notes</summary><ol>';
            item.lines.forEach(function(line){ html += '<li><strong>' + esc(line.sp) + ':</strong> ' + esc(line.text) + '</li>'; });
            html += '</ol><p class="ielts-note">Transcript is provided for review after listening. This is original practice material, not an official IELTS recording.</p></details></article>';
        });
        html += '</section>';
        return html;
    }

    /* ---------- Map and plan labelling exercises (data: audio-practice.js > mapExercises) ---------- */

    function mapExercisesFor(lessonId) {
        var bank = ns.audioPractice;
        return ((bank && bank.mapExercises) || []).filter(function (e) { return e.lesson === lessonId; });
    }

    function mapTrackIds() {
        var bank = ns.audioPractice;
        return ((bank && bank.mapExercises) || []).map(function (e) { return e.trackId; });
    }

    function findTrack(id) {
        var bank = ns.audioPractice;
        var list = (bank && bank.tracks) || [];
        for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
        return null;
    }

    function mapExState(id) {
        if (!state.mapState[id]) state.mapState[id] = { answers: {}, submitted: false };
        return state.mapState[id];
    }

    function mapScore(ex) {
        var st = mapExState(ex.id), n = 0;
        ex.questions.forEach(function (q) { if (st.answers[q.id] === q.answer) n++; });
        return n;
    }

    function mapLetters(ex) {
        return ex.map.blocks.map(function (b) { return b.k; }).sort();
    }

    function mapSvg(ex, review) {
        var m = ex.map, uid = "ielts-map-" + ex.id, W = m.w, H = m.h;
        var halo = ' stroke="#fff" stroke-width="5" stroke-linejoin="round" paint-order="stroke"';
        var s = '<svg class="ielts-exmap" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-labelledby="' + uid + '-t ' + uid + '-d" ' +
            'xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif">' +
            '<title id="' + uid + '-t">' + esc(m.title) + '</title><desc id="' + uid + '-d">' + esc(m.desc) + '</desc>' +
            '<defs><marker id="' + uid + '-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">' +
            '<path d="M0 0 L10 5 L0 10 z" fill="#1d4ed8"/></marker></defs>' +
            '<rect x="2" y="2" width="' + (W - 4) + '" height="' + (H - 4) + '" rx="16" fill="#eef4e8" stroke="#c5d3b8" stroke-width="2"/>';

        if (m.water) {
            var w = m.water;
            s += '<rect x="' + w.x + '" y="' + w.y + '" width="' + w.w + '" height="' + w.h + '" fill="#bfe0f7" stroke="#7fb8e6" stroke-width="2"/>';
            for (var wy = w.y + 40; wy < w.y + w.h - 10; wy += 72) {
                s += '<path d="M' + (w.x + 3) + ' ' + wy + ' q6 -5 12 0 t12 0" fill="none" stroke="#7fb8e6" stroke-width="2" stroke-linecap="round"/>';
            }
        }
        [["#cfc6b4", m.pathWidth + 6], ["#f7f2e7", m.pathWidth]].forEach(function (pass) {
            m.paths.forEach(function (p) {
                s += '<line x1="' + p.x1 + '" y1="' + p.y1 + '" x2="' + p.x2 + '" y2="' + p.y2 + '" stroke="' + pass[0] + '" stroke-width="' + pass[1] + '" stroke-linecap="butt"/>';
            });
        });
        if (m.bridge) {
            var b = m.bridge;
            s += '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" fill="#d9bf92" stroke="#8a6a3c" stroke-width="3"/>';
            for (var bx = b.x + 8; bx < b.x + b.w - 4; bx += 8) s += '<line x1="' + bx + '" y1="' + b.y + '" x2="' + bx + '" y2="' + (b.y + b.h) + '" stroke="#b8975f" stroke-width="2"/>';
            s += '<line x1="' + b.x + '" y1="' + b.y + '" x2="' + (b.x + b.w) + '" y2="' + b.y + '" stroke="#8a6a3c" stroke-width="5"/>' +
                 '<line x1="' + b.x + '" y1="' + (b.y + b.h) + '" x2="' + (b.x + b.w) + '" y2="' + (b.y + b.h) + '" stroke="#8a6a3c" stroke-width="5"/>';
        }
        if (review && m.route) {
            s += '<path d="' + m.route + '" fill="none" stroke="#1d4ed8" stroke-width="5" stroke-dasharray="4 10" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#' + uid + '-arrow)"/>';
        }
        if (m.fountain) {
            var f = m.fountain;
            s += '<circle cx="' + f.x + '" cy="' + f.y + '" r="' + f.r + '" fill="#cfe8fb" stroke="#2563eb" stroke-width="3"/>' +
                 '<circle cx="' + f.x + '" cy="' + f.y + '" r="' + Math.round(f.r / 2.5) + '" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>';
        }

        var wrong = {}, right = {};
        if (review) {
            var st = mapExState(ex.id);
            ex.questions.forEach(function (q) {
                right[q.answer] = q.mapName;
                if (st.answers[q.id] && st.answers[q.id] !== q.answer) wrong[st.answers[q.id]] = true;
            });
        }
        m.blocks.forEach(function (bl) {
            var names = right[bl.k], bad = wrong[bl.k] && !names;
            var fill = names ? "#f0fdf4" : (bad ? "#fef2f2" : "#ffffff");
            var stroke = names ? "#15803d" : (bad ? "#b91c1c" : "#64748b");
            var cx = bl.x + bl.w / 2;
            s += '<rect x="' + bl.x + '" y="' + bl.y + '" width="' + bl.w + '" height="' + bl.h + '" rx="8" fill="' + fill + '" stroke="' + stroke +
                 '" stroke-width="' + (names ? 4 : 2.5) + '"' + (bad ? ' stroke-dasharray="7 5"' : '') + '/>';
            s += '<text x="' + cx + '" y="' + (names ? bl.y + 29 : bl.y + bl.h / 2 + 11) + '" text-anchor="middle" font-size="30" font-weight="700" fill="#1b2b40">' + bl.k + '</text>';
            if (names) names.forEach(function (ln, j) {
                s += '<text x="' + cx + '" y="' + (bl.y + 47 + j * 15) + '" text-anchor="middle" font-size="15" font-weight="700" fill="#14532d">' + esc(ln) + '</text>';
            });
        });

        if (m.entrance) s += '<circle cx="' + m.entrance.x + '" cy="' + m.entrance.y + '" r="9" fill="#2563eb" stroke="#fff" stroke-width="3"/>';
        m.labels.forEach(function (l) {
            s += '<text x="' + l.x + '" y="' + l.y + '" text-anchor="' + l.anchor + '" font-size="' + (m.labelSize || 22) + '" font-weight="700" fill="#1e3a8a"' + halo + '>' + esc(l.t) + '</text>';
        });
        if (m.compass) {
            var c = m.compass;
            s += '<g transform="translate(' + c.x + ' ' + c.y + ')"><path d="M0 40 V4 M-9 14 L0 2 L9 14" fill="none" stroke="#334155" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>' +
                 '<text x="0" y="-8" text-anchor="middle" font-size="26" font-weight="700" fill="#334155"' + halo + '>N</text></g>';
        }
        return s + '</svg>';
    }

    function renderMapExercise(ex) {
        var track = findTrack(ex.trackId);
        if (!track) return '';
        var st = mapExState(ex.id), done = st.submitted, uid = "ielts-map-" + ex.id;
        var html = '<section class="ielts-card ielts-map-exercise" data-ielts-map-ex="' + esc(ex.id) + '" aria-labelledby="' + uid + '-h">' +
            '<p class="ielts-session-label">Map practice \u00b7 original audio and visual</p>' +
            '<h3 id="' + uid + '-h" tabindex="-1">' + esc(ex.title) + '</h3>' +
            '<ol class="ielts-map-steps" aria-label="How this activity works">' +
            ['Preview the map', 'Listen', 'Answer', 'Review'].map(function (t, i) {
                return '<li' + (done && i === 3 ? ' aria-current="step"' : '') + '>' + t + '</li>';
            }).join('') + '</ol>' +
            '<p>' + esc(ex.instructions) + '</p>' +
            (done ? '' : '<p class="ielts-note">' + esc(ex.preview) + '</p>');

        html += '<div class="ielts-map-layout"><figure class="ielts-exmap-figure"><figcaption>' + esc(ex.map.title) + '</figcaption>' +
            mapSvg(ex, done) +
            '<p class="ielts-note ielts-map-zoomhint">Tip: pinch to zoom the map on a touch screen.</p>' +
            '<details class="ielts-map-textdesc"><summary>Text description of the map</summary><ul>' +
            ex.map.textDesc.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') +
            '</ul><p class="ielts-note">This describes where the lettered places are. It does not say what they are; you find that out from the recording.</p></details></figure>';

        html += '<div class="ielts-map-side">' +
            '<audio controls preload="none" class="ielts-audio-player" aria-label="Recording for ' + esc(ex.title) + '">' +
            '<source src="audio/ielts-listening/' + esc(track.id) + '.mp3" type="audio/mpeg">Your browser does not support audio playback.</audio>' +
            '<p class="ielts-audio-missing ielts-note" hidden>The recording could not be loaded. Check your connection and reload the page. You can still read the plan, but the questions need the audio.</p>' +
            '<form class="ielts-map-form" data-ielts-map-form="' + esc(ex.id) + '">' +
            '<p class="ielts-question-prompt">Label the map. Choose a letter for each place.</p>';

        var letters = mapLetters(ex);
        ex.questions.forEach(function (q, i) {
            var chosen = st.answers[q.id], ok = chosen === q.answer, sid = uid + '-' + q.id;
            html += '<div class="ielts-map-q' + (done ? (ok ? ' ielts-map-q-correct' : ' ielts-map-q-incorrect') : '') + '">' +
                '<label for="' + sid + '"><span class="ielts-map-qnum">' + (i + 1) + '</span> ' + esc(q.label) + '</label>' +
                '<select id="' + sid + '" data-ielts-map-answer="' + esc(ex.id) + '|' + esc(q.id) + '"' + (done ? ' disabled' : '') + '>' +
                '<option value="">Choose a letter</option>' +
                letters.map(function (L) { return '<option value="' + L + '"' + (chosen === L ? ' selected' : '') + '>' + L + '</option>'; }).join('') +
                '</select>';
            if (done) {
                html += '<p class="ielts-map-feedback"><strong>' + (ok ? 'Correct.' : (chosen ? 'Not quite. You chose ' + chosen + '; the answer is ' + q.answer + '.' : 'No answer. The answer is ' + q.answer + '.')) +
                    '</strong> ' + esc(q.explanation) + '</p>';
            }
            html += '</div>';
        });
        html += '</form>';

        if (!done) {
            html += '<button type="button" class="start-button" data-ielts-map-submit="' + esc(ex.id) + '"' + (Object.keys(st.answers).length ? '' : ' disabled') + '>Submit answers</button>' +
                '<p class="ielts-note ielts-transcript-locked">The transcript unlocks after you submit, so the listening stage stays a real listening task.</p>';
        } else {
            html += '<div class="ielts-map-score" role="status" tabindex="-1" data-ielts-map-focus><strong>' + mapScore(ex) + ' / ' + ex.questions.length + '</strong> correct</div>' +
                '<details class="ielts-transcript" open><summary>Transcript</summary><ol>' +
                track.lines.map(function (l) { return '<li><strong>' + esc(l.sp) + ':</strong> ' + esc(l.text) + '</li>'; }).join('') +
                '</ol><p class="ielts-note">The map now shows the correct places and the route the guide describes. This is original practice material, not an official IELTS recording.</p></details>' +
                '<button type="button" class="secondary-button" data-ielts-map-retry="' + esc(ex.id) + '">Try again</button>';
        }
        return html + '</div></div></section>';
    }

    function renderMapExercises(lessonId) {
        return mapExercisesFor(lessonId).map(renderMapExercise).join('');
    }

    function focusAfterRender(selector) {
        var el = root && root.querySelector(selector);
        if (el && el.focus) el.focus();
    }

    function viewListeningLesson() {
        var L = findListeningLesson(state.lessonId);
        if (!L) return viewListening();
        var html = header('IELTS \u00b7 LISTENING \u00b7 SESSION ' + L.session, L.title, L.purpose);
        html += '<div class="ielts-lesson-toolbar">' + status(L.type, 'open') + '<span class="ielts-note">Instructor-handout-aligned lesson \u00b7 Original example</span></div>';

        // Compact key strategies (top 3 bullets)
        var keyBullets = L.before.slice(0, 2).concat(L.during.slice(0, 1));
        html += '<section class="ielts-card ielts-key-strategies">' +
            '<h3>\u2726 Key strategies</h3><ul>' +
            keyBullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') +
            '</ul></section>';

        // Worked example + inline self-check
        html += '<section class="ielts-card ielts-worked-example"><p class="ielts-session-label">Worked example \u00b7 illustrative text, not an official test recording</p><blockquote>' + esc(L.example) + '</blockquote>';
        if (L.id === 'map') {
            html += '<figure class="ielts-map-figure"><figcaption>Practice visual: campus plan \u00b7 follow the route from the main entrance</figcaption>' +
              '<svg class="ielts-campus-map" viewBox="0 0 760 340" role="img" aria-labelledby="campus-map-title campus-map-desc" xmlns="http://www.w3.org/2000/svg">' +
              '<title id="campus-map-title">Illustrative campus map for direction practice</title><desc id="campus-map-desc">A campus plan with a main entrance at the bottom, reception in the centre, a cafe on the left, a library at the end of the upper corridor, and a garden on the right. A blue dotted route runs from the entrance through reception to the library.</desc>' +
              '<rect x="10" y="10" width="740" height="320" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>' +
              '<path d="M280 275 V145 H490 V65 M280 185 H120 V110 M490 185 H650 V110" fill="none" stroke="#cbd5e1" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/>' +
              '<rect x="215" y="35" width="150" height="58" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="290" y="59" text-anchor="middle" font-size="16" font-weight="700" fill="#1e3a8a">Library</text><text x="290" y="78" text-anchor="middle" font-size="12" fill="#1e40af">end of corridor</text>' +
              '<rect x="45" y="90" width="145" height="58" rx="8" fill="#fef3c7" stroke="#d97706"/><text x="117" y="125" text-anchor="middle" font-size="16" font-weight="700" fill="#92400e">Café</text>' +
              '<rect x="570" y="90" width="145" height="58" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="642" y="125" text-anchor="middle" font-size="16" font-weight="700" fill="#166534">Garden</text>' +
              '<rect x="215" y="155" width="150" height="58" rx="8" fill="#e2e8f0" stroke="#64748b"/><text x="290" y="190" text-anchor="middle" font-size="16" font-weight="700" fill="#334155">Reception</text>' +
              '<path d="M290 292 V224 V185 V118 V94" fill="none" stroke="#2563eb" stroke-width="5" stroke-dasharray="8 7" stroke-linecap="round"/><path d="M280 104 L290 90 L300 104" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' +
              '<circle cx="290" cy="292" r="8" fill="#2563eb"/><text x="310" y="300" font-size="14" font-weight="700" fill="#1d4ed8">Main entrance</text>' +
              '<g transform="translate(700 35)"><path d="M0 25 V0 M-7 8 L0 0 L7 8" stroke="#334155" stroke-width="2.5" fill="none"/><text x="0" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">N</text></g></svg>' +
              '<p class="ielts-map-caption">Look at the route and fixed landmarks before answering. This is an original teaching visual, not an official IELTS map.</p></figure>';
        }
        html += '<h3>Think it through</h3><p class="ielts-note">Strategy check \u00b7 text only, no audio</p><p><strong>' + esc(L.question) + '</strong></p><div class="ielts-practice-options">';
        L.options.forEach(function(opt,i){
            html += '<label class="ielts-option"><input type="radio" name="ielts-lesson-answer" value="' + i + '" data-ielts-lesson-answer ' + (String(state.lessonAnswer)===String(i)?'checked':'') + (state.lessonChecked?' disabled':'') + '><span>' + esc(opt) + '</span></label>';
        });
        html += '</div>';
        if (!state.lessonChecked) html += '<button type="button" class="start-button" data-ielts-lesson-check ' + (state.lessonAnswer===null?'disabled':'') + '>Check answer</button>';
        else html += '<p class="ielts-answer-feedback ' + (state.lessonAnswer===L.answer?'ielts-answer-correct':'ielts-answer-incorrect') + '"><strong>' + (state.lessonAnswer===L.answer?'Correct.':'Not quite.') + '</strong> ' + esc(L.feedback) + '</p><button type="button" class="secondary-button" data-ielts-lesson-retry>Try again</button>';
        html += '</section>';

        // Collapsible full guide
        html += '<details class="ielts-full-guide"><summary>Full strategy guide (Before / During / After + Do&#39;s and Don&#39;ts)</summary><div class="ielts-full-guide-body">';
        html += '<h3>Before listening</h3><ul class="ielts-lesson-list">' + L.before.map(function(x){return '<li>'+esc(x)+'</li>';}).join('') + '</ul>';
        html += '<h3>While listening</h3><ul class="ielts-lesson-list">' + L.during.map(function(x){return '<li>'+esc(x)+'</li>';}).join('') + '</ul>';
        if (L.after.length) html += '<h3>After listening</h3><ul class="ielts-lesson-list">' + L.after.map(function(x){return '<li>'+esc(x)+'</li>';}).join('') + '</ul>';
        html += '<div class="ielts-paths"><section class="ielts-card"><h3>Do</h3><ul class="ielts-lesson-list">' + L.dos.map(function(x){return '<li>'+esc(x)+'</li>';}).join('') + '</ul></section>';
        html += '<section class="ielts-card"><h3>Don&#39;t</h3><ul class="ielts-lesson-list">' + L.donts.map(function(x){return '<li>'+esc(x)+'</li>';}).join('') + '</ul></section></div>';
        html += '</div></details>';

        html += renderMapExercises(L.id) + renderAudioPractice(L.id);
        html += '<div class="ielts-back-row">' + goButton('\u2190 All Listening lessons', 'listening', 'secondary-button') + '</div>';
        return html;
    }

    function viewListeningQuiz() {
        var html = header("IELTS · LISTENING · INTRODUCTION", "Check Your Understanding",
            "Intro to IELTS Listening · 12 marks");
        if (state.quizSubmitted) {
            var score = scoreQuiz();
            html += '<div class="ielts-card ielts-quiz-result"><h3>Your result</h3><p class="ielts-quiz-score">' + score + ' / 12</p>' +
                '<p>' + (score === 12 ? 'Excellent work — every mark earned.' : 'Review the feedback below, then try again to improve your score.') + '</p></div>';
        } else {
            html += '<p class="ielts-note">Choose one answer for Questions 1–10. For Questions 11–12, select exactly two options. The choose-two item is worth two marks only when both correct answers are selected and no incorrect option is selected.</p>';
        }
        html += '<form class="ielts-quiz-form" data-ielts-quiz-form>';
        LISTENING_QUIZ.forEach(function (q) {
            var chosen = state.answers[q.id];
            var correct = state.quizSubmitted && (q.type === "single" ? chosen === q.answer : Array.isArray(chosen) && chosen.length === 2 && q.answer.every(function (a) { return chosen.indexOf(a) !== -1; }));
            html += '<fieldset class="ielts-card ielts-question' + (state.quizSubmitted ? (correct ? ' ielts-answer-correct' : ' ielts-answer-incorrect') : '') + '"><legend>' +
                (q.id === 11 ? 'Questions 11–12' : 'Question ' + q.id) + '</legend><p class="ielts-question-prompt">' + esc(q.prompt) + '</p>';
            if (q.type === "multi") html += '<p class="ielts-note">Select TWO answers.</p>';
            q.options.forEach(function (option, i) {
                var val = String(i), checked = q.type === "multi" ? Array.isArray(chosen) && chosen.indexOf(val) !== -1 : chosen === val;
                var isAnswer = q.type === "multi" ? q.answer.indexOf(val) !== -1 : q.answer === val;
                html += '<label class="ielts-option"><input type="' + (q.type === "multi" ? 'checkbox' : 'radio') + '" name="q' + q.id + (q.type === "multi" ? '[]' : '') + '" value="' + val + '" data-ielts-answer="' + q.id + '"' + (checked ? ' checked' : '') + (state.quizSubmitted ? ' disabled' : '') + '> <span>' + String.fromCharCode(97 + i) + ') ' + esc(option) + '</span>' +
                    (state.quizSubmitted && isAnswer ? '<strong class="ielts-correct-label">Correct answer</strong>' : '') + '</label>';
            });
            if (state.quizSubmitted) {
                var answerText = q.type === "multi" ? q.answer.map(function (a) { return String.fromCharCode(97 + Number(a)) + ') ' + q.options[Number(a)]; }).join(' and ') : String.fromCharCode(97 + Number(q.answer)) + ') ' + q.options[Number(q.answer)];
                html += '<p class="ielts-answer-feedback"><strong>' + (correct ? 'Correct' : 'Correct answer: ' + esc(answerText)) + '</strong>' + (q.explanation ? ' — ' + esc(q.explanation) : '') + '</p>';
                if (q.note) html += '<p class="ielts-note">Editorial note: ' + esc(q.note) + '</p>';
            }
            html += '</fieldset>';
        });
        html += '</form>';
        if (!state.quizSubmitted) html += '<button type="button" class="start-button" data-ielts-quiz-submit>Submit answers</button>';
        else html += '<button type="button" class="start-button" data-ielts-quiz-retry>Try again</button>';
        html += backRow('<button type="button" class="secondary-button" data-ielts-quiz-back>← Back to Listening</button>');
        return html;
    }

    function scoreQuiz() {
        var score = 0;
        LISTENING_QUIZ.forEach(function (q) {
            var chosen = state.answers[q.id];
            if (q.type === "single" && chosen === q.answer) score += 1;
            if (q.type === "multi" && Array.isArray(chosen) && chosen.length === 2 && q.answer.every(function (a) { return chosen.indexOf(a) !== -1; })) score += 2;
        });
        return score;
    }

    /* ---- helper shared by Reading, Writing, Speaking hub views ---- */
    function renderSkillLessons(lessons, skillView) {
        var html = '<div class="ielts-lesson-grid">';
        lessons.forEach(function (L) {
            html += '<article class="ielts-card ielts-lesson-card"><p class="ielts-session-label">Sessions ' +
                esc(L.session) + ' \u00b7 ' + esc(L.type) + '</p><h3>' + esc(L.title) + '</h3>' +
                '<p class="ielts-lesson-purpose">' + esc(L.purpose.split('.')[0] + '.') + '</p>' +
                '<button type="button" class="secondary-button" data-ielts-skill-lesson="' + esc(skillView) + '|' + esc(L.id) + '">Open lesson \u2192</button></article>';
        });
        html += '</div>';
        return html;
    }

    function renderSkillLesson(L, skillView, skillTitle) {
        var html = header('IELTS \u00b7 ' + skillTitle.toUpperCase() + ' \u00b7 SESSIONS ' + L.session, L.title, L.purpose);
        html += '<div class="ielts-lesson-toolbar">' + status(L.type, 'open') + '<span class="ielts-note">Original practice examples \u00b7 not official IELTS items</span></div>';

        // Compact key strategies (top 3 bullets)
        var keyBullets = L.before.slice(0, 2).concat(L.during.slice(0, 1));
        html += '<section class="ielts-card ielts-key-strategies">' +
            '<h3>\u2726 Key strategies</h3><ul>' +
            keyBullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') +
            '</ul></section>';

        // Worked example + inline self-check
        html += '<section class="ielts-card ielts-worked-example"><p class="ielts-session-label">Worked example \u00b7 original illustrative text, not an official IELTS item</p><blockquote>' + esc(L.example) + '</blockquote>';
        html += '<h3>Think it through</h3><p class="ielts-note">Strategy check \u00b7 text only</p><p><strong>' + esc(L.question) + '</strong></p><div class="ielts-practice-options">';
        L.options.forEach(function(opt,i){
            html += '<label class="ielts-option"><input type="radio" name="ielts-skill-answer" value="' + i + '" data-ielts-skill-lesson-answer ' + (String(state.lessonAnswer)===String(i)?'checked':'') + (state.lessonChecked?' disabled':'') + '><span>' + esc(opt) + '</span></label>';
        });
        html += '</div>';
        if (!state.lessonChecked) html += '<button type="button" class="start-button" data-ielts-skill-lesson-check ' + (state.lessonAnswer===null?'disabled':'') + '>Check answer</button>';
        else html += '<p class="ielts-answer-feedback ' + (state.lessonAnswer===L.answer?'ielts-answer-correct':'ielts-answer-incorrect') + '"><strong>' + (state.lessonAnswer===L.answer?'Correct.':'Not quite.') + '</strong> ' + esc(L.feedback) + '</p><button type="button" class="secondary-button" data-ielts-skill-lesson-retry>Try again</button>';
        html += '</section>';

        // Collapsible full guide
        html += '<details class="ielts-full-guide"><summary>Full strategy guide (Before / During / After + Do&#39;s and Don&#39;ts)</summary><div class="ielts-full-guide-body">';
        html += '<h3>Before</h3><ul class="ielts-lesson-list">' + L.before.map(function(x){return '<li>'+esc(x)+'</li>';}).join('') + '</ul>';
        html += '<h3>During</h3><ul class="ielts-lesson-list">' + L.during.map(function(x){return '<li>'+esc(x)+'</li>';}).join('') + '</ul>';
        if (L.after && L.after.length) html += '<h3>After</h3><ul class="ielts-lesson-list">' + L.after.map(function(x){return '<li>'+esc(x)+'</li>';}).join('') + '</ul>';
        html += '<div class="ielts-paths"><section class="ielts-card"><h3>Do</h3><ul class="ielts-lesson-list">' + L.dos.map(function(x){return '<li>'+esc(x)+'</li>';}).join('') + '</ul></section>';
        html += '<section class="ielts-card"><h3>Don&#39;t</h3><ul class="ielts-lesson-list">' + L.donts.map(function(x){return '<li>'+esc(x)+'</li>';}).join('') + '</ul></section></div>';
        html += '</div></details>';

        html += '<div class="ielts-back-row">' + goButton('\u2190 ' + skillTitle + ' hub', skillView, 'secondary-button') + '</div>';
        return html;
    }

    function findSkillLesson(lessons, id) {
        for (var i = 0; i < lessons.length; i++) if (lessons[i].id === id) return lessons[i];
        return null;
    }

    function viewReading() {
        if (state.activeSubskill && ns.subskillEngine) {
            return ns.subskillEngine.renderSubskillLearning(state.activeSubskill, 'reading', state);
        }
        var html = header('IELTS · READING · ' + trackLabel().toUpperCase(), 'Reading',
            'Build your strategies for IELTS Reading passages and question types.');
        html += trackPicker();
        if (ns.subskillEngine) {
            html += ns.subskillEngine.renderSubskillsGrid('reading');
        }
        html += backRow(goButton('← IELTS home', '', 'secondary-button'));
        return html;
    }

    function viewWriting() {
        if (state.activeSubskill && ns.subskillEngine) {
            return ns.subskillEngine.renderSubskillLearning(state.activeSubskill, 'writing', state);
        }
        var html = header('IELTS · WRITING · ' + trackLabel().toUpperCase(), 'Writing',
            'Prepare for IELTS Writing Task 1 and Task 2 with structured blueprints and model answers.');
        html += trackPicker();
        if (ns.subskillEngine) {
            html += ns.subskillEngine.renderSubskillsGrid('writing');
        }
        html += backRow(goButton('← IELTS home', '', 'secondary-button'));
        return html;
    }

    function viewSpeaking() {
        if (state.activeSubskill && ns.subskillEngine) {
            return ns.subskillEngine.renderSubskillLearning(state.activeSubskill, 'speaking', state);
        }
        var html = header('IELTS · SPEAKING · ' + trackLabel().toUpperCase(), 'Speaking',
            'Prepare for all three parts of the IELTS Speaking test with official timers and model responses.');
        html += trackPicker();
        if (ns.subskillEngine) {
            html += ns.subskillEngine.renderSubskillsGrid('speaking');
        }
        html += backRow(goButton('← IELTS home', '', 'secondary-button'));
        return html;
    }

    function render() {
        if (!root) return;
        var v = state.view, html;
        if (v === "listening" && state.lessonId) html = viewListeningLesson();
        else if (v === "listening" && state.quiz) html = viewListeningQuiz();
        else if (v === "course") html = viewCourse();
        else if (v === "library") html = viewLibrary();
        else if (v === "listening") html = viewListening();
        else if (v === "reading") html = viewReading();
        else if (v === "writing") html = viewWriting();
        else if (v === "speaking") html = viewSpeaking();
        else html = viewDashboard();
        root.innerHTML = html;
    }

    /* ---------- public entry point ---------- */

    function show(view, track) {
        view = (typeof view === "string" && Object.prototype.hasOwnProperty.call(VIEWS, view)) ? view : "";
        if (validTrack(track)) state.track = track;
        if (view !== state.view) {
            state.activeSubskill = null;
            state.subskillStage = 1;
            state.quiz = false;
            state.quizSubmitted = false;
            state.answers = {};
            state.lessonId = null;
            state.lessonChecked = false;
            state.lessonAnswer = null;
            state.writingTask = null;
            state.speakingTimerPhase = null;
            if (window._ieltsSpTimer) {
                clearInterval(window._ieltsSpTimer);
                window._ieltsSpTimer = null;
            }
        }
        state.view = view;

        root = document.getElementById("ielts-root");
        if (typeof window.hideAllScreens === "function") window.hideAllScreens();
        var screen = document.getElementById("ielts-screen");
        if (screen) screen.style.display = "block";
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function route() {
        return "ielts" + (state.view ? "/" + state.view : "") + "?track=" + state.track;
    }

    function onClick(event) {
        var el = event.target.closest ? (event.target.closest("button") || event.target.closest("[data-ielts-open-subskill]") || event.target.closest("[data-ielts-jump-skill]") || event.target.closest("[data-ielts-subskill-stage]")) : null;
        if (!el || !root || !root.contains(el)) return;
        if (ns.subskillEngine && typeof ns.subskillEngine.handleClick === "function") {
            if (ns.subskillEngine.handleClick(el, state, render)) return;
        }
        if (el.hasAttribute('data-ielts-track')) {
            var t = el.getAttribute('data-ielts-track');
            if (validTrack(t)) {
                saveTrack(t);
                window.showIELTS(state.view, t);
            }
        } else if (el.hasAttribute('data-ielts-view')) {
            var nextView = el.getAttribute('data-ielts-view');
            state.activeSubskill = null;
            window.showIELTS(nextView);
        } else if (el.hasAttribute('data-ielts-courses')) {
            if (typeof window.showCourseHub === 'function') window.showCourseHub();
        } else if (el.hasAttribute('data-ielts-home')) {
            state.activeSubskill = null;
            window.showIELTS('');
        } else if (el.hasAttribute('data-ielts-quiz-start')) {
            state.quiz = true; state.quizSubmitted = false; state.answers = {}; render();
        } else if (el.hasAttribute('data-ielts-quiz-back')) {
            state.quiz = false; render();
        } else if (el.hasAttribute('data-ielts-quiz-submit')) {
            state.quizSubmitted = true; render();
        } else if (el.hasAttribute('data-ielts-quiz-retry')) {
            state.quizSubmitted = false; state.answers = {}; render();
        }
    }

    var rootAtLoad = document.getElementById('ielts-root');
    if (rootAtLoad) {
        rootAtLoad.addEventListener('click', onClick);
        rootAtLoad.addEventListener('input', function (e) {
            if (ns.subskillEngine && typeof ns.subskillEngine.handleInput === 'function') {
                ns.subskillEngine.handleInput(e, state);
            }
        });
        rootAtLoad.addEventListener('change', function (e) {
            if (ns.subskillEngine && typeof ns.subskillEngine.handleInput === 'function') {
                ns.subskillEngine.handleInput(e, state);
            }
        });
        rootAtLoad.addEventListener('error', function (event) {
            var t = event.target;
            if (!t || !t.closest || (t.tagName !== 'SOURCE' && t.tagName !== 'AUDIO')) return;
            var box = t.closest('.ielts-map-side, .ielts-audio-item');
            var note = box && box.querySelector('.ielts-audio-missing');
            if (note) note.hidden = false;
        }, true);
    }

    ns.route = route;
    ns.getTrack = function () { return state.track; };
    ns.tracks = Object.keys(TRACKS);
    ns.views = Object.keys(VIEWS).filter(Boolean);
    window.showIELTS = show;
})();
