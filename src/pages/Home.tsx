import React, { useEffect, useState } from 'react';

import GameCards from '../components/Home/GameCards/GameCards';
import GameCard from '../components/Home/GameCard/GameCard.types';
import { getGameCards, getGameCardsByTag } from '../utils/getGameCards';

import TagFilter from '../components/Home/TagFilter/TagFilter';
import { TAGS, TagName } from '../components/Home/Tag.types';

const Home: React.FC = () => {
  const [gameCards, setGameCards] = useState<GameCard[]>([]);

  useEffect(() => {
    getGameCards().then((data: GameCard[]) => {
      setGameCards(data);
    });
  }, []);

  const onTagSelect = (tagName: TagName) => {
    setGameCards([]);
    getGameCardsByTag(tagName).then((data: GameCard[]) => {
      setGameCards(data);
    });
  };

  return (
    <div className="root-home">
      Home Page Component
      <TagFilter tags={TAGS} onTagSelect={onTagSelect} />
      <GameCards gameCards={gameCards} />
    </div>
  );
};

export default Home;
