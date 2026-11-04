import { useEffect, useState } from 'react';
import type { Game } from './types/game';
import { fetchGames } from './services/gamesApi';
import GameCard from './components/GameCard';

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchGames();
      setGames(data);
    };

    loadGames();
  }, []);

  return (
    <div className="app">
      <h1>My Games</h1>

      {games.map((currentGame) => (
        <GameCard key={currentGame.id} gameData={currentGame} />
      ))}
    </div>
  );
}

export default App;
