import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { Game } from '../types/game';
import { fetchGameById } from '../services/gamesApi';

function GameDetailsPage() {
  const { gameId } = useParams();
  const [gameData, setGameData] = useState<Game | null>(null);

  useEffect(() => {
    const loadGame = async () => {
      if (!gameId) return;

      const data = await fetchGameById(gameId);
      setGameData(data);
    };

    loadGame();
  }, [gameId]);

  if (!gameData) {
    return <p>Loading game...</p>;
  }

  return (
    <div>
      <h1>{gameData.title}</h1>
      <img src={gameData.coverUrl} alt={gameData.title} />
      <p>Platform: {gameData.platform}</p>
      <p>Rating: {gameData.rating ?? 'Not rated'}</p>
      <p>Notes: {gameData.notes}</p>
    </div>
  );
}

export default GameDetailsPage;
