import { ProviderName } from '../../Provider.types';
import { TagName } from '../../Tag.types';

interface GameCard {
  id: string;
  name: string;
  imageURL: string;
  provider: ProviderName;
  tags: TagName[];
  isFavorited: boolean;
  href: string;
}

export default GameCard;
