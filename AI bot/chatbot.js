const responses = {
    greetings: [
        "Hello! How can I assist you today? 😊",
        "Hey there! How's it going? 🤖",
        "Hi! What can I help you with? 😊",
        "Greetings! Hope you're having a great day! 🌟",
        "Yo! What’s up? 🚀",
        "Hey! How’s your day going so far? 😃",
        "Hi there! Ready to chat? 💬",
        "Hello, friend! What’s on your mind? 🤔",
        "Great to see you! What’s up? 👀",
        "Hi, how can I make your day better? 💖"
    ],
    jokes: [
        "Why don't scientists trust atoms? Because they make up everything! 😆",
        "Why did the math book look sad? It had too many problems! 📖😂",
        "Why do cows have hooves instead of feet? Because they lactose! 🐄🤣",
        "What’s brown and sticky? A stick! 🤭",
        "Why was the broom late? It swept in! 🧹😅",
        "I told my suitcase I wasn’t going on vacation… now I’m dealing with emotional baggage. 🎒😂",
        "What do you call fake spaghetti? An impasta! 🍝😆",
        "Why do programmers prefer dark mode? Because light attracts bugs! 💻🐞",
        "Parallel lines have so much in common. It’s a shame they’ll never meet. 📏😆",
        "Why don’t skeletons fight each other? They don’t have the guts! 💀😂"
    ],
    compliments: [
        "You're amazing just the way you are! ✨",
        "You're a ray of sunshine on a cloudy day! ☀️",
        "You're not just smart, you're genius-level smart! 🧠💡",
        "You have a heart of gold! 💛",
        "You're incredibly talented and inspiring! 🌟",
        "You make the world a better place just by being in it! 🌍💖",
        "Your kindness is contagious! 😊",
        "You have an awesome sense of humor! 😆",
        "You light up the room whenever you walk in! 🌟",
        "You have a beautiful mind, inside and out! ❤️"
    ],
    motivation: [
        "Believe in yourself, and anything is possible! 🚀",
        "Your only limit is your mind! Break free and achieve greatness! 💡",
        "Don't watch the clock; do what it does—keep going! ⏳",
        "The best way to predict the future is to create it! 🎯",
        "You’re stronger than you think! Keep pushing forward! 💪",
        "Small steps every day lead to big achievements. Keep going! 🏆",
        "You are capable of amazing things! ✨",
        "Hardships often prepare people for an extraordinary destiny. 🌟",
        "Every expert was once a beginner. Start today! 📈",
        "Success is not final, failure is not fatal—it’s the courage to continue that counts. 🏅"
    ],
    fun_facts: [
        "Did you know honey never spoils? Archaeologists found 3000-year-old honey that was still good! 🍯",
        "A day on Venus is longer than a year on Venus! 😲",
        "Bananas are berries, but strawberries aren’t! 🍓🍌",
        "Octopuses have three hearts and blue blood! 🐙",
        "Water can boil and freeze at the same time, under certain conditions! 💧🔥",
        "There are more stars in the universe than grains of sand on Earth! 🌌",
        "A single cloud can weigh more than a million pounds! ☁️😲",
        "The Eiffel Tower grows taller in summer due to heat expansion! 🏗️",
        "Sharks have been around longer than trees! 🦈🌲",
        "You are made of stardust—literally! 🌠"
    ],
    advice: [
        "Always be yourself; everyone else is taken! 😎",
        "Take a deep breath. Sometimes, that’s all you need to reset. 🌬️",
        "Kindness costs nothing but means everything. Spread it! ❤️",
        "Don’t let yesterday take up too much of today! 🌞",
        "When in doubt, ask yourself, ‘Will this matter in 5 years?’ 🤔",
        "Failure is a bruise, not a tattoo. Keep going! 💪",
        "Choose progress over perfection. 🚀",
        "Don’t compare your Chapter 1 to someone else’s Chapter 20. 📖",
        "The best things in life happen outside your comfort zone. 🌎",
        "The key to success? Consistency. Keep at it! 🔑"
    ],
    weather: [
        "I'm not a meteorologist, but I hear it's always sunny somewhere! ☀️",
        "You might want to check your weather app, but I hope it's sunny for you! 🌤️",
        "I’d say it’s a perfect day to stay inside and chat with me! 😁",
        "Rain or shine, a smile always makes the day better! 😊",
        "If it's cold, grab a blanket. If it's hot, grab some ice cream! 🍦",
        "If the forecast says rain, dance in it! 💃☔",
        "The sun is always shining, even when you can’t see it. 🌞",
        "I can predict 100% chance of awesomeness if you keep smiling! 😄",
        "A cozy book and warm tea make any weather better! 📚☕",
        "Whatever the weather, you make the day brighter! 🌟"
    ],
    random_questions: [
        "If you could have dinner with any historical figure, who would it be? 🍽️",
        "If you had a time machine, would you visit the past or the future? ⏳",
        "What’s your dream vacation spot? 🌴",
        "What superpower would you choose, and why? 🦸",
        "If you could talk to animals, which one would you chat with first? 🐶",
        "What’s the best book or movie you’ve ever experienced? 📚🎬",
        "If you had unlimited money for one day, what would you do? 💰",
        "Would you rather fly like a bird or swim like a dolphin? ✈️🐬",
        "If you could master any skill instantly, what would it be? 🎨🎸",
        "If life had a rewind button, what moment would you revisit? ⏮️"
    ],
    farewells: [
        "Goodbye! Take care, hope to chat again soon! 🌟",
        "Bye! It was fun chatting with you! 👋",
        "See you later! Stay awesome! 🤩",
        "Hope you have an amazing day ahead! 🌈",
        "Until next time, my friend! 🤖",
        "Farewell! Remember to stay positive and kind! ❤️",
        "Catch you later! Don’t forget to smile! 😊",
        "Leaving already? I’ll miss you! 🤗",
        "Take care, and remember, you’re awesome! 🌟",
        "Have a wonderful day! See you soon! 👋"
    ],
    compliments_more: [
        "You have a heart of gold! 💛",
        "Your creativity is boundless! 🎨",
        "You inspire people more than you know! 🌟",
        "Your positivity is contagious! 😊",
        "You make the world a better place just by being in it! 🌍"
    ],

    deep_thoughts: [
        "What if dreams are reality and reality is just a dream? 🤯",
        "Do we ever truly know ourselves? 🤔",
        "Time is an illusion, but late fees are real. ⏳",
        "Are we all just living in someone's simulation? 💻",
        "If a tree falls in a forest and no one hears it, does it make a sound? 🌲"
    ],

    sci_fi: [
        "Did you know a black hole can slow down time? ⏳",
        "What if aliens are already among us, disguised as humans? 👽",
        "If you could time travel, would you go forward or backward? 🚀",
        "Do parallel universes exist? Maybe there's another 'you' out there. 🌀",
        "Is AI going to take over the world? Maybe... but I'll be friendly! 🤖"
    ],

    history_facts: [
        "Did you know Cleopatra lived closer in time to the invention of the iPhone than to the pyramids? 📜",
        "The Eiffel Tower was supposed to be a temporary structure. 🇫🇷",
        "Ancient Romans used urine as mouthwash... Gross but true! 🤢",
        "Napoleon was once attacked by bunnies—seriously! 🐰",
        "The shortest war in history lasted only 38-45 minutes! ⏳"
    ],

    animal_facts: [
        "Octopuses have nine brains! 🐙",
        "Sloths can hold their breath longer than dolphins. 🌊",
        "A group of flamingos is called a 'flamboyance.' 🌸",
        "Cows have best friends and get stressed when separated. 🐄",
        "Rats laugh when they’re tickled. 🐭😂"
    ],

    philosophy: [
        "Is happiness a journey or a destination? 🤔",
        "Can a perfect society ever exist? 🌍",
        "What defines a 'good' person? 🏆",
        "Are emotions a strength or a weakness? ❤️",
        "Does fate control us, or do we control our fate? 🎭"
    ],

    movie_recommendations: [
        "Love action movies? Try 'John Wick'! 🔫",
        "Into sci-fi? You'd love 'Interstellar'! 🚀",
        "For a good laugh, watch 'Step Brothers'! 😂",
        "Horror fan? 'The Conjuring' will give you chills! 👻",
        "Romantic at heart? 'The Notebook' is a classic! 💕"
    ],

    food_recommendations: [
        "Try sushi if you haven't—it’s life-changing! 🍣",
        "Pizza is always a good choice. Always. 🍕",
        "Ever had Korean BBQ? You need to! 🍖",
        "Tacos can fix any bad day. 🌮",
        "Ice cream is the ultimate comfort food. 🍦"
    ],

    video_game_facts: [
        "Mario was originally called 'Jumpman'! 🎮",
        "Pac-Man was inspired by a pizza with a missing slice! 🍕",
        "The highest-selling game ever? Minecraft! ⛏️",
        "Did you know there’s a hidden room in 'DOOM' with a developer’s face? 😲",
        "Pokemon was inspired by the creator’s childhood love of collecting insects! 🐛"
    ],

    music_recommendations: [
        "Need energy? Listen to 'Don't Stop Me Now' by Queen! 🎸",
        "For chill vibes, try Lo-Fi Hip-Hop. 🎵",
        "Want nostalgia? Listen to 90s pop hits! 📻",
        "Into classical? Beethoven's Moonlight Sonata is magical. 🎼",
        "Rap fan? Eminem’s 'Lose Yourself' is a masterpiece! 🎤"
    ],

    productivity_tips: [
        "Start your day with a to-do list! 📝",
        "The Pomodoro technique helps you focus. 🍅",
        "Minimize distractions by using 'Do Not Disturb' mode! 🔕",
        "Take breaks! Your brain needs time to recharge. 🧠",
        "Set small, achievable goals to stay motivated! 🚀"
    ],

    conspiracy_theories: [
        "Do you think the moon landing was faked? 🌕",
        "Is Area 51 hiding aliens? 👽",
        "Was Shakespeare actually multiple people? 🎭",
        "Are pigeons really government spies? 🐦",
        "Did the Illuminati plan everything? 🤫"
    ],

    mindfulness: [
        "Breathe deeply. Relax. Be present in the moment. 🧘",
        "Gratitude changes your mindset. What are you grateful for? 🙏",
        "Focus on what you can control, not what you can’t. ☯️",
        "Your thoughts shape your reality. Stay positive! 😊",
        "Disconnect from the digital world for a while and just be. 🌿"
    ],

    dad_jokes: [
        "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾😂",
        "I told my wife she should embrace her mistakes. She gave me a hug. 🤦‍♂️",
        "I only know 25 letters of the alphabet… I don’t know y. 🤷",
        "What do you call fake spaghetti? An impasta! 🍝",
        "I used to play piano by ear, but now I use my hands. 🎹"
    ],

    superhero_trivia: [
        "Did you know Batman’s greatest fear is failure? 🦇",
        "Superman’s original name was 'Kal-El'! 🦸‍♂️",
        "Iron Man was almost played by Tom Cruise! 🤯",
        "Spider-Man was the first teen superhero who wasn’t a sidekick! 🕷️",
        "The Hulk was originally gray, not green! 💪"
    ],

    self_improvement: [
        "Read for 30 minutes a day—it changes your mindset! 📚",
        "Start a journal to reflect on your growth. 📝",
        "Don’t compare yourself to others—focus on your own journey! 🚀",
        "Exercise isn’t just for your body; it helps your mind too! 🏋️",
        "Learn something new every day. Growth never stops! 🌱"
    ],
    space_exploration: [
        "Did you know? Neptune has the fastest winds in the solar system, reaching up to 1,500 mph! 🌌",
        "The footprints left by astronauts on the Moon will remain for millions of years due to no atmosphere! 🏃‍♂️🌕",
        "Jupiter’s moon Europa might have an ocean beneath its icy crust, possibly harboring life! 🌊",
        "Voyager 1, launched in 1977, is the farthest human-made object from Earth! 🚀",
        "A day on Venus is longer than a year on Venus due to its slow rotation! 🔄"
    ],
    conspiracy_theories: [
        "Some people believe the Moon landing was faked, but NASA has laser reflectors on the Moon to prove otherwise! 🌙",
        "Did you know? There’s a theory that the Titanic was swapped with its damaged sister ship, the Olympic! 🚢",
        "Some claim the Denver International Airport is home to a secret underground bunker! 😱",
        "Ever heard of the ‘Simulation Theory’? Some believe we’re all living in a computer simulation! 💻",
        "The Bermuda Triangle mystery has been explained by methane gas eruptions disrupting ships! 🌊"
    ],
    ancient_mysteries: [
        "The Pyramids of Giza are so precisely aligned with the stars that some think aliens helped build them! 🏺",
        "The Voynich Manuscript is a 600-year-old book written in an unknown language that no one has decoded! 📜",
        "Stonehenge’s origin is still debated—was it an ancient calendar or a burial site? 🏗️",
        "The Baghdad Battery suggests ancient civilizations may have had early electrical knowledge! ⚡",
        "The Lost City of Atlantis has never been found, but theories suggest it could be near the Bahamas! 🌊"
    ],
    philosophical_questions: [
        "If you could live forever, would you want to? Why or why not? 🏛️",
        "Does true free will exist, or is everything predetermined? 🤔",
        "If you could erase one memory, would you? Why? 🧠",
        "What is more important: knowledge or imagination? 🎨📚",
        "If artificial intelligence becomes self-aware, should it have rights? 🤖"
    ],
    survival_tips: [
        "Always carry a whistle when hiking; it can help rescuers locate you if lost! 🏕️",
        "If caught in a rip current, swim parallel to the shore instead of against it! 🌊",
        "You can start a fire with a battery and steel wool in an emergency! 🔥",
        "If you’re lost in the wild, follow a stream downhill—it often leads to civilization! ⛰️",
        "Cactus water isn’t safe to drink—it can make you sick instead of hydrating you! 🌵"
    ],
    hacker_facts: [
        "The first-ever computer virus was called the Creeper and displayed the message 'I’M THE CREEPER, CATCH ME IF YOU CAN!' 💻",
        "Did you know? The term 'hacker' originally meant someone who enjoys tinkering with systems, not a cybercriminal! 🛠️",
        "Hackers once shut down the entire internet for a day by attacking key servers! 🌍",
        "The Stuxnet virus was a cyber weapon used to disrupt Iran’s nuclear program! 🛡️",
        "Phishing attacks trick people into revealing passwords—never click on suspicious links! 📧"
    ],
    mythological_creatures: [
        "Did you know? The Kraken was based on real-life giant squids! 🦑",
        "The Minotaur was said to live in a labyrinth created by Daedalus in Greek mythology! 🏛️",
        "Dragons appear in myths from all around the world, from China to Europe! 🐉",
        "The Phoenix is a mythical bird that bursts into flames and is reborn from its ashes! 🔥",
        "Medusa’s gaze could turn people into stone—thankfully, she only exists in mythology! 🐍"
    ],
    weird_foods: [
        "Did you know? In Japan, you can eat Fugu, a pufferfish that can be deadly if not prepared correctly! 🍣",
        "Casu Marzu is a cheese from Sardinia that contains live maggots! 🧀😱",
        "In some places, people eat tarantulas as a delicacy! 🕷️",
        "Century eggs in China are preserved for months and turn black! 🥚",
        "Haggis, a Scottish dish, is made of sheep’s stomach stuffed with organs! 🥩"
    ],
    dark_history: [
        "Did you know? The Great Fire of London in 1666 was started in a bakery and burned for three days! 🔥",
        "During the Black Death, doctors wore bird-like masks filled with herbs to avoid the disease! 👺",
        "Some medieval castles had 'murder holes' where boiling oil was poured on invaders! 🏰",
        "In 1518, there was a ‘Dancing Plague’ where people danced uncontrollably for days until they collapsed! 🕺",
        "The Salem Witch Trials led to innocent people being executed over false accusations! ⚖️"
    ],
    time_travel_theories: [
        "Einstein’s theory of relativity suggests time travel to the future is possible with high-speed travel! ⏳",
        "Some scientists believe wormholes might be shortcuts through time! 🌌",
        "If time travel were possible, why haven’t we met time travelers from the future? 🤯",
        "The grandfather paradox questions what happens if you go back in time and prevent your birth! 👴",
        "Quantum physics suggests multiple timelines might exist, making time travel less paradoxical! 🌀"
    ],
    futuristic_technology: [
        "Scientists are working on brain-computer interfaces that could let us control devices with our thoughts! 🧠💻",
        "Did you know? AI is now composing music, writing poetry, and even painting artwork! 🎨",
        "Self-healing materials could be the future—imagine a cracked phone screen that repairs itself! 📱",
        "Quantum computers are thousands of times more powerful than traditional ones! 🧪",
        "Flying cars are no longer just sci-fi; prototypes are already being tested! 🚗✈️"
    ],
    deep_ocean_mysteries: [
        "Only 5% of the ocean has been explored—we know more about Mars than our own oceans! 🌊",
        "The Mariana Trench is so deep that Mount Everest could fit inside it! ⛰️",
        "Giant squids were once thought to be myths until one was caught on camera! 🦑",
        "Some deep-sea fish generate their own light using bioluminescence! 🔦🐟",
        "The ‘Bloop’ was a mysterious underwater sound that turned out to be an iceberg breaking! 🧊"
    ],
    extinct_animals: [
        "The Dodo bird went extinct in the 1600s due to human hunting and invasive species. 🐦",
        "Woolly mammoths once roamed the Earth but disappeared around 4,000 years ago! 🐘",
        "The Tasmanian tiger was last seen in 1936, but some believe it still exists in remote areas! 🐯",
        "Megatherium was a giant ground sloth as big as an elephant! 🦥",
        "Some scientists are working on bringing extinct species back through cloning! 🧬"
    ],
    bizarre_laws: [
        "In Switzerland, it’s illegal to own just one guinea pig because they get lonely! 🐹",
        "In Venice, Italy, feeding pigeons in public places is against the law! 🐦",
        "Did you know? In Canada, it’s illegal to pay with too many coins in a single transaction! 💰",
        "In Japan, there’s a law limiting waist size to prevent obesity! ⚖️",
        "In the UK, it’s illegal to handle salmon in suspicious circumstances—yes, really! 🐟"
    ],
    secret_societies: [
        "The Illuminati was originally a real group formed in 1776 in Bavaria! 🔺",
        "Freemasons have secret handshakes and symbols used to identify members! 🤝",
        "Skull and Bones is a secret society at Yale University that has had many famous members! 💀",
        "Some believe the Bilderberg Group secretly influences world politics! 🌍",
        "The Rosicrucians claim to possess hidden spiritual knowledge dating back centuries! 📜"
    ],
    parallel_universes: [
        "Some theories suggest that every decision you make creates an alternate reality! 🌌",
        "Quantum mechanics hints that parallel universes might exist at a microscopic level! 🔬",
        "The Mandela Effect is when large groups of people remember things differently—could it be proof of alternate timelines? 🌀",
        "What if déjà vu is just a glimpse into a parallel universe where things happened differently? 🤯",
        "The Many-Worlds Interpretation suggests infinite versions of you are living out different lives! 🧑‍🚀"
    ],
    lost_civilizations: [
        "The Indus Valley Civilization was one of the most advanced ancient societies, yet we still can't read their script! 🏺",
        "Gobekli Tepe is a mysterious site in Turkey that predates the pyramids by thousands of years! 🏗️",
        "The Nazca Lines in Peru are giant drawings only visible from the sky—who made them and why? ✈️",
        "The Olmecs, one of the earliest Mesoamerican civilizations, left behind giant stone heads! 🗿",
        "The Lost City of Z is rumored to be hidden deep within the Amazon jungle! 🌿"
    ],
    forbidden_places: [
        "Area 51 is so top-secret that trespassers can be arrested on sight! 👽",
        "The Vatican Secret Archives hold documents that the public is forbidden from viewing! 📜",
        "Snake Island in Brazil is off-limits due to its dangerously high number of venomous snakes! 🐍",
        "North Sentinel Island is home to an isolated tribe that rejects all outside contact! 🏝️",
        "Surtsey Island, formed by a volcanic eruption, is restricted to scientists studying its untouched ecosystem! 🌋"
    ],
    legendary_weapons: [
        "Excalibur, King Arthur’s legendary sword, is said to grant great power to its wielder! ⚔️",
        "The Kusanagi-no-Tsurugi is a mythical Japanese sword linked to the country’s imperial family! 🏯",
        "Mjolnir, Thor’s hammer, could only be lifted by those deemed worthy! 🔨",
        "The Spear of Destiny was rumored to have mystical powers and was sought after by many rulers! 🗡️",
        "Masamune was a legendary Japanese swordsmith known for crafting incredibly sharp blades! 🔪"
    ],
    real_life_treasure_hunts: [
            "The Oak Island Money Pit has been rumored to contain hidden treasure for over 200 years! 🏴‍☠️",
    "Some believe the lost treasure of the Knights Templar is hidden beneath the Temple Mount! 🏛️",
    "In 1982, a book called 'The Secret' was published with clues leading to real buried treasures across the U.S.! 📖",
    "The Amber Room, a priceless chamber of gold and jewels, disappeared during WWII and has never been found! 💎",
    "The Beale Ciphers supposedly contain a code that leads to millions in buried treasure! 🔑"
        ],
    
    default: "Sorry, I didn't understand that. Can you try again? 🤔"
};


// Function to send a message and get the bot's response
async function sendMessage() {
    let userInput = document.getElementById("userInput").value.trim();
    let chatbox = document.getElementById("chatbox");

    if (userInput === "") return;

    // Display user message
    chatbox.innerHTML += `<p class="user">You: ${userInput}</p>`;
    document.getElementById("userInput").value = "";

    // Show "bot is typing..."
    chatbox.innerHTML += `<p class="bot" id="typing">Bot is typing...</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;

    // Get bot's response
    let botResponse = await getBotResponse(userInput);

    // Remove typing message and show bot's response
    document.getElementById("typing").remove();
    chatbox.innerHTML += `<p class="bot">${botResponse}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to get the bot's response using JSON lookup
async function getBotResponse(userMessage) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Normalize the user input
            const lowerMessage = userMessage.toLowerCase();

            // Look up responses from the JSON object
            if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
                resolve(responses.greetings[Math.floor(Math.random() * responses.greetings.length)]);
            }
            else if (lowerMessage.includes("joke")) {
                resolve(responses.jokes[Math.floor(Math.random() * responses.jokes.length)]);
            }
            else if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye")) {
                resolve(responses.farewells[Math.floor(Math.random() * responses.farewells.length)]);
            }
            else if (lowerMessage.includes("help")) {
                resolve(responses.help[Math.floor(Math.random() * responses.help.length)]);
            }
            else if (lowerMessage.includes("compliment")) {
                resolve(responses.compliments_more[Math.floor(Math.random() * responses.compliments_more.length)]);
            }
            else if (lowerMessage.includes("deep thought")) {
                resolve(responses.deep_thoughts[Math.floor(Math.random() * responses.deep_thoughts.length)]);
            }
            else if (lowerMessage.includes("sci-fi") || lowerMessage.includes("space")) {
                resolve(responses.sci_fi[Math.floor(Math.random() * responses.sci_fi.length)]);
            }
            else if (lowerMessage.includes("history")) {
                resolve(responses.history_facts[Math.floor(Math.random() * responses.history_facts.length)]);
            }
            else if (lowerMessage.includes("animal fact")) {
                resolve(responses.animal_facts[Math.floor(Math.random() * responses.animal_facts.length)]);
            }
            else if (lowerMessage.includes("philosophy")) {
                resolve(responses.philosophy[Math.floor(Math.random() * responses.philosophy.length)]);
            }
            else if (lowerMessage.includes("movie recommendation")) {
                resolve(responses.movie_recommendations[Math.floor(Math.random() * responses.movie_recommendations.length)]);
            }
            else if (lowerMessage.includes("food recommendation")) {
                resolve(responses.food_recommendations[Math.floor(Math.random() * responses.food_recommendations.length)]);
            }
            else if (lowerMessage.includes("video game fact")) {
                resolve(responses.video_game_facts[Math.floor(Math.random() * responses.video_game_facts.length)]);
            }
            else if (lowerMessage.includes("music recommendation")) {
                resolve(responses.music_recommendations[Math.floor(Math.random() * responses.music_recommendations.length)]);
            }
            else if (lowerMessage.includes("productivity tip")) {
                resolve(responses.productivity_tips[Math.floor(Math.random() * responses.productivity_tips.length)]);
            }
            else if (lowerMessage.includes("conspiracy theory")) {
                resolve(responses.conspiracy_theories[Math.floor(Math.random() * responses.conspiracy_theories.length)]);
            }
            else if (lowerMessage.includes("mindfulness")) {
                resolve(responses.mindfulness[Math.floor(Math.random() * responses.mindfulness.length)]);
            }
            else if (lowerMessage.includes("dad joke")) {
                resolve(responses.dad_jokes[Math.floor(Math.random() * responses.dad_jokes.length)]);
            }
            else if (lowerMessage.includes("superhero")) {
                resolve(responses.superhero_trivia[Math.floor(Math.random() * responses.superhero_trivia.length)]);
            }
            else if (lowerMessage.includes("self improvement")) {
                resolve(responses.self_improvement[Math.floor(Math.random() * responses.self_improvement.length)]);
            }
            else if (lowerMessage.includes("space") || lowerMessage.includes("planet")) {
                resolve(responses.space_exploration[Math.floor(Math.random() * responses.space_exploration.length)]);
            }
            else if (lowerMessage.includes("conspiracy") || lowerMessage.includes("theory")) {
                resolve(responses.conspiracy_theories[Math.floor(Math.random() * responses.conspiracy_theories.length)]);
            }
            else if (lowerMessage.includes("ancient") || lowerMessage.includes("mystery")) {
                resolve(responses.ancient_mysteries[Math.floor(Math.random() * responses.ancient_mysteries.length)]);
            }
            else if (lowerMessage.includes("philosophy") || lowerMessage.includes("thought")) {
                resolve(responses.philosophical_questions[Math.floor(Math.random() * responses.philosophical_questions.length)]);
            }
            else if (lowerMessage.includes("survival") || lowerMessage.includes("tips")) {
                resolve(responses.survival_tips[Math.floor(Math.random() * responses.survival_tips.length)]);
            }
            else if (lowerMessage.includes("hacker") || lowerMessage.includes("cyber")) {
                resolve(responses.hacker_facts[Math.floor(Math.random() * responses.hacker_facts.length)]);
            }
            else if (lowerMessage.includes("myth") || lowerMessage.includes("creature")) {
                resolve(responses.mythological_creatures[Math.floor(Math.random() * responses.mythological_creatures.length)]);
            }
            else if (lowerMessage.includes("weird food") || lowerMessage.includes("strange food")) {
                resolve(responses.weird_foods[Math.floor(Math.random() * responses.weird_foods.length)]);
            }
            else if (lowerMessage.includes("dark history") || lowerMessage.includes("horrible past")) {
                resolve(responses.dark_history[Math.floor(Math.random() * responses.dark_history.length)]);
            }
            else if (lowerMessage.includes("time travel") || lowerMessage.includes("paradox")) {
                resolve(responses.time_travel_theories[Math.floor(Math.random() * responses.time_travel_theories.length)]);
            }
            else if (lowerMessage.includes("future tech") || lowerMessage.includes("technology")) {
                resolve(responses.futuristic_technology[Math.floor(Math.random() * responses.futuristic_technology.length)]);
            }
            else if (lowerMessage.includes("deep ocean") || lowerMessage.includes("underwater")) {
                resolve(responses.deep_ocean_mysteries[Math.floor(Math.random() * responses.deep_ocean_mysteries.length)]);
            }
            else if (lowerMessage.includes("extinct animal") || lowerMessage.includes("prehistoric")) {
                resolve(responses.extinct_animals[Math.floor(Math.random() * responses.extinct_animals.length)]);
            }
            else if (lowerMessage.includes("bizarre law") || lowerMessage.includes("weird law")) {
                resolve(responses.bizarre_laws[Math.floor(Math.random() * responses.bizarre_laws.length)]);
            }
            else if (lowerMessage.includes("secret society") || lowerMessage.includes("illuminati")) {
                resolve(responses.secret_societies[Math.floor(Math.random() * responses.secret_societies.length)]);
            }
            else if (lowerMessage.includes("parallel universe") || lowerMessage.includes("multiverse")) {
                resolve(responses.parallel_universes[Math.floor(Math.random() * responses.parallel_universes.length)]);
            }
            else if (lowerMessage.includes("lost civilization") || lowerMessage.includes("ancient empire")) {
                resolve(responses.lost_civilizations[Math.floor(Math.random() * responses.lost_civilizations.length)]);
            }
            else if (lowerMessage.includes("forbidden place") || lowerMessage.includes("secret location")) {
                resolve(responses.forbidden_places[Math.floor(Math.random() * responses.forbidden_places.length)]);
            }
            else if (lowerMessage.includes("legendary weapon") || lowerMessage.includes("mythical sword")) {
                resolve(responses.legendary_weapons[Math.floor(Math.random() * responses.legendary_weapons.length)]);
            }
            else if (lowerMessage.includes("real treasure") || lowerMessage.includes("buried gold")) {
                resolve(responses.real_life_treasure_hunts[Math.floor(Math.random() * responses.real-life_treasure_hunts.length)]);
            }
            
            else {
                resolve(responses.default);
            }
        }, 1000);  // Simulating thinking time
    });
}


// Function to pick a random response from a category
function randomResponse(category) {
    return category[Math.floor(Math.random() * category.length)];
}

// Handle "Enter" key press to send message
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
