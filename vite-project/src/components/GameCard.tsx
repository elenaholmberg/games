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

      <h4>{gameData.title}</h4>
      <p className="subtitle">
        Platform: <span className="value">{gameData.platform}</span>
      </p>
      <p className="subtitle">
        Status: <span className="value">{gameData.status}</span>
      </p>
      <p className="subtitle">
        Rating: <span className="value">{gameData.rating ?? 'Not rated'}</span> ⭐
      </p>
      <p className="subtitle">
        Notes: <span className="value">{gameData.notes}</span>
      </p>
    </Link>
  );
}

export default GameCard;
