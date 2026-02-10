import { ProviderName } from '../../Provider.types';
import { TagName } from '../../Tag.types';

interface GameCard {
  id: string;
  name: string;
  imageURL: string;
  provider: ProviderName;
  tags: TagName[];
  isFavorited: boolean;
}

export default GameCard;
