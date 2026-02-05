import gameCardsData from '../data/gameCards.json';
import GameCard from '../components/Home/GameCard/GameCard.types';
import { PROVIDERS, ProviderName } from '../components/Home/Provider.types';

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

// Simulates an asynchronous fetch of game cards data
function getGameCards(): Promise<GameCard[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve((gameCardsData as any[]).map(mapJsonToGameCard));
    }, 3000);
  });
}

export default getGameCards;
