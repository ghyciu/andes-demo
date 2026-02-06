import React, { useEffect, useState } from 'react';

import GameCards from '../components/Home/GameCards/GameCards';
import GameCard from '../components/Home/GameCard/GameCard.types';
import { getGameCards, getGameCardsByTag } from '../utils/getGameCards';

import TagFilter from '../components/Home/TagFilter/TagFilter';
import { TAGS, TagName } from '../components/Home/Tag.types';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gameCards, setGameCards] = useState<GameCard[]>([]);

  const fetchGameCards = async () => {
    setIsLoading(true);
    getGameCards().then((data: GameCard[]) => {
      setGameCards(data);
      setIsLoading(false);
    });
  };

  const fetchGameCardsByTag = async (tagName: TagName) => {
    setIsLoading(true);
    getGameCardsByTag(tagName).then((data: GameCard[]) => {
      setGameCards(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchGameCards();
  }, []);

  const onTagSelect = (tagName: TagName) => {
    if (tagName === 'Home') {
      fetchGameCards();
      return;
    }
    fetchGameCardsByTag(tagName);
  };

  return (
    <div className="root-home">
      <TagFilter tags={TAGS} onTagSelect={onTagSelect} count={gameCards.length} isLoading={isLoading} />
      <GameCards gameCards={gameCards} isLoading={isLoading} />
    </div>
  );
};

export default Home;
