import React, { useEffect, useState } from 'react';

import GameCards from '../components/GameCards/GameCards';
import GameCard from '../components/GameCards/GameCard.types';
import gameCardsData from '../data/gameCards.json';

function mapJsonToGameCard(json: any): GameCard {
  return {
    name: json.name
  };
}

async function getGameCards(): Promise<GameCard[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve((gameCardsData as any[]).map(mapJsonToGameCard));
    }, 3000);
  });
}

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
