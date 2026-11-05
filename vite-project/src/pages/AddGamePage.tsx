function AddGamePage() {
  return (
    <div className="add-game-page">
      <h1>Add Game</h1>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="platform">Platform:</label>
        <input type="text" id="platform" name="platform" />
        <label htmlFor="status">Status:</label>
        <select id="status" name="status">
          <option value="want to play">Want to play</option>
          <option value="playing">Playing</option>
          <option value="completed">Completed</option>
          <option value="dropped">Dropped</option>
        </select>
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" name="rating" min="0" max="10" />
        <label htmlFor="notes">Notes:</label>
        <textarea id="notes" name="notes"></textarea>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}

export default AddGamePage;
