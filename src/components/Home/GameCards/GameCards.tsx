import GameCardItem from '../GameCard/GameCard.types';
import GameCard from '../GameCard/GameCard';

import styles from './GameCards.module.css';

interface GameCardsProps {
  gameCards: GameCardItem[];
  isLoading: boolean;
}

const GameCards: React.FC<GameCardsProps> = ({ gameCards, isLoading }) => {
  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.gameCards}>
      {gameCards.map((card, index) => (
        <GameCard key={index} {...card} />
      ))}
    </div>
  );
};

export default GameCards;
