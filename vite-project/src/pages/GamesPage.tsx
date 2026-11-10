import { useEffect, useState } from 'react';
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
      <h2>
        It's-a time to jump into your very own Mushroom Kingdom! 🍄 Keep track
        of all your Mario adventures, from racing down Rainbow Road to rescuing
        Princess Peach. Add games to your wishlist, keep tabs on your current
        quests, rate your victories and save your gaming memories. Whether
        you've collected every star or still have worlds to conquer, this is
        your home for all things Mario!
      </h2>
      <h3>Let's-a go! ⭐</h3>

      <div className="status-filter">
        <button
          className={selectedStatus === 'all' ? 'active' : ''}
          onClick={() => setSelectedStatus('all')}
        >
          <img
            src="../images/all.png"
            alt="mario-button"
            className="mario-button"
          />
        </button>
        <button
          className={selectedStatus === 'want' ? 'active' : ''}
          onClick={() => setSelectedStatus('want')}
        >
          <img
            src="../images/want-to-play.png"
            alt="want-button"
            className="mario-button"
          />
        </button>
        <button
          className={selectedStatus === 'playing' ? 'active' : ''}
          onClick={() => setSelectedStatus('playing')}
        >
          <img
            src="../images/playing.png"
            alt="playing-button"
            className="mario-button"
          />
        </button>
        <button
          className={selectedStatus === 'completed' ? 'active' : ''}
          onClick={() => setSelectedStatus('completed')}
        >
          <img
            src="../images/completed.png"
            alt="completed.png"
            className="mario-button"
          />
        </button>
        <button
          className={selectedStatus === 'dropped' ? 'active' : ''}
          onClick={() => setSelectedStatus('dropped')}
        >
          <img
            src="../images/dropped.png"
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
