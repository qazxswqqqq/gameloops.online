import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              GameLoops
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-cyan-300 transition-colors">
              Home
            </Link>
            <Link to="/?category=action" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-cyan-300 transition-colors">
              Action
            </Link>
            <Link to="/?category=strategy" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-cyan-300 transition-colors">
              Strategy
            </Link>
            <Link to="/?category=puzzle" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-cyan-300 transition-colors">
              Puzzle
            </Link>
            <Link to="/?category=racing" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-cyan-300 transition-colors">
              Racing
            </Link>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:block">
            <SearchBar className="w-64" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              {/* Mobile Search */}
              <div className="mb-4">
                <SearchBar />
              </div>

              {/* Mobile Navigation Links */}
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-cyan-300 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/?category=action"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-cyan-300 transition-colors"
              >
                Action
              </Link>
              <Link
                to="/?category=strategy"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-cyan-300 transition-colors"
              >
                Strategy
              </Link>
              <Link
                to="/?category=puzzle"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-cyan-300 transition-colors"
              >
                Puzzle
              </Link>
              <Link
                to="/?category=racing"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-cyan-300 transition-colors"
              >
                Racing
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 