import GameCardProps from './GameCard.types';
import styles from './GameCard.module.css';

const GameCard: React.FC<GameCardProps> = gameCardProps => {
  return (
    <div className={styles.gameCard}>
      <img src={gameCardProps.imageURL} alt={gameCardProps.name} />
    </div>
  );
};

export default GameCard;
