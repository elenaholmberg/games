import { useEffect, useState } from 'react';
import type { Game } from './types/game';
import { fetchGames } from './services/gamesApi';
import GameCard from './components/GameCard';

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const filteredGames = games.filter((currentGame) => {
    return selectedStatus === 'all' || currentGame.status === selectedStatus;
  });

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
      <button onClick={() => setSelectedStatus('all')}>All</button>
      <button onClick={() => setSelectedStatus('want to play')}>
        Want to play
      </button>
      <button onClick={() => setSelectedStatus('playing')}>Playing</button>
      <button onClick={() => setSelectedStatus('completed')}>Completed</button>
      <button onClick={() => setSelectedStatus('dropped')}>Dropped</button>

      {filteredGames.map((currentGame) => (
        <GameCard key={currentGame.id} gameData={currentGame} />
      ))}
    </div>
  );
}

export default App;
