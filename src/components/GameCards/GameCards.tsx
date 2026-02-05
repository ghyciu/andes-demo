import GameCardsProps from './GameCards.types';
import GameCard from './GameCard';

import styles from './GameCards.module.css';

const GameCards: React.FC<GameCardsProps> = gameCardsProps => {
  return (
    <div className={styles.gameCards}>
      {gameCardsProps.gameCards.map((card, index) => (
        <GameCard key={index} {...card} />
      ))}
    </div>
  );
};

export default GameCards;
