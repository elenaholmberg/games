import type { Game } from '../types/game';

type GameCardProps = {
  gameData: Game;
};

function GameCard({ gameData }: GameCardProps) {
  return (
    <div className="game-card">
      <h2>{gameData.title}</h2>
      <p>{gameData.platform}</p>
    </div>
  );
}

export default GameCard;
