import { useState } from 'react';
import { useNavigate } from 'react-router';
import { addGame } from '../services/gamesApi';

function AddGamePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [platform, setPlatform] = useState('');
  const [status, setStatus] = useState('want');
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState('');
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addGame({
      title,
      coverUrl,
      platform,
      status,
      rating,
      notes,
    });

    // Reset form fields after submission
    setTitle('');
    setCoverUrl('');
    setPlatform('');
    setStatus('want to play');
    setRating(0);
    setNotes('');
    setIsSuccessVisible(true);
  };

  return (
    <div className="add-game-page">
      <h1>Add Game</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
        />
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="want to play">Want to play</option>
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
        ></textarea>
        <button type="submit">Add Game</button>
      </form>

      {isSuccessVisible && (
        <div className="success-modal-backdrop">
          <div
            className="success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
          >
            <h2 id="success-modal-title">Game successfully added</h2>
            <p>Your game has been added to your collection.</p>
            <button type="button" onClick={() => navigate('/')}>
              Go to home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddGamePage;
