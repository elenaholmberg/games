import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import type { Game } from '../types/game';
import { fetchGameById, updateGame } from '../services/gamesApi';

function EditGamePage() {
  const navigate = useNavigate();
  const { gameId } = useParams();

  const [gameData, setGameData] = useState<Game | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [rating, setRating] = useState<number | ''>('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const loadGame = async () => {
      if (!gameId) return;

      try {
        const data = await fetchGameById(gameId);
        setGameData(data);
        setStatus(data.status);
        setRating(data.rating ?? '');
        setNotes(data.notes ?? '');
      } catch (caughtError) {
        setError('Could not load this game. Please try again.');
      }
    };

    loadGame();
  }, [gameId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!gameId) return;

    setIsSaving(true);
    setError('');

    try {
      await updateGame(gameId, {
        status,
        notes,
        ...(rating !== '' ? { rating } : {}),
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigate('/');
    } catch (caughtError) {
      setError('Could not save changes. Please try again.');
      setIsSaving(false);
    }
  };

  if (!gameData && error) {
    return <p>{error}</p>;
  }

  if (!gameData) {
    return <p>Loading game...</p>;
  }

  return (
    <div className="edit-game-page">
      <h1>Edit Game:</h1>
      <h4>{gameData.title}</h4>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="want">Want to play</option>
          <option value="playing">Playing</option>
          <option value="completed">Completed</option>
          <option value="dropped">Dropped</option>
        </select>

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          step="1"
          value={rating}
          onChange={(e) =>
            setRating(e.target.value === '' ? '' : Number(e.target.value))
          }
        />

        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button type="submit" disabled={isSaving}>
          Save Changes
        </button>
      </form>

      {isSaving && (
        <div className="loading-modal-backdrop">
          <div className="loading-modal" role="alert" aria-live="assertive">
            <h2>Editing game...</h2>
            <p>Please wait while your game is being updated.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditGamePage;
