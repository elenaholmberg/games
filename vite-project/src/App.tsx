import { useState } from 'react';
import type { Game } from './types/game';

function App() {
  const [games, setGames] = useState<Game[]>([]);

  return (
    <div className="app">
      <h1>My Games</h1>
    </div>
  );
}

export default App;
