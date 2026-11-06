import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import type { Game } from '../types/game';
import { fetchGameById, updateGame } from '../services/gamesApi';

function EditGamePage() {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [gameData, setGameData] = useState<Game | null>(null);
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const loadGame = async () => {
      if (!gameId) return;

      const data = await fetchGameById(gameId);
      setGameData(data);
      setStatus(data.status);
      setRating(data.rating ?? 0);
      setNotes(data.notes ?? '');
    };

    loadGame();
  }, [gameId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!gameId) return;

    await updateGame(gameId, {
      status,
      rating,
      notes,
    });

    navigate(`/games/${gameId}`);
  };

  if (!gameData) {
    return <p>Loading game...</p>;
  }

  return (
    <div>
      <h1>Edit Game: {gameData.title}</h1>
      {
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
            min="0"
            max="10"
            step="1"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <button type="submit">Save Changes</button>
        </form>
      }
    </div>
  );
}

export default EditGamePage;
