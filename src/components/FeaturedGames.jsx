import { games } from '../data/games';
import GameCard from './GameCard';

const FeaturedGames = () => {
  // 选择一些特色游戏（这里选择前6个）
  const featuredGames = games.slice(0, 6);

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Games
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Check out our most popular games that players love
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredGames.map(game => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames; 