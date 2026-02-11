import { Provider, ProviderName } from '../Provider.types';
import GameCard from '../GameCards/GameCard/GameCard.types';
import TagFilter from '../PrimaryFilter/TagFilter/TagFilter.types';

interface ProviderFilter {
  providers: Provider[];
  gameCards: GameCard[];
  onProviderSelect: (providerName: ProviderName | null) => void;
  selectedTag?: string | null;
}

export default ProviderFilter;
