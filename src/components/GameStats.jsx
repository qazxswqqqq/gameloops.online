import { games } from '../data/games';

const GameStats = () => {
  // 计算统计数据
  const totalGames = games.length;
  const categories = [...new Set(games.flatMap(game => 
    game.tags.split(',').map(tag => tag.trim())
  ))].length;

  return (
    <div className="bg-gray-900 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">GameLoops Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400">{totalGames}</div>
          <div className="text-gray-400 text-sm">Total Games</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400">{categories}</div>
          <div className="text-gray-400 text-sm">Categories</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400">100%</div>
          <div className="text-gray-400 text-sm">Free to Play</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400">24/7</div>
          <div className="text-gray-400 text-sm">Available</div>
        </div>
      </div>
    </div>
  );
};

export default GameStats; 