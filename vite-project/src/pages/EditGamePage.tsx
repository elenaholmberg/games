import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { Game } from '../types/game';
import { fetchGameById } from '../services/gamesApi';

function EditGamePage() {
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

  if (!gameData) {
    return <p>Loading game...</p>;
  }

  return (
    <div>
      <h1>Edit Game: {gameData.title}</h1>
      {
        <form>
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
        </form>
      }
    </div>
  );
}

export default EditGamePage;
