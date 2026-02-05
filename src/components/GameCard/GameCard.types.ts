import { ProviderName } from './Provider.types';

interface GameCard {
  name: string;
  imageURL: string;
  provider: ProviderName;
}

export default GameCard;
