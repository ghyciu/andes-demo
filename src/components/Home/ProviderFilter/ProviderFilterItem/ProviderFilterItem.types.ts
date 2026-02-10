import { Provider, ProviderName } from '../../Provider.types';

interface ProviderFilterItem {
  provider: Provider;
  count: number;
  isSelected: boolean;
  onSelect: (providerName: ProviderName | null) => void;
}

export default ProviderFilterItem;
