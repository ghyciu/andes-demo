import React, { useEffect, useState } from 'react';

import GameCards from '../components/Home/GameCards/GameCards';
import GameCard from '../components/Home/GameCard/GameCard.types';
import { getGameCards, getGameCardsByTag } from '../utils/getGameCards';

import TagFilter from '../components/Home/TagFilter/TagFilter';
import { TAGS, TagName } from '../components/Home/Tag.types';

const Home: React.FC = () => {
  const [isGameCardsLoading, setIsGameCardsLoading] = useState(true);
  const [gameCards, setGameCards] = useState<GameCard[]>([]);

  useEffect(() => {
    getGameCards().then((data: GameCard[]) => {
      setIsGameCardsLoading(false);
      setGameCards(data);
    });
  }, []);

  const onTagSelect = (tagName: TagName) => {
    setIsGameCardsLoading(true);
    getGameCardsByTag(tagName).then((data: GameCard[]) => {
      setGameCards(data);
      setIsGameCardsLoading(false);
    });
  };

  return (
    <div className="root-home">
      <TagFilter tags={TAGS} onTagSelect={onTagSelect} count={gameCards.length} />
      <GameCards gameCards={gameCards} isLoading={isGameCardsLoading} />
    </div>
  );
};

export default Home;
