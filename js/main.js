// DOM Elements
const searchInput = document.querySelector('input[type="text"]');
const featuredGamesContainer = document.getElementById('featured-games');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedGames();
    setupSearch();
    setupRatingSystem();
    setupShareButtons();
    setupNewsletterSubscription();
    setupSmoothScrolling();
});

// Load featured games
function loadFeaturedGames() {
    const featuredGames = getRandomGames(6);
    featuredGamesContainer.innerHTML = featuredGames.map(game => `
        <div class="game-card bg-white rounded-xl shadow-lg overflow-hidden">
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
        </div>
    `).join('');
}

// Setup search functionality
function setupSearch() {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length >= 2) {
            const results = searchGames(searchTerm);
            // Update UI with search results
            updateSearchResults(results);
        }
    });
}

// Update search results
function updateSearchResults(results) {
    // Implementation for search results display
    // This will be implemented based on your UI requirements
}

// Setup rating system
function setupRatingSystem() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.rate-game')) {
            const gameId = e.target.dataset.gameId;
            const rating = e.target.dataset.rating;
            // Save rating to localStorage or send to server
            saveRating(gameId, rating);
        }
    });
}

// Save rating
function saveRating(gameId, rating) {
    // Implementation for saving ratings
    // This will be implemented based on your backend requirements
}

// Setup share buttons
function setupShareButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('.share-button')) {
            const platform = e.target.dataset.platform;
            const gameUrl = window.location.href;
            const gameTitle = document.title;
            
            let shareUrl;
            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(gameUrl)}&text=${encodeURIComponent(gameTitle)}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(gameUrl)}`;
                    break;
                case 'reddit':
                    shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(gameUrl)}&title=${encodeURIComponent(gameTitle)}`;
                    break;
                case 'tiktok':
                    // TikTok sharing implementation
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        }
    });
}

// Create game page template
function createGamePage(game) {
    return `
        <div class="game-container">
            <div class="game-header">
                <h1>${game.title}</h1>
                <div class="game-rating">
                    <span class="rating-value">${game.rating}</span>
                    <div class="rating-stars">
                        ${createRatingStars(game.rating)}
                    </div>
                </div>
            </div>
            
            <div class="game-frame">
                <iframe src="${game.embed}" 
                        class="w-full h-[600px] md:h-[700px] rounded-lg"
                        allowfullscreen>
                </iframe>
            </div>
            
            <div class="game-info">
                <div class="game-description">
                    <h2>About the Game</h2>
                    <p>${game.description}</p>
                </div>
                
                <div class="game-controls">
                    <h2>How to Play</h2>
                    <p>${game.controls}</p>
                </div>
                
                <div class="game-tags">
                    ${game.tags.map(tag => `
                        <span class="tag">${tag}</span>
                    `).join('')}
                </div>
                
                <div class="share-buttons">
                    <button class="share-button" data-platform="twitter">
                        <i class="fab fa-twitter"></i> Share on Twitter
                    </button>
                    <button class="share-button" data-platform="facebook">
                        <i class="fab fa-facebook"></i> Share on Facebook
                    </button>
                    <button class="share-button" data-platform="reddit">
                        <i class="fab fa-reddit"></i> Share on Reddit
                    </button>
                    <button class="share-button" data-platform="tiktok">
                        <i class="fab fa-tiktok"></i> Share on TikTok
                    </button>
                </div>
            </div>
            
            <div class="related-games">
                <h2>You May Also Like</h2>
                <div class="related-games-grid">
                    ${getRelatedGames(game).map(relatedGame => `
                        <div class="related-game-card">
                            <img src="${relatedGame.image}" alt="${relatedGame.title}">
                            <h3>${relatedGame.title}</h3>
                            <a href="/games/${relatedGame.id}" class="play-button">Play Now</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Helper function to create rating stars
function createRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return `
        ${'★'.repeat(fullStars)}
        ${hasHalfStar ? '½' : ''}
        ${'☆'.repeat(emptyStars)}
    `;
}

// Setup newsletter subscription
function setupNewsletterSubscription() {
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            // Add newsletter subscription functionality here
            alert('Thank you for subscribing!');
            e.target.reset();
        });
    }
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
} 