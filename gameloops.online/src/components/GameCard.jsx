import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  const tags = game.tags.split(',').slice(0, 3); // Show max 3 tags

  return (
    <Link 
      to={`/game/${encodeURIComponent(game.title)}`}
      className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer group"
    >
      <div className="relative">
        <img className="w-full h-40 object-cover" src={game.image} alt={game.title} />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-20 transition-all duration-300"></div>
        <div className="absolute top-2 right-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
          PLAY
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-3 h-10 overflow-hidden">{game.description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-gray-700 text-cyan-300 px-2 py-1 rounded-full">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default GameCard; 