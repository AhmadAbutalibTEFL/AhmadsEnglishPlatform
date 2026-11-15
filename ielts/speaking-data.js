/* =========================================================
   IELTS SPEAKING: content data

   Pure data, no behaviour; ielts.js renders it. Load BEFORE ielts.js.

   FORMAT FACTS: paraphrased from the IELTS partners' public test-format pages.
   CUE CARDS, QUESTIONS and SAMPLE ANSWERS are ORIGINAL, written for
   PassMyEnglish to IELTS standards - no third-party test content.
   Nothing here records or uploads audio; practice is private.
   ========================================================= */
(function () {
    "use strict";

    var ns = window.IELTS = window.IELTS || {};

    ns.speakingData = {
        version: 1,

        source: {
            label: "IELTS official: Speaking test format",
            url: "https://ielts.org/take-a-test/test-types/speaking-test",
            checked: "14 November 2026"
        },

        facts: [
            { label: "Format", value: "Face-to-face interview with an examiner" },
            { label: "Time", value: "11-14 minutes" },
            { label: "Parts", value: "3 - interview, long turn, discussion" },
            { label: "Same test", value: "Identical for Academic and General Training" }
        ],

        criteria: [
            { name: "Fluency and coherence", plain: "Did you keep going smoothly, without long pauses, and organise your ideas?" },
            { name: "Lexical resource", plain: "Did you use varied, precise vocabulary naturally?" },
            { name: "Grammatical range and accuracy", plain: "Did you mix simple and complex sentences, mostly error-free?" },
            { name: "Pronunciation", plain: "Would a listener follow you easily - clear sounds, stress and rhythm?" }
        ],

        parts: [
            { id: 1, name: "Part 1: Interview", time: "4-5 minutes", what: "Familiar questions about you: home, work, studies, hobbies.", tip: "Answer in 2-3 sentences: answer + reason + detail. Never one word." },
            { id: 2, name: "Part 2: The long turn", time: "3-4 minutes", what: "You get a cue card, 1 minute to prepare, then speak for up to 2 minutes.", tip: "Use the preparation minute for quick notes - one word per bullet point." },
            { id: 3, name: "Part 3: Discussion", time: "4-5 minutes", what: "Deeper questions connected to the Part 2 topic: opinions, comparisons, speculation.", tip: "Develop every answer: opinion, because, example, contrast." }
        ],

        lessons: [
            {
                id: "s-part1", session: 7, title: "Part 1: The Interview", type: "Core strategy",
                purpose: "Turn short questions into full, natural 2-3 sentence answers.",
                before: [
                    "Expect easy, personal topics - the examiner is warming you up, not trapping you.",
                    "Prepare flexible true details about your home, work or studies, and free time."
                ],
                during: [
                    "Use the formula: answer the question, add a reason, add a small detail or example.",
                    "Match the tense of the question - 'Do you...' wants present, 'Did you...' wants past.",
                    "If you don't understand, ask: 'Sorry, could you repeat that?' It costs nothing."
                ],
                after: [
                    "After practice, notice where you paused - those are the answers to rehearse again.",
                    "Say your best answers aloud twice; fluency comes from repetition."
                ],
                dos: [
                    "Extend every answer beyond yes/no.",
                    "Sound interested - energy helps fluency scores."
                ],
                donts: [
                    "Don't recite memorised paragraphs - examiners change the subject when they hear them.",
                    "Don't give one-word answers."
                ],
                example: "Q: 'Do you live in a house or an apartment?' Weak: 'An apartment.' Strong: 'I live in an apartment in the city centre. It's small, but I chose it because I can walk to work, which saves me a lot of time.'",
                practice: "The examiner asks: 'Do you prefer mornings or evenings?'",
                question: "Apply the pattern (answer + reason + small detail): which reply is strongest?",
                options: ["Mornings, definitely. My head is clearest early in the day, so I study then - by ten o'clock I have usually done more than I manage all evening.", "Mornings.", "I prefer mornings because mornings are better for me in the morning."],
                answer: 0,
                feedback: "The first reply answers the question, gives a reason, and adds a concrete detail - three sentences with fluency, vocabulary and grammar the examiner can score. One word wastes the chance; the last reply says nothing twice."
            },
            {
                id: "s-part2", session: 7, title: "Part 2: The Long Turn", type: "Core strategy",
                purpose: "Speak for two minutes from a cue card, using the one-minute preparation well.",
                before: [
                    "In the preparation minute, write one or two WORDS per bullet point - never sentences.",
                    "Decide your story in the first 10 seconds, then spend the rest on vocabulary.",
                    "Add one extra bullet of your own: a feeling or a lesson. It rescues you if you finish early."
                ],
                during: [
                    "Cover each bullet point in order, but speak naturally - the card is a map, not a script.",
                    "If you finish the bullets before two minutes, extend with your extra point until the examiner stops you.",
                    "Keep going after small mistakes; correct yourself once and move on."
                ],
                after: [
                    "In practice, time yourself: under 1:30 means your stories need more detail.",
                    "Note the words you searched for - learn them before the next practice."
                ],
                dos: [
                    "Tell a real story when you can - real memories carry vocabulary with them.",
                    "Use the past tenses the card invites: 'I learned... it took... I felt...'."
                ],
                donts: [
                    "Don't stop early and wait silently - the silence is scored, not the speaking.",
                    "Don't write full sentences in the preparation minute."
                ],
                example: "Cue card: 'Describe a skill you learned.' Notes: 'cooking - grandmother - 15 - burned rice - patient - proud'. Six words carry two minutes of speaking.",
                practice: "Cue card: 'Describe a teacher you remember. You should say: who the teacher was, what they taught, what made them memorable, and how they influenced you.' You have one minute to prepare.",
                question: "Apply the lesson: which set of notes follows the advice?",
                options: ["'Mrs Nadia - maths - jokes - believed in me'", "'I would like to talk about a teacher who had a very big influence on my life when I was young...'", "Blank paper - notes waste the minute"],
                answer: 0,
                feedback: "Four keywords - roughly one per bullet - keep you on track while your speaking stays natural. Writing full sentences eats the minute and tempts you to read instead of speak."
            },
            {
                id: "s-part3", session: 8, title: "Part 3: The Discussion", type: "Core strategy",
                purpose: "Handle abstract questions with developed, organised opinions.",
                before: [
                    "Expect 'why', 'compare' and 'future' questions - not personal facts.",
                    "Prepare thinking phrases that buy time honestly: 'That's an interesting question...', 'I've never thought about it that way, but...'."
                ],
                during: [
                    "Structure big answers: opinion, because, example, contrast ('although some people say...').",
                    "Speculate when asked about the future: 'I imagine...', 'It's likely that...'.",
                    "Compare explicitly: 'In my parents' generation..., whereas now...'."
                ],
                after: [
                    "Review whether you developed each answer or repeated yourself.",
                    "Collect two new linking phrases from each practice and reuse them."
                ],
                dos: [
                    "Give general answers about society, not stories about yourself.",
                    "Admit uncertainty gracefully - speculation is a skill, not a weakness."
                ],
                donts: [
                    "Don't answer Part 3 questions with personal anecdotes alone.",
                    "Don't abandon an answer halfway - finish the thought, even simply."
                ],
                example: "Q: 'How will technology change the way people learn skills?' Developed answer: 'I imagine online learning will make most practical skills more accessible, because video lessons let anyone repeat a demonstration. Cooking channels are a good example. That said, some skills, like surgery, will always need a human teacher.'",
                practice: "The examiner asks: 'How do you think cities will change in the next twenty years?'",
                question: "Apply the lesson: which opening best fits Part 3?",
                options: ["In general, I expect cities to become greener, because many governments are already limiting cars in city centres.", "My city is very hot in summer, and I live near the river.", "Sorry, I don't know anything about the future."],
                answer: 0,
                feedback: "Part 3 wants a general, developed answer about society, with a reason attached. A personal fact alone belongs to Part 1, and giving up ends the discussion before it starts."
            }
        ],

        practice: [
            {
                id: "sp-1", kind: "cuecard",
                title: "Practice 1: Cue card - A skill you learned",
                part: 2,
                cueCard: {
                    topic: "Describe a useful skill you learned.",
                    bullets: [
                        "what the skill is",
                        "when and how you learned it",
                        "how long it took to learn",
                        "and explain why it has been useful to you."
                    ]
                },
                prepNote: "You would have 1 minute to make notes in the real test. Use the box below to practise keyword notes, then speak for up to 2 minutes - aloud, on your own. Nothing is recorded.",
                sampleAnswer: [
                    "A useful skill I learned is cooking simple meals from scratch. I learned it when I was about fifteen, mostly from my grandmother, who believed that anyone who can read a recipe can cook.",
                    "It took me a long time - I'd say a whole summer of burnt rice and over-salted soup before I could produce a meal people actually enjoyed. The turning point was learning to taste as I cooked instead of waiting until the end.",
                    "The skill has been useful in ways I never expected. Obviously it saves money, because I rarely order takeaway, but it also helps socially: cooking for friends is one of the easiest ways to bring people together. And honestly, after a stressful day, chopping vegetables is strangely calming.",
                    "If I hadn't learned it then, I think I'd have had to learn it as an adult anyway - so I'm grateful my grandmother started me early."
                ],
                samplePhrases: ["I'd say", "The turning point was", "in ways I never expected", "If I hadn't learned it then"]
            },
            {
                id: "sp-2", kind: "discussion",
                title: "Practice 2: Part 3 discussion - Learning and skills",
                part: 3,
                questions: [
                    "Do you think practical skills are valued as much as academic knowledge in your country?",
                    "How has the way people learn new skills changed in the last twenty years?",
                    "Is it better to learn a skill from a person or from the internet? Why?",
                    "Which skills do you think will be most valuable in the future?",
                    "Should schools spend more time teaching practical skills? Why or why not?"
                ],
                prepNote: "Answer each question aloud with a developed opinion: opinion, because, example, contrast. Nothing is recorded.",
                sampleAnswer: [
                    "Question 1 sample: 'On the whole, I'd say academic qualifications still open more doors in my country, because most large employers screen candidates by degree first. Having said that, attitudes are shifting - a skilled electrician often earns more than an office graduate now, and people have started to notice.'"
                ],
                samplePhrases: ["On the whole, I'd say", "Having said that", "attitudes are shifting"]
            }
        ]
    };
})();
