/* =========================================================
   TOEFL LISTENING — PRACTICE BANK (original content)
   Loaded before toefl-listening.js. Exposes window.toeflListeningBank.
   3 sets per task (Level 1, 2, 3). Audio file names = unit ids:
   audio/listening/<id>.mp3 (or .wav); browser TTS is the fallback.
   ========================================================= */
(function () {
    const L = (sp, cue, text) => ({ sp, cue, text });
    const Q = (q, opts, ans, why) => ({ q, opts, ans, why });
    const U = (id, ctx, lines, qs) => ({ id, ctx, lines, qs });
    const CR = (id, ctx, cue, text, opts, ans, why) => U(id, ctx, [L("Speaker", cue, text)], [Q("Choose the best response.", opts, ans, why)]);
    const set = (id, level, title, instruction, units) => ({ id, level, title, instruction, units });

    const chooseInstr = "Five short lines. Each plays once. Choose the best reply, change answers if you like, then press Check.";
    const convInstr = "The conversation plays once. Answer the questions, then press Check.";
    const annInstr = "The announcement plays once. Answer the questions, then press Check.";
    const talkInstr = "The talk plays once. Answer the questions, then press Check.";

    window.toeflListeningBank = {

        /* ---------------- LISTEN AND CHOOSE A RESPONSE ---------------- */
        choose: [
            set("pc1", 1, "Campus basics", chooseInstr, [
                CR("lc-p1-01", "A classmate is speaking to you.", "polite", "Excuse me, is anyone sitting here?", ["I sat there yesterday.", "No, please go ahead.", "Yes, it is a chair.", "The class starts soon."], 1, "The speaker asks permission to sit. The reply gives permission."),
                CR("lc-p1-02", "A student is speaking to you.", "curious", "What time does the bookstore close?", ["It sells many books.", "I closed it already.", "The store is near the gym.", "It closes at six on weekdays."], 3, "The question asks for a time, so the answer gives a time."),
                CR("lc-p1-03", "A staff member is speaking to you.", "hopeful", "Could you help me carry these boxes to the office?", ["The office has many boxes.", "Sure, I have a few minutes.", "I carried them last week.", "No, they were heavy."], 1, "A request for help needs agreement or refusal in the present or future."),
                CR("lc-p1-04", "A classmate is speaking to you.", "casual", "Have you finished the reading for tomorrow?", ["Not yet. I'll start after dinner.", "Yes, I read tomorrow.", "The reading room is open.", "I finished the dinner."], 0, "The reply answers the yes/no question and adds a plan."),
                CR("lc-p1-05", "A friend is speaking to you.", "stressed", "I can't find my student ID. Where should I look?", ["Student IDs are green.", "I find it very important.", "Yes, you should.", "You could check the lost and found office."], 3, "The speaker asks where to look, so the reply gives a place.")
            ]),
            set("pc2", 2, "Social situations", chooseInstr, [
                CR("lc-p2-01", "A friend is speaking to you.", "frustrated", "I was going to study at the café, but it's packed. Any other ideas?", ["The café serves good coffee.", "I packed my bag this morning.", "We could try the third floor of the library.", "Yes, I have many ideas."], 2, "The speaker asks for another place. Only one option suggests one."),
                CR("lc-p2-02", "A classmate is speaking to you.", "warm", "I really enjoyed your presentation. The examples were great.", ["You should enjoy it again.", "The presentation was on Monday.", "I examined them carefully.", "Thanks. I spent a long time choosing them."], 3, "A compliment is answered with thanks and a related comment."),
                CR("lc-p2-03", "A classmate is speaking to you.", "unsure", "Wasn't the exam supposed to be on Friday?", ["I suppose Friday is my day off.", "Yes, it was a hard exam.", "It was, but the professor moved it to Monday.", "Exams are on paper."], 2, "The reply confirms the original plan and gives the change."),
                CR("lc-p2-04", "A classmate is speaking to you.", "nervous", "Would it be okay if I turned in my essay a day late?", ["Essays are very long.", "You'd have to ask the professor. She might allow it.", "I wrote it in a day.", "Yes, a day has twenty-four hours."], 1, "The reply gives a useful answer: only the professor can decide."),
                CR("lc-p2-05", "A friend is speaking to you.", "uncertain", "I'm having trouble choosing between two majors. Any advice?", ["Majors are on the list.", "I chose a seat in the back.", "Yes, two is enough.", "Try talking to students who studied each one."], 3, "The speaker asks for advice, and the correct reply gives one.")
            ]),
            set("pc3", 3, "Indirect meaning", chooseInstr, [
                CR("lc-p3-01", "A classmate is speaking to you.", "reluctant", "I'd go to the review session if it weren't so early.", ["The review was last year.", "I know. Mornings are hard, but it might really help.", "I weigh about the same.", "The session is the same size."], 1, "The speaker implies they will not go. The reply understands that and encourages them."),
                CR("lc-p3-02", "A classmate is speaking to you.", "polite", "Do you happen to know whether the lab is open on weekends?", ["The weekend is two days.", "Yes, I happen to open it.", "Lab reports are due Friday.", "I'm not sure, but the website lists the hours."], 3, "A polite indirect question needs information or a way to find it."),
                CR("lc-p3-03", "A student is speaking to you.", "surprised", "I'm surprised the professor didn't mention the quiz in class.", ["The class was surprising.", "Maybe she posted it online instead.", "I mentioned the professor.", "Quizzes are quick."], 1, "The reply offers a reasonable explanation for the surprise."),
                CR("lc-p3-04", "A classmate is speaking to you.", "hopeful", "If you're free later, would you mind proofreading my paper?", ["Happy to. Send it over after lunch.", "Free is a good price.", "I paper my room later.", "Proofreading takes place at the library."], 0, "A polite request is accepted and the reply adds a time."),
                CR("lc-p3-05", "A classmate is speaking to you.", "confused", "We were supposed to meet at two. Did I get the time wrong?", ["Yes, I wrong the time.", "Two is a small number.", "No, we moved it to three. I should have told you.", "I met him at the gym."], 2, "The reply answers the question, corrects the time, and takes responsibility.")
            ])
        ],

        /* ---------------- LISTEN TO A CONVERSATION ---------------- */
        conversation: [
            set("pv1", 1, "Noisy heater", convInstr, [
                U("lv-p1-01", "A student speaks with a resident advisor.", [
                    L("Sam", "tired", "Hi, Ms. Torres. Do you have a minute? My heater has been making a loud noise at night, and I can't sleep."),
                    L("Ms. Torres", "sympathetic", "I'm sorry to hear that. How long has it been going on?"),
                    L("Sam", "frustrated", "About three days. I already told the front desk, but nobody came."),
                    L("Ms. Torres", "helpful", "Okay. Let's submit an official maintenance request. Those are usually handled within twenty-four hours."),
                    L("Sam", "hopeful", "Can I do that online?"),
                    L("Ms. Torres", "clear", "Yes, through the housing portal. Include your room number and describe the noise. I'll also email the maintenance office so they know it's urgent."),
                    L("Sam", "grateful", "Thanks so much. Should I do anything in the meantime?"),
                    L("Ms. Torres", "kind", "If you want, you can sleep in the study lounge tonight. It's quiet and open all night.")
                ], [
                    Q("Why does Sam talk to Ms. Torres?", ["His roommate is too loud.", "A noisy heater keeps him awake.", "He lost his room key.", "He wants to change rooms."], 1, "He says the heater makes a loud noise at night and he can't sleep."),
                    Q("What did Sam already do about the problem?", ["He emailed maintenance.", "He used the housing portal.", "He told the front desk.", "He moved to the lounge."], 2, "He says he told the front desk, but nobody came."),
                    Q("What will Ms. Torres do?", ["Fix the heater herself.", "Email the maintenance office.", "Move Sam to another dorm.", "Close the study lounge."], 1, "She says she will email the maintenance office so they know it's urgent.")
                ])
            ]),
            set("pv2", 2, "Research paper help", convInstr, [
                U("lv-p2-01", "A student speaks with a librarian.", [
                    L("Nora", "overwhelmed", "Hi, I'm working on a paper about social media, but I'm finding thousands of articles, and I don't know where to begin."),
                    L("Mr. Park", "understanding", "That's a common problem. Your topic is probably too broad. What's the paper for?"),
                    L("Nora", "explaining", "It's for my sociology class. We need to analyze one specific effect."),
                    L("Mr. Park", "encouraging", "Then narrow it. For example, you could look at how social media affects the way teenagers sleep."),
                    L("Nora", "curious", "Hmm, that's interesting. But would there be enough sources?"),
                    L("Mr. Park", "confident", "Plenty. Try our database of psychology journals, and use the filter to limit results to the last five years."),
                    L("Nora", "pleased", "I never noticed that filter. I'll try it today."),
                    L("Mr. Park", "friendly", "And if you get stuck, book a research appointment. I can sit with you for thirty minutes.")
                ], [
                    Q("What is Nora's main problem?", ["She cannot access the library.", "Her topic is too broad.", "She has no sources at all.", "She missed the deadline."], 1, "She finds thousands of articles, and the librarian says the topic is probably too broad."),
                    Q("What does Mr. Park suggest first?", ["Choosing a new class.", "Using only books.", "Narrowing the topic to one effect.", "Writing the conclusion first."], 2, "He tells her to narrow the topic, for example to sleep and teenagers."),
                    Q("What can Nora do if she gets stuck?", ["Book a research appointment.", "Email her professor.", "Change her topic again.", "Use older articles."], 0, "He says to book a research appointment for thirty minutes of help.")
                ])
            ]),
            set("pv3", 3, "Deadline problem", convInstr, [
                U("lv-p3-01", "A student speaks with a professor.", [
                    L("Kai", "worried", "Professor Adams, I wanted to ask about the lab report due Friday. I'm afraid I won't finish."),
                    L("Professor Adams", "calm", "What's holding you up?"),
                    L("Kai", "embarrassed", "I had a family event over the weekend, and then the data from my second experiment turned out to be unusable."),
                    L("Professor Adams", "firm but kind", "I see. Unfortunately, I can't extend the deadline for the whole class, and it wouldn't be fair to the others."),
                    L("Kai", "quiet", "I understand."),
                    L("Professor Adams", "helpful", "However, you could submit the sections you've finished by Friday, and I'll accept the revised data analysis on Monday. You'd lose a few points on that section, but not the whole grade."),
                    L("Kai", "relieved", "That sounds reasonable. Would it help if I came to your office hours tomorrow to check my analysis?"),
                    L("Professor Adams", "approving", "Definitely. Bring your raw data, and we'll go through it together.")
                ], [
                    Q("Why does Kai think he will not finish on time?", ["He forgot about the report.", "He had a family event and bad data.", "He is ill and cannot come to class.", "The lab was closed."], 1, "He mentions a family event and unusable data from his second experiment."),
                    Q("Why does the professor refuse a full extension?", ["The semester is ending.", "She will be away.", "It would not be fair to other students.", "The report is not important."], 2, "She says she can't extend it for the whole class, and it wouldn't be fair to the others."),
                    Q("What will Kai most likely do?", ["Submit finished sections on Friday and visit office hours.", "Wait until Monday to start.", "Drop the course.", "Ask a classmate for data."], 0, "He accepts the plan to submit part now and the revised analysis later, and offers to come to office hours.")
                ])
            ])
        ],

        /* ---------------- LISTEN TO AN ANNOUNCEMENT ---------------- */
        announcement: [
            set("pa1", 1, "Student health center", annInstr, [
                U("la-p1-01", "A health center staff member makes an announcement.", [
                    L("Speaker", "friendly and clear", "Good morning. This is a reminder from the student health center. Starting this week, the clinic will open at eight instead of nine, so students can visit before their first classes. Flu vaccines are available free of charge for all students with a valid ID, with no appointment needed, on Tuesdays and Thursdays. Please remember that the clinic is closed on weekends, but a nurse hotline is available at all hours. Thank you.")
                ], [
                    Q("What change does the speaker announce?", ["The clinic will close earlier.", "The clinic will open earlier.", "The clinic will open on weekends.", "The clinic will move buildings."], 1, "It will open at eight instead of nine."),
                    Q("When can students get free flu vaccines?", ["Every weekend.", "Only by appointment on Fridays.", "On Tuesdays and Thursdays.", "Every morning at eight."], 2, "Vaccines are free with a valid ID on Tuesdays and Thursdays."),
                    Q("What is available on weekends?", ["A nurse hotline.", "Walk-in appointments.", "Free vaccines.", "A pharmacy."], 0, "The clinic is closed, but a nurse hotline is available at all hours.")
                ])
            ]),
            set("pa2", 2, "Parking changes", annInstr, [
                U("la-p2-01", "A campus office makes an announcement.", [
                    L("Speaker", "professional and clear", "Attention, commuter students. The east parking lot will be closed for repaving from Monday through Wednesday of next week. During this time, drivers may use the north lot or the parking garage on University Avenue. Garage parking will cost the same as the east lot, and your permit will be accepted. Because the north lot fills quickly, we recommend arriving at least fifteen minutes earlier than usual. If you carpool, please use the signs near the entrance to find reserved spaces. Thank you for your patience.")
                ], [
                    Q("Why is the east parking lot closing?", ["It is too small.", "It is being repaved.", "It is reserved for carpoolers.", "A building is being built."], 1, "The lot will be closed for repaving."),
                    Q("What does the speaker recommend for the north lot?", ["Parking in the garage instead.", "Using a different permit.", "Arriving earlier than usual.", "Carpooling every day."], 2, "Because the north lot fills quickly, students should arrive at least fifteen minutes earlier."),
                    Q("What is true about the parking garage?", ["It is free for the week.", "It costs the same and accepts the permit.", "It is only for carpoolers.", "It closes on Wednesday."], 1, "Garage parking costs the same as the east lot, and permits are accepted.")
                ])
            ]),
            set("pa3", 3, "Career fair", annInstr, [
                U("la-p3-01", "A career fair organizer makes an announcement.", [
                    L("Speaker", "welcoming and organized", "Welcome, everyone, and thank you for visiting the spring career fair. Before you begin, a few reminders. Employers are located by field: technology on the first floor, healthcare and education on the second. Many companies will collect résumés digitally, so please scan the code on your badge instead of printing copies. However, two employers, the city museum and the regional hospital, will accept only paper résumés. Workshops on interview skills begin at one o'clock in room two-oh-four, but space is limited, so reservations are strongly recommended. The fair ends at four.")
                ], [
                    Q("How are the employers organized?", ["Alphabetically.", "By company size.", "By field, on different floors.", "By the time of their workshops."], 2, "Technology is on the first floor, healthcare and education on the second."),
                    Q("What should students do for most employers?", ["Bring several paper copies.", "Scan the code on their badge.", "Email a résumé tomorrow.", "Reserve an interview time."], 1, "Many companies collect résumés digitally through the badge code."),
                    Q("Which statement about the workshops is correct?", ["They start at four o'clock.", "They are open to everyone without limits.", "They begin at one and space is limited.", "They are held on the first floor."], 2, "They begin at one o'clock in room 204, and space is limited so reservations are recommended.")
                ])
            ])
        ],

        /* ---------------- LISTEN TO AN ACADEMIC TALK ---------------- */
        talk: [
            set("pt1", 1, "Urban heat islands", talkInstr, [
                U("lt-p1-01", "An environmental science professor gives a short lecture.", [
                    L("Professor", "clear and engaging", "Have you ever noticed that a city can feel several degrees hotter than the countryside around it? Scientists call this the urban heat island effect. It happens mainly for two reasons. First, materials like asphalt and concrete absorb heat during the day and release it slowly at night, so cities don't cool down as quickly. Second, cities have fewer trees and less open ground, and plants help cool the air by releasing water vapor. In some large cities, nighttime temperatures can be as much as five degrees higher than in nearby rural areas. This is more than a comfort issue. Higher temperatures increase electricity use for air conditioning and can be dangerous for older people. So planners are experimenting with solutions, such as painting roofs white to reflect sunlight and planting trees along streets. Next time, we'll look at how well these solutions actually work.")
                ], [
                    Q("What is the main topic of the talk?", ["Why cities are warmer than nearby areas.", "How air conditioning works.", "Why trees grow slowly in cities.", "How rural areas are changing."], 0, "The professor explains the urban heat island effect and its causes."),
                    Q("Which causes does the professor mention?", ["Heavy traffic and loud noise.", "Heat-absorbing materials and fewer plants.", "Tall buildings and strong wind.", "Dry air and low rainfall."], 1, "Asphalt and concrete hold heat, and cities have fewer trees and less open ground."),
                    Q("Why does the professor mention electricity use?", ["To show that the effect has practical consequences.", "To explain how plants cool the air.", "To compare cities with farms.", "To introduce a new experiment."], 0, "She uses it to show that the effect is more than a comfort issue."),
                    Q("Which solutions does the professor mention?", ["Building taller roofs and wider roads.", "Painting roofs white and planting street trees.", "Turning off air conditioning.", "Moving people to the countryside."], 1, "She names white roofs to reflect sunlight and trees along streets.")
                ])
            ]),
            set("pt2", 2, "The printing press", talkInstr, [
                U("lt-p2-01", "A history professor gives a short lecture.", [
                    L("Professor", "thoughtful and lively", "Before the fifteenth century, every book in Europe was copied by hand, usually by monks. A single book could take months to produce, so books were rare and expensive. Then Johannes Gutenberg introduced a printing press with movable metal letters. The key idea was simple: letters could be rearranged and reused for different pages. Printing became faster and cheaper, and the number of books increased dramatically. What's interesting is the effect this had on ideas. When more people could read the same text, new ideas could spread across countries within years rather than decades. Scholars could also compare printed copies and notice errors, which helped knowledge become more reliable. Of course, this didn't happen overnight. Literacy rates grew slowly, and many people still couldn't afford books. But the press set a pattern we recognize today: when information becomes cheaper to share, society changes.")
                ], [
                    Q("What is the main idea of the talk?", ["Monks were the best writers.", "The printing press changed how quickly ideas spread.", "Books are no longer needed.", "Literacy grew quickly after 1450."], 1, "The professor describes how printing made books cheaper and spread ideas faster."),
                    Q("What was the key innovation of Gutenberg's press?", ["Using paper instead of leather.", "Hiring more monks.", "Movable letters that could be reused.", "Printing in several colors."], 2, "Letters could be rearranged and reused for different pages."),
                    Q("Why does the professor mention comparing printed copies?", ["To show that scholars could find errors.", "To explain why books were expensive.", "To describe handwriting styles.", "To argue that books were unreliable."], 0, "Comparing copies helped scholars notice mistakes, making knowledge more reliable."),
                    Q("What does the professor suggest at the end?", ["Old methods are always better.", "Cheaper ways to share information change society.", "Books will disappear soon.", "Literacy is not important."], 1, "She says that when information becomes cheaper to share, society changes.")
                ])
            ]),
            set("pt3", 3, "The anchoring effect", talkInstr, [
                U("lt-p3-01", "A psychology professor gives a short lecture.", [
                    L("Professor", "clear and persuasive", "Imagine you're shopping for a jacket, and the first price you see is three hundred dollars. Later you find a similar jacket for one hundred fifty. Suddenly, the second jacket looks like a bargain, even if one hundred fifty is more than you'd normally pay. This is called anchoring: our judgments are strongly influenced by the first piece of information we receive, even when that information is irrelevant. In a well-known study, participants watched a wheel spin to a random number, then estimated the percentage of African countries in the United Nations. Those who saw a high number gave higher estimates than those who saw a low number, though the wheel had nothing to do with the question. Notice that participants knew the number was random. Even so, it shaped their answers. Marketers use this all the time. A high original price crossed out beside a sale price creates an anchor. The lesson isn't that we should distrust every number. It's that we should ask ourselves where our first impression came from before we decide.")
                ], [
                    Q("How does the professor define anchoring?", ["Comparing two prices fairly.", "Being strongly influenced by the first information we receive.", "Remembering numbers for a long time.", "Choosing the cheapest option."], 1, "She defines it as being influenced by first information, even when it is irrelevant."),
                    Q("Why does the professor describe the jacket example?", ["To teach shopping skills.", "To compare two brands.", "To illustrate how a first price affects judgment.", "To show that expensive items are better."], 2, "The first price makes the second jacket look like a bargain, illustrating anchoring."),
                    Q("What does the wheel experiment show?", ["People cannot estimate percentages.", "A random number can influence later estimates.", "Participants did not know the number was random.", "Larger numbers are easier to remember."], 1, "People who saw a high random number gave higher estimates, even though it was irrelevant."),
                    Q("What does the professor recommend?", ["Ignoring all numbers.", "Never shopping on sale.", "Asking where a first impression came from.", "Trusting the first price you see."], 2, "She says to ask yourself where your first impression came from before deciding.")
                ])
            ])
        ]
    };
})();
