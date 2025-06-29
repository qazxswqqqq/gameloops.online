import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-cyan-400 mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="space-x-4">
          <Link
            to="/"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors inline-block"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 