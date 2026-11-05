import { Route, Routes } from 'react-router';
import GamesPage from './pages/GamesPage';
import GameDetailsPage from './pages/GameDetailsPage';
import AddGamePage from './pages/AddGamePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<GamesPage />} />
        <Route path="/games/:gameId" element={<GameDetailsPage />} />
        <Route path="/add-game" element={<AddGamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
