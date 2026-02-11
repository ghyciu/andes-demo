import gameCardsData from '../data/gameCards.json';
import GameCard from '../components/Home/GameCards/GameCard/GameCard.types';
import { PROVIDERS, ProviderName } from '../components/Home/Provider.types';
import { TAGS, TagName } from '../components/Home/Tag.types';

// Helper to check if the passed value is a valid Provider
function isValidProvider(value: any): value is ProviderName {
  return PROVIDERS.map(p => p.name).includes(value);
}

// Maps JSON data to GameCard type - used to correct errors in backend (i.e. missing fields)
function mapJsonToGameCard(json: any): GameCard {
  // Validates provider field and assigns unknown provider if invalid or missing
  let provider = json.provider;
  if (typeof provider === 'undefined' || provider === null) {
    console.warn(`Missing provider for game "${json.name}". Assigning "Unknown Provider".`);
    provider = 'Unknown Provider';
  } else if (!isValidProvider(provider)) {
    console.warn(`Invalid provider "${provider}" for game "${json.name}". Assigning "Unknown Provider".`);
    provider = 'Unknown Provider';
  }

  // Validates tags field and removes tag names that are not in the predefined TAGS list
  let tags: TagName[] = [];
  if (typeof json.tags === 'undefined' || json.tags === null) {
    console.warn(`Missing tags for game "${json.name}". Assigning empty tags list.`);
  }
  if (Array.isArray(json.tags)) {
    tags = json.tags.filter((tag: string) => TAGS.map(t => t.name).includes(tag));
    if (tags.length < json.tags.length) {
      console.warn(`Some invalid tags found for game "${json.name}". Only valid tags will be assigned.`);
    }
  }

  // Fetches local storage for isFavorited state
  const isFavorited = JSON.parse(localStorage.getItem('favorites') || '[]').includes(json.id);

  return {
    id: json.id ? String(json.id) : Math.random().toString(36),
    name: json.name || 'Unknown Game',
    imageURL: json.imageURL || './images/default.png',
    provider: provider,
    tags: tags,
    href: json.href || '/unknown-game',
    isFavorited: isFavorited
  } as GameCard;
}

const LOADING_DELAY_MS = 200;

// Simulates an asynchronous fetch of all game cards data
export function getGameCards(): Promise<GameCard[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve((gameCardsData as GameCard[]).map(mapJsonToGameCard));
    }, LOADING_DELAY_MS);
  });
}

// Simulates an asynchronous fetch of game cards filtered by tag
export function getGameCardsByTag(tagName: TagName): Promise<GameCard[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const filteredCards = (gameCardsData as GameCard[]).filter(card => card.tags.includes(tagName));
      resolve(filteredCards.map(mapJsonToGameCard));
    }, LOADING_DELAY_MS);
  });
}

// Simulates an asynchronous fetch of game cards filtered by tag and provider
export function getGameCardsByTagAndProvider(tagName: TagName | null, providerName: ProviderName): Promise<GameCard[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const filteredCards = (gameCardsData as GameCard[]).filter(card => {
        const matchesTag = tagName ? card.tags.includes(tagName) : true;
        const matchesProvider = card.provider === providerName;
        return matchesTag && matchesProvider;
      });
      resolve(filteredCards.map(mapJsonToGameCard));
    }, LOADING_DELAY_MS);
  });
}

// Simulates an asynchronous fetch of game cards filtered by name
export function getGameCardsByName(name: string): Promise<GameCard[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const lowercaseName = name.toLowerCase();
      const filteredCards = (gameCardsData as GameCard[]).filter(card => {
        return card.name && card.name.toLowerCase().includes(lowercaseName);
      });
      resolve(filteredCards.map(mapJsonToGameCard));
    }, LOADING_DELAY_MS);
  });
}
