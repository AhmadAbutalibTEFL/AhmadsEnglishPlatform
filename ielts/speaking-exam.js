/* =========================================================
   IELTS SPEAKING - exam-style practice (original content).
   Part 1: topic sets (examiner questions + model answers, with audio).
   Part 2: cue cards with 1-minute preparation, 2-minute talk and a
           rounding-off question. Part 3: linked discussion questions.
   Mock interviews join the three parts in the real order.
   Audio: examiner and model-answer clips are made from this text by
   make_ielts_exam_audio.py (synthetic voices). Nothing the student
   records leaves the phone.
   Load AFTER speaking-data.js, BEFORE ielts.js.
   ========================================================= */
(function () {
    "use strict";
    var ns = window.IELTS = window.IELTS || {};
    var D = ns.speakingData;
    if (!D) return;
    var AUD = "audio/ielts-speaking/";

    var P1 = [
        { id: "home", title: "Home and accommodation", qs: [
            ["Do you live in a house or an apartment?", "I live in an apartment on the third floor of a quiet building. It's not very big, but it gets a lot of sunlight, which makes it feel open and cheerful."],
            ["What is your favourite room in your home?", "Definitely the living room. It's where my family gathers in the evening, and I like it because the sofa is really comfortable and we can talk, watch something or just relax."],
            ["Would you like to move to a different home in the future?", "Maybe, yes. One day I'd like a place with a small garden, because I enjoy growing herbs. But for now my apartment is close to everything I need, so I'm in no hurry."],
            ["How long have you lived there?", "About six years now. We moved when I started university, so I've seen the area change quite a lot, with new shops and a lovely park opening nearby."]] },
        { id: "work", title: "Work or studies", qs: [
            ["Do you work or are you a student?", "I'm a student at the moment, studying business. I'm in my final year, so I'm quite busy with projects, but I'm enjoying it because the subjects are practical."],
            ["Why did you choose that subject?", "Mainly because I like understanding how companies make decisions. My uncle runs a small shop, and watching him taught me that good planning really matters."],
            ["What do you find most difficult about your studies?", "Time management, I'd say. There are always deadlines close together, so I've learned to make weekly plans, and that has helped me stay calm."],
            ["What would you like to do after you finish?", "I'd like to work for a company that exports products, because I'd get to travel and use my English. In the long term I might start my own business."]] },
        { id: "food", title: "Food and cooking", qs: [
            ["What kind of food do you like most?", "I really enjoy rice dishes with grilled chicken and a fresh salad. It's simple, but it's filling, and it reminds me of meals with my family at weekends."],
            ["Do you cook often?", "A few times a week. I'm not an expert, but I can make a decent pasta or an omelette, and I like trying new recipes when I have time."],
            ["Is there any food you dislike?", "Yes, I can't stand very spicy food. I tried a really hot curry once and could hardly speak afterwards, so now I always ask how hot a dish is."],
            ["Do people in your country eat out a lot?", "Quite a lot, especially young people. Restaurants and cafes are popular places to meet friends, and many families go out together on Fridays."]] },
        { id: "tech", title: "Technology", qs: [
            ["How often do you use a computer or phone?", "Every day, for hours. I use my phone for messages and maps, and my laptop for study. To be honest, I probably spend more time on screens than I should."],
            ["What do you use your phone for most?", "Mostly messaging and watching short videos. I also use it to learn English with an app, which is a useful way to fill small gaps in my day."],
            ["Do you think technology makes life easier?", "In many ways, yes. I can pay bills or book a doctor in minutes. On the other hand, it can be distracting, so I try to switch off notifications when I study."],
            ["Which piece of technology could you not live without?", "My phone, without question. It's my map, my camera, my dictionary and my way of staying in touch with friends who live abroad."]] },
        { id: "free", title: "Free time and hobbies", qs: [
            ["What do you like to do in your free time?", "I like playing football with friends on Thursday evenings, and when I'm at home I enjoy reading or watching documentaries. It's a good balance between active and quiet."],
            ["Do you prefer spending time alone or with others?", "It depends on my mood. After a busy week I like some quiet time alone, but I'm happiest when I'm with a small group of friends having a long conversation."],
            ["Have your hobbies changed since you were a child?", "Yes, quite a bit. As a child I collected stickers and played video games all day. Now I prefer sport, which keeps me fit and helps me to relax."],
            ["Would you like to try a new hobby?", "Yes, I'd love to learn photography. I've always enjoyed taking pictures on my phone, so I'd like to understand light and composition properly."]] },
        { id: "travel", title: "Travel and transport", qs: [
            ["How do you usually travel to work or university?", "By bus, most days. It takes about thirty minutes, and I use the time to listen to podcasts, which makes the journey feel useful instead of boring."],
            ["Do you like travelling?", "Very much. I enjoy seeing how other people live, trying new food and learning a few words of the local language. I just wish flights were cheaper."],
            ["Is public transport good in your city?", "It's improving. The buses are frequent and affordable, but at rush hour they're crowded, and there's no train yet, so some journeys take longer than they should."],
            ["Where would you like to travel next?", "I'd like to visit Japan. I'm interested in the culture and the food, and I've heard that the trains are always on time, which I'd love to experience."]] }
    ];

    var CARDS = [
        { id: "c-skill", title: "Describe a useful skill you learned", bullets: ["what the skill is", "when and how you learned it", "how long it took to learn", "and explain why it has been useful to you."],
          rounding: "Do you think you will learn any other new skills soon?",
          sample: ["A useful skill I learned is cooking simple meals from scratch. I learned it when I was about fifteen, mostly from my grandmother, who believed that anyone who can read a recipe can cook.", "It took me a long time. I'd say a whole summer of burnt rice and over-salted soup before I could make a meal people enjoyed. The turning point was learning to taste as I cooked, instead of waiting until the end.", "The skill has been useful in ways I never expected. It saves money, because I rarely order takeaway, but it also helps socially. Cooking for friends is one of the easiest ways to bring people together. And after a stressful day, chopping vegetables is strangely calming.", "If I hadn't learned it then, I would have had to learn it as an adult anyway, so I'm grateful my grandmother started me early."],
          phrases: ["I'd say", "The turning point was", "in ways I never expected", "If I hadn't ..., I would have ..."],
          p3: [["Do you think practical skills are valued as much as academic knowledge in your country?", "Not always. Academic results are still seen as the safest route to a good job, so practical skills, like cooking or repairing things, are often treated as hobbies. That is slowly changing, though, because employers now say that people who can solve real problems are hard to find."],
               ["How has the way people learn new skills changed in the last twenty years?", "Massively. Twenty years ago you needed a teacher or a book. Now you can watch a video tutorial at midnight and practise straight away. The downside is that there's so much information that it's hard to know whom to trust."],
               ["Is it better to learn a skill from a person or from the internet?", "I think a person is better for the first steps, because they notice your mistakes and encourage you. The internet is excellent for practice and for going deeper afterwards. Ideally, you would combine the two."]] },
        { id: "c-place", title: "Describe a place in your city where you like to relax", bullets: ["where the place is", "what it looks like", "what you do there", "and explain why it helps you relax."],
          rounding: "Do you think you will go there again soon?",
          sample: ["I'd like to talk about a small public garden near my home. It's only a ten-minute walk away, on a street that most people walk past without noticing, which is part of its charm.", "It isn't large. There's a fountain in the middle, a few old trees, and wooden benches around the edge. In spring the flower beds are full of colour, and in the evening the lights come on, so it looks quite magical.", "I usually go there after work or on Friday afternoons. I sit on the same bench, read for a while or just watch people. Sometimes an old man plays the guitar quietly, which adds to the atmosphere.", "It helps me relax because it's calm but not completely silent. I can hear water and birds, instead of traffic. After a long day, even twenty minutes there makes me feel like I've had a proper break. I honestly think every neighbourhood needs a place like that."],
          phrases: ["most people walk past without noticing", "adds to the atmosphere", "a proper break", "I honestly think"],
          p3: [["Why do people in cities need green spaces?", "Because cities are crowded and noisy, and people need somewhere to slow down. Studies suggest that even a short time among trees reduces stress. Parks also give children a safe place to play, which is hard to find in busy streets."],
               ["Should governments spend money on parks or on other public services?", "It's a balance. Hospitals and schools come first, but parks are not a luxury, because they improve health and so reduce costs elsewhere. A small park is cheap compared with the benefits it brings."],
               ["How might the way people spend their free time in cities change in the future?", "I think more people will work from home, so they'll have more time for local activities. At the same time, screens will take more of our attention, so places that let us disconnect will become more valuable."]] },
        { id: "c-person", title: "Describe a person who has influenced you", bullets: ["who the person is", "how you know them", "what they are like", "and explain how they have influenced you."],
          rounding: "Do you think you have influenced anyone in the same way?",
          sample: ["The person I'd like to describe is my high school chemistry teacher, Mr Karim. I met him when I was sixteen, and although I only studied with him for two years, he changed the way I think about learning.", "He was a tall, calm man who never raised his voice. What made him different was that he never gave us the answer straight away. If you asked him a question, he would ask you another one, until you found the answer yourself. It was frustrating at first, but it was also very satisfying.", "He influenced me in two main ways. First, I stopped being afraid of making mistakes, because in his class a wrong answer was just a step towards the right one. Second, he made me curious. I started reading about science outside class, which I'd never done before.", "I'm not studying chemistry now, but I still use his method. When I face a problem, I ask myself better questions before I look for answers. I'm really grateful to him for that."],
          phrases: ["What made him different was", "a step towards", "in two main ways", "I'm really grateful to him for that"],
          p3: [["What qualities make a good teacher?", "Patience is the first one, because students learn at different speeds. Good teachers are also curious themselves and can explain difficult ideas in simple words. Most of all, they make students feel it is safe to be wrong."],
               ["Do young people today have different role models from the past?", "Yes. In the past, role models were usually family members, teachers or famous leaders. Now many young people follow online creators or sportspeople. That's not necessarily bad, but those people are not always chosen for their character."],
               ["Is it important for children to have role models?", "I think so, because children learn by imitation. A good role model shows what hard work or kindness looks like in real life, which is more powerful than being told."]] },
        { id: "c-journey", title: "Describe a memorable journey you have taken", bullets: ["where you went", "how you travelled", "who you went with", "and explain why the journey was memorable."],
          rounding: "Would you like to make the same journey again?",
          sample: ["I'd like to describe a train journey I took two years ago, from my home city to the coast, with two close friends. It took about six hours, which is long, but I'll never forget it.", "We travelled in the cheapest seats, so it was crowded and a little uncomfortable at the start. But after the first hour the scenery changed completely. We passed through farmland, then hills, and finally we could see the sea, shining in the afternoon light.", "What made it special was the people. We shared our snacks with a family sitting opposite, and the grandfather told us stories about the same journey in his youth. By the time we arrived, it felt like we'd made new friends.", "It was memorable partly because nothing was planned. If we had flown, we would have arrived faster, but we'd have missed all of that. It taught me that sometimes the way you travel matters more than where you're going."],
          phrases: ["I'll never forget it", "What made it special was", "nothing was planned", "the way you travel matters more than"],
          p3: [["Why do some people prefer to travel by plane rather than by train?", "Mainly because of speed and price. For long distances, a flight can take a few hours instead of a day, and low-cost airlines are often cheaper. Trains are more comfortable and better for the environment, but they depend on the routes available."],
               ["How has tourism changed the places people visit?", "In some places it has helped by bringing jobs and money, but in others it has caused problems, like crowded streets, higher prices for locals and damage to nature. Good planning, such as limiting visitor numbers, is needed."],
               ["Do you think travelling makes people more open-minded?", "Generally yes, because you see that your way of doing things is not the only one. But it depends on how you travel. If you stay in a hotel and only visit famous sights, you may learn very little."]] },
        { id: "c-tech", title: "Describe an object you use every day that is important to you", bullets: ["what the object is", "how long you have had it", "how you use it", "and explain why it is important to you."],
          rounding: "Would you be able to replace it easily?",
          sample: ["The object I'd like to talk about is my backpack. It's a dark green one, quite plain, and I've had it for nearly four years. My brother gave it to me when I started university.", "I use it every single day. It carries my laptop, my notebooks, a water bottle and usually far too many chargers. It has separate pockets, so I can find things quickly, and that matters when I'm running for a bus.", "It's important to me for practical reasons, of course. It's strong, it has survived rain and a lot of heavy books, and it's still in good condition. But it also has sentimental value, because it was a gift, and it has been with me through some of the busiest and most exciting years of my life.", "I know I could buy a newer one, but I'd feel strange replacing it. I think we get attached to objects that share our daily routines with us."],
          phrases: ["far too many", "separate pockets", "sentimental value", "we get attached to"],
          p3: [["Why do some people keep objects for a long time?", "Often because of memories. An old watch or a book can remind someone of a person or a period of life. Others keep things simply because they work well and they see no reason to replace them."],
               ["Do you think people buy too many things nowadays?", "Yes, I think so. Advertising and cheap prices make us feel we need new things all the time. Many items are thrown away after a short time, which is bad for the environment."],
               ["How might the things people carry change in the future?", "Probably there will be fewer. Phones already replace wallets, cameras and maps, and keys are being replaced by digital locks. Soon we may carry almost nothing but one device."]] }
    ];

    var MOCKS = [
        { id: "sm-1", title: "Mock interview 1", p1: ["home", "tech"], card: "c-skill" },
        { id: "sm-2", title: "Mock interview 2", p1: ["work", "free"], card: "c-place" },
        { id: "sm-3", title: "Mock interview 3", p1: ["food", "travel"], card: "c-person" },
        { id: "sm-4", title: "Mock interview 4", p1: ["home", "food"], card: "c-journey" },
        { id: "sm-5", title: "Mock interview 5", p1: ["work", "tech"], card: "c-tech" }
    ];

    /* ---- build practice items and audio units ---- */
    var EX = "en-GB-SoniaNeural", CAND = ["en-GB-RyanNeural", "en-US-AriaNeural", "en-AU-NatashaNeural", "en-GB-ThomasNeural", "en-IE-EmilyNeural"];
    var units = [], practice = [];
    function u(id, voice, text, rate) { units.push({ id: id, dir: "audio/ielts-speaking", rate: rate || "-4%", lines: [[voice, text]] }); return AUD + id + ".mp3"; }
    var fixed = {
        intro: u("sx-intro", EX, "Good morning. My name is Sarah. Can you tell me your full name, please? ... Thank you. Now, in this first part, I'd like to ask you some questions about yourself."),
        p2: u("sx-part2", EX, "Now, I'm going to give you a topic, and I'd like you to talk about it for one to two minutes. Before you talk, you will have one minute to think about what you are going to say, and you can make some notes if you wish. Here is your topic."),
        talk: u("sx-talk", EX, "All right, your minute is up. Please start speaking now."),
        stop: u("sx-stop", EX, "Thank you. That's the end of Part 2."),
        p3: u("sx-part3", EX, "We've been talking about this topic, and now I'd like to discuss some more general questions related to it."),
        end: u("sx-end", EX, "Thank you very much. That is the end of the speaking test.")
    };
    P1.forEach(function (t, ti) {
        t.qs = t.qs.map(function (q, i) {
            return { q: q[0], a: q[1], qAudio: u("sq-" + t.id + "-" + (i + 1), EX, q[0]), aAudio: u("sa-" + t.id + "-" + (i + 1), CAND[(ti + i) % CAND.length], q[1], "-2%") };
        });
        practice.push({ id: "sp1-" + t.id, kind: "part1", part: 1, title: "Part 1: " + t.title, topic: t.title, questions: t.qs,
            prepNote: "Four examiner questions. Answer each in 2 or 3 sentences: answer, reason, detail." });
    });
    CARDS.forEach(function (c, ci) {
        var voice = CAND[ci % CAND.length];
        c.cueAudio = u("sc-" + c.id, EX, "Your topic is: " + c.title + ". You should say: " + c.bullets.join(", ") + ".", "-6%");
        c.roundAudio = u("sr-" + c.id, EX, c.rounding);
        c.sampleAudio = u("sm-" + c.id, voice, c.sample.join(" "), "-2%");
        c.part3 = c.p3.map(function (q, i) { return { q: q[0], a: q[1], qAudio: u("s3-" + c.id + "-" + (i + 1), EX, q[0]), aAudio: u("s3a-" + c.id + "-" + (i + 1), voice, q[1], "-2%") }; });
        practice.push({ id: "sp2-" + c.id, kind: "cuecard", part: 2, title: "Part 2 and 3: " + c.title.replace("Describe ", "Describe "), cueCard: { topic: c.title + ".", bullets: c.bullets },
            rounding: c.rounding, sampleAnswer: c.sample, samplePhrases: c.phrases, sampleAudio: c.sampleAudio, cueAudio: c.cueAudio, roundAudio: c.roundAudio, part3: c.part3,
            prepNote: "One minute to prepare, up to two minutes to speak, then a rounding-off question and three Part 3 questions." });
    });
    MOCKS.forEach(function (m) {
        practice.push({ id: m.id, kind: "mock", part: 0, title: m.title, p1: m.p1, card: m.card, fixed: fixed,
            prepNote: "The whole test in the real order: about 12 minutes." });
    });

    D.part1Topics = P1; D.cueCards = CARDS; D.mocks = MOCKS; D.fixedAudio = fixed;
    D.practice = practice;
    D.audioUnits = units;
    D.lessons.forEach(function (L) { L.strategyOnly = true; });
    D.facts = D.facts.concat([{ label: "Practice here", value: "5 mock interviews, 5 Part 1 topics, 5 cue cards with Part 3" }]);
    D.criteria.forEach(function (c) {
        c.levels = ({
            "Fluency and coherence": ["I stop often and search for words. My ideas are hard to follow.", "I keep going but sometimes pause or repeat myself. I use simple linking words.", "I speak at length with only small hesitations. I link ideas with a range of words.", "I speak smoothly. Pauses are about ideas, not words. My answers are well organised."],
            "Lexical resource": ["I use simple words and often repeat them.", "I can talk about familiar topics. I sometimes find a different word when I do not know one.", "I use a range of words, some less common, and I paraphrase well. I make a few mistakes.", "I use precise words and natural phrases, and I rarely make mistakes."],
            "Grammatical range and accuracy": ["Mostly simple sentences. Many mistakes that can confuse the listener.", "Simple sentences are mostly correct. Longer sentences often contain mistakes.", "I use a mix of simple and complex sentences. Mistakes are present but rarely confusing.", "I use many structures flexibly. Most sentences are free of mistakes."],
            "Pronunciation": ["Hard to understand in places. Many sounds are unclear.", "Mostly understandable, but some words need effort to follow.", "Easy to understand. I use stress and rhythm to help, with a few small slips.", "Clear and natural throughout. Stress, rhythm and intonation help the meaning."]
        })[c.name];
    });
})();
