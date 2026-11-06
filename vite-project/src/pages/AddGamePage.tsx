import { useState } from 'react';
import { useNavigate } from 'react-router';
import { addGame } from '../services/gamesApi';

function AddGamePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [platform, setPlatform] = useState('');
  const [status, setStatus] = useState('want');
  const [rating, setRating] = useState(1);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setIsSaving(true);

    try {
      await addGame({
        title,
        coverUrl,
        platform,
        status,
        rating,
        notes,
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      navigate('/');
    } catch (caughtError) {
      setError('Could not add game. Please try again.');
      setIsSaving(false);
    }
  };

  return (
    <div className="add-game-page">
      <h1>Add Game</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="coverUrl">Cover URL:</label>
        <input
          type="url"
          id="coverUrl"
          name="coverUrl"
          value={coverUrl}
          onChange={(e) => setCoverUrl(e.target.value)}
        />

        <label htmlFor="platform">Platform:</label>
        <input
          type="text"
          id="platform"
          name="platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          required
        />

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
          onChange={(e) => setRating(Number(e.target.value))}
        />

        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button type="submit" disabled={isSaving}>
          Add Game
        </button>
      </form>

      {isSaving && (
        <div className="loading-modal-backdrop">
          <div className="loading-modal" role="alert" aria-live="assertive">
            <h2>Adding game...</h2>
            <p>Please wait while your game is being added.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddGamePage;
