import type { Game } from '../types/game';

type GameCardProps = {
  gameData: Game;
};

function GameCard({ gameData }: GameCardProps) {
  return (
    <div className="game-card">
      <img src={gameData.coverUrl} alt={gameData.title} />

      <h2>{gameData.title}</h2>
      <p>{gameData.platform}</p>
      <p>{gameData.status}</p>
      <p>Rating: {gameData.rating ?? 'Not rated'}</p>
    </div>
  );
}

export default GameCard;
