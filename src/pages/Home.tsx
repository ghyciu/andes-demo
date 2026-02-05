import React, { useEffect, useState } from 'react';

import GameCards from '../components/GameCards/GameCards';
import GameCard from '../components/GameCard/GameCard.types';
import getGameCards from '../utils/getGameCards';

const Home: React.FC = () => {
  const [gameCards, setGameCards] = useState<GameCard[]>([]);

  useEffect(() => {
    getGameCards().then(data => setGameCards(data));
  }, []);

  return (
    <div className="root-home">
      Home Page Component
      <GameCards gameCards={gameCards} />
    </div>
  );
};

export default Home;
