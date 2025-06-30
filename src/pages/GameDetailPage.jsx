import { useParams, Link } from 'react-router-dom';
import { games } from '../data/games';

const NavBar = () => (
  <header className="bg-gradient-to-r from-blue-400 via-cyan-300 to-pink-300 shadow sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
      <Link to="/" className="text-2xl font-extrabold text-white drop-shadow">GameLoops</Link>
      <nav className="space-x-4 md:space-x-8">
        <Link to="/" className="text-white/90 hover:text-yellow-200 font-semibold transition">Home</Link>
        <Link to="/categories" className="text-white/90 hover:text-yellow-200 font-semibold transition">Categories</Link>
        <Link to="/about" className="text-white/90 hover:text-yellow-200 font-semibold transition">About</Link>
      </nav>
    </div>
  </header>
);

const GameDetailPage = () => {
  const { gameId } = useParams();
  const game = games.find(g => g.title === decodeURIComponent(gameId));

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 flex flex-col items-center justify-center">
        <NavBar />
        <div className="text-center mt-16">
          <h1 className="text-3xl font-bold text-pink-600 mb-4">Game Not Found</h1>
          <p className="text-gray-500 mb-8">The game you're looking for doesn't exist.</p>
          <Link to="/" className="bg-blue-500 hover:bg-pink-400 text-white px-6 py-3 rounded-lg shadow transition">Back to Home</Link>
        </div>
      </div>
    );
  }

  const tags = game.tags.split(',');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100">
      <NavBar />
      <main className="container mx-auto px-2 sm:px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* 主内容卡片 */}
        <section className="flex-1 bg-white/90 rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col items-center">
          {/* 游戏大图/区域 */}
          <div className="w-full max-w-2xl aspect-video bg-gradient-to-tr from-cyan-200 via-pink-200 to-yellow-100 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center mb-6">
            <img src={game.image} alt={game.title} className="object-contain w-full h-full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2 text-center drop-shadow">{game.title}</h1>
          <p className="text-lg text-gray-700 mb-4 text-center max-w-2xl">{game.description}</p>
          {/* 标签 */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {tags.map(tag => (
              <span key={tag} className="bg-gradient-to-r from-pink-300 via-yellow-200 to-cyan-200 text-blue-800 px-4 py-1 rounded-full text-sm font-bold shadow">{tag.trim()}</span>
            ))}
          </div>
          {/* 玩法说明 */}
          <div className="w-full max-w-xl bg-gradient-to-r from-yellow-100 via-pink-100 to-cyan-100 rounded-xl p-4 mb-6 shadow">
            <h3 className="text-xl font-bold text-pink-600 mb-2">How to Play</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Click the "Play Now" button below</li>
              <li>The game will load in a new window</li>
              <li>Use your mouse and keyboard to play</li>
              <li>Have fun and challenge your friends!</li>
            </ul>
          </div>
          {/* Play 按钮 */}
          <Link
            to={`/play/${encodeURIComponent(game.title)}`}
            className="mt-2 w-full max-w-xs bg-gradient-to-r from-blue-500 via-cyan-400 to-pink-400 hover:from-pink-400 hover:to-blue-500 text-white text-center py-4 px-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🎮 Play Now
          </Link>
        </section>
        {/* 推荐区 */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center lg:text-left">You Might Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {games.filter(g => g.title !== game.title).slice(0, 6).map(relatedGame => (
              <Link
                key={relatedGame.title}
                to={`/game/${encodeURIComponent(relatedGame.title)}`}
                className="bg-white/80 rounded-xl overflow-hidden shadow-md hover:shadow-pink-200 transition-all duration-200 flex flex-col items-center p-3 hover:-translate-y-1"
              >
                <img src={relatedGame.image} alt={relatedGame.title} className="w-full h-24 object-cover rounded mb-2" />
                <div className="text-center">
                  <div className="font-bold text-blue-700 text-lg mb-1">{relatedGame.title}</div>
                  <div className="text-gray-500 text-xs line-clamp-2">{relatedGame.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </main>
      <footer className="bg-gradient-to-r from-blue-400 via-cyan-300 to-pink-300 py-4 mt-8 text-center text-white font-semibold tracking-wide shadow-inner rounded-t-2xl">
        © 2024 GameLoops. All rights reserved.
      </footer>
    </div>
  );
};

export default GameDetailPage;
