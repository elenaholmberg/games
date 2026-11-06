import { useEffect, useState } from 'react';
import type { Game } from '../types/game';
import { fetchGames } from '../services/gamesApi';
import GameCard from '../components/GameCard';

function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredGames = games.filter((currentGame) => {
    return selectedStatus === 'all' || currentGame.status === selectedStatus;
  });

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
      } catch (caughtError) {
        setError('Could not load games. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadGames();
  }, []);

  return (
    <>
      <div className="games-page">
        <h1>My Games</h1>
        {isLoading && <p>Loading games...</p>}
        {error && <p>{error}</p>}
        <div className="add-game-button">
          <a href="/add-game">
            <button>Add Game</button>
          </a>
        </div>
        <div>
          <button onClick={() => setSelectedStatus('all')}>All</button>
          <button onClick={() => setSelectedStatus('want')}>
            Want to play
          </button>
          <button onClick={() => setSelectedStatus('playing')}>Playing</button>
          <button onClick={() => setSelectedStatus('completed')}>
            Completed
          </button>
          <button onClick={() => setSelectedStatus('dropped')}>Dropped</button>
        </div>

        {!isLoading &&
          !error &&
          filteredGames.map((currentGame) => (
            <GameCard key={currentGame.id} gameData={currentGame} />
          ))}
      </div>
    </>
  );
}

export default GamesPage;
