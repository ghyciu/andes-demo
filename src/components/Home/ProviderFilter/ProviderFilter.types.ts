import { Provider, ProviderName } from '../Provider.types';
import GameCard from '../GameCards/GameCard/GameCard.types';

interface ProviderFilter {
  providers: Provider[];
  gameCards: GameCard[];
  onProviderSelect: (providerName: ProviderName | null) => void;
}

export default ProviderFilter;
