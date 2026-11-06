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

      <p>Platform: {gameData.platform}</p>
      <p>Rating: {gameData.rating ?? 'Not rated'}</p>
      <p>Notes: {gameData.notes}</p>

      {error && <p>{error}</p>}

      <Link to={`/games/${gameData.id}/edit`}>Edit Game</Link>

      <button onClick={handleDelete} disabled={isDeleting}>
        Delete Game
      </button>

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
