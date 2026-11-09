import type { Game } from '../types/game';
import { Link } from 'react-router';
import '../styles/hero.scss';

type GameCardProps = {
  gameData: Game;
};

function GameCard({ gameData }: GameCardProps) {
  return (
    <Link to={`/games/${gameData.id}`} className="game-card-link">
      <img src={gameData.coverUrl} alt={gameData.title} />

      <h2>{gameData.title}</h2>
      <p>{gameData.platform}</p>
      <p>{gameData.status}</p>
      <p>Rating: {gameData.rating ?? 'Not rated'}</p>
      <p>Notes: {gameData.notes}</p>
    </Link>
  );
}

export default GameCard;
