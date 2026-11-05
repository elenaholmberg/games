import { Route, Routes } from 'react-router';
import GamesPage from './pages/GamesPage';
import GameDetailsPage from './pages/GameDetailsPage';
import AddGamePage from './pages/AddGamePage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<GamesPage />} />
        <Route path="/games/:gameId" element={<GameDetailsPage />} />
        <Route path="/add-game" element={<AddGamePage />} />
      </Routes>
    </div>
  );
}

export default App;
