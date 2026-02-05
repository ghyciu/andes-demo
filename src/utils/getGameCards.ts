import gameCardsData from '../data/gameCards.json';
import GameCard from '../components/GameCards/GameCard.types';

// Maps JSON data to GameCard type - used to correct errors in backend (i.e. missing fields)
function mapJsonToGameCard(json: any): GameCard {
  return {
    name: json.name || 'Unknown Game',
    imageURL: json.imageURL || './images/default.png'
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
