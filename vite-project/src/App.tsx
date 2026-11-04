import { useEffect, useState } from 'react';
import type { Game } from './types/game';
import { fetchGames } from './services/gamesApi';

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

      {games.map((game) => (
        <div key={game.id} className="game-card">
          <h2>{game.title}</h2>
          <p>{game.platform}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
