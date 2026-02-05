import GameCardsProps from './GameCards.types';
import GameCard from './GameCard';

const GameCards: React.FC<GameCardsProps> = gameCardsProps => {
  return (
    <div className="game-cards">
      Game Cards Component
      {gameCardsProps.gameCards.map((card, index) => (
        <GameCard key={index} {...card} />
      ))}
    </div>
  );
};

export default GameCards;
