/* =========================================================
   EST ENRICHMENT LAYER
   Original teaching content that wraps the teacher's handouts: a hook, a mental
   model, worked examples with the reasoning shown, an error gallery, a note for
   Arabic-speaking learners (based on published research on Arab EFL learners'
   typical errors), an exam move, "Try it" checks and a cheat sheet.
   Quick checks reveal their answer on demand; graded practice uses Check answers.
   ========================================================= */
(function () {
    "use strict";
    var E = {};

    E["relevance"] = { icon: "\uD83D\uDD26",
        hook: "Every EST paragraph has a spotlight. Your job is to notice what is standing in the light and what has wandered in from somewhere else.",
        why: "Add, delete and revise questions appear in Module 1 on almost every passage. They reward calm editors, not fast readers.",
        outcomes: ["State a paragraph\u2019s focus in 5\u201310 words", "Decide whether a sentence belongs, helps or distracts", "Pick the revision that does the paragraph\u2019s job most directly"],
        model: ["The Spotlight Test", "Name the spotlight first (the topic and purpose). Then ask of each option: is it inside the light, at the edge, or in the dark? Inside the light = keep or add. In the dark = delete or reject, however true or interesting it is."],
        examples: [
            { s: "Paragraph focus: how a school garden teaches plant science. Candidate sentence: \u201cThe school also won a regional football trophy.\u201d", ans: "Delete", why: "True, but in the dark. Nothing in it helps the reader understand how the garden teaches science." },
            { s: "Paragraph focus: why the library extended its hours. Candidate: \u201cNight-shift workers can now borrow books after 9 p.m.\u201d", ans: "Keep / add", why: "It gives a concrete reason and result tied to the focus, so it is inside the light." }],
        errors: [["Choosing the most interesting sentence", "Choosing the most relevant sentence", "Interest is not the test. Purpose is."], ["Deleting a sentence because it is long", "Deleting because it is off-topic or repeats", "Length is not the problem; function is."], ["Keeping a sentence because it is true", "Keeping it because it supports the focus", "True and relevant are different things."]],
        l1: "Many Arabic-speaking writers are taught to enrich a point with elaboration and repetition. In an English exam paragraph, one controlled point wins, so a sentence that feels beautiful may still be the one to cut.",
        tip: "Before you read the choices, finish this sentence: \u201cThis paragraph is mainly about ___ so that the reader ___.\u201d Then eliminate anything that does not serve it.",
        quick: [{ q: "Focus: how bees guide each other to food. Which sentence is in the spotlight?", c: ["Honey is sold in jars of many sizes.", "A returning bee performs a dance that points to the food.", "Some beekeepers wear white suits."], a: 1, why: "Only the dance explains how bees guide one another." }],
        cheat: ["Name the focus first", "Relevant beats interesting", "Delete = off-topic or repeated", "Revise = most direct way to do the job", "Decide before the options sway you"] };

    E["sentence-order"] = { icon: "\uD83E\uDDE9",
        hook: "A paragraph is a chain. Each sentence hands something to the next one, and your job is to find the sentence whose hands are empty.",
        why: "Order questions are fast points once you know what to look for: links. Many of them can be solved in under 40 seconds.",
        outcomes: ["Spot link words (this, these, also, however, then)", "Match a sentence to the idea it continues", "Test a placement by rereading the chain"],
        model: ["The Handshake Rule", "Every sentence should shake hands with the one before it (looking back) and the one after it (looking forward). A misplaced sentence has an empty hand: it points back to something that is not there, or sets up something that never arrives."],
        examples: [
            { s: "1. Researchers collected water samples. 2. These samples were tested in a lab. 3. The lab found high salt levels. Where does \u201cThese samples were tested\u2026\u201d belong?", ans: "After 1", why: "\u201cThese samples\u201d only makes sense after the samples have been introduced." },
            { s: "\u201cHowever, the results surprised everyone.\u201d Where can it go?", ans: "After the sentence that states what people expected", why: "However signals contrast, so something expected must come first." }],
        errors: [["Placing a sentence where it \u201csounds nice\u201d", "Placing it next to the idea it continues", "Sound is unreliable; logic is not."], ["Ignoring this / these / that", "Finding what this points to", "A pointer needs a target just before it."], ["Moving a sentence without rereading", "Reading the whole chain afterwards", "Always confirm the flow."]],
        l1: "English leans on explicit pointers such as this, these, and then to hold sentences together. Look for them first; they are your best clues.",
        tip: "Circle the first word or two of the sentence. If it is a pointer or a contrast word, hunt for its target. If not, ask what topic it introduces.",
        quick: [{ q: "\u201cThis discovery changed farming.\u201d Which sentence should come right before it?", c: ["Farmers use many tools.", "In 1700, a new seed drill was invented.", "Many people live in cities."], a: 1, why: "\u201cThis discovery\u201d needs a discovery or invention just before it." }],
        cheat: ["Look back, look forward", "Pointers need targets", "Contrast words need something to contrast", "Reread the chain", "Off-topic = delete, not move"] };

    E["shorter-is-better"] = { icon: "\u2702\uFE0F",
        hook: "Your sentence is a suitcase. Pack everything you need, nothing you do not.",
        why: "Concision items hide in Module 1 as \u201cmost concise and precise\u201d. They are won by trimming, not by sounding clever.",
        outcomes: ["Spot redundancy and wordiness at a glance", "Prefer short choices only when meaning is kept", "Avoid short but vague traps"],
        model: ["The Suitcase Test", "Take out every word that repeats or decorates. If the meaning survives, the word was luggage. If the meaning breaks, put it back: that word was essential."],
        examples: [
            { s: "\u201cThe team was in the process of discussing the problem.\u201d", ans: "The team was discussing the problem.", why: "\u201cIn the process of\u201d adds length, not meaning." },
            { s: "\u201cShe was a very unique and one-of-a-kind artist.\u201d", ans: "She was a unique artist.", why: "Unique already means one of a kind, and very is not needed." }],
        errors: [["return back / repeat again", "return / repeat", "The prefix re- already means again or back."], ["due to the fact that", "because", "Five words doing a one-word job."], ["Choosing the shortest option automatically", "Choosing the shortest option that keeps the meaning", "Vague short options are traps."]],
        l1: "Arabic rhetoric often pairs near-synonyms for emphasis. In English exam writing, that doubling is penalised as redundancy, so use one strong word.",
        tip: "Compare two correct-looking options for meaning first. If they are identical in meaning, take the shorter one. If one loses information, reject it.",
        quick: [{ q: "Which is most concise and keeps the meaning? \u201cThe reason is because the road was icy.\u201d", c: ["The reason is because the road was icy.", "The road was icy.", "The reason is that the road was icy."], a: 2, why: "\u201cReason is because\u201d is redundant. \u201cThe reason is that\u201d keeps the explanation frame without repetition." }],
        cheat: ["Delete repeats", "Prefer verbs over noun phrases", "Short + clear + complete", "Never trade meaning for length", "Read the final sentence aloud"] };

    E["diction-idioms-register"] = { icon: "\uD83C\uDFAF",
        hook: "Three tiny words decide most of these questions: meaning, pattern, tone.",
        why: "Word-choice items look easy and fool strong students because two options feel right. Precision is the tie-breaker.",
        outcomes: ["Choose the word with the exact meaning", "Use fixed prepositions and verb patterns", "Match the passage\u2019s formality"],
        model: ["Meaning \u2192 Pattern \u2192 Tone", "Check in this order: Does it mean the right thing? Does it fit with its neighbouring words (the pattern)? Does it match the register? Eliminate on the first failed check."],
        examples: [
            { s: "\u201cThe findings were ___ by later studies.\u201d (confirmed / confessed / confided)", ans: "confirmed", why: "Meaning: studies can confirm findings. The others are about people sharing secrets." },
            { s: "\u201cThe results were consistent ___ earlier work.\u201d", ans: "with", why: "Fixed pattern: consistent with." }],
        errors: [["different than / depend from", "different from / depend on", "Fixed phrases cannot be reasoned out; learn them as chunks."], ["super cool findings", "remarkable findings", "Casual slang breaks formal register."], ["effect vs affect mix-up", "affect = verb, effect = noun (usually)", "Check the part of speech first."]],
        l1: "Arabic prepositions rarely map one-to-one onto English ones (research on Arab learners lists prepositions among the most frequent trouble spots). Store phrases as whole chunks: depend on, interested in, capable of.",
        tip: "Say the sentence with each option. If your ear hesitates, test the pattern, not just the meaning.",
        quick: [{ q: "Which fits a formal science report?", c: ["The data kinda showed a trend.", "The data revealed a clear trend.", "The data like totally proved it."], a: 1, why: "Neutral, precise and moderately formal." }],
        cheat: ["Meaning first", "Learn phrases as chunks", "Neutral formal register", "affect = verb, effect = noun", "Fancy is not better"] };

    E["vocabulary-in-context"] = { icon: "\uD83D\uDD0D",
        hook: "Words are actors. The same word can play a hero in one sentence and a villain in the next. The sentence is the script, and it tells you the role.",
        why: "Words-in-context questions appear in every EST reading and mixed module. You are rarely tested on rare words. You are tested on familiar words doing unfamiliar jobs.",
        outcomes: ["Predict a meaning before looking at the options", "Notice second meanings of everyday words", "Test each option by putting it back into the sentence"],
        model: ["Cover, Predict, Test", "Cover the options. Predict a simple word that fits. Then test every option in the sentence. Choose the one that matches your prediction AND sounds natural."],
        examples: [
            { s: "\u201cThe new policy will accommodate students who work evenings.\u201d", ans: "serve / make room for", why: "Not \u201cgive a place to sleep\u201d. The context is about schedules, so the meaning is adapt to the needs of." },
            { s: "\u201cThe lawyer entertained the idea of settling.\u201d", ans: "considered", why: "There is no amusement here. Entertain an idea = think about it seriously." }],
        errors: [["Choosing the meaning you already know", "Choosing the meaning that fits the sentence", "The familiar meaning is the trap."], ["Picking a fancy synonym", "Picking the plainest fit", "Simple, natural words win."], ["Ignoring the sentence before and after", "Reading the neighbours too", "Clues often sit one sentence away."]],
        l1: "One Arabic translation can hide a word\u2019s other meanings. Do not let your dictionary translation decide; let the sentence decide.",
        tip: "If two options both fit, check tone and typical word partners: which one would an English writer naturally use here?",
        quick: [{ q: "\u201cThe critic qualified her praise.\u201d Qualified most nearly means", c: ["trained", "limited", "approved"], a: 1, why: "She added conditions, which made her praise less absolute." }],
        cheat: ["Cover options, predict", "Test each option in the sentence", "Everyday words have second meanings", "Read neighbouring sentences", "Plain and natural beats fancy"] };

    E["concrete-to-abstract"] = { icon: "\uD83D\uDD17",
        hook: "Authors are packers too. They take a whole paragraph of details and fold it into one tiny phrase: this, these developments, the phenomenon.",
        why: "If you miss what a pronoun or label points to, every question that follows can collapse. This is the skill behind inference, function and purpose questions.",
        outcomes: ["Find the referent of this / that / these / those", "Unpack compression nouns (notion, development, phenomenon)", "Use former and latter correctly"],
        model: ["Unzip the Phrase", "A pointer phrase is a zipped file. Look back, find the idea it stores, then \u201cunzip\u201d it by rewording it in plain words before you answer."],
        examples: [
            { s: "\u201cStudents now submit work online and receive feedback within hours. This change has reduced waiting time.\u201d This change =", ans: "submitting online and getting fast feedback", why: "The phrase compresses both actions in the previous sentence." },
            { s: "\u201cMethod A used interviews; Method B used surveys. The latter reached more people.\u201d The latter =", ans: "Method B", why: "Latter = the second of two things." }],
        errors: [["Choosing the nearest noun", "Choosing the idea the phrase actually represents", "The referent can be a whole sentence."], ["Mixing up former and latter", "Former = first, latter = last", "Draw a 1 and a 2 above the two items."], ["Guessing without looking back", "Reading the previous sentence first", "Always back up."]],
        l1: "Arabic often repeats the noun for clarity. English prefers pointers. Practise saying what this means aloud in one plain sentence.",
        tip: "Replace the pointer with your unzipped idea and reread. If the sentence still flows, you have the right referent.",
        quick: [{ q: "\u201cThe city added bike lanes and lowered speed limits. These measures cut accidents.\u201d These measures =", c: ["accidents", "bike lanes and lower speed limits", "the city"], a: 1, why: "\u201cMeasures\u201d compresses the two actions just mentioned." }],
        cheat: ["Look back first", "Referent can be a whole idea", "Unzip in plain words", "Former = 1st, latter = 2nd", "Reread with your replacement"] };

    E["big-picture"] = { icon: "\uD83D\uDDFA\uFE0F",
        hook: "Get the map before you walk the streets. Details are houses; the big picture is the city.",
        why: "Central idea, summary and purpose questions reward readers who stay at altitude. They punish readers who fall in love with one detail.",
        outcomes: ["State the main point as Topic + So what?", "Spot answers that are too narrow or too broad", "Use first and last sentences as signposts"],
        model: ["Topic + So What?", "Topic = what it is about. So what = what the author wants you to understand about it. A main idea needs both. \u201cUrban trees\u201d is a topic; \u201cUrban trees cool cities and improve public spaces\u201d is a main idea."],
        examples: [
            { s: "A passage lists three ways schools cut energy use and says costs fell each year.", ans: "Schools can save money by using less energy.", why: "Covers all the details without being a single example." },
            { s: "Options: (A) Schools use light bulbs. (B) Energy matters. (C) Simple changes help schools cut costs.", ans: "C", why: "A is a detail, B is too broad, C is the point." }],
        errors: [["True but tiny (a detail)", "The whole passage in one sentence", "Details prove the point; they are not the point."], ["Too broad (\u201cEnergy is important\u201d)", "Specific enough to say something", "Could it describe ten other passages? Too broad."], ["Ignoring the conclusion", "Checking the last lines", "Authors often restate the point there."]],
        l1: "Do not translate every sentence. Skim for the gist in English, then return for the details you need.",
        tip: "Before the options, write your own 10-word summary. Pick the option closest to yours, then check that it covers the whole passage.",
        quick: [{ q: "A passage describes how a museum used old photos and chemical tests to restore a painting accurately. Best main idea?", c: ["Old photos are useful.", "Museums use varied evidence to restore art accurately.", "Paint can be tested."], a: 1, why: "It covers both kinds of evidence and the goal." }],
        cheat: ["Topic + So what", "First and last lines are signposts", "Too narrow / too broad are traps", "Write your own summary first", "Cover the whole passage"] };

    E["supporting-evidence"] = { icon: "\uD83E\uDDFE",
        hook: "A claim is a promise; evidence is the receipt. This lesson trains you to check the receipt.",
        why: "Evidence and reasoning items test whether you can tell proof from related-sounding detail, a core skill in Modules 2 and 3.",
        outcomes: ["Predict what proof would look like", "Choose the detail that directly supports the claim", "Explain why a piece of evidence works"],
        model: ["Claim \u2192 Proof \u2192 Link", "Find the claim, predict the kind of proof it needs (numbers, a test result, an example), then choose the option that connects most directly. Related is not the same as supportive."],
        examples: [
            { s: "Claim: \u201cThe new bus route improved access.\u201d Which is best evidence?", ans: "Ridership from the neighbourhood rose after the route opened.", why: "It measures access. A photo of the bus is related but proves nothing." },
            { s: "Claim: \u201cThe material is flexible.\u201d Which detail supports it?", ans: "It bent and returned to shape in repeated tests.", why: "Directly shows flexibility." }],
        errors: [["Same topic, no proof", "Directly proves the exact claim", "Topic match is the classic trap."], ["Too strong (always, never)", "Matches the strength of the claim", "Evidence must not overclaim."], ["Supporting the opposite", "Checking direction", "Watch for reversals."]],
        l1: "Questions say \u201csupports\u201d and \u201cweakens\u201d with small words. Read the verb carefully; it flips the answer.",
        tip: "Ask: \u201cIf this detail were false, would the claim lose strength?\u201d If not, it is just related.",
        quick: [{ q: "Claim: \u201cThe garden improved science learning.\u201d Best evidence?", c: ["Students plant tomatoes.", "Test scores in plant biology rose after the garden opened.", "The garden is next to the gym."], a: 1, why: "It measures learning on the topic." }],
        cheat: ["Find the claim", "Predict the proof", "Related \u2260 supportive", "Watch strength words", "Check direction"] };

    E["literal-comprehension"] = { icon: "\uD83D\uDCAC",
        hook: "Same idea, different clothes. The right answer almost never repeats the passage word for word.",
        why: "Literal items are easy points, but only if you resist the copy-paste trap and match meaning.",
        outcomes: ["Paraphrase a sentence in plain words", "Reject too-broad and unsupported options", "Check every part of an answer"],
        model: ["Paraphrase First", "Find the sentence, say it in simple words, then pick the option with the same idea. Words from the passage in an option are a warning sign if the meaning changed."],
        examples: [
            { s: "\u201cMost tagged turtles returned to the same beach the next year.\u201d", ans: "Most turtles went back to their original nesting beach.", why: "Same idea, new words." },
            { s: "Option: \u201cAll turtles returned to the same beach.\u201d", ans: "Wrong", why: "\u201cAll\u201d is stronger than \u201cmost\u201d." }],
        errors: [["Copying words", "Matching meaning", "Repeated words can hide changed meaning."], ["Absolute words (all, never)", "Matching the exact strength", "Passages usually say most, often, some."], ["Adding a reason the text never gives", "Staying within the passage", "No evidence, no points."]],
        l1: "If you translate silently, you may match your translation instead of the text. Paraphrase in English.",
        tip: "Underline strength words (most, some, often) in the passage and in each option. They must match.",
        quick: [{ q: "\u201cThe store extended hours and sales rose.\u201d Which is supported?", c: ["Longer hours caused all the growth.", "Sales rose after the store extended its hours.", "Customers demanded longer hours."], a: 1, why: "The others add causes or claims the text does not state." }],
        cheat: ["Say it in simple words", "Match meaning, not words", "Watch strength words", "No unsupported reasons", "Answer the whole question"] };

    E["sentences-fragments"] = { icon: "\uD83E\uDDF1",
        hook: "A real sentence is a tiny story: someone does something and the thought is complete. Fragments leave you hanging; run-ons never let you breathe.",
        why: "Sentence-boundary items are among the most frequent in Module 1. They are rule-based, which means they are very coachable.",
        outcomes: ["Find the subject and finite verb in any clause", "Repair fragments, run-ons and comma splices", "Choose between period, semicolon, comma + conjunction"],
        model: ["Can It Stand Alone?", "An independent clause has a subject, a finite verb and a complete thought. Two independent clauses need a real join: period, semicolon, or comma + FANBOYS (for, and, nor, but, or, yet, so). A comma alone is not a join."],
        examples: [
            { s: "\u201cThe trial ended, the team reviewed the data.\u201d", ans: "The trial ended; the team reviewed the data.", why: "Two complete thoughts joined by a comma = comma splice. A semicolon is a real join." },
            { s: "\u201cAlthough the data were limited.\u201d", ans: "Fragment", why: "Although makes the clause dependent; it needs a main clause." }],
        errors: [["The survey was short it reached many people.", "The survey was short, but it reached many people.", "Run-on: no join at all."], ["Because it rained.", "Because it rained, the match moved indoors.", "Dependent clause alone."], ["The students in the club.", "The students in the club presented findings.", "Subject with no verb."]],
        l1: "Arabic can chain ideas with wa (and) into long, flowing sentences. English exams treat that as a run-on or comma splice. Research on Arab learners notes run-ons and comma splices among the most common writing errors. Learn to stop and put a full stop.",
        tip: "Split every long sentence at each comma. Can each side stand alone? If both can, you need a stronger join than a comma.",
        quick: [{ q: "Which is a complete sentence?", c: ["When the bell rang.", "The bell rang, and the class ended.", "The bell, which rang loudly."], a: 1, why: "Two independent clauses joined by comma + and." }],
        cheat: ["Subject + finite verb + complete thought", "Comma alone cannot join sentences", "Period, semicolon, or comma + FANBOYS", "Although/because/when = dependent", "Test by splitting at commas"] };

    E["extended-reasoning"] = { icon: "\uD83E\uDDE0",
        hook: "Some answers are not written in the passage; they are built from it. Think like a detective who must prove every step.",
        why: "Inference and application questions separate good scores from top scores because they require careful logic, not recall.",
        outcomes: ["Draw conclusions that follow strictly from the text", "Apply a principle to a new situation", "Spot a flaw in reasoning"],
        model: ["The Proof Rule", "The best inference is the smallest safe step from the text. If you must add facts to justify an answer, it is too far. If you can point to the lines that force it, it is right."],
        examples: [
            { s: "\u201cEvery plant in the trial grew taller with compost. The sample was only 12 plants.\u201d Safe conclusion?", ans: "Compost helped these 12 plants; more testing is needed to generalise.", why: "The sample is small. Broad claims overreach." },
            { s: "\u201cThe road floods whenever the river rises. The river rose.\u201d", ans: "The road probably flooded.", why: "The principle plus the fact lead to it." }],
        errors: [["Overgeneralising from a small sample", "Limiting the claim to the evidence", "Words like all/always are red flags."], ["Using outside knowledge", "Using only the passage", "The passage is the world."], ["Reversing cause and effect", "Checking direction", "Correlation is not cause."]],
        l1: "Arabic argument can build to a strong conclusion through rhetoric. EST reasoning wants cautious, evidence-bound conclusions, so prefer \u201cprobably\u201d over \u201cdefinitely\u201d.",
        tip: "For each option ask: \u201cWhich exact words in the passage prove this?\u201d If you cannot point to them, eliminate it.",
        quick: [{ q: "\u201cThe library’s attendance rose after it added evening hours.\u201d Safe inference?", c: ["Evening hours caused all the rise.", "Attendance was higher after evening hours began.", "Everyone prefers evenings."], a: 1, why: "It states only what the text shows." }],
        cheat: ["Smallest safe step", "Point to proof lines", "No outside facts", "Beware all/always", "Cause \u2260 correlation"] };

    E["combining-separating"] = { icon: "\uD83D\uDD00",
        hook: "Joining sentences is like building a bridge: use the right kind, or the sentence collapses.",
        why: "Boundary items test whether you can join or split ideas using the correct punctuation and conjunctions.",
        outcomes: ["Choose the right join for two complete ideas", "Use colons and semicolons correctly", "Split run-ons into clean sentences"],
        model: ["Three Safe Bridges", "Two complete sentences may be joined by: (1) a period, (2) a semicolon, or (3) comma + coordinating conjunction. Add a colon when the second clause explains the first."],
        examples: [
            { s: "\u201cThe sample was small, the team repeated the study.\u201d", ans: "The sample was small, so the team repeated the study.", why: "Comma + so is a legal bridge." },
            { s: "\u201cThere was one problem: the data were missing.\u201d", ans: "Correct", why: "A colon after a complete clause introduces an explanation." }],
        errors: [["The road flooded; so the bus was late.", "The road flooded, so the bus was late. / The road flooded; the bus was late.", "A semicolon does not go with so."], ["He had one goal: to win.", "Correct", "Complete clause + colon + explanation."], ["Because it rained; the match stopped.", "Because it rained, the match stopped.", "A semicolon needs two complete sentences."]],
        l1: "English uses stronger punctuation rules than Arabic comma use. A comma is not a universal connector.",
        tip: "Before you choose a join, label each side: complete or incomplete? Two complete = semicolon, period or comma + FANBOYS.",
        quick: [{ q: "Which is correct?", c: ["The test ended; so we left.", "The test ended, so we left.", "The test ended so, we left."], a: 1, why: "Comma before the coordinating conjunction so." }],
        cheat: ["Complete + complete: period, semicolon, comma + FANBOYS", "Colon needs a complete clause before it", "Semicolon needs complete clauses on both sides", "So/but/and need a comma before them when joining clauses", "Test each side alone"] };

    E["function-questions"] = { icon: "\uD83C\uDFAD",
        hook: "Stop asking what the sentence says. Start asking what it does.",
        why: "Function and purpose questions are Module 2 favourites. They reward readers who see structure.",
        outcomes: ["Name the job of a sentence or paragraph", "Use verbs such as illustrate, qualify, contrast, concede", "Reject topic-only answers"],
        model: ["Say It, Then Do It", "A sentence has content (what it says) and function (what it does for the argument). Function words: introduces, illustrates, supports, contrasts, concedes, qualifies, concludes."],
        examples: [
            { s: "\u201cAdmittedly, the first trial had a small sample.\u201d", ans: "It concedes a limitation.", why: "Admittedly signals a concession." },
            { s: "\u201cFor instance, in 1990 the town planted 500 trees.\u201d", ans: "It gives an example.", why: "For instance introduces an illustration." }],
        errors: [["Describing the content", "Naming the job", "The answer begins with a function verb."], ["Picking a function the text does not show", "Checking signal words", "However, for example, although are clues."], ["Ignoring the main point", "Linking the job to the argument", "The function must serve the main idea."]],
        l1: "Arabic discourse markers differ in force. Learn English signals such as admittedly (concession), thus (result), whereas (contrast).",
        tip: "Predict: \u201cThe author includes this to ___.\u201d Fill in with a function verb before looking at options.",
        quick: [{ q: "\u201cHowever, some residents oppose the plan.\u201d Function?", c: ["Gives an example", "Introduces a counterpoint", "Defines a term"], a: 1, why: "However signals contrast." }],
        cheat: ["Content vs function", "Use function verbs", "Signal words are clues", "Tie it to the main idea", "Reject topic-only options"] };

    E["cumulative-review-1"] = { icon: "\uD83D\uDDC2\uFE0F",
        hook: "Today is a pit stop, not a new road. You are checking what stuck and quietly fixing what did not.",
        why: "Spaced review is one of the best-supported study methods in learning science. Mixed practice feels harder because it is working.",
        outcomes: ["Recognise which skill a question is testing", "Switch strategies quickly", "Find your weakest area"],
        model: ["Name the Skill First", "Before answering, label the question: relevance, concision, boundaries, diction, evidence\u2026 Naming the skill tells your brain which routine to run."],
        examples: [{ s: "\u201cChoose the clearest revision: Due to the fact that the road was icy\u2026\u201d", ans: "Concision", why: "Wordy phrase = Shorter is Better routine." }, { s: "\u201cWhich sentence best supports the claim?\u201d", ans: "Evidence", why: "Claim \u2192 proof \u2192 link." }],
        errors: [["Using one strategy for everything", "Switching routines by question type", "Labels guide strategy."], ["Skipping reviewing wrong answers", "Writing the reason you missed it", "Errors are the data."], ["Cramming", "Spacing practice", "Review a little often."]],
        l1: "If tense or articles slip when you rush, slow down for the last 10 seconds and check each verb.",
        tip: "Keep an error log: question, skill, reason missed. Three entries in the same skill = a lesson to revisit.",
        quick: [{ q: "\u201cThe students reviewed the data, the team wrote a report.\u201d Skill?", c: ["Diction", "Sentence boundaries", "Evidence"], a: 1, why: "Comma splice." }],
        cheat: ["Name the skill", "Run that skill\u2019s routine", "Log your errors", "Space your practice", "Slow down for the final check"] };

    E["tone-attitude"] = { icon: "\uD83C\uDFA8",
        hook: "Words carry feelings. The author never says \u201cI am annoyed\u201d, but the verbs, adjectives and punctuation say it for them.",
        why: "Tone and attitude questions test careful reading of word choice, which also supports vocabulary and inference items.",
        outcomes: ["Name tone with precise words", "Use word choice as evidence", "Avoid extreme tone labels"],
        model: ["Positive, Negative, Neutral \u2192 Then Narrow", "First decide the charge: positive, negative or neutral. Then pick the most precise word (admiring, skeptical, cautious, detached, urgent). Most EST tones are measured, not extreme."],
        examples: [
            { s: "\u201cThe early results are encouraging, but the sample is small.\u201d", ans: "cautiously optimistic", why: "Encouraging (positive) + but (limit) = balanced." },
            { s: "\u201cThe committee ignored every warning.\u201d", ans: "critical", why: "Ignored every warning is a negative judgement." }],
        errors: [["Choosing an extreme tone (furious, ecstatic)", "Choosing a measured tone", "Passage texts are usually restrained."], ["Choosing a tone from one word", "Reading the whole passage", "Tone develops."], ["Mixing tone with topic", "Naming attitude, not subject", "Tone describes feeling."]],
        l1: "English formal writing often hides emotion in understatement. Do not look for loud words; look for careful ones.",
        tip: "Underline three loaded words. Ask whether they push the reader toward approval, doubt or neutrality.",
        quick: [{ q: "\u201cThe plan is promising, though several risks remain.\u201d Tone?", c: ["Hostile", "Cautiously hopeful", "Indifferent"], a: 1, why: "Promising + risks = balanced hope." }],
        cheat: ["Charge first: +, \u2212, neutral", "Narrow to a precise word", "Avoid extremes", "Use loaded words as evidence", "Tone \u2260 topic"] };

    E["transitions"] = { icon: "\uD83D\uDEA6",
        hook: "Transitions are road signs. They tell the reader whether the next sentence continues, turns, or stops.",
        why: "Transition items are quick marks: decide the relationship, then pick the word. Do it in the right order.",
        outcomes: ["Name the relationship between two ideas", "Match it to the right transition", "Punctuate transitions correctly"],
        model: ["Relationship First, Word Second", "Do not look at the word choices first. Ask how Idea 2 relates to Idea 1: addition, contrast, cause/result, example, sequence, concession. Then choose the matching word."],
        examples: [
            { s: "\u201cThe trial was small. ___, the results were promising.\u201d", ans: "Nevertheless / Still", why: "Contrast: small but promising." },
            { s: "\u201cThe road flooded. ___, the bus was late.\u201d", ans: "As a result / Therefore", why: "Cause \u2192 result." }],
        errors: [["The bus was late, however the class began.", "The bus was late; however, the class began.", "However between two clauses needs a semicolon or period before it."], ["Using also instead of however", "Naming the relationship first", "Meaning decides."], ["Picking the fanciest word", "Picking the clearest", "Plain connectors win."]],
        l1: "Arabic connectors such as fa- or lakin are placed in different positions. In English, however, therefore and moreover are not conjunctions; they need strong punctuation before them.",
        tip: "Cover the options, write \u201c+\u201d, \u201c\u2212\u201d, \u201c\u2192\u201d or \u201ce.g.\u201d between the sentences, then choose the transition that matches.",
        quick: [{ q: "\u201cThe plan is cheap. ___, it is slow.\u201d", c: ["Therefore", "However", "For example"], a: 1, why: "Cheap (+) vs slow (\u2212): contrast." }],
        cheat: ["Name the relationship first", "However/therefore need ; or . before them", "+ addition \u2212 contrast \u2192 result e.g. example", "Plain beats fancy", "Reread both sentences"] };

    E["rhetorical-strategy"] = { icon: "\u2696\uFE0F",
        hook: "Authors have a toolbox: examples, comparisons, anecdotes, statistics, counterarguments. Your job is to name the tool and the reason it was used.",
        why: "Rhetorical strategy items are how the EST tests analysis at a higher level than comprehension alone.",
        outcomes: ["Name common rhetorical moves", "Explain why an author used them", "Link strategies to purpose"],
        model: ["Tool + Reason", "Every strategy answer has two parts: what the author did (tool) and why (reason). \u201cShe uses a statistic to show the problem is widespread.\u201d"],
        examples: [
            { s: "\u201cA 2019 survey found 82% of residents supported the plan.\u201d", ans: "Evidence from data to show public support", why: "A statistic is a tool; support is the reason." },
            { s: "\u201cSome argue the cost is too high; yet the benefits outweigh it.\u201d", ans: "Acknowledges and rebuts a counterargument", why: "Shows fairness while strengthening the claim." }],
        errors: [["Naming the tool only", "Tool + reason", "Answer both parts."], ["Calling every example an anecdote", "Matching evidence type", "Anecdote = personal story."], ["Missing the purpose", "Tying the move to the author\u2019s goal", "Purpose drives strategy."]],
        l1: "Arabic rhetoric includes parallelism and repetition as persuasive tools; English academic writing often prefers data and counterargument. Recognise those English patterns.",
        tip: "Predict: \u201cThe author uses ___ to ___.\u201d Then check which option says the same.",
        quick: [{ q: "A writer tells a one-person story to open an article about homelessness. Purpose?", c: ["To give statistics", "To make the issue human and engaging", "To define a term"], a: 1, why: "Anecdote draws readers in." }],
        cheat: ["Tool + reason", "Know evidence types", "Counterargument + rebuttal", "Link to purpose", "Predict before options"] };

    E["essential-clauses"] = { icon: "\uD83D\uDD11",
        hook: "Ask one question about any extra phrase: can I remove it without changing who or what the sentence is about? That answer tells you the commas.",
        why: "Clause punctuation is a steady source of Module 1 points and one of the most rule-based.",
        outcomes: ["Tell essential from non-essential information", "Use commas in pairs for non-essential clauses", "Choose that vs which correctly"],
        model: ["The Removal Test", "Delete the phrase. If the sentence still identifies the same thing, the phrase was extra (non-essential): put commas on both sides. If removing it changes the identity or meaning, it was essential: no commas."],
        examples: [
            { s: "\u201cThe students who finished early left.\u201d", ans: "No commas", why: "Only some students left: who finished early identifies them." },
            { s: "\u201cMy sister, who lives in Dammam, is a nurse.\u201d", ans: "Commas", why: "I have one sister, so the clause is extra." }],
        errors: [["The report, that was long, was ignored.", "The report that was long was ignored. / The report, which was long, was ignored.", "Do not use that with commas."], ["One comma only: The book, which I read was good.", "Pairs: The book, which I read, was good.", "Commas come in twos."], ["Commas around essential information", "No commas", "They would cut the meaning in two."]],
        l1: "In Arabic, a relative pronoun follows a definite noun, so the clause type is signalled differently. English signals non-essential clauses with commas, so practise the removal test.",
        tip: "Read the sentence without the phrase. If it feels incomplete or vague, it is essential.",
        quick: [{ q: "Which is correct?", c: ["The car, which is red, is mine.", "The car which, is red is mine.", "The car, which is red is mine."], a: 0, why: "Matching pair of commas." }],
        cheat: ["Removal test", "Non-essential = commas in pairs", "Essential = no commas", "Which after commas, that without", "Check both commas"] };

    E["paired-passages"] = { icon: "\uD83D\uDD00",
        hook: "Two authors, one topic, and a quiet conversation between them. Your job is to hear it.",
        why: "Paired-passage items test synthesis. The 2026 EST blueprint gives Synthesis 10\u201320% of the Literacy test, and it is where top scores are often decided.",
        outcomes: ["Summarise each author\u2019s claim separately", "Compare agreement, disagreement and emphasis", "Answer questions about both texts"],
        model: ["A, B, Then Compare", "Write a one-line summary of A and of B, then compare: do they agree, disagree, or add to each other? Only then answer."],
        examples: [
            { s: "A: Remote work boosts productivity. B: Remote work harms collaboration.", ans: "They address different effects; B qualifies A.", why: "Neither fully contradicts the other." },
            { s: "A: Trees cool cities. B: Trees also lower stress.", ans: "B extends A with another benefit.", why: "Same direction, different benefit." }],
        errors: [["Mixing up authors", "Labeling A and B in the margin", "Keep the sides straight."], ["Assuming total disagreement", "Checking scope", "Often they differ in focus."], ["Using only one passage", "Using both", "Synthesis needs both."]],
        l1: "Keep a quick label (A:/B:) in the margin; it prevents mixing up authors when you translate in your head.",
        tip: "Use the words agree, disagree, qualify, extend, add as your answer toolbox.",
        quick: [{ q: "A praises a policy; B says it works but costs too much. Relationship?", c: ["Total agreement", "B agrees partly but adds a concern", "B ignores A"], a: 1, why: "Partial agreement with qualification." }],
        cheat: ["Summarise A and B", "Compare: agree / disagree / extend", "Mark authors in the margin", "Use both texts", "Check scope"] };

    E["comma-uses"] = { icon: "\uD83E\uDEA1",
        hook: "Commas are small, but they carry big grammar. Learn the five jobs and you will stop guessing.",
        why: "Comma items are everywhere in Module 1. A handful of rules covers nearly all of them.",
        outcomes: ["Place commas in lists, introductions and compound sentences", "Remove commas that split subject from verb", "Spot unnecessary commas"],
        model: ["Five Jobs", "Commas separate: items in a list; an introductory phrase from the main clause; two complete clauses (with FANBOYS); non-essential information (in pairs); adjectives that can be reordered. Anything else is suspect."],
        examples: [
            { s: "\u201cThe students, brought their books.\u201d", ans: "The students brought their books.", why: "Never separate a subject from its verb with a single comma." },
            { s: "\u201cAfter the match we went home.\u201d", ans: "After the match, we went home.", why: "Introductory phrase gets a comma." }],
        errors: [["I like tea, and coffee.", "I like tea and coffee.", "No comma between two items joined by and."], ["He said, that it was late.", "He said that it was late.", "No comma after that."], ["Because it rained, we stayed. (OK)", "Correct", "Intro clause + comma."]],
        l1: "Punctuation conventions differ between Arabic and English. English comma rules are narrow, and fewer is often better.",
        tip: "If you cannot name the job of a comma, remove it.",
        quick: [{ q: "Which is correct?", c: ["The teacher, praised the class.", "The teacher praised the class.", "The teacher praised, the class."], a: 1, why: "No comma between subject and verb or verb and object." }],
        cheat: ["List", "Intro", "Clause + FANBOYS", "Non-essential pairs", "Name the job or delete"] };

    E["graphics-data"] = { icon: "\uD83D\uDCCA",
        hook: "A graph is a sentence drawn with lines. Read it the way you read text: title, labels, pattern, so what?",
        why: "Integrated Reading and Writing items ask you to combine text with visual information and judge evidence.",
        outcomes: ["Read titles, axes and units", "Describe patterns accurately", "Match claims to what the data can prove"],
        model: ["T-A-P-S", "Title, Axes, Pattern, So-what. Read the title, check the axes and units, describe the pattern in one sentence, and ask what it can and cannot prove."],
        examples: [
            { s: "Chart: shaded street 32\u201334 \u00b0C; unshaded 36\u201341 \u00b0C.", ans: "Shaded street was cooler at every time.", why: "A pattern statement using the data." },
            { s: "Claim: \u201cShade is the only cause of cooler streets.\u201d", ans: "Too strong", why: "The graph shows association, not sole cause." }],
        errors: [["Reading only one point", "Describing the overall trend", "Patterns need several points."], ["Ignoring units", "Checking units", "Percent vs number matters."], ["Over-claiming causation", "Using cautious verbs", "Shows, suggests, is associated with."]],
        l1: "Check axes carefully: units and labels are in English. Do not assume the left-to-right reading order changes meaning.",
        tip: "Before you read the options, write one sentence describing the graph. Then eliminate options that contradict it.",
        quick: [{ q: "A line rises from 10 to 30 over four years. Which verb fits?", c: ["Fell", "Increased", "Stayed level"], a: 1, why: "Increased." }],
        cheat: ["Title, axes, pattern, so-what", "Check units", "Describe before you choose", "Association \u2260 cause", "Use cautious verbs"] };

    E["colons-dashes"] = { icon: "\u26A1",
        hook: "A colon says \u201chere it comes\u201d. A dash says \u201cwait, one more thing\u201d. Both need a complete thought in front of them.",
        why: "These marks are tested mostly through one rule: what is before them must be able to stand alone.",
        outcomes: ["Use a colon after a complete clause", "Use dashes in pairs or at the end for emphasis", "Avoid colons after verbs and prepositions"],
        model: ["Complete Before the Colon", "Cover everything after the colon. If what remains is a complete sentence, the colon is fine. If not, remove it."],
        examples: [
            { s: "\u201cThe kit includes: a map and a compass.\u201d", ans: "The kit includes a map and a compass.", why: "Includes + object is not a complete clause before the colon." },
            { s: "\u201cShe had one goal: to finish the race.\u201d", ans: "Correct", why: "Complete clause before the colon." }],
        errors: [["The reasons are: cost, time.", "The reasons are cost and time.", "No colon after a linking verb."], ["Only one dash in the middle of a sentence", "Dashes in pairs, or one at the end", "Pairs frame an insertion."], ["Comma before a colon", "Colon replaces it", "They do not combine."]],
        l1: "Arabic uses the colon after verbs such as said or called. English formal writing does not put it after a verb that needs its object.",
        tip: "Colons and dashes follow the same test: can the first part stand alone? If yes, you may use a colon or a dash.",
        quick: [{ q: "Which is correct?", c: ["We needed three things: time, money and luck.", "We needed: time, money and luck.", "We needed three things; time, money and luck."], a: 0, why: "Complete clause before the colon." }],
        cheat: ["Complete clause before a colon", "No colon after verbs or prepositions", "Dashes in pairs", "Dash = emphasis", "Cover and test"] };

    E["question-marks"] = { icon: "\u2753",
        hook: "A question is not a question just because it contains a question word. Direct questions ask; indirect questions report.",
        why: "Questions about question marks target indirect questions and quoted questions.",
        outcomes: ["Use a question mark only for direct questions", "Keep statement order in indirect questions", "Punctuate quoted questions"],
        model: ["Ask or Report?", "If the writer is asking, use a question mark. If the writer is reporting a question (asked whether/wondered why), use statement word order and a period."],
        examples: [
            { s: "\u201cHe asked where is the library?\u201d", ans: "He asked where the library is.", why: "Indirect question: statement order and a period." },
            { s: "\u201cShe asked, \u2018Is the room free?\u2019\u201d", ans: "Correct", why: "A direct quoted question keeps its question mark inside the quotes." }],
        errors: [["I wonder what time is it?", "I wonder what time it is.", "Embedded question: no inversion, no question mark."], ["Did he ask if the room was free.", "Did he ask if the room was free?", "The whole sentence is a direct question."], ["\u201cWhat is this\u201d?", "\u201cWhat is this?\u201d", "The quoted question owns the question mark."]],
        l1: "Arabic forms questions with question words or particles rather than auxiliary inversion, so English inversion can feel odd. Direct questions invert (Where is the library?); indirect questions do not (He asked where the library is).",
        tip: "Ask: \u201cDoes the sentence itself ask something?\u201d If it only reports, use a period.",
        quick: [{ q: "Which is correct?", c: ["She wondered why the bus was late.", "She wondered why was the bus late.", "She wondered why was the bus late?"], a: 0, why: "Indirect question: statement order, period." }],
        cheat: ["Direct = ?", "Indirect = period, statement order", "Quoted question: ? inside quotes", "Who asks: sentence or reporter?", "No inversion in embedded questions"] };

    E["apostrophes"] = { icon: "\uD83D\uDD24",
        hook: "One tiny mark can change who owns what. Treat it as a tool for two jobs only: possession and contraction.",
        why: "Apostrophe items are small and fast, but strong students lose points to it\u2019s/its and plural/possessive traps.",
        outcomes: ["Distinguish plural from possessive", "Position the apostrophe for singular and plural owners", "Master its / it\u2019s, whose / who\u2019s, their / they\u2019re"],
        model: ["Plural or Possessive?", "Plural = more than one (no apostrophe). Possessive = belongs to (apostrophe). Ask: does something belong to it? If yes, find the owner, then add \u2019s (singular) or just \u2019 after plural -s."],
        examples: [
            { s: "\u201cThe students books were on the desk.\u201d", ans: "The students\u2019 books", why: "Books belong to the students (plural owner: s\u2019)." },
            { s: "\u201cThe dog wagged it\u2019s tail.\u201d", ans: "its tail", why: "Its (no apostrophe) is possessive; it\u2019s = it is." }],
        errors: [["The cat\u2019s are asleep.", "The cats are asleep.", "Plural only; nothing belongs."], ["its / it\u2019s swapped", "its = belongs; it\u2019s = it is", "Test: can you say it is?"], ["childrens\u2019 books", "children\u2019s books", "Irregular plural takes \u2019s."]],
        l1: "Arabic has no apostrophe and no capital letters, so the mark feels unnatural at first. Use the owner test every time.",
        tip: "Replace the word with of the + noun: \u201cthe books of the students\u201d. If it works, you need a possessive.",
        quick: [{ q: "Which is correct?", c: ["The companies policy changed.", "The company\u2019s policy changed.", "The companys\u2019 policy changed."], a: 1, why: "One company owns the policy." }],
        cheat: ["Plural = no apostrophe", "Possessive = owner + \u2019s", "Plural owner = s\u2019", "its = belongs, it\u2019s = it is", "Test with of the"] };

    E["pronoun-noun-agreement"] = { icon: "\uD83E\uDDF2",
        hook: "Pronouns are loyal friends. They must always match the noun they replace.",
        why: "Pronoun items test agreement in number and clarity of reference, and they appear in every Module 1.",
        outcomes: ["Match pronouns to their antecedents", "Avoid vague this / it / they", "Choose subject vs object forms"],
        model: ["Find the Antecedent", "Circle the noun the pronoun replaces. Match its number (singular/plural) and role. If there are two possible antecedents, the sentence is ambiguous and needs rewriting."],
        examples: [
            { s: "\u201cThe company revised their policy.\u201d", ans: "its policy", why: "A company is singular here." },
            { s: "\u201cWhen Sara met Dana, she smiled.\u201d", ans: "Ambiguous", why: "Who smiled? Repeat the name." }],
        errors: [["Each of the students brought their book.", "Each of the students brought his or her book. (formal) / their book (modern)", "Know the exam\u2019s preference: formal agreement."], ["They in a paragraph about a company", "It / the company", "Match the antecedent."], ["Between you and I", "Between you and me", "Object form after a preposition."]],
        l1: "Arabic pronouns attach to verbs and nouns, so English separate pronouns can feel redundant. Check that every pronoun has a clear target.",
        tip: "Underline each pronoun, draw an arrow to its noun, and check number.",
        quick: [{ q: "\u201cThe team lost ___ first game.\u201d", c: ["their", "its", "they\u2019re"], a: 1, why: "A team acting as one unit takes it/its in American English." }],
        cheat: ["Find the antecedent", "Match number", "One clear target", "Subject vs object", "their / there / they\u2019re"] };

    E["verbs-agreement-tense"] = { icon: "\u23F3",
        hook: "Verbs tell time and keep the peace with their subjects. When the subject is far from the verb, agreement is where points slip.",
        why: "Verb agreement and tense are among the most frequent EST grammar items, and research on Arab learners lists tense and agreement as persistent problems.",
        outcomes: ["Find the true subject", "Choose the right tense from time signals", "Keep sequences consistent"],
        model: ["Subject Hunt, Time Check", "Cross out prepositional phrases to find the true subject. Then check time clues (yesterday, since 2010, by next year) and pick the matching tense."],
        examples: [
            { s: "\u201cThe box of old books ___ heavy.\u201d (is/are)", ans: "is", why: "The subject is box, not books." },
            { s: "\u201cBy the time we arrived, the match ___.\u201d", ans: "had started", why: "Past perfect for the earlier past event." }],
        errors: [["The weather hot.", "The weather is hot.", "English requires a verb even in simple descriptions."], ["He go to school.", "He goes to school.", "Third-person singular -s."], ["Mixing past and present in one story", "Choosing one time frame", "Stay consistent unless time changes."]],
        l1: "Arabic nominal sentences can omit be in the present (the weather hot). English cannot, so always check that there is a verb. Research also notes past tense forms as hard for Arab learners.",
        tip: "Draw a line through every phrase beginning with of, in, with, near. What remains is the subject.",
        quick: [{ q: "The list of items ___ on the table.", c: ["are", "is", "were"], a: 1, why: "Subject = list (singular)." }],
        cheat: ["Cross out prepositional phrases", "Singular subject = verb + s", "Match time signals", "Past perfect for earlier past", "Keep tense consistent"] };

    E["word-pairs"] = { icon: "\uD83D\uDC6F",
        hook: "Some words never travel alone. Meet either/or, not only/but also, between/and, as/as.",
        why: "Paired structures are tested through parallelism and comparison errors.",
        outcomes: ["Complete correlative pairs correctly", "Make comparisons logical", "Avoid double comparatives"],
        model: ["Pair Up, Match Up", "Both halves of a pair must appear, and what follows each half must match grammatically. Comparisons must compare like with like."],
        examples: [
            { s: "\u201cShe is not only smart but also hard-working.\u201d", ans: "Correct", why: "Both halves are adjectives." },
            { s: "\u201cThe climate here is milder than Riyadh.\u201d", ans: "than that of Riyadh", why: "Compare climate with climate, not climate with a city." }],
        errors: [["more better", "better", "Comparative is already built into better."], ["between you or me", "between you and me", "Between pairs with and."], ["neither \u2026 or", "neither \u2026 nor", "Neither needs nor."]],
        l1: "Arabic comparatives are built on one pattern, so learners sometimes stack English forms. Do not add more to a word that already has -er.",
        tip: "Draw a bracket around each half of the pair. Make them look the same.",
        quick: [{ q: "Which is correct?", c: ["Either we wait or leave.", "Either we wait or we leave.", "Either we wait nor leave."], a: 1, why: "Both halves are clauses." }],
        cheat: ["Complete both halves", "Match grammar after each half", "Compare like with like", "No more + -er", "neither/nor, either/or"] };

    E["parallel-structure"] = { icon: "\uD83C\uDFBC",
        hook: "Lists should sing in tune. When items in a list are shaped differently, the reader hears a wrong note.",
        why: "Parallel structure is a high-frequency, highly predictable item type, and it is fast to solve once you know the trick.",
        outcomes: ["Spot items in a series", "Make them match in form", "Check pairs and comparisons"],
        model: ["Match the Shape", "List the items. Make each one the same grammatical shape: all -ing, all to + verb, all nouns, all clauses."],
        examples: [
            { s: "\u201cThe program teaches students to plan, drafting, and revise.\u201d", ans: "to plan, draft, and revise", why: "All base verbs after to." },
            { s: "\u201cShe likes swimming, hiking, and to read.\u201d", ans: "swimming, hiking, and reading", why: "All -ing forms." }],
        errors: [["fast, efficiently, and cost", "fast, efficient, and cheap", "All adjectives."], ["He was tired and wanted going home.", "He was tired and wanted to go home.", "Parallel verbs."], ["both the cost and for safety", "both the cost and the safety", "Pairs demand matching shapes."]],
        l1: "Arabic coordination with wa joins items freely. English wants the items matched in form, not just meaning.",
        tip: "Underline the first item and force every other item to copy its form.",
        quick: [{ q: "Which is parallel?", c: ["reading, writing and to speak", "reading, writing and speaking", "to read, writing and speaking"], a: 1, why: "All -ing." }],
        cheat: ["Find the list", "Copy the first item\u2019s shape", "Check pairs (both/and)", "Check comparisons", "Read aloud"] };

    E["dangling-modifiers"] = { icon: "\uD83C\uDFA3",
        hook: "An opening phrase makes a promise: the very next noun is the one doing the action. When it is not, the sentence says something silly.",
        why: "Modifier placement is a top-frequency trap and a favourite of EST test writers.",
        outcomes: ["Identify the doer implied by an opening phrase", "Repair dangling modifiers", "Place modifiers next to what they describe"],
        model: ["The Next-Noun Rule", "An opening -ing / -ed / to-phrase describes the noun immediately after the comma. If that noun cannot logically do the action, rewrite."],
        examples: [
            { s: "\u201cWalking to school, the rain started.\u201d", ans: "Walking to school, we got caught in the rain.", why: "The rain cannot walk to school." },
            { s: "\u201cTired from the trip, the bed looked inviting.\u201d", ans: "Tired from the trip, she found the bed inviting.", why: "A bed cannot be tired." }],
        errors: [["After finishing the exam, the room was quiet.", "After finishing the exam, the students were quiet.", "Doer must follow."], ["Only misplaced: He almost drove the whole day.", "He drove almost the whole day.", "Place modifiers next to their target."], ["Fixing with a passive", "Using an active doer", "Passive often hides the doer."]],
        l1: "Opening participial phrases work differently in Arabic, so the implied doer is easy to forget. Name the doer aloud.",
        tip: "Ask: \u201cWho or what is doing the action in the opening phrase?\u201d Then check that this word comes right after the comma.",
        quick: [{ q: "Which is correct?", c: ["Reading the report, the data seemed unclear.", "Reading the report, I found the data unclear.", "Reading the report, unclear data appeared."], a: 1, why: "I = the reader." }],
        cheat: ["Opening phrase = doer next", "Ask who is doing it", "Rewrite with a real subject", "Place modifiers close", "Reread logically"] };

    E["relative-pronouns"] = { icon: "\uD83E\uDDF5",
        hook: "A relative pronoun is a thread that stitches extra information onto a noun. Pull the right thread (who, whom, whose, which, that) and the sentence holds together.",
        why: "Relative-pronoun items appear in Module 1 passages, and they are one of the most predictable tests of grammar logic.",
        outcomes: ["Choose who / whom / whose / which / that by the clause\u2019s job", "Use where and when for place and time", "Punctuate essential vs non-essential clauses"],
        model: ["Antecedent, Job, Commas", "1) Find the noun being described. 2) Decide the job inside the clause: subject (who/which/that), object (whom/which/that) or possession (whose). 3) Check commas: essential = no commas, non-essential = commas."],
        examples: [
            { s: "\u201cThe ecologist ___ research changed the policy was honoured.\u201d", ans: "whose", why: "The research belongs to the ecologist: possession." },
            { s: "\u201cThe sample, ___ was sealed, arrived on Monday.\u201d", ans: "which", why: "Non-essential clause about a thing: commas + which." }],
        errors: [["The book that I read it was long.", "The book that I read was long.", "Do not repeat the object inside the clause (no it)."], ["The man which called me", "The man who called me", "Use who for people."], ["The doctor where I visited", "The doctor whom I visited / the clinic where I stayed", "Where is for places, when is for times."]],
        l1: "Arabic relative clauses often keep a pronoun inside the clause (the book that I read it). In English that extra pronoun is an error: the relative pronoun already does that job.",
        tip: "Delete the relative pronoun and the noun it describes mentally, and ask: what role would the missing word play? Subject, object or possessor?",
        quick: [{ q: "The lab ___ roof leaked was closed.", c: ["which", "whose", "who"], a: 1, why: "The roof belongs to the lab: whose." }],
        cheat: ["Find the antecedent", "who = person subject, whom = person object", "whose = possession", "which = non-essential (commas), that = essential", "where = place, when = time", "No extra pronoun inside the clause"] };

    E["punct-transitions-review"] = { icon: "\uD83E\uDDF0",
        hook: "One toolbox, many marks. Today you learn to reach for the right tool without hunting through the whole box.",
        why: "Module 1 questions sit inside a passage. They reward editors who read the sentences around the error.",
        outcomes: ["Choose punctuation by sentence structure", "Choose transitions by meaning", "Make the smallest change that fixes the problem"],
        model: ["Structure, Then Meaning", "Punctuation answers come from structure (complete or incomplete clause?). Transition answers come from meaning (contrast, result, addition?). Do structure first, meaning second."],
        examples: [
            { s: "\u201cThe data were incomplete the team ran another trial.\u201d", ans: "incomplete; the team", why: "Two complete clauses need a semicolon (or a period, or a comma + conjunction)." },
            { s: "\u201cThe plan is expensive. ___, it may save money later.\u201d", ans: "Nevertheless", why: "Contrast between expensive and saving." }],
        errors: [["comma alone between clauses", "semicolon, period or comma + FANBOYS", "Comma splice."], ["colon after a verb", "no colon", "Complete clause before a colon."], ["its / it\u2019s mix-up", "its = belongs, it\u2019s = it is", "Test it is."]],
        l1: "Check each comma against a rule. If you cannot name its job, remove it. Research on Arab EFL writing notes punctuation and mechanics as the most common error group.",
        tip: "Read one sentence before and one after the target. The smallest change that fixes the logic is usually correct.",
        quick: [{ q: "Which is correct?", c: ["The road was closed; therefore, we left early.", "The road was closed, therefore we left early.", "The road was closed therefore, we left early."], a: 0, why: "Semicolon before therefore, comma after." }],
        cheat: ["Structure first, meaning second", "Complete + complete = real join", "Colon after a complete clause", "However/therefore need ; or . before them", "Name the relationship before choosing"] };

    E["targeted-revision"] = { icon: "\uD83C\uDFAF",
        hook: "A diagnostic is not a verdict; it is a map. The two skills with the most errors are where your next hour will pay back most.",
        why: "Targeted practice beats re-doing everything. Fix the biggest leaks first, then check again after a short delay.",
        outcomes: ["Score each module separately", "Find your two weakest skill groups", "Use a repair cycle: re-teach, model, practise, re-test"],
        model: ["Find, Fix, Check Later", "Find the two weak skills. Fix them with one lesson, one worked example and 5\u20138 new questions. Check again after 24\u201348 hours without the key. The delay shows what has really stuck."],
        examples: [{ s: "Module 1: 24/35. Module 2: 22/25. Module 3: 15/25.", ans: "Focus on Module 3 and the weakest Module 1 skills", why: "Biggest gap first." }],
        errors: [["Redoing the whole test", "Targeting the weak skills", "Efficient practice."], ["Looking at the key too early", "Waiting 24\u201348 hours", "Retrieval strengthens memory."], ["Ignoring why you missed it", "Writing the reason", "Errors are data."]],
        l1: "Keep an error log in two columns: what I chose, and what the text or rule really said. Many errors repeat the same pattern.",
        tip: "After the diagnostic, open the skill map and start with the lesson it suggests for your lowest area.",
        quick: [{ q: "Your Module 3 score is lowest. First step?", c: ["Retake the whole test now", "Sort missed questions by skill and revise the top two", "Memorise answers"], a: 1, why: "Sort, then target." }],
        cheat: ["Score by module", "Sort errors by skill", "Top two skills first", "5\u20138 new questions per skill", "Re-test after 24\u201348 hours"] };

    window.estEnrich = E;
})();
