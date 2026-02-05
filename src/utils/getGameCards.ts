import gameCardsData from '../data/gameCards.json';
import GameCard from '../components/GameCard/GameCard.types';
import { PROVIDERS, ProviderName } from '../components/GameCard/Provider.types';

// Helper to check if the passed value is a valid Provider
function isValidProvider(value: any): value is ProviderName {
  return PROVIDERS.map(p => p.name).includes(value);
}

// Maps JSON data to GameCard type - used to correct errors in backend (i.e. missing fields)
function mapJsonToGameCard(json: any): GameCard {
  let provider = json.gameProvider;
  if (!isValidProvider(provider)) {
    provider = 'Unknown Company';
  }

  return {
    name: json.name || 'Unknown Game',
    imageURL: json.imageURL || './images/default.png',
    provider: provider
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
