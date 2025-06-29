import { games } from '../data/games';
import GameCard from './GameCard';

const GameGrid = () => (
  <section className="py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-6">Featured Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {games.map(game => (
          <GameCard key={game.title} game={game} />
        ))}
      </div>
    </div>
  </section>
);

export default GameGrid; 