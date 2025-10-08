const gamesData = [
    {
        id: 1,
        title: "Super Mario Bros.",
        year: 1985,
        platform: "NES",
        genre: "Platformer",
        preview: "The game that defined platforming and saved the video game industry.",
        story: "Mario must rescue Princess Peach from the evil Bowser by traveling through the Mushroom Kingdom. The game features eight worlds, each with four levels, filled with enemies, obstacles, and secrets.",
        gameplay: "Players control Mario (or Luigi in two-player mode) through side-scrolling levels, jumping on enemies, collecting coins and power-ups, and navigating various obstacles. The game introduced mechanics that became industry standards.",
        whyLove: "Super Mario Bros. was my introduction to gaming. The tight controls, level design, and sense of discovery made every session magical. Finding secret warp zones and mastering difficult jumps gave me a sense of accomplishment I still chase in games today. The music is forever burned into my brain.",
        image1: "https://upload.wikimedia.org/wikipedia/en/5/50/NES_Super_Mario_Bros.png",
        image2: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        title: "The Legend of Zelda",
        year: 1986,
        platform: "NES",
        genre: "Action-Adventure",
        preview: "An epic adventure that pioneered open-world exploration and dungeon crawling.",
        story: "Link must collect the eight fragments of the Triforce of Wisdom to rescue Princess Zelda and defeat the evil Ganon. The game is set in the fantasy land of Hyrule, filled with dungeons, secrets, and dangerous creatures.",
        gameplay: "Players explore an open world, solve puzzles, battle enemies, and collect items and weapons. The game featured a revolutionary save system and non-linear progression, allowing players to tackle dungeons in various orders.",
        whyLove: "The Legend of Zelda sparked my imagination like no other game. The freedom to explore, the mystery of hidden caves and secrets, and the satisfaction of gradually becoming more powerful kept me hooked. It taught me that games could be about discovery and adventure, not just reaching the end.",
        image1: "https://upload.wikimedia.org/wikipedia/en/3/3a/Legend_of_Zelda_NES.PNG",
        image2: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_TheLegendOfZelda_image1600w.jpg"
    },
    {
        id: 3,
        title: "Pac-Man",
        year: 1980,
        platform: "Arcade",
        genre: "Maze",
        preview: "The iconic maze game that became a cultural phenomenon.",
        story: "Guide Pac-Man through a maze, eating pellets while avoiding four colorful ghosts. Eating power pellets allows Pac-Man to turn the tables and chase the ghosts for extra points. Pac-Man was a cultural phenomenon. It was the first game to feature a recognizable, consumable main character, pioneering the concept of in-game cutscenes (known as 'intermissions' here) and paving the way for video game mascots. It launched a massive merchandising craze, a cartoon series, and a hit song. It wasn't just a game; it was an icon that pulled video games into the mainstream consciousness",
        gameplay: "Navigate through a single-screen maze, eating all dots while avoiding or chasing ghosts. The game features simple but addictive gameplay with increasing difficulty. Each ghost has unique AI behavior patterns.",
        whyLove: "Pac-Man represents pure arcade perfection. The simple concept masks deep strategy in ghost patterns and optimal routes. Those tense moments when you're cornered with nowhere to run, or the satisfaction of gobbling up all four ghosts after eating a power pellet, never gets old. It's gaming distilled to its essence.",
        image1: "https://www.moma.org/media/W1siZiIsIjI1NTc5MSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=2af7d9c94ea47d85",
        image2: "https://m.media-amazon.com/images/M/MV5BNmRkZWE4NDUtYWU0ZC00MGM2LTlmNmYtZWJmOTJjMTQzMDhlXkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: 4,
        title: "Sonic the Hedgehog",
        year: 1991,
        platform: "Sega Genesis",
        genre: "Platformer",
        preview: "Lightning-fast platforming action that defined the Sega Genesis.",
        story: "Sonic must stop the evil Dr. Robotnik from collecting the Chaos Emeralds and turning animals into robots. Speed through colorful zones collecting rings and discovering multiple paths.",
        gameplay: "Players control Sonic through high-speed levels with loops, springs, and obstacles. The game emphasizes momentum and rewards skilled players with faster routes. Collecting 50 rings grants access to special stages where Chaos Emeralds can be won.",
        whyLove: "Sonic represented everything cool about the early 90s. The speed, the attitude, the amazing music, and the vibrant graphics were mind-blowing. Learning the levels well enough to maintain top speed while collecting rings felt incredible. Green Hill Zone's music is my happy place.",
        image1: "https://i.ytimg.com/vi/JqQYDLcvkBc/maxresdefault.jpg",
        image2: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/MD_Sonic_the_Hedgehog.png/250px-MD_Sonic_the_Hedgehog.png"
    },
    {
        id: 5,
        title: "Street Fighter II",
        year: 1991,
        platform: "Arcade",
        genre: "Fighting",
        preview: "The game that defined competitive fighting games and arcade culture.",
        story: "Choose from eight world warriors, each with their own fighting style and motivation, to compete in a global tournament. Battle through opponents to face the mysterious M. Bison.",
        gameplay: "One-on-one fighting with special moves executed through specific button and joystick combinations. Each character has unique abilities, encouraging different playstyles. Master timing, combos, and spacing to defeat opponents.",
        whyLove: "Street Fighter II was my introduction to competitive gaming. Learning the special moves, mind games with friends, and the satisfaction of landing a perfect Hadouken created countless memories. The diverse cast meant everyone had a favorite, and mastering different matchups kept the game fresh for years.",
        image1: "https://wiki.supercombo.gg/images/b/bf/Sf2fight.png",
        image2: "https://i0.wp.com/thegameofnerds.com/wp-content/uploads/2019/11/Ultra-street-fighter-2-the-final-challengers.jpg?resize=1280%2C640&ssl=1"
    }
];

function renderGamesGrid() {
    const gamesGrid = document.getElementById('games-grid');
    if (!gamesGrid) return;

    const html = gamesData.map(game => `
        <div class="game-card">
            <h3>${game.title}</h3>
            <span class="year">${game.year} - ${game.platform}</span>
            <p>${game.preview}</p>
        </div>
    `).join('');

    gamesGrid.innerHTML = html;
}

function renderGamesDetailed() {
    const gamesContainer = document.getElementById('games-container');
    if (!gamesContainer) return;

    const html = gamesData.map(game => `
        <article class="game-detail">
            <h2>${game.title}</h2>
            <div class="game-meta">
                <span class="meta-item">Released: ${game.year}</span>
                <span class="meta-item">Platform: ${game.platform}</span>
                <span class="meta-item">Genre: ${game.genre}</span>
            </div>
            <div class="game-content">
                <div class="game-description">
                    <h3>Story & Gameplay</h3>
                    <p><strong>Story:</strong> ${game.story}</p>
                    <p><strong>Gameplay:</strong> ${game.gameplay}</p>
                </div>
                <div class="game-images">
                    <img src="${game.image1}" alt="${game.title} screenshot 1" loading="lazy">
                    <img src="${game.image2}" alt="${game.title} screenshot 2" loading="lazy">
                </div>
            </div>
            <div class="why-love">
                <h3>Why I Love This Game</h3>
                <p>${game.whyLove}</p>
            </div>
        </article>
    `).join('');

    gamesContainer.innerHTML = html;
}

function initVisitorCounter() {
    const counterElement = document.getElementById('visitor-count');
    if (!counterElement) return;

    let visitorCount = localStorage.getItem('visitorCount');

    if (visitorCount === null) {
        visitorCount = 0;
    } else {
        visitorCount = parseInt(visitorCount);
    }

    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);

    animateCounter(counterElement, visitorCount);
}

function animateCounter(element, targetValue) {
    let currentValue = 0;
    const duration = 1000;
    const increment = targetValue / (duration / 16);

    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentValue);
    }, 16);
}

function handleContactForm() {
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');

    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            favoriteGame: document.getElementById('favorite-game').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        existingMessages.push(formData);
        localStorage.setItem('contactMessages', JSON.stringify(existingMessages));

        messageDiv.className = 'form-message success';
        messageDiv.textContent = `Thank you, ${formData.name}! Your message has been received. I'll get back to you soon!`;

        form.reset();

        setTimeout(() => {
            messageDiv.className = 'form-message';
            messageDiv.textContent = '';
        }, 5000);
    });
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderGamesGrid();
    renderGamesDetailed();
    initVisitorCounter();
    handleContactForm();
    setActiveNavLink();
});
