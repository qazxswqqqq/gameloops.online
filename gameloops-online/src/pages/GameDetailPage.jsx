import { useParams, Link } from 'react-router-dom';
import { games } from '../data/games';

const GameDetailPage = () => {
  const { gameId } = useParams();
  
  // 根据游戏标题查找游戏（这里使用标题作为ID）
  const game = games.find(g => g.title === decodeURIComponent(gameId));
  
  if (!game) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Game Not Found</h1>
        <p className="text-gray-400 mb-8">The game you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const tags = game.tags.split(',');

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li>/</li>
            <li className="text-white">{game.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Game Image */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* Play Button */}
            <Link
              to={`/play/${encodeURIComponent(game.title)}`}
              className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎮 Play Now
            </Link>
          </div>

          {/* Game Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{game.title}</h1>
              <p className="text-gray-300 text-lg leading-relaxed">{game.description}</p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Game Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Game Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-cyan-400 text-2xl mb-2">🎯</div>
                  <h4 className="font-semibold text-white">Free to Play</h4>
                  <p className="text-gray-400 text-sm">No downloads required</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-cyan-400 text-2xl mb-2">📱</div>
                  <h4 className="font-semibold text-white">Mobile Friendly</h4>
                  <p className="text-gray-400 text-sm">Play on any device</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-cyan-400 text-2xl mb-2">⚡</div>
                  <h4 className="font-semibold text-white">Instant Play</h4>
                  <p className="text-gray-400 text-sm">Loads in seconds</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-cyan-400 text-2xl mb-2">🌐</div>
                  <h4 className="font-semibold text-white">Browser Based</h4>
                  <p className="text-gray-400 text-sm">No installation needed</p>
                </div>
              </div>
            </div>

            {/* How to Play */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">How to Play</h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">1.</span>
                    Click the "Play Now" button above
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">2.</span>
                    The game will load in a new window
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">3.</span>
                    Use your mouse and keyboard to play
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-2">4.</span>
                    Have fun and challenge your friends!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Games */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games
              .filter(g => g.title !== game.title)
              .slice(0, 4)
              .map(relatedGame => (
                <Link 
                  key={relatedGame.title} 
                  to={`/game/${encodeURIComponent(relatedGame.title)}`}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  <img 
                    src={relatedGame.image} 
                    alt={relatedGame.title} 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2">{relatedGame.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{relatedGame.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage; 