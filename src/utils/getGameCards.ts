import gameCardsData from '../data/gameCards.json';
import GameCard from '../components/Home/GameCard/GameCard.types';
import { PROVIDERS, ProviderName } from '../components/Home/Provider.types';
import Tag, { TagName } from '../components/Home/Tag.types';

// Helper to check if the passed value is a valid Provider
function isValidProvider(value: any): value is ProviderName {
  return PROVIDERS.map(p => p.name).includes(value);
}

// Maps JSON data to GameCard type - used to correct errors in backend (i.e. missing fields)
function mapJsonToGameCard(json: any): GameCard {
  // Validates provider field and assigns unknown provider if invalid or missing
  let provider = json.provider;
  if (!isValidProvider(provider)) {
    provider = 'Unknown Provider';
  }

  return {
    name: json.name || 'Unknown Game',
    imageURL: json.imageURL || './images/default.png',
    provider: provider,
    tags: json.tags || []
  };
}

const LOADING_DELAY_MS = 1000;

// Simulates an asynchronous fetch of all game cards data
export function getGameCards(): Promise<GameCard[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve((gameCardsData as any[]).map(mapJsonToGameCard));
    }, LOADING_DELAY_MS);
  });
}

// Simulates an asynchronous fetch of game cards filtered by a specific tag
export function getGameCardsByTag(tagName: TagName): Promise<GameCard[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const filteredCards = (gameCardsData as any[]).filter(card => card.tags.includes(tagName));
      resolve(filteredCards.map(mapJsonToGameCard));
    }, LOADING_DELAY_MS);
  });
}
