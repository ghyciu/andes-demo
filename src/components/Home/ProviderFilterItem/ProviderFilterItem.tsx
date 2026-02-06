import { Provider, ProviderName } from '../Provider.types';
import styles from './ProviderFilterItem.module.css';

interface ProviderFilterItemProps {
  provider: Provider;
  count: number;
  isSelected: boolean;
  onSelect: (providerName: ProviderName) => void;
}

const ProviderFilterItem: React.FC<ProviderFilterItemProps> = ({ provider, count, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(provider.name);
  };

  return (
    <div className={`${styles.providerItem} ${isSelected ? styles.selected : ''}`} onClick={handleClick}>
      <img src={provider.imageURL} alt={provider.name} className={styles.providerImage} />
      <span className={styles.providerCount}>({count})</span>
    </div>
  );
};

export default ProviderFilterItem;
