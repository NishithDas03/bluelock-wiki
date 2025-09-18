// Blue Lock Wiki JavaScript

// Character Data
const characters = [
    {
        id: 1,
        name: "Yoichi Isagi",
        position: "Forward",
        team: "Team Z",
        description: "The protagonist who joins Blue Lock to become the best striker in Japan.",
        avatar: "🥅",
        image: "https://static.wikia.nocookie.net/blue-lock/images/8/8c/Yoichi_Isagi.png",
        rank: 299,
        stats: {
            shooting: 85,
            speed: 75,
            technique: 80,
            vision: 90,
            physical: 78,
            mental: 88
        },
        biography: "Yoichi Isagi is a second-year high school student who dreams of becoming the best striker in Japan. After his team loses in the preliminaries, he joins the Blue Lock project to develop his skills and compete against 299 other strikers.",
        abilities: ["Spatial Awareness", "Direct Shot", "Adaptability", "Meta Vision"]
    },
    {
        id: 2,
        name: "Meguru Bachira",
        position: "Forward",
        team: "Team Z",
        description: "An eccentric player who follows his instincts and the 'monster' inside him.",
        avatar: "⚡",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFD700'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E⚡%3C/text%3E%3C/svg%3E",
        rank: 298,
        stats: {
            shooting: 75,
            speed: 85,
            technique: 95,
            vision: 80,
            physical: 72,
            mental: 90
        },
        biography: "Bachira is known for his unpredictable playing style and exceptional dribbling skills. He believes in following the 'monster' inside him, which guides his instinctual plays on the field.",
        abilities: ["Monster Dribbling", "Instinctual Play", "Creativity", "Flow State"]
    },
    {
        id: 3,
        name: "Hyoma Chigiri",
        position: "Winger",
        team: "Team Z",
        description: "A speedster with a complex about his past injury.",
        avatar: "💨",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FF69B4'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E💨%3C/text%3E%3C/svg%3E",
        rank: 297,
        stats: {
            shooting: 70,
            speed: 98,
            technique: 80,
            vision: 75,
            physical: 85,
            mental: 70
        },
        biography: "Chigiri was once considered a prodigy due to his incredible speed, but a leg injury made him cautious about pushing his limits. Through Blue Lock, he learns to overcome his fears.",
        abilities: ["44 Panther", "Speed Burst", "Cut-in Shot", "Red Panther"]
    },
    {
        id: 4,
        name: "Rensuke Kunigami",
        position: "Forward",
        team: "Team Z",
        description: "A powerful striker with a strong sense of justice and incredible shooting power.",
        avatar: "🔥",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FF4500'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E🔥%3C/text%3E%3C/svg%3E",
        rank: 296,
        stats: {
            shooting: 95,
            speed: 70,
            technique: 75,
            vision: 80,
            physical: 90,
            mental: 85
        },
        biography: "Kunigami is known for his powerful left-footed shots and his dream of becoming a football superhero. He has a strong moral compass and believes in fair play.",
        abilities: ["Powerful Shot", "Left Foot Cannon", "Knuckle Shot", "Wild Card"]
    },
    {
        id: 5,
        name: "Gin Gagamaru",
        position: "Goalkeeper",
        team: "Team Z",
        description: "An unconventional goalkeeper with animal-like reflexes.",
        avatar: "🦎",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%2332CD32'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E🦎%3C/text%3E%3C/svg%3E",
        rank: 295,
        stats: {
            shooting: 40,
            speed: 80,
            technique: 85,
            vision: 75,
            physical: 82,
            mental: 78
        },
        biography: "Gagamaru grew up in the mountains and has developed incredible reflexes and flexibility. His unconventional goalkeeping style often surprises opponents.",
        abilities: ["Animal Reflexes", "Flexibility", "Unpredictable Saves", "Wild Instincts"]
    },
    {
        id: 6,
        name: "Seishiro Nagi",
        position: "Forward",
        team: "Team V",
        description: "A lazy genius with incredible ball control and creativity.",
        avatar: "😴",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23E6E6FA'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E😴%3C/text%3E%3C/svg%3E",
        rank: 5,
        stats: {
            shooting: 95,
            speed: 60,
            technique: 99,
            vision: 85,
            physical: 70,
            mental: 92
        },
        biography: "Nagi is naturally gifted but initially lacked motivation. His exceptional ball control and ability to score from impossible angles make him a formidable opponent.",
        abilities: ["Trapping", "Acrobatic Shots", "Zero-Range Shooting", "Five Shot Revolver"]
    },
    {
        id: 7,
        name: "Reo Mikage",
        position: "Midfielder",
        team: "Team V",
        description: "A wealthy heir with the ability to copy others' techniques.",
        avatar: "💎",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23800080'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E💎%3C/text%3E%3C/svg%3E",
        rank: 10,
        stats: {
            shooting: 80,
            speed: 75,
            technique: 85,
            vision: 95,
            physical: 75,
            mental: 88
        },
        biography: "Mikage is the heir to a business empire who can quickly learn and adapt other players' techniques. He partners with Nagi and has excellent leadership skills.",
        abilities: ["Copy Technique", "Chameleon", "Leadership", "Adaptability"]
    },
    {
        id: 8,
        name: "Rin Itoshi",
        position: "Forward",
        team: "Team P.X.G",
        description: "A prodigy striker and younger brother of Sae Itoshi.",
        avatar: "❄️",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%2300CED1'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E❄️%3C/text%3E%3C/svg%3E",
        rank: 1,
        stats: {
            shooting: 98,
            speed: 90,
            technique: 95,
            vision: 97,
            physical: 88,
            mental: 95
        },
        biography: "Rin is considered one of the most talented players in Blue Lock. He has a complicated relationship with his older brother Sae and is driven by an intense desire to surpass him.",
        abilities: ["Destroyer Mode", "Flow State", "Precise Shooting", "Blue Prison"]
    },
    // Additional Characters
    {
        id: 9,
        name: "Shidou Ryusei",
        position: "Forward",
        team: "Team P.X.G",
        description: "An explosive and unpredictable striker with violent tendencies.",
        avatar: "💥",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23DC143C'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E💥%3C/text%3E%3C/svg%3E",
        rank: 2,
        stats: {
            shooting: 96,
            speed: 85,
            technique: 88,
            vision: 80,
            physical: 92,
            mental: 75
        },
        biography: "Shidou is known for his explosive playing style and unpredictable movements. His violent approach to football often catches opponents off guard.",
        abilities: ["Explosive Shot", "Unpredictable Movement", "Violence", "Biological Weapon"]
    },
    {
        id: 10,
        name: "Jingo Raichi",
        position: "Forward",
        team: "Team Z",
        description: "A hot-headed striker with incredible determination and aggression.",
        avatar: "😡",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FF0000'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E😡%3C/text%3E%3C/svg%3E",
        rank: 290,
        stats: {
            shooting: 78,
            speed: 82,
            technique: 65,
            vision: 60,
            physical: 95,
            mental: 88
        },
        biography: "Raichi is known for his aggressive playing style and never-give-up attitude. His determination often makes up for his lack of technical skills.",
        abilities: ["Aggressive Play", "Determination", "Physical Strength", "Hot Blood"]
    },
    {
        id: 11,
        name: "Zantetsu Tsurugi",
        position: "Forward",
        team: "Team V",
        description: "The fastest player in Blue Lock with incredible acceleration.",
        avatar: "🏃",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFA500'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E🏃%3C/text%3E%3C/svg%3E",
        rank: 15,
        stats: {
            shooting: 70,
            speed: 99,
            technique: 70,
            vision: 65,
            physical: 88,
            mental: 68
        },
        biography: "Zantetsu is the fastest runner in Blue Lock, known for his incredible acceleration and straight-line speed.",
        abilities: ["Maximum Speed", "Acceleration", "Sprint", "Speed Demon"]
    },
    {
        id: 12,
        name: "Shoei Barou",
        position: "Forward",
        team: "Team X",
        description: "The self-proclaimed 'King' with dominant playing style and powerful presence.",
        avatar: "👑",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFD700'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E👑%3C/text%3E%3C/svg%3E",
        rank: 6,
        stats: {
            shooting: 93,
            speed: 78,
            technique: 88,
            vision: 85,
            physical: 90,
            mental: 92
        },
        biography: "Barou considers himself the king of the field and demands everything revolve around him. His dominant presence and powerful shots make him a formidable striker.",
        abilities: ["King's Presence", "Powerful Shot", "Dominance", "Royal Decree"]
    },
    {
        id: 13,
        name: "Ikki Niko",
        position: "Forward",
        team: "Team Y",
        description: "A calm and analytical player who reads the game exceptionally well.",
        avatar: "🤓",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23708090'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E🤓%3C/text%3E%3C/svg%3E",
        rank: 20,
        stats: {
            shooting: 82,
            speed: 75,
            technique: 85,
            vision: 92,
            physical: 70,
            mental: 95
        },
        biography: "Niko is known for his analytical mind and ability to read the game. He approaches football with a calm and calculated mindset.",
        abilities: ["Game Analysis", "Prediction", "Calm Mind", "Strategic Thinking"]
    },
    {
        id: 14,
        name: "Asahi Naruhaya",
        position: "Forward",
        team: "Team Z",
        description: "A versatile player who adapts quickly to different situations.",
        avatar: "🔄",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%2387CEEB'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E🔄%3C/text%3E%3C/svg%3E",
        rank: 285,
        stats: {
            shooting: 70,
            speed: 78,
            technique: 80,
            vision: 82,
            physical: 75,
            mental: 80
        },
        biography: "Naruhaya is known for his adaptability and willingness to take on different roles for the team's success.",
        abilities: ["Adaptability", "Versatility", "Team Play", "Flexibility"]
    },
            {
            id: 15,
            name: "Okuhito Iemon",
            position: "Forward",
            team: "Team Z",
            description: "A technical player who focuses on precise movements and positioning.",
            avatar: "⚙️",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23696969'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E⚙️%3C/text%3E%3C/svg%3E",
            rank: 280,
            stats: {
                shooting: 72,
                speed: 70,
                technique: 85,
                vision: 80,
                physical: 68,
                mental: 82
            },
            biography: "Iemon is a technically skilled player who excels in precise movements and smart positioning on the field.",
            abilities: ["Technical Skills", "Positioning", "Precision", "Smart Play"]
        },
        {
            id: 16,
            name: "Jinpachi Ego",
            position: "Manager/Coach",
            team: "Blue Lock Staff",
            description: "The enigmatic mastermind behind the Blue Lock project and its revolutionary training program.",
            avatar: "🧠",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23000000'/%3E%3Ctext x='50' y='60' text-anchor='middle' font-size='30'%3E🧠%3C/text%3E%3C/svg%3E",
            rank: 1,
            stats: {
                intelligence: 99,
                strategy: 98,
                psychology: 97,
                leadership: 95,
                innovation: 99,
                manipulation: 90
            },
            biography: "Jinpachi Ego is the brilliant and eccentric architect of the Blue Lock project. A former striker turned coach, he believes that Japan's football lacks the 'ego' necessary to produce world-class strikers. His revolutionary approach involves creating the ultimate selfish striker through intense psychological and physical training. Ego's methods are controversial but undeniably effective, as he pushes players beyond their limits to awaken their true potential.",
            abilities: ["Strategic Genius", "Psychological Manipulation", "Player Development", "Tactical Innovation", "Ego Awakening", "Revolutionary Training"]
        }
];

// Episode Data
const season1Episodes = [
    {
        id: 1,
        number: "Episode 1",
        title: "Dream",
        description: "Yoichi Isagi's high school soccer team loses in the preliminaries after he passes to a teammate instead of taking the winning shot himself. This failure leads him to question his abilities as a striker and sets him on the path to Blue Lock.",
        detailedSummary: "The episode introduces Isagi as a selfless player who prioritizes team play over individual glory. When Japan's poor World Cup performance leads to the creation of Blue Lock, Isagi receives an invitation to join this revolutionary training program designed to create Japan's ultimate striker.",
        thumbnail: "🏟️",
        duration: "24 min",
        airDate: "October 9, 2022"
    },
    {
        id: 2,
        number: "Episode 2",
        title: "Monster",
        description: "Isagi enters the Blue Lock facility and meets his eccentric roommate Bachira, who talks about following the 'monster' inside him. The 300 players are introduced to the brutal selection process.",
        detailedSummary: "Isagi discovers the harsh reality of Blue Lock where only one player can become Japan's striker. He meets Bachira, whose unpredictable playing style is guided by what he calls his 'monster.' The episode establishes the competitive atmosphere and elimination-based system.",
        thumbnail: "🏢",
        duration: "24 min",
        airDate: "October 16, 2022"
    },
    {
        id: 3,
        number: "Episode 3",
        title: "Soccer's 'Zero'",
        description: "The first selection begins with a brutal game of tag where the last person with the ball gets eliminated. Isagi must overcome his selfless nature to survive.",
        detailedSummary: "In a game designed to eliminate the weakest link, players must keep the ball away from others while trying to pass it to someone else before time runs out. Isagi struggles with his instinct to help others but learns he must be selfish to survive in Blue Lock.",
        thumbnail: "⚽",
        duration: "24 min",
        airDate: "October 23, 2022"
    },
    {
        id: 4,
        number: "Episode 4",
        title: "Premonition and Intuition",
        description: "Team Z is formed with the lowest-ranked players. Despite being underdogs, they must win matches to avoid elimination. Isagi begins to understand the concept of 'soccer's zero.'",
        detailedSummary: "The remaining players are divided into teams, with Team Z consisting of the lowest-ranked members. Ego explains the concept of 'soccer's zero' - the crucial moment that determines victory or defeat. Team Z must overcome their individual weaknesses to survive as a team.",
        thumbnail: "⚡",
        duration: "24 min",
        airDate: "October 30, 2022"
    },
    {
        id: 5,
        number: "Episode 5",
        title: "To Be Reborn",
        description: "Team Z faces Team X in their first official match. Isagi discovers his 'weapon' and begins his transformation into a true striker.",
        detailedSummary: "In their first team match, Team Z struggles against the more skilled Team X led by Barou. Isagi experiences a breakthrough moment where he discovers his spatial awareness ability, marking the beginning of his evolution as a striker. The team learns to work together despite their differences.",
        thumbnail: "🔄",
        duration: "24 min",
        airDate: "November 6, 2022"
    },
    {
        id: 6,
        number: "Episode 6",
        title: "I'm Sorry",
        description: "The aftermath of Team Z's first match reveals the harsh reality of elimination. Bonds are tested as players realize the true cost of failure in Blue Lock.",
        detailedSummary: "Following their match, Team Z faces the consequences of the elimination system. Players must confront the reality that friendship and teamwork can only go so far in a system designed to create one ultimate striker. The episode explores the psychological pressure of the competition.",
        thumbnail: "😔",
        duration: "24 min",
        airDate: "November 13, 2022"
    },
    {
        id: 7,
        number: "Episode 7",
        title: "Rush",
        description: "Team Z prepares for their crucial second match against Team Y. Each player must find their unique weapon to contribute to the team's survival.",
        detailedSummary: "With elimination looming, Team Z intensifies their training. Each member works to discover and develop their individual weapon. The pressure mounts as they prepare to face Team Y, knowing that another loss could mean the end of their Blue Lock journey.",
        thumbnail: "💨",
        duration: "24 min",
        airDate: "November 20, 2022"
    },
    {
        id: 8,
        number: "Episode 8",
        title: "The Formula for Goals",
        description: "Team Z faces Team Y in a high-stakes match. Isagi's spatial awareness evolves as he learns to predict and create goal-scoring opportunities.",
        detailedSummary: "In their match against Team Y, Isagi's understanding of the 'formula for goals' deepens. He begins to see the field differently, predicting player movements and ball trajectories. The match showcases how each player's unique weapon contributes to the team's overall strategy.",
        thumbnail: "📐",
        duration: "24 min",
        airDate: "November 27, 2022"
    },
    {
        id: 9,
        number: "Episode 9",
        title: "Awakening",
        description: "Team Z continues their battle for survival. Players must awaken their true potential or face elimination from Blue Lock.",
        detailedSummary: "The pressure intensifies as Team Z faces stronger opposition. Isagi experiences moments of awakening where his spatial awareness reaches new heights. Meanwhile, other team members struggle to find their own weapons before it's too late.",
        thumbnail: "🌟",
        duration: "24 min",
        airDate: "December 4, 2022"
    },
    {
        id: 10,
        number: "Episode 10",
        title: "Just the Way It Is",
        description: "Reality hits as players face the harsh truth about their abilities. Some must accept their limitations while others push beyond them.",
        detailedSummary: "A sobering episode where not everyone can become the striker they dreamed of being. The selection process becomes more brutal, and friendships are tested as players realize the true nature of Blue Lock's philosophy.",
        thumbnail: "😔",
        duration: "24 min",
        airDate: "December 11, 2022"
    },
    {
        id: 11,
        number: "Episode 11",
        title: "The Final Piece",
        description: "Team Z prepares for their ultimate test. Each player must contribute their unique weapon to achieve victory.",
        detailedSummary: "In a crucial match, Team Z demonstrates the power of combining individual weapons into a cohesive team strategy. Isagi's spatial awareness becomes the final piece that connects everyone's abilities together.",
        thumbnail: "🧩",
        duration: "24 min",
        airDate: "December 18, 2022"
    },
    {
        id: 12,
        number: "Episode 12",
        title: "The Second Selection",
        description: "The first selection concludes, and survivors advance to an even more challenging phase of Blue Lock training.",
        detailedSummary: "After surviving the team battles, remaining players face the second selection. New challenges await that will test their individual skills without the safety net of team play. The competition becomes more intense and personal.",
        thumbnail: "🔥",
        duration: "24 min",
        airDate: "December 25, 2022"
    }
];

const season2Episodes = [
    {
        id: 13,
        number: "Episode 13",
        title: "Top 3",
        description: "Players face individual ranking battles to determine the top performers. The hierarchy of Blue Lock begins to establish itself.",
        detailedSummary: "In grueling one-on-one competitions, players battle to secure their ranking within Blue Lock. Skill gaps become apparent as elite players separate themselves from the rest. Isagi faces opponents far beyond his current level.",
        thumbnail: "🏆",
        duration: "24 min",
        airDate: "January 8, 2023"
    },
    {
        id: 14,
        number: "Episode 14",
        title: "The Geniuses and the Average Joes",
        description: "The difference between genius and hard work becomes apparent as players face reality about their natural talents.",
        detailedSummary: "Players confront the harsh reality that talent and hard work aren't always enough. Some possess natural genius while others must find different paths to success. Isagi struggles to find his place among the truly gifted.",
        thumbnail: "⚡",
        duration: "24 min",
        airDate: "January 15, 2023"
    },
    {
        id: 15,
        number: "Episode 15",
        title: "Devour",
        description: "Players learn that to grow stronger, they must devour the skills and weapons of their defeated opponents.",
        detailedSummary: "The philosophy of 'devouring' is introduced - winners can steal and adapt the weapons of those they defeat. This creates a system where victory means literal growth and evolution of abilities.",
        thumbnail: "🍽️",
        duration: "24 min",
        airDate: "January 22, 2023"
    },
    {
        id: 16,
        number: "Episode 16",
        title: "Tri-Polar Battle",
        description: "A three-way battle format pushes players to their limits, requiring strategy beyond simple one-on-one combat.",
        detailedSummary: "Players engage in complex three-person battles where alliances and betrayals determine outcomes. The format tests not just individual skill but tactical thinking and psychological warfare.",
        thumbnail: "⚔️",
        duration: "24 min",
        airDate: "January 29, 2023"
    },
    {
        id: 17,
        number: "Episode 17",
        title: "Donkey",
        description: "The weakest players face elimination in a cruel game that exposes their limitations and fears.",
        detailedSummary: "In the 'Donkey' game, the lowest-ranked players face immediate elimination unless they can overcome their weaknesses. The episode explores themes of inadequacy and the fear of being left behind.",
        thumbnail: "🫏",
        duration: "24 min",
        airDate: "February 5, 2023"
    },
    {
        id: 18,
        number: "Episode 18",
        title: "The Stage for the Lead",
        description: "Top players get the chance to showcase their abilities on the main stage, while others watch from the sidelines.",
        detailedSummary: "Elite players demonstrate why they're considered the best, while lower-ranked participants observe and learn. The gap between talent levels becomes increasingly apparent as the stage gets bigger.",
        thumbnail: "🎭",
        duration: "24 min",
        airDate: "February 12, 2023"
    },
    {
        id: 19,
        number: "Episode 19",
        title: "Dancing Boy",
        description: "A flashback episode revealing Bachira's past and how he developed his unique 'monster' playing style.",
        detailedSummary: "The episode delves into Bachira's childhood, showing how his isolation led to the creation of his inner 'monster.' His journey from loneliness to finding others who understand his unique way of playing soccer.",
        thumbnail: "💃",
        duration: "24 min",
        airDate: "February 19, 2023"
    },
    {
        id: 20,
        number: "Episode 20",
        title: "Super Link-Up Play",
        description: "Players discover the power of chemistry and connection when individual weapons combine perfectly.",
        detailedSummary: "The episode showcases how individual players can create devastating combinations when their weapons complement each other. Link-up play becomes crucial for competing against higher-ranked opponents.",
        thumbnail: "🔗",
        duration: "24 min",
        airDate: "February 26, 2023"
    },
    {
        id: 21,
        number: "Episode 21",
        title: "I'm Not There",
        description: "Isagi faces a crisis of confidence when he realizes he's not at the level he thought he was.",
        detailedSummary: "A humbling episode where Isagi confronts his limitations and the gap between himself and truly elite players. He must decide whether to give up or find a way to evolve beyond his current abilities.",
        thumbnail: "😰",
        duration: "24 min",
        airDate: "March 5, 2023"
    },
    {
        id: 22,
        number: "Episode 22",
        title: "Voice",
        description: "Players must find their voice and assert themselves in high-pressure situations to prove their worth.",
        detailedSummary: "The episode focuses on communication and leadership under pressure. Players learn that having a voice and the confidence to use it is just as important as physical skills in becoming a top striker.",
        thumbnail: "📢",
        duration: "24 min",
        airDate: "March 12, 2023"
    },
    {
        id: 23,
        number: "Episode 23",
        title: "Luck",
        description: "The role of luck versus skill is explored as players face situations beyond their control.",
        detailedSummary: "An examination of how chance events can change everything in soccer. Players must learn to create their own luck while adapting to unexpected circumstances that could make or break their Blue Lock journey.",
        thumbnail: "🍀",
        duration: "24 min",
        airDate: "March 19, 2023"
    },
    {
        id: 24,
        number: "Episode 24",
        title: "The Time Has Come",
        description: "Season 1 finale where players face their ultimate test and the next phase of Blue Lock is revealed.",
        detailedSummary: "The climactic episode of Season 1 where all preparation leads to a crucial moment. Players who have survived the selections face new challenges, and the true scope of Blue Lock's plan begins to unfold.",
        thumbnail: "⏰",
        duration: "24 min",
        airDate: "March 26, 2023"
    }
];

const season3Episodes = [
    {
        id: 25,
        number: "Episode 1",
        title: "Neo Egoist League Begins",
        description: "The elite Blue Lock players enter the ultimate phase - training with world-class teams.",
        detailedSummary: "Season 3 introduces the Neo Egoist League where surviving Blue Lock players join professional teams around the world. They must adapt to international playing styles while maintaining their unique weapons. The competition reaches a global scale.",
        thumbnail: "🌍",
        duration: "TBA",
        airDate: "Coming Soon"
    },
    {
        id: 26,
        number: "Episode 2", 
        title: "Master Strikers",
        description: "Elite players meet legendary strikers who will serve as mentors and rivals.",
        detailedSummary: "The world's top strikers are introduced as mentors in the Neo Egoist League. Each brings unique philosophies and techniques that challenge the Blue Lock graduates to evolve beyond their current understanding.",
        thumbnail: "👑",
        duration: "TBA",
        airDate: "Coming Soon"
    },
    {
        id: 27,
        number: "Episode 3",
        title: "Global Competition",
        description: "Players face international rivals with completely different football philosophies.",
        detailedSummary: "The competition expands globally as players encounter diverse playing styles from around the world. Cultural differences in football approach create new challenges and opportunities for growth.",
        thumbnail: "🌎",
        duration: "TBA",
        airDate: "Coming Soon"
    },
    {
        id: 28,
        number: "Episode 4",
        title: "Team Dynamics",
        description: "Balancing individual ego with professional team strategies proves challenging.",
        detailedSummary: "Players must adapt their Blue Lock mindset to work within established professional team structures while maintaining their unique weapons and competitive edge.",
        thumbnail: "⚖️",
        duration: "TBA",
        airDate: "Coming Soon"
    }
];

// U20 Arc Data
const u20Players = {
    blueLock: [
        {
            id: 101,
            name: "Yoichi Isagi",
            position: "CF",
            jersey: 11,
            avatar: "🥅",
            team: "Blue Lock",
            stats: {
                goals: 1,
                assists: 1,
                shots: 6,
                passes: 45,
                tackles: 3,
                rating: 91
            },
            performance: "excellent",
            description: "Captain and main striker, scored the decisive winning goal and provided crucial assist.",
            keyMoments: ["Scored winning goal (84')", "Assisted Barou's goal", "Led team to victory"]
        },
        {
            id: 102,
            name: "Rin Itoshi",
            position: "CF",
            jersey: 10,
            avatar: "❄️",
            team: "Blue Lock",
            stats: {
                goals: 1,
                assists: 1,
                shots: 8,
                passes: 38,
                tackles: 1,
                rating: 90
            },
            performance: "excellent",
            description: "Elite striker who scored crucial goal and assisted the winning goal.",
            keyMoments: ["Powerful goal (42')", "Assisted Isagi's winner", "Clinical finishing"]
        },
        {
            id: 103,
            name: "Meguru Bachira",
            position: "LW",
            jersey: 8,
            avatar: "⚡",
            team: "Blue Lock",
            stats: {
                goals: 0,
                assists: 1,
                shots: 4,
                passes: 52,
                tackles: 2,
                rating: 82
            },
            performance: "good",
            description: "Creative winger who followed his monster to create chances but couldn't score.",
            keyMoments: ["Key assist", "Creative dribbling", "Monster-guided plays"]
        },
        {
            id: 104,
            name: "Hyoma Chigiri",
            position: "RW",
            jersey: 7,
            avatar: "💨",
            team: "Blue Lock",
            stats: {
                goals: 0,
                assists: 0,
                shots: 3,
                passes: 35,
                tackles: 4,
                rating: 79
            },
            performance: "good",
            description: "Speed demon on the right wing, provided pace and width but no direct goal contributions.",
            keyMoments: ["Lightning fast runs", "Defensive contributions", "Speed on the wing"]
        },
        {
            id: 105,
            name: "Gin Gagamaru",
            position: "GK",
            jersey: 1,
            avatar: "🦎",
            team: "Blue Lock",
            stats: {
                goals: 0,
                assists: 0,
                saves: 8,
                passes: 35,
                tackles: 0,
                rating: 84
            },
            performance: "excellent",
            description: "Blue Lock's unconventional goalkeeper with animal-like reflexes who made crucial saves.",
            keyMoments: ["Multiple crucial saves", "Excellent distribution", "Commanded his area"]
        },
        {
            id: 106,
            name: "Seishiro Nagi",
            position: "CAM",
            jersey: 6,
            avatar: "😴",
            team: "Blue Lock",
            stats: {
                goals: 1,
                assists: 0,
                shots: 3,
                passes: 68,
                tackles: 0,
                rating: 88
            },
            performance: "excellent",
            description: "Genius playmaker who opened the scoring with a beautiful technical finish.",
            keyMoments: ["Opening goal (15')", "Perfect ball control", "Technical mastery display"]
        },
        {
            id: 107,
            name: "Reo Mikage",
            position: "CM",
            jersey: 5,
            avatar: "💎",
            team: "Blue Lock",
            stats: {
                goals: 0,
                assists: 2,
                shots: 3,
                passes: 78,
                tackles: 6,
                rating: 82
            },
            performance: "good",
            description: "Versatile midfielder who adapted his game to support the team perfectly.",
            keyMoments: ["Two key assists", "Defensive stability", "Team coordination"]
        },
        {
            id: 108,
            name: "Shouei Barou",
            position: "CB",
            jersey: 4,
            avatar: "👑",
            team: "Blue Lock",
            stats: {
                goals: 1,
                assists: 0,
                shots: 2,
                passes: 42,
                tackles: 8,
                rating: 86
            },
            performance: "excellent",
            description: "The King scored crucial goal from Isagi's assist while dominating in defense.",
            keyMoments: ["Header goal from Isagi assist (67')", "Dominant defending", "Royal presence"]
        }
    ],
    u20Japan: [
        {
            id: 201,
            name: "Sae Itoshi",
            position: "CAM",
            jersey: 10,
            avatar: "🌟",
            team: "U20 Japan",
            stats: {
                goals: 1,
                assists: 1,
                shots: 5,
                passes: 89,
                tackles: 1,
                rating: 92
            },
            performance: "excellent",
            description: "World-class midfielder who scored and assisted, showing his international class.",
            keyMoments: ["Brilliant goal (28')", "Assisted Shidou's first goal", "Playmaking mastery"]
        },
        {
            id: 202,
            name: "Aiku Oliver",
            position: "CB",
            jersey: 2,
            avatar: "🛡️",
            team: "U20 Japan",
            stats: {
                goals: 0,
                assists: 1,
                shots: 1,
                passes: 56,
                tackles: 12,
                rating: 88
            },
            performance: "excellent",
            description: "Defensive stalwart and team captain, nearly impenetrable at the back.",
            keyMoments: ["Multiple crucial blocks", "Defensive leadership", "Set piece assist"]
        },
        {
            id: 203,
            name: "Sendo Shuto",
            position: "CF",
            jersey: 9,
            avatar: "⚔️",
            team: "U20 Japan",
            stats: {
                goals: 0,
                assists: 0,
                shots: 6,
                passes: 23,
                tackles: 0,
                rating: 76
            },
            performance: "average",
            description: "Striker who struggled to make an impact against Blue Lock's defense.",
            keyMoments: ["Some good runs", "Hold-up play", "Worked hard but no goals"]
        },
        {
            id: 204,
            name: "Hayate Niou",
            position: "LW",
            jersey: 11,
            avatar: "🌪️",
            team: "U20 Japan",
            stats: {
                goals: 0,
                assists: 1,
                shots: 4,
                passes: 31,
                tackles: 3,
                rating: 76
            },
            performance: "average",
            description: "Pacy winger who provided width and created some chances.",
            keyMoments: ["Key assist", "Good pace on the wing", "Defensive tracking"]
        },
        {
            id: 205,
            name: "Teppei Neru",
            position: "RW",
            jersey: 7,
            avatar: "🏃",
            team: "U20 Japan",
            stats: {
                goals: 0,
                assists: 0,
                shots: 3,
                passes: 27,
                tackles: 2,
                rating: 74
            },
            performance: "average",
            description: "Traditional winger who struggled against Blue Lock's intensity.",
            keyMoments: ["Some good crosses", "Pace on the right", "Struggled defensively"]
        },
        {
            id: 206,
            name: "Shidou Ryusei",
            position: "CF",
            jersey: 9,
            avatar: "💥",
            team: "U20 Japan (On Loan from Blue Lock)",
            stats: {
                goals: 2,
                assists: 0,
                shots: 11,
                passes: 18,
                tackles: 0,
                rating: 89
            },
            performance: "excellent",
            description: "Blue Lock's explosive striker on loan to U20 Japan. His unpredictable style caused chaos for his former teammates.",
            keyMoments: ["Two crucial goals for U20", "Explosive movements", "Created constant threat"],
            isLoanPlayer: true,
            originalTeam: "Blue Lock"
        }
    ]
};

const matchTimeline = [
    { time: "15'", type: "goal", team: "Blue Lock", player: "Seishiro Nagi", description: "Beautiful technical finish with perfect ball control" },
    { time: "28'", type: "goal", team: "U20 Japan", player: "Sae Itoshi", description: "Brilliant individual effort and clinical finish" },
    { time: "42'", type: "goal", team: "Blue Lock", player: "Rin Itoshi", description: "Powerful strike showing his elite finishing ability" },
    { time: "55'", type: "goal", team: "U20 Japan", player: "Shidou Ryusei (On loan from Blue Lock)", description: "Explosive shot assisted by Sae - Blue Lock striker on loan" },
    { time: "67'", type: "goal", team: "Blue Lock", player: "Shouei Barou", description: "Header from corner kick, assisted by Yoichi Isagi" },
    { time: "73'", type: "goal", team: "U20 Japan", player: "Shidou Ryusei (On loan from Blue Lock)", description: "Second goal with unpredictable movement and finish - loan player" },
    { time: "84'", type: "goal", team: "Blue Lock", player: "Yoichi Isagi", description: "Decisive winning goal assisted by Rin Itoshi - captain's moment" }
];

// Team Data
const teams = [
    {
        id: 1,
        name: "Team Z",
        description: "The lowest-ranked team in Building 5, featuring Isagi and his teammates who must overcome their underdog status.",
        icon: "🔤",
        members: ["Yoichi Isagi", "Meguru Bachira", "Hyoma Chigiri", "Rensuke Kunigami", "Gin Gagamaru", "Jingo Raichi", "Asahi Naruhaya", "Okuhito Iemon"],
        rank: "Lowest Ranked",
        building: "Building 5"
    },
    {
        id: 2,
        name: "Team V",
        description: "One of the top teams featuring Nagi and Reo's powerful partnership and exceptional teamwork.",
        icon: "👑",
        members: ["Seishiro Nagi", "Reo Mikage", "Zantetsu Tsurugi"],
        rank: "Top Tier",
        building: "Building 5"
    },
    {
        id: 3,
        name: "Team X",
        description: "A strong team led by the self-proclaimed 'King' Barou, known for their dominant playing style.",
        icon: "⚔️",
        members: ["Shoei Barou"],
        rank: "High Tier",
        building: "Building 5"
    },
    {
        id: 4,
        name: "Team Y",
        description: "A strategic team featuring analytical players who excel at reading the game.",
        icon: "🧠",
        members: ["Ikki Niko"],
        rank: "Mid Tier",
        building: "Building 5"
    },
    {
        id: 5,
        name: "Team W",
        description: "A versatile team known for their adaptability and tactical flexibility in matches.",
        icon: "🔄",
        members: ["Various Players"],
        rank: "Mid Tier",
        building: "Building 5"
    },
    {
        id: 6,
        name: "Team P.X.G",
        description: "An elite team featuring some of the most talented players including Rin Itoshi and Shidou Ryusei.",
        icon: "❄️",
        members: ["Rin Itoshi", "Shidou Ryusei"],
        rank: "Elite Tier",
        building: "Neo Egoist League"
    },
    {
        id: 7,
        name: "Blue Lock Facility",
        description: "The revolutionary training facility where 300 strikers compete to become Japan's ultimate striker.",
        icon: "🏢",
        members: ["All Blue Lock Participants"],
        rank: "Main Facility",
        building: "Blue Lock Complex"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize Website
function initializeWebsite() {
    populateCharacters();
    populateEpisodes();
    populateU20Arc();
    populateTeams();
    setupNavigation();
    setupSearch();
    setupModal();
    setupHeroButtons();
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Scroll to section
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Hero Buttons Setup
function setupHeroButtons() {
    const buttons = document.querySelectorAll('.hero-buttons .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const onclick = this.getAttribute('onclick');
            if (onclick) {
                eval(onclick);
            }
        });
    });
}

// Populate Characters
function populateCharacters() {
    const charactersGrid = document.getElementById('characters-grid');
    if (!charactersGrid) return;

    charactersGrid.innerHTML = '';
    
    characters.forEach(character => {
        const characterCard = createCharacterCard(character);
        charactersGrid.appendChild(characterCard);
    });
}

// Create Character Card
function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.onclick = () => showCharacterModal(character);
    
    const topStats = Object.entries(character.stats).slice(0, 2);
    
    card.innerHTML = `
        <div class="character-avatar">
            ${character.image ? `<img src="${character.image}" alt="${character.name}" class="character-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
            <div class="character-rank">${character.rank}</div>
            <div style="display: ${character.image ? 'none' : 'flex'}; align-items: center; justify-content: center; width: 100%; height: 100%; font-size: 2rem;">${character.avatar}</div>
        </div>
        <h3 class="character-name">${character.name}</h3>
        <p class="character-position">${character.position} • Rank #${character.rank}</p>
        <p class="character-description">${character.description}</p>
        <div class="stats-preview">
            ${topStats.map(([stat, value]) => `
                <div class="stat-mini">
                    <div class="label">${stat.charAt(0).toUpperCase() + stat.slice(1)}</div>
                    <div class="value">${value}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    return card;
}

// Populate Episodes
function populateEpisodes() {
    populateSeasonEpisodes('season1', season1Episodes);
    populateSeasonEpisodes('season2', season2Episodes);
    populateSeasonEpisodes('season3', season3Episodes);
}

function populateSeasonEpisodes(season, episodeArray) {
    const seasonGrid = document.getElementById(`${season}-grid`);
    if (!seasonGrid) return;

    seasonGrid.innerHTML = '';
    
    episodeArray.forEach(episode => {
        const episodeCard = createEpisodeCard(episode);
        seasonGrid.appendChild(episodeCard);
    });
}

// Create Episode Card
function createEpisodeCard(episode) {
    const card = document.createElement('div');
    const isUpcoming = episode.airDate === 'Coming Soon' || episode.duration === 'TBA';
    
    card.className = isUpcoming ? 'episode-card upcoming' : 'episode-card';
    
    if (!isUpcoming) {
        card.onclick = () => showEpisodeModal(episode);
    }
    
    card.innerHTML = `
        <div class="episode-thumbnail">${episode.thumbnail}</div>
        <div class="episode-content">
            <p class="episode-number">${episode.number} • ${episode.duration || '24 min'}</p>
            <h3 class="episode-title">${episode.title}</h3>
            <p class="episode-description">${episode.description}</p>
            ${episode.airDate ? `<p style="color: ${isUpcoming ? '#94a3b8' : '#6b7280'}; font-size: 0.8rem; margin-top: 0.5rem;">${isUpcoming ? 'Status: ' + episode.airDate : 'Aired: ' + episode.airDate}</p>` : ''}
        </div>
    `;
    
    return card;
}

// Populate Teams
function populateTeams() {
    const teamsGrid = document.getElementById('teams-grid');
    if (!teamsGrid) return;

    teamsGrid.innerHTML = '';
    
    teams.forEach(team => {
        const teamCard = createTeamCard(team);
        teamsGrid.appendChild(teamCard);
    });
}

// Create Team Card
function createTeamCard(team) {
    const card = document.createElement('div');
    card.className = 'team-card';
    
    card.innerHTML = `
        <div class="team-icon">${team.icon}</div>
        <h3 class="team-name">${team.name}</h3>
        ${team.rank ? `<p style="color: rgba(255,255,255,0.8); font-weight: 500; margin-bottom: 0.5rem;">${team.rank} • ${team.building}</p>` : ''}
        <p class="team-description">${team.description}</p>
        ${team.members.length > 0 ? `<p style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-top: 1rem;">${team.members.length} ${team.members.length === 1 ? 'Member' : 'Members'}</p>` : ''}
    `;
    
    return card;
}

// Search Setup
function setupSearch() {
    const searchInput = document.getElementById('character-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterCharacters(searchTerm);
    });
}

// Filter Characters
function filterCharacters(searchTerm) {
    const filteredCharacters = characters.filter(character => 
        character.name.toLowerCase().includes(searchTerm) ||
        character.position.toLowerCase().includes(searchTerm) ||
        character.team.toLowerCase().includes(searchTerm)
    );
    
    const charactersGrid = document.getElementById('characters-grid');
    charactersGrid.innerHTML = '';
    
    filteredCharacters.forEach(character => {
        const characterCard = createCharacterCard(character);
        charactersGrid.appendChild(characterCard);
    });
    
    if (filteredCharacters.length === 0) {
        charactersGrid.innerHTML = '<p style="text-align: center; color: #6b7280; grid-column: 1/-1;">No characters found matching your search.</p>';
    }
}

// Modal Setup
function setupModal() {
    const modal = document.getElementById('character-modal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Show Character Modal
function showCharacterModal(character) {
    const modal = document.getElementById('character-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    const chartId = `chart-${character.id}`;
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 150px; height: 150px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #1e40af); display: flex; align-items: center; justify-content: center; font-size: 4rem; color: white; margin: 0 auto 1rem; position: relative; overflow: hidden;">
                ${character.image ? `<img src="${character.image}" alt="${character.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
                <div style="display: ${character.image ? 'none' : 'flex'}; align-items: center; justify-content: center; width: 100%; height: 100%; font-size: 4rem;">${character.avatar}</div>
                <div style="position: absolute; top: -10px; right: -10px; background: #f59e0b; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 700; border: 3px solid white;">#${character.rank}</div>
            </div>
            <h2 style="color: #1e40af; margin-bottom: 0.5rem;">${character.name}</h2>
            <p style="color: #f59e0b; font-weight: 600; font-size: 1.1rem; margin-bottom: 0.5rem;">${character.position}</p>
            <p style="color: #6b7280; font-weight: 500;">${character.team}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; margin-bottom: 1rem;">Biography</h3>
            <p style="color: #4b5563; line-height: 1.6;">${character.biography}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; margin-bottom: 1rem;">Special Abilities</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${character.abilities.map(ability => 
                    `<span style="background: #dbeafe; color: #1e40af; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 500;">${ability}</span>`
                ).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; margin-bottom: 1rem;">
                <i class="fas fa-chart-line"></i> Player Statistics Rose Chart
            </h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
                <div style="position: relative; height: 250px;">
                    <canvas id="${chartId}" width="250" height="250"></canvas>
                </div>
                <div style="display: grid; gap: 0.75rem;">
                    ${Object.entries(character.stats).map(([stat, value]) => {
                        const percentage = Math.min(value, 100);
                        const color = value >= 90 ? '#10b981' : value >= 80 ? '#3b82f6' : value >= 70 ? '#f59e0b' : '#ef4444';
                        return `
                            <div style="background: #f8fafc; padding: 0.75rem; border-radius: 8px; border-left: 4px solid ${color};">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                                    <span style="font-weight: 600; text-transform: capitalize; color: #374151;">${stat}</span>
                                    <span style="color: ${color}; font-weight: 700; font-size: 1.1rem;">${value}</span>
                                </div>
                                <div style="background: #e5e7eb; border-radius: 6px; overflow: hidden; height: 6px;">
                                    <div style="background: ${color}; height: 100%; width: ${percentage}%; transition: width 0.6s ease; border-radius: 6px;"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
        
        <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 1.5rem; border-radius: 15px; border: 1px solid #bae6fd;">
            <h4 style="color: #1e40af; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-info-circle"></i> Player Analysis
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.9rem;">
                <div>
                    <strong style="color: #1e3a8a;">Strongest Stat:</strong> 
                    <span style="color: #059669;">${getStrongestStat(character.stats)}</span>
                </div>
                <div>
                    <strong style="color: #1e3a8a;">Overall Rating:</strong> 
                    <span style="color: #f59e0b; font-weight: 700;">${calculateOverallRating(character.stats)}/100</span>
                </div>
                <div>
                    <strong style="color: #1e3a8a;">Play Style:</strong> 
                    <span style="color: #6366f1;">${determinePlayStyle(character.stats, character.position)}</span>
                </div>
                <div>
                    <strong style="color: #1e3a8a;">Blue Lock Rank:</strong> 
                    <span style="color: #dc2626; font-weight: 700;">#${character.rank}</span>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Create radar chart after modal is displayed
    setTimeout(() => createRadarChart(chartId, character), 100);
}

// Create Radar Chart (Rose Graph)
function createRadarChart(chartId, character) {
    const ctx = document.getElementById(chartId);
    if (!ctx) return;
    
    const statLabels = Object.keys(character.stats).map(stat => 
        stat.charAt(0).toUpperCase() + stat.slice(1)
    );
    const statValues = Object.values(character.stats);
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: statLabels,
            datasets: [{
                label: character.name,
                data: statValues,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 3,
                pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: '#f59e0b',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    min: 0,
                    ticks: {
                        stepSize: 20,
                        color: '#6b7280',
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: '#e5e7eb'
                    },
                    angleLines: {
                        color: '#d1d5db'
                    },
                    pointLabels: {
                        color: '#374151',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Helper Functions
function getStrongestStat(stats) {
    const maxValue = Math.max(...Object.values(stats));
    const strongestStat = Object.keys(stats).find(key => stats[key] === maxValue);
    return `${strongestStat.charAt(0).toUpperCase() + strongestStat.slice(1)} (${maxValue})`;
}

function calculateOverallRating(stats) {
    const total = Object.values(stats).reduce((sum, value) => sum + value, 0);
    return Math.round(total / Object.keys(stats).length);
}

function determinePlayStyle(stats, position) {
    const { shooting, speed, technique, vision, physical, mental } = stats;
    
    if (position === 'Goalkeeper') return 'Shot Stopper';
    if (speed > 90) return 'Speed Demon';
    if (technique > 90) return 'Technical Master';
    if (shooting > 90) return 'Goal Machine';
    if (vision > 90) return 'Playmaker';
    if (physical > 90) return 'Power House';
    if (mental > 90) return 'Strategic Mind';
    
    const maxStat = Math.max(shooting, speed, technique, vision, physical, mental);
    if (maxStat === shooting) return 'Finisher';
    if (maxStat === speed) return 'Speedster';
    if (maxStat === technique) return 'Technician';
    if (maxStat === vision) return 'Creator';
    if (maxStat === physical) return 'Enforcer';
    return 'Balanced';
}

// Filter by Position
function filterByPosition(position) {
    scrollToSection('characters');
    
    const filteredCharacters = characters.filter(character => 
        character.position.toLowerCase().includes(position.toLowerCase())
    );
    
    const charactersGrid = document.getElementById('characters-grid');
    charactersGrid.innerHTML = '';
    
    filteredCharacters.forEach(character => {
        const characterCard = createCharacterCard(character);
        charactersGrid.appendChild(characterCard);
    });
    
    if (filteredCharacters.length === 0) {
        charactersGrid.innerHTML = `<p style="text-align: center; color: #6b7280; grid-column: 1/-1;">No characters found in ${position} position.</p>`;
    }
    
    // Update search input to show filter
    const searchInput = document.getElementById('character-search');
    if (searchInput) {
        searchInput.value = position;
    }
    
    // Update dropdown filter to match
    const positionFilter = document.getElementById('positionFilter');
    if (positionFilter) {
        positionFilter.value = position;
    }
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('character-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



// Filter by Team
function filterByTeam(teamName) {
    scrollToSection('characters');
    
    let filteredCharacters;
    if (teamName === 'All') {
        filteredCharacters = characters;
    } else {
        filteredCharacters = characters.filter(character => character.team.includes(teamName));
    }
    
    const charactersGrid = document.getElementById('characters-grid');
    charactersGrid.innerHTML = '';
    
    filteredCharacters.forEach(character => {
        const characterCard = createCharacterCard(character);
        charactersGrid.appendChild(characterCard);
    });
    
    if (filteredCharacters.length === 0) {
        charactersGrid.innerHTML = `<p style="text-align: center; color: #6b7280; grid-column: 1/-1;">No characters found in ${teamName}.</p>`;
    }
    
    // Update search input to show filter
    const searchInput = document.getElementById('character-search');
    if (searchInput) {
        searchInput.value = teamName === 'All' ? '' : teamName;
    }
    
    // Update dropdown filter to match
    const teamFilter = document.getElementById('teamFilter');
    if (teamFilter) {
        teamFilter.value = teamName === 'All' ? '' : teamName;
    }
}

// Advanced filtering with multiple criteria
function applyFilters() {
    const teamFilter = document.getElementById('teamFilter').value;
    const positionFilter = document.getElementById('positionFilter').value;
    const rankFilter = document.getElementById('rankFilter').value;
    
    let filteredCharacters = characters;
    
    // Apply team filter
    if (teamFilter) {
        filteredCharacters = filteredCharacters.filter(character => 
            character.team.includes(teamFilter)
        );
    }
    
    // Apply position filter
    if (positionFilter) {
        filteredCharacters = filteredCharacters.filter(character => 
            character.position.toLowerCase().includes(positionFilter.toLowerCase())
        );
    }
    
    // Apply rank filter
    if (rankFilter) {
        filteredCharacters = filteredCharacters.filter(character => {
            const rank = character.rank || 999;
            switch (rankFilter) {
                case '1-10':
                    return rank <= 10;
                case '11-50':
                    return rank >= 11 && rank <= 50;
                case '51-100':
                    return rank >= 51 && rank <= 100;
                case '100+':
                    return rank > 100;
                case 'unranked':
                    return rank === 999 || !character.rank;
                default:
                    return true;
            }
        });
    }
    
    // Update display
    scrollToSection('characters');
    const charactersGrid = document.getElementById('characters-grid');
    charactersGrid.innerHTML = '';
    
    filteredCharacters.forEach(character => {
        const characterCard = createCharacterCard(character);
        charactersGrid.appendChild(characterCard);
    });
    
    if (filteredCharacters.length === 0) {
        charactersGrid.innerHTML = `<p style="text-align: center; color: #6b7280; grid-column: 1/-1;">No characters match the selected filters.</p>`;
    }
    
    // Update search input
    const searchInput = document.getElementById('character-search');
    if (searchInput) {
        const filterText = [teamFilter, positionFilter, rankFilter].filter(f => f).join(', ');
        searchInput.value = filterText;
    }
}

// Clear all filters
function clearAllFilters() {
    const teamFilter = document.getElementById('teamFilter');
    const positionFilter = document.getElementById('positionFilter');
    const rankFilter = document.getElementById('rankFilter');
    const searchInput = document.getElementById('character-search');
    
    if (teamFilter) teamFilter.value = '';
    if (positionFilter) positionFilter.value = '';
    if (rankFilter) rankFilter.value = '';
    if (searchInput) searchInput.value = '';
    
    // Show all characters
    scrollToSection('characters');
    const charactersGrid = document.getElementById('characters-grid');
    charactersGrid.innerHTML = '';
    
    characters.forEach(character => {
        const characterCard = createCharacterCard(character);
        charactersGrid.appendChild(characterCard);
    });
}

// Show Episode Modal
function showEpisodeModal(episode) {
    const modal = document.getElementById('character-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 120px; height: 120px; border-radius: 15px; background: linear-gradient(135deg, #1e40af, #3b82f6); display: flex; align-items: center; justify-content: center; font-size: 4rem; color: white; margin: 0 auto 1rem;">
                ${episode.thumbnail}
            </div>
            <h2 style="color: #1e40af; margin-bottom: 0.5rem;">${episode.title}</h2>
            <p style="color: #f59e0b; font-weight: 600; font-size: 1.1rem; margin-bottom: 0.5rem;">${episode.number}</p>
            <p style="color: #6b7280; font-weight: 500;">${episode.duration} • ${episode.airDate}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; margin-bottom: 1rem;">Episode Summary</h3>
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">${episode.description}</p>
        </div>
        
        ${episode.detailedSummary ? `
        <div>
            <h3 style="color: #1e40af; margin-bottom: 1rem;">Detailed Plot</h3>
            <p style="color: #4b5563; line-height: 1.6;">${episode.detailedSummary}</p>
        </div>
        ` : ''}
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Go to Top Button Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide Go to Top Button
function toggleGoToTopButton() {
    const goToTopBtn = document.getElementById('goToTopBtn');
    if (!goToTopBtn) return;
    
    if (window.scrollY > 300) {
        goToTopBtn.classList.add('visible');
    } else {
        goToTopBtn.classList.remove('visible');
    }
}

// Add scroll event listeners
window.addEventListener('scroll', function() {
    // Header background effect
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(30, 64, 175, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)';
        header.style.backdropFilter = 'none';
    }
    
    // Go to top button visibility
    toggleGoToTopButton();
});

// Enhanced smooth scrolling for footer links
document.addEventListener('DOMContentLoaded', function() {
    // Footer links smooth scrolling
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Social links tracking (optional analytics)
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.querySelector('span')?.textContent || 'Unknown';
            console.log(`Social link clicked: ${platform}`);
            // Add analytics tracking here if needed
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize go to top button
    toggleGoToTopButton();
});

// U20 Arc Functions
function populateU20Arc() {
    populateU20Players('bluelock', u20Players.blueLock);
    populateU20Players('u20japan', u20Players.u20Japan);
    populateRankings('overall');
    populateMatchTimeline();
}

function populateU20Players(containerId, players) {
    const container = document.getElementById(`${containerId}-players`);
    if (!container) return;

    container.innerHTML = '';
    
    players.forEach(player => {
        const playerCard = createU20PlayerCard(player);
        container.appendChild(playerCard);
    });
}

function createU20PlayerCard(player) {
    const card = document.createElement('div');
    const cardClass = player.team.includes('Blue Lock') ? 'blue-lock' : 'u20-japan';
    card.className = `u20-player-card ${cardClass}`;
    card.onclick = () => showU20PlayerModal(player);
    
    const topStats = Object.entries(player.stats).slice(0, 4);
    
    card.innerHTML = `
        <div class="performance-badge ${player.performance}">${player.performance}</div>
        ${player.isLoanPlayer ? '<div class="loan-badge">ON LOAN</div>' : ''}
        <div class="u20-player-header">
            <div class="u20-player-avatar">${player.avatar}</div>
            <div class="u20-player-info">
                <h4>${player.name}</h4>
                <div class="position">${player.position}</div>
                <div class="jersey">Jersey #${player.jersey}</div>
                ${player.isLoanPlayer ? `<div class="loan-info">From ${player.originalTeam}</div>` : ''}
            </div>
        </div>
        <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 1rem;">${player.description}</p>
        <div class="u20-player-stats">
            ${topStats.map(([stat, value]) => `
                <div class="u20-stat">
                    <span class="value">${value}</span>
                    <span class="label">${stat}</span>
                </div>
            `).join('')}
        </div>
    `;
    
    return card;
}

function showU20Tab(tabName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

function showRanking(type) {
    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    populateRankings(type);
}

function populateRankings(type) {
    const container = document.getElementById('rankings-list');
    if (!container) return;
    
    const allPlayers = [...u20Players.blueLock, ...u20Players.u20Japan];
    let sortedPlayers;
    
    switch(type) {
        case 'offense':
            sortedPlayers = allPlayers.sort((a, b) => (b.stats.goals + b.stats.assists) - (a.stats.goals + a.stats.assists));
            break;
        case 'defense':
            sortedPlayers = allPlayers.sort((a, b) => b.stats.tackles - a.stats.tackles);
            break;
        case 'impact':
            sortedPlayers = allPlayers.sort((a, b) => (b.stats.goals * 2 + b.stats.assists + b.stats.tackles) - (a.stats.goals * 2 + a.stats.assists + a.stats.tackles));
            break;
        default: // overall
            sortedPlayers = allPlayers.sort((a, b) => b.stats.rating - a.stats.rating);
    }
    
    container.innerHTML = '';
    
    sortedPlayers.forEach((player, index) => {
        const rankingItem = createRankingItem(player, index + 1, type);
        container.appendChild(rankingItem);
    });
}

function createRankingItem(player, rank, type) {
    const item = document.createElement('div');
    item.className = 'ranking-item';
    
    let rankClass = 'regular';
    if (rank === 1) rankClass = 'gold';
    else if (rank === 2) rankClass = 'silver';
    else if (rank === 3) rankClass = 'bronze';
    
    let score;
    switch(type) {
        case 'offense':
            score = player.stats.goals + player.stats.assists;
            break;
        case 'defense':
            score = player.stats.tackles;
            break;
        case 'impact':
            score = player.stats.goals * 2 + player.stats.assists + player.stats.tackles;
            break;
        default:
            score = player.stats.rating;
    }
    
    item.innerHTML = `
        <div class="ranking-number ${rankClass}">${rank}</div>
        <div class="ranking-info">
            <h4>${player.name}</h4>
            <div class="team">${player.team} • ${player.position}</div>
        </div>
        <div class="ranking-score">${score}</div>
    `;
    
    return item;
}

function populateMatchTimeline() {
    const container = document.getElementById('match-timeline');
    if (!container) return;
    
    container.innerHTML = '';
    
    matchTimeline.forEach(event => {
        const timelineEvent = document.createElement('div');
        timelineEvent.className = `timeline-event ${event.type}`;
        
        timelineEvent.innerHTML = `
            <div class="event-time">${event.time}</div>
            <div class="event-description">
                <span class="event-player">${event.player}</span> (${event.team})
                <br>${event.description}
            </div>
        `;
        
        container.appendChild(timelineEvent);
    });
}

function showU20PlayerModal(player) {
    const modal = document.getElementById('character-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, ${player.team === 'Blue Lock' ? '#3b82f6, #1e40af' : '#dc2626, #b91c1c'}); display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white; margin: 0 auto 1rem; position: relative;">
                ${player.avatar}
                <div style="position: absolute; top: -10px; right: -10px; background: #f59e0b; color: white; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 700; border: 2px solid white;">#${player.jersey}</div>
            </div>
            <h2 style="color: ${player.team === 'Blue Lock' ? '#1e40af' : '#dc2626'}; margin-bottom: 0.5rem;">${player.name}</h2>
            <p style="color: #f59e0b; font-weight: 600; font-size: 1.1rem; margin-bottom: 0.5rem;">${player.position} • ${player.team}</p>
            <div class="performance-badge ${player.performance}" style="position: static; margin: 0.5rem auto; display: inline-block;">${player.performance.toUpperCase()}</div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; margin-bottom: 1rem;">Match Performance</h3>
            <p style="color: #4b5563; line-height: 1.6; margin-bottom: 1rem;">${player.description}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; margin-bottom: 1rem;">U20 Arc Statistics</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                ${Object.entries(player.stats).map(([stat, value]) => `
                    <div style="background: #f8fafc; padding: 1rem; border-radius: 10px; text-align: center; border-left: 4px solid ${player.team === 'Blue Lock' ? '#3b82f6' : '#dc2626'};">
                        <div style="font-size: 1.5rem; font-weight: 700; color: ${player.team === 'Blue Lock' ? '#1e40af' : '#dc2626'};">${value}</div>
                        <div style="font-size: 0.8rem; color: #6b7280; text-transform: uppercase; font-weight: 600;">${stat}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div style="background: linear-gradient(135deg, ${player.team === 'Blue Lock' ? '#eff6ff, #dbeafe' : '#fef2f2, #fee2e2'}); padding: 1.5rem; border-radius: 15px; border: 1px solid ${player.team === 'Blue Lock' ? '#bae6fd' : '#fecaca'};">
            <h4 style="color: #1e40af; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-star"></i> Key Moments
            </h4>
            <ul style="list-style: none; padding: 0;">
                ${player.keyMoments.map(moment => `
                    <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: #f59e0b;">▶</span>
                        <span style="color: #374151;">${moment}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Season switching function
function showSeason(season) {
    // Remove active class from all season tabs and content
    document.querySelectorAll('.season-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.season-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(`${season}-episodes`).classList.add('active');
}

// Keyboard accessibility for go to top button
document.addEventListener('keydown', function(e) {
    if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();
        scrollToTop();
    }
}); 