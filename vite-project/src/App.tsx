import { Route, Routes } from 'react-router';
import GamesPage from './pages/GamesPage';
import GameDetailsPage from './pages/GameDetailsPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<GamesPage />} />
      </Routes>
      <Routes>
        <Route path="/games/:gameId" element={<GameDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
