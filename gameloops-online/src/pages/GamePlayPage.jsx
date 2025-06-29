import { useParams, Link } from 'react-router-dom';
import { games } from '../data/games';

const GamePlayPage = () => {
  const { gameId } = useParams();
  
  // 根据游戏标题查找游戏
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

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Game Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to={`/game/${encodeURIComponent(game.title)}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                ← Back to Game Details
              </Link>
              <div className="h-6 w-px bg-gray-700"></div>
              <h1 className="text-xl font-bold text-white">{game.title}</h1>
            </div>
            <Link 
              to="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Game Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
          {/* Game Frame */}
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
            <iframe
              src={game.embed}
              title={game.title}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>

        {/* Game Info */}
        <div className="mt-6 bg-gray-900 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{game.title}</h2>
              <p className="text-gray-300 leading-relaxed">{game.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Game Controls</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Use your mouse to interact with the game</p>
                <p>• Keyboard controls may vary by game</p>
                <p>• Fullscreen mode available in most games</p>
                <p>• Game saves automatically in your browser</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to={`/game/${encodeURIComponent(game.title)}`}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Game Details
          </Link>
          <Link
            to="/"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Browse More Games
          </Link>
        </div>

        {/* Related Games */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">More Games You'll Love</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                    className="w-full h-24 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-semibold text-white text-sm mb-1">{relatedGame.title}</h4>
                    <p className="text-gray-400 text-xs line-clamp-2">{relatedGame.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlayPage; 