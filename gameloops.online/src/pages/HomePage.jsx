import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { games } from '../data/games';
import GameCard from '../components/GameCard';
import GameStats from '../components/GameStats';
import FeaturedGames from '../components/FeaturedGames';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 从URL参数中读取分类和搜索
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    const searchFromUrl = searchParams.get('search');
    
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams]);

  // 获取所有游戏分类
  const categories = ['all', ...new Set(games.flatMap(game => 
    game.tags.split(',').map(tag => tag.trim())
  ))];

  // 过滤游戏
  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === 'all' || 
      game.tags.includes(selectedCategory);
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 处理分类选择
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to GameLoops
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Discover and play the best online games for free. From action-packed adventures to brain-teasing puzzles.
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="search"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/20 border border-white/30 rounded-full py-3 px-6 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Featured Games - Only show on home page */}
      {selectedCategory === 'all' && searchQuery === '' && <FeaturedGames />}

      {/* Categories */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.slice(0, 10).map(category => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Game Stats */}
          {selectedCategory === 'all' && searchQuery === '' && <GameStats />}
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">
              {searchQuery 
                ? `Search Results for "${searchQuery}"`
                : selectedCategory === 'all' 
                  ? 'All Games' 
                  : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Games`
              }
            </h2>
            <p className="text-gray-400">
              {filteredGames.length} game{filteredGames.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          {filteredGames.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                {searchQuery 
                  ? `No games found matching "${searchQuery}"`
                  : "No games found matching your criteria."
                }
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategorySelect('all');
                }}
                className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                View All Games
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredGames.map(game => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage; 