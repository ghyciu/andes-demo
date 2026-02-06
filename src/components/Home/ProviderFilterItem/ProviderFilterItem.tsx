import { Provider } from '../Provider.types';
import styles from './ProviderFilterItem.module.css';

interface ProviderFilterItemProps {
  provider: Provider;
  count: number;
}

const ProviderFilterItem: React.FC<ProviderFilterItemProps> = ({ provider, count }) => {
  return (
    <div className={styles.providerItem}>
      <img src={provider.imageURL} alt={provider.name} className={styles.providerImage} />
      <span className={styles.providerCount}>({count})</span>
    </div>
  );
};

export default ProviderFilterItem;
