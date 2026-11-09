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
      <h1>Let's-a go!</h1>

      <div className="status-filter">
        <button
          className={selectedStatus === 'all' ? 'active' : ''}
          onClick={() => setSelectedStatus('all')}
        >
          <img
            src="../public/images/all.png"
            alt="mario-button"
            className="mario-button"
          />
        </button>
        <button
          className={selectedStatus === 'want' ? 'active' : ''}
          onClick={() => setSelectedStatus('want')}
        >
          <img
            src="../public/images/want-to-play.png"
            alt="want-button"
            className="mario-button"
          />
        </button>
        <button
          className={selectedStatus === 'playing' ? 'active' : ''}
          onClick={() => setSelectedStatus('playing')}
        >
          <img
            src="../public/images/playing.png"
            alt="playing-button"
            className="mario-button"
          />
        </button>
        <button
          className={selectedStatus === 'completed' ? 'active' : ''}
          onClick={() => setSelectedStatus('completed')}
        >
          <img
            src="../public/images/completed.png"
            alt="completed.png"
            className="mario-button"
          />
        </button>
        <button
          className={selectedStatus === 'dropped' ? 'active' : ''}
          onClick={() => setSelectedStatus('dropped')}
        >
          <img
            src="../public/images/dropped.png"
            alt="dropped-button"
            className="mario-button"
          />
        </button>
      </div>

      {isLoading && <p>Loading games...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && games.length === 0 && <p>No games found.</p>}

      <div className="games-grid">
        {!isLoading &&
          !error &&
          games.map((currentGame) => (
            <GameCard key={currentGame.id} gameData={currentGame} />
          ))}
      </div>
    </div>
  );
}

export default GamesPage;
