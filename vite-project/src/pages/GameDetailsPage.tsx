import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import type { Game } from '../types/game';
import { deleteGame, fetchGameById } from '../services/gamesApi';

function GameDetailsPage() {
  const { gameId } = useParams();
  const navigate = useNavigate();

  const [gameData, setGameData] = useState<Game | null>(null);
  const [error, setError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!gameId) return;

    setIsDeleting(true);
    setError('');

    try {
      await deleteGame(gameId);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigate('/');
    } catch (caughtError) {
      setError('Could not delete this game. Please try again.');
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    const loadGame = async () => {
      if (!gameId) return;

      try {
        const data = await fetchGameById(gameId);
        setGameData(data);
      } catch (caughtError) {
        setError('Could not load this game. Please try again.');
      }
    };

    loadGame();
  }, [gameId]);

  if (error && !gameData) {
    return <p>{error}</p>;
  }

  if (!gameData) {
    return <p>Loading game...</p>;
  }

  return (
    <div className="game-details-page">
      <h1>{gameData.title}</h1>

      <img src={gameData.coverUrl} alt={gameData.title} />

      <p className="subtitle">
        Platform: <span className="value">{gameData.platform}</span>
      </p>
      <p className="subtitle">
        Status: <span className="value">{gameData.status}</span>
      </p>
      <p className="subtitle">
        Rating: <span className="value">{gameData.rating ?? 'Not rated'}</span>{' '}
        ⭐
      </p>
      <p className="subtitle">
        Notes: <span className="value">{gameData.notes}</span>
      </p>

      {error && <p>{error}</p>}

      <div className="button-container">
        <Link to={`/games/${gameData.id}/edit`}>
          <img
            src="../images/edit-star.png"
            alt="want-button"
            className="mario-button"
          />
        </Link>

        <button onClick={handleDelete} disabled={isDeleting}>
          <img
            src="../images/edit-star.png"
            alt="want-button"
            className="mario-button"
          />
        </button>
      </div>

      {isDeleting && (
        <div className="loading-modal-backdrop">
          <div className="loading-modal" role="alert" aria-live="assertive">
            <h2>Deleting game...</h2>
            <p>Please wait while your game is being deleted.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameDetailsPage;
