import GameCardProps from './GameCard.types';

const GameCard: React.FC<GameCardProps> = gameCardProps => {
  return <div className="game-card">{gameCardProps.name}</div>;
};

export default GameCard;
