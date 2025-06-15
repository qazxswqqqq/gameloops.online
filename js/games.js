// Game data handling
const games = {
    action: [
        {
            id: 'monster-survivors',
            title: 'Monster Survivors',
            description: 'Survive endless waves of monsters in this thrilling action-packed adventure!',
            embed: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/1015/responsive/monster-survivors-xs.jpg',
            rating: 4.8,
            tags: ['action', 'survival', 'adventure'],
            controls: 'WASD or arrow keys to move, automatically attack nearby enemies'
        },
        {
            id: 'masked-forces',
            title: 'Masked Special Forces',
            description: 'Join the elite special forces team in this action-packed combat game.',
            embed: 'https://cloud.onlinegames.io/games/2021/unity/masked-forces/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/1015/responsive/masked-forces-xs.jpg',
            rating: 4.5,
            tags: ['action', 'combat', 'shooter'],
            controls: 'WASD to move, Mouse to aim and shoot'
        }
    ],
    racing: [
        {
            id: 'drift-king',
            title: 'Drift King',
            description: 'Master the art of drifting in this realistic racing simulator.',
            embed: 'https://cloud.onlinegames.io/games/2024/unity/drift-king/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/729/responsive/Drift-King-xs.jpg',
            rating: 4.7,
            tags: ['racing', 'drift', 'simulator'],
            controls: 'WASD to drive, Space to drift'
        },
        {
            id: 'highway-traffic',
            title: 'Highway Traffic',
            description: 'Navigate through busy highway traffic in this exciting racing game.',
            embed: 'https://cloud.onlinegames.io/games/2022/unity/highway-traffic/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/32/responsive/Highway-Traffic-2-xs.jpg',
            rating: 4.3,
            tags: ['racing', 'traffic', 'arcade'],
            controls: 'Arrow keys to drive, Space to brake'
        }
    ],
    puzzle: [
        {
            id: 'pyramid-solitaire',
            title: 'Pyramid Solitaire',
            description: 'Classic card game with a pyramid twist. Match cards that add up to 13.',
            embed: 'https://cloud.onlinegames.io/games/2025/html/solitaire/index-og.html#pyramid',
            image: 'https://www.onlinegames.io/media/posts/1006/responsive/pyramid-Solitaire-xs.jpg',
            rating: 4.6,
            tags: ['puzzle', 'card', 'solitaire'],
            controls: 'Mouse to select and match cards'
        },
        {
            id: 'sweet-sugar-match',
            title: 'Sweet Sugar Match',
            description: 'Match colorful candies in this sweet puzzle game.',
            embed: 'https://cloud.onlinegames.io/games/2022/unity/sweet-sugar-match/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/576/responsive/Sweet-Sugar-Match-xs.jpg',
            rating: 4.4,
            tags: ['puzzle', 'match-3', 'candy'],
            controls: 'Mouse to swap and match candies'
        }
    ],
    arcade: [
        {
            id: 'stack-fire-ball',
            title: 'Stack Fire Ball',
            description: 'Guide the ball through each stage, avoiding dark tiles.',
            embed: 'https://cloud.onlinegames.io/games/2021/unity/stack-fire-ball/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/184/responsive/Stack-Fire-Ball-Game-xs.jpg',
            rating: 4.5,
            tags: ['arcade', 'skill', 'ball'],
            controls: 'Mouse to control ball movement'
        },
        {
            id: 'hook-wars',
            title: 'Hook Wars',
            description: 'Battle with hooks in this exciting multiplayer game.',
            embed: 'https://cloud.onlinegames.io/games/2023/unity3/hook-wars/index-og.html',
            image: 'https://www.onlinegames.io/media/posts/610/responsive/Hook-Wars-xs.jpg',
            rating: 4.6,
            tags: ['arcade', 'multiplayer', 'battle'],
            controls: 'Mouse to aim and shoot hooks'
        }
    ]
};

// Function to load featured games
function loadFeaturedGames() {
    const featuredGamesContainer = document.getElementById('featured-games');
    if (!featuredGamesContainer) return;

    const featuredGames = getRandomGames(6);
    featuredGames.forEach(game => {
        const gameCard = createGameCard(game);
        featuredGamesContainer.appendChild(gameCard);
    });
}

// Function to create game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow';
    
    card.innerHTML = `
        <div class="relative">
            <img src="${game.image}" alt="${game.title}" class="w-full h-48 object-cover">
            <div class="absolute top-2 right-2 bg-apple-blue text-white px-2 py-1 rounded-full text-sm">
                ${game.rating} ★
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">${game.title}</h3>
            <p class="text-gray-600 text-sm mb-4">${game.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${game.tags.map(tag => `
                    <span class="bg-apple-gray px-2 py-1 rounded-full text-xs">${tag}</span>
                `).join('')}
            </div>
            <a href="/games/${game.id}" class="block text-center bg-apple-blue text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Play Now
            </a>
        </div>
    `;
    
    return card;
}

// Function to get random games for featured section
function getRandomGames(count = 6) {
    const allGames = Object.values(games).flat();
    const shuffled = allGames.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to get related games
function getRelatedGames(currentGame, count = 3) {
    const category = Object.keys(games).find(cat => 
        games[cat].some(game => game.id === currentGame.id)
    );
    return games[category]
        .filter(game => game.id !== currentGame.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
}

// Function to search games
function searchGames(query) {
    query = query.toLowerCase();
    return Object.values(games).flat().filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.tags.some(tag => tag.toLowerCase().includes(query))
    );
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedGames();
}); 