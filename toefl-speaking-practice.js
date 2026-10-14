/* =========================================================
   TOEFL SPEAKING — PRACTICE BANK (original content)
   Loaded before toefl-speaking.js. Exposes window.toeflSpeakingBank.
   repeat:    7 sentences per set, getting longer within each set.
   interview: 4 questions per set on ONE topic (audio only in the lab).
   ========================================================= */
(function () {
    const rep = (id, level, title, scene, focus, rows) => ({
        id, level, title,
        instruction: "Seven sentences that get longer. Each plays once and the text is hidden. Press Listen, then Record, then repeat it exactly. Press Check at the end.",
        items: rows.map(r => ({ scenario: scene, text: r[0], focus, tip: r[1] }))
    });
    const itv = (id, level, title, topic, rows) => ({
        id, level, title,
        instruction: "Four questions on one topic. Each question plays once and is not shown. Press Hear the question, then Record and answer for up to 45 seconds. Press Check at the end.",
        items: rows.map(r => ({ topic, intro: r[0], question: r[1], model: r[2], phrases: r[3].split("|"), tip: r[4] || "" }))
    });

    window.toeflSpeakingBank = {
        repeat: [
            rep("r1", 1, "Campus café", "You are ordering at the campus café.", "Everyday requests and short chunks", [
                ["The café opens at eight.", "Say the final -s on ‘opens’ clearly."],
                ["I would like a small coffee, please.", "Stress ‘small’ and ‘coffee’; keep ‘I would like a’ light."],
                ["The line is shorter after the morning classes.", "Chunk it: the line is shorter / after the morning classes."],
                ["You can pay with your student card at the counter.", "Link ‘pay with’ and ‘at the’ smoothly."],
                ["My friend usually sits by the window and reads.", "Keep both verbs clear: ‘sits’ and ‘reads’."],
                ["Please remember to return your tray when you finish.", "Stress ‘remember’, ‘return’, and ‘tray’."],
                ["The café offers a discount to students who bring their own cups.", "‘Students who bring their own cups’ is one unit; keep the rhythm steady."]
            ]),
            rep("r2", 1, "Library", "You are visiting the university library.", "Rules, numbers, and polite instructions", [
                ["The library is quiet today.", "Say ‘library’ as LY-brer-ee and link it smoothly to ‘is’."],
                ["Please turn off your phone.", "Link ‘turn off’ into one smooth sound."],
                ["You can borrow five books at a time.", "Pronounce the -s on ‘books’ and say ‘at a time’ quickly."],
                ["The computers are available on the first floor.", "Stress ‘computers’, ‘available’, and ‘first floor’."],
                ["Students must return their books before the end of the month.", "Chunk it: students must return their books / before the end of the month."],
                ["The librarian can help you find articles for your research paper.", "Keep ‘can’ weak and stress ‘help’, ‘articles’, and ‘research’."],
                ["If you cannot find a book, ask the staff to check another branch.", "Pause briefly after the comma, then finish with a clear ‘branch’."]
            ]),
            rep("r3", 2, "Dormitory", "You are talking about dormitory life.", "Longer sentences with clauses", [
                ["The laundry room is downstairs.", "Stress ‘laundry’ and ‘downstairs’."],
                ["Residents should keep the hallway clear at all times.", "Say the -s in ‘residents’ and link ‘at all times’."],
                ["The maintenance team will repair the heater tomorrow morning.", "‘Maintenance’ has three syllables: MAIN-te-nance."],
                ["Please let your roommate know before you invite guests.", "Chunk it: please let your roommate know / before you invite guests."],
                ["Because the building is old, some rooms get cold in winter.", "Stress ‘old’ and ‘cold’; pause after the comma."],
                ["Students who lose their keys must report it to the front desk immediately.", "Keep the middle steady: lose their keys / must report it / to the front desk."],
                ["Although the dormitory is quiet, a few residents like to practice music in the evening.", "Contrast clause: pause after ‘quiet’ and keep stress on ‘few’ and ‘music’."]
            ]),
            rep("r4", 2, "Science lab", "You are in a science laboratory.", "Instructions and sequence words", [
                ["Please wear your safety glasses.", "Stress ‘wear’ and ‘safety’."],
                ["The experiment will begin in five minutes.", "Say ‘experiment’ with stress on the second syllable: ex-PER-i-ment."],
                ["Each group should record its results in the notebook.", "Say ‘results’ and ‘notebook’ clearly, and keep ‘each group should’ light."],
                ["Do not touch the equipment until the instructor gives permission.", "Link ‘until the’ and finish with a clear ‘permission’."],
                ["After the samples are heated, they need to cool for ten minutes.", "Stress ‘heated’ and ‘cool’; pause after the comma."],
                ["If the temperature rises too quickly, stop the machine and call your instructor.", "‘Temperature’ is TEM-per-a-chur; keep the second part brisk."],
                ["Students who complete the experiment early may help others review their data.", "Chunk it: students who complete the experiment early / may help others / review their data."]
            ]),
            rep("r5", 3, "Lecture hall", "You are attending an academic lecture.", "Academic vocabulary and complex structures", [
                ["The professor posted the reading list online.", "Stress ‘professor’, ‘reading’, and ‘online’."],
                ["Today’s lecture focuses on how cities have changed over time.", "Chunk it: today’s lecture focuses on / how cities have changed / over time."],
                ["Students are expected to submit their proposals before the deadline.", "Keep ‘proposals’ clear: pro-PO-zuls."],
                ["Although the results were surprising, the research team decided to repeat the study.", "Pause after ‘surprising’; stress ‘repeat’ and ‘study’."],
                ["The department will announce the winners of the scholarship at the end of the semester.", "Keep the small words light so the stressed words stand out."],
                ["Researchers who work with large data sets often need several months to organize their findings.", "Hold three chunks: researchers who work with large data sets / often need several months / to organize their findings."],
                ["Unless the committee receives your application by Friday, it cannot be considered for this year’s program.", "Pause after ‘Friday’ and keep ‘cannot’ clear; finish with ‘program’."]
            ]),
            rep("r6", 3, "Student activities fair", "You are at a student activities fair.", "Long sentences and natural rhythm", [
                ["Many clubs are recruiting new members today.", "Stress ‘clubs’, ‘recruiting’, and ‘members’."],
                ["The photography club meets every Thursday in the media building.", "‘Photography’ is fo-TOG-ra-fee; keep the stress in the right place."],
                ["If you sign up now, you will receive a free membership card.", "Pause after ‘now’; stress ‘free’ and ‘membership’."],
                ["The volunteer program gives students a chance to work with local organizations.", "Chunk it: the volunteer program / gives students a chance / to work with local organizations."],
                ["Because space is limited, interested students should register before the event fills up.", "Say ‘limited’ and ‘interested’ with clear syllables; finish with ‘fills up’."],
                ["Members of the debate team travel to several universities each year to compete.", "Link ‘members of the’ and keep ‘several universities’ clear."],
                ["Students who are curious about leadership opportunities should speak with one of the organizers after the presentation.", "Hold the long subject in one breath: students who are curious about leadership opportunities; then continue steadily."]
            ])
        ],

        interview: [
            itv("i1", 1, "Interview 1 · Study habits", "Study habits", [
                ["Let’s talk about how you study.", "Where do you usually study, and why do you prefer that place?",
                    "I usually study in the university library. The main reason is that it is quiet, so I can concentrate for long periods. For example, last semester I prepared for my chemistry exam there, and I finished two chapters in one evening. At home, my family and my phone often distract me. Also, the library has comfortable desks and free Wi-Fi. That is why it is my favorite place to study.",
                    "I usually … in …|The main reason is that …|For example, last semester …|That is why …", "Answer the place first, then the reason."],
                ["Some students study in the morning and others study at night.", "When do you study best, and why?",
                    "I study best in the morning. After a good night’s sleep, my mind feels fresh, so I understand difficult ideas faster. For instance, I once solved a hard math problem in thirty minutes before class, but it took me two hours one night when I was tired. In addition, mornings are peaceful, and nobody calls me. For these reasons, I try to finish my most important work before noon.",
                    "I study best …|For instance, …|In addition, …|For these reasons, …", "Compare two situations to make your example vivid."],
                ["Students take notes in different ways.", "Do you take notes by hand or on a device? Explain your choice.",
                    "I take notes by hand. First, writing slowly forces me to listen carefully and choose the important points. For example, in my history class I write short summaries in my own words, and later I remember them easily. A laptop is faster, but I often feel tempted to open other websites. Therefore, a notebook helps me stay focused, and I feel more connected to the lecture.",
                    "First, …|A laptop is faster, but …|Therefore, …", "Admit the other side in one short sentence, then return to your choice."],
                ["Now, imagine a new student is starting at your university.", "What advice would you give about studying, and why?",
                    "My advice is to make a simple weekly schedule. The reason is that it prevents last-minute stress. For example, when I started university, I wrote down every assignment and study session, and I stopped missing deadlines. Besides, a plan makes the work feel smaller and easier to begin. So I would tell new students to plan first and study second.",
                    "My advice is to …|The reason is that …|Besides, …|So I would tell …", "Finish with one clear sentence of advice."]
            ]),
            itv("i2", 1, "Interview 2 · Campus life", "Campus life", [
                ["Let’s talk about life on campus.", "What is your favorite place on campus, and why do you like it?",
                    "My favorite place is the student garden behind the science building. I like it because it is calm and green, which helps me relax between classes. For example, last week I had a stressful exam, and I sat there for twenty minutes afterward and felt much better. Also, I often meet friends there to chat. Overall, the garden is the perfect place to rest.",
                    "My favorite place is …|I like it because …|For example, last week …|Overall, …", "Describe how the place makes you feel, not only what it looks like."],
                ["Many students join clubs and student groups.", "Would you recommend joining a club? Why or why not?",
                    "Yes, I would recommend joining a club. The main benefit is that you meet people who share your interests. For instance, I joined the chess club in my first month, and now most of my close friends come from there. In addition, clubs teach useful skills such as teamwork and planning events. That is why I believe every student should try at least one.",
                    "Yes, I would recommend …|The main benefit is that …|For instance, …|That is why I believe …", "A yes or no in the first sentence earns the clearest start."],
                ["Some students live on campus, while others live at home.", "Which do you prefer, and why?",
                    "I prefer living on campus. First, it saves a lot of time because classes are only a short walk away. For example, I can sleep until seven-thirty and still arrive early. Second, it is easier to join evening activities and study groups. Of course, it can be noisy, but the convenience is worth it. So campus living is the better choice for me.",
                    "I prefer …|First, … Second, …|Of course, … but …|So … is the better choice", "Two reasons (‘First’ and ‘Second’) give your answer a clear shape."],
                ["Universities are always looking for ways to improve.", "What is one thing you would change about your university, and why?",
                    "I would add more quiet study areas. The reason is that the library is often full during exam weeks. For example, last month I walked around for twenty minutes before I found an empty desk. More quiet rooms would help many students concentrate. Also, it would reduce stress during busy periods. I believe it is a small change that would make a big difference.",
                    "I would add …|The reason is that …|It would help …|I believe it is …", "Keep the change specific and realistic."]
            ]),
            itv("i3", 2, "Interview 3 · Technology and learning", "Technology and learning", [
                ["Let’s discuss technology in education.", "How do you use technology to help you learn, and why is it useful?",
                    "I mainly use video lessons and learning apps. They are useful because I can pause, repeat, and learn at my own speed. For example, when I could not understand a physics concept in class, I watched a short explanation online and finally understood it. In addition, apps send reminders that keep me organized. As a result, technology saves me time and makes studying more flexible.",
                    "I mainly use …|They are useful because …|As a result, …", "Name the tools first so your answer is concrete."],
                ["Some classes are taught online, while others are in person.", "Which do you think is better, and why?",
                    "I think in-person classes are better. The main reason is that you can ask questions immediately and receive direct feedback. For instance, in my writing class the teacher corrected my paragraph on the spot, and I learned from the mistake right away. Online classes are convenient, but it is easier to lose focus at home. Therefore, I choose being in the classroom whenever possible.",
                    "I think … is better|The main reason is that …|… are convenient, but …|Therefore, …", "‘Convenient, but …’ shows you understand both sides."],
                ["People often say that phones are changing student life.", "Do you think students depend too much on their phones? Explain your opinion.",
                    "Yes, I think many students depend too much on their phones. One problem is that notifications interrupt concentration. For example, I once spent an hour studying but checked my phone so often that I finished only one page. On the other hand, phones can be helpful tools. However, students need to set limits, such as turning off notifications. Overall, the phone should serve us, not control us.",
                    "One problem is that …|On the other hand, …|However, …|Overall, …", "A personal mistake makes a convincing example."],
                ["Now, think about the future.", "How do you think technology will change universities, and why?",
                    "I believe technology will make universities more personalized. The reason is that software can already adapt exercises to each student’s level. For example, some language apps give harder questions when you answer correctly and easier ones when you struggle. In the future, this could be common in every subject. Moreover, virtual labs may allow students to practice safely at home. In short, learning will become more flexible and individual.",
                    "I believe … will …|The reason is that …|Moreover, …|In short, …", "Use ‘will’ and ‘could’ for predictions."]
            ]),
            itv("i4", 2, "Interview 4 · Time management", "Time management", [
                ["Let’s talk about managing your time.", "What do you do to avoid wasting time during a busy week, and why does it work for you?",
                    "I plan my week on Sunday evening. This works for me because I can see all my deadlines in one place and avoid surprises. For example, last month I had two presentations and an exam, and my plan helped me divide the work into small tasks. Also, I leave short breaks between tasks so I do not feel exhausted. In short, planning keeps me calm and productive.",
                    "I plan …|This works for me because …|Also, …|In short, …", "Answer both parts: what you do and why it works."],
                ["People manage deadlines in different ways.", "Do you usually finish work early, or do you wait until the deadline? Why?",
                    "I usually finish early. The main reason is that I get nervous when a deadline is close. For instance, I submitted my last essay three days early, and that gave me time to check the grammar carefully. People who wait for the deadline may feel more energy, but they often make mistakes. So starting early gives me better results and less stress.",
                    "I usually …|The main reason is that …|People who … may …, but …|So …", "Give a number (‘three days early’) to make the example specific."],
                ["Students often debate how long they should study at one time.", "Is it better to study for a long time at once or in short sessions? Explain why.",
                    "I think short sessions are better. First, the brain cannot concentrate well for many hours without a break. For example, I study for forty minutes, rest for ten, and then continue, and I remember more than when I study for three hours straight. In addition, short sessions are easier to fit into a busy day. Therefore, I recommend working in focused blocks.",
                    "I think … is better|First, …|In addition, …|Therefore, I recommend …", "Use your own routine as the example."],
                ["Sometimes everything seems to be due at the same time.", "What should students do when they have too many tasks, and why?",
                    "They should list everything and decide what is most urgent. The reason is that a clear order reduces panic. For example, when I had three assignments due in one week, I started with the one worth the most marks and the nearest deadline. If necessary, students can also ask a teacher for advice. In the end, a calm plan is more effective than worrying.",
                    "They should …|The reason is that …|If necessary, …|In the end, …", "Advice answers need a clear action in the first sentence."]
            ]),
            itv("i5", 3, "Interview 5 · Sustainability", "Environmental responsibility", [
                ["Let’s discuss environmental responsibility.", "What can universities do to become more environmentally friendly, and why would that matter?",
                    "Universities can reduce waste and use cleaner energy. This matters because they serve thousands of people every day, so small changes have a large effect. For example, installing solar panels on buildings could cut electricity costs and pollution. In addition, recycling stations in every hallway would encourage good habits. Ultimately, a university that acts responsibly also teaches students to do the same.",
                    "… can …|This matters because …|could cut …|Ultimately, …", "Use ‘can’ and ‘could’ for possible actions."],
                ["Some people think individual actions can protect the environment, while others believe only governments can make a difference.", "What is your view, and why?",
                    "I believe both matter, but governments have more power. The reason is that laws can change entire industries at once. For instance, rules about plastic bags quickly reduced waste in many countries. Even so, individual actions such as saving water create a culture of responsibility. Therefore, governments should lead, and individuals should support them.",
                    "I believe both …, but …|The reason is that …|Even so, …|Therefore, …", "State your position clearly even when you see both sides."],
                ["Many eco-friendly products cost more than ordinary ones.", "Would you be willing to pay more for products that are better for the environment? Explain your reasoning.",
                    "Yes, I would, within reason. The main reason is that cheap products often have hidden costs, such as pollution. For example, I bought a reusable water bottle that cost more, but it replaced hundreds of plastic bottles. However, prices should stay fair, or many families cannot afford to choose them. Overall, I am willing to pay slightly more for a long-term benefit.",
                    "Yes, I would, within reason.|The main reason is that …|However, …|Overall, …", "‘Within reason’ is a useful way to give a balanced yes."],
                ["Finally, think about children and nature.", "How can schools encourage younger children to care about nature, and why is it important to start early?",
                    "Schools can organize outdoor activities, such as planting gardens. It is important to start early because habits formed in childhood usually last for life. For example, a school I visited let students grow vegetables and eat them at lunch, and the children were proud and curious. In addition, simple lessons about recycling make the topic part of daily routine. As a result, children grow into responsible adults.",
                    "Schools can …|It is important to … because …|In addition, …|As a result, …", "Both parts of the question need an answer: how, and why early."]
            ])
        ]
    };
})();
