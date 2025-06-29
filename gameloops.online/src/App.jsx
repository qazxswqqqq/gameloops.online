import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
import GamePlayPage from './pages/GamePlayPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="bg-gray-950 min-h-screen text-white font-sans">
          <Header />
          <main className="pt-24">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/game/:gameId" element={<GameDetailPage />} />
              <Route path="/play/:gameId" element={<GamePlayPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
