import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import type { Game } from '../types/game';
import { fetchGames } from '../services/gamesApi';
import GameCard from '../components/GameCard';
import useLocalStorage from '../hooks/useLocalStorage';

function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedStatus, setSelectedStatus] = useLocalStorage<string>(
    'questlog-status-filter',
    'all',
  );
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      setIsLoading(true);
      setError('');

      try {
        const data = await fetchGames(selectedStatus);
        setGames(data);
      } catch (caughtError) {
        setError('Could not load games. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadGames();
  }, [selectedStatus]);

  return (
    <div className="games-page">
      <h1>My Games</h1>

      <div className="add-game-button">
        <Link to="/add-game">
          <button>Add Game</button>
        </Link>
      </div>

      <div>
        <button onClick={() => setSelectedStatus('all')}>All</button>
        <button onClick={() => setSelectedStatus('want')}>Want to play</button>
        <button onClick={() => setSelectedStatus('playing')}>Playing</button>
        <button onClick={() => setSelectedStatus('completed')}>
          Completed
        </button>
        <button onClick={() => setSelectedStatus('dropped')}>Dropped</button>
      </div>

      {isLoading && <p>Loading games...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && games.length === 0 && <p>No games found.</p>}

      {!isLoading &&
        !error &&
        games.map((currentGame) => (
          <GameCard key={currentGame.id} gameData={currentGame} />
        ))}
    </div>
  );
}

export default GamesPage;
