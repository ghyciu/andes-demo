import React, { useEffect, useState } from 'react';

import BannerCarrousel from '../components/Home/BannerCarrousel/BannerCarrousel';
import { BANNERS } from '../components/Home/BannerCarrousel/Banner.types';

import GameCards from '../components/Home/GameCards/GameCards';
import GameCard from '../components/Home/GameCard/GameCard.types';
import { getGameCards, getGameCardsByTag, getGameCardsByTagAndProvider } from '../utils/getGameCards';

import ProviderFilter from '../components/Home/ProviderFilter/ProviderFilter';
import { PROVIDERS, ProviderName } from '../components/Home/Provider.types';
import TagFilter from '../components/Home/TagFilter/TagFilter';
import { TAGS, TagName } from '../components/Home/Tag.types';

import Body from '../components/Home/Body/Body';
import { BODY_TEXT } from '../components/Home/Body/Body.types';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<TagName | null>(null);
  const [gameCards, setGameCards] = useState<GameCard[]>([]);
  const [gameCardsByTag, setGameCardsByTag] = useState<GameCard[]>([]);

  // Fetches all game cards without any filters
  const fetchGameCards = async () => {
    setIsLoading(true);
    getGameCards().then((data: GameCard[]) => {
      setGameCards(data);
      setGameCardsByTag(data);
      setIsLoading(false);
    });
  };

  // Fetches game cards filtered by the selected tag
  const fetchGameCardsByTag = async (tagName: TagName) => {
    setIsLoading(true);
    getGameCardsByTag(tagName).then((data: GameCard[]) => {
      setGameCards(data);
      setGameCardsByTag(data);
      setIsLoading(false);
    });
  };

  // Fetches game cards filtered by both the selected tag and provider
  const fetchGameCardsByProvider = async (providerName: ProviderName) => {
    setIsLoading(true);
    getGameCardsByTagAndProvider(selectedTag, providerName).then((data: GameCard[]) => {
      setGameCards(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchGameCards();
  }, []);

  // Handles tag selection. If 'Home' is selected, fetches all cards.
  const onTagSelect = (tagName: TagName) => {
    if (tagName === 'Home') {
      fetchGameCards();
      setSelectedTag(null);
      return;
    }
    fetchGameCardsByTag(tagName);
    setSelectedTag(tagName);
  };

  // Handles provider selection. If provider is deselected, filters by current tag. If no tag is selected, fetches all cards
  const onProviderSelect = (providerName: ProviderName | null) => {
    if (providerName === null) {
      if (selectedTag === null) {
        fetchGameCards();
        return;
      }
      fetchGameCardsByTag(selectedTag);
      return;
    }
    fetchGameCardsByProvider(providerName);
  };

  return (
    <div className="root-home">
      <BannerCarrousel banners={BANNERS} />
      <ProviderFilter providers={PROVIDERS} gameCards={gameCardsByTag} onProviderSelect={onProviderSelect} />
      <TagFilter tags={TAGS} count={gameCards.length} isLoading={isLoading} onTagSelect={onTagSelect} />
      <GameCards gameCards={gameCards} isLoading={isLoading} />
      <Body body={BODY_TEXT} />
    </div>
  );
};

export default Home;
