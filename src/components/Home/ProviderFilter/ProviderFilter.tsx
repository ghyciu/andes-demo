import React, { useState } from 'react';

import { Provider, ProviderName } from '../Provider.types';
import ProviderFilterItem from '../ProviderFilterItem/ProviderFilterItem';
import GameCard from '../GameCard/GameCard.types';
import styles from './ProviderFilter.module.css';

interface ProviderFilterProps {
  providers: Provider[];
  gameCards: GameCard[];
  onProviderSelect: (providerName: ProviderName) => void;
}

const ProviderFilter: React.FC<ProviderFilterProps> = ({ providers, gameCards, onProviderSelect }) => {
  const [selectedProvider, setSelectedProvider] = useState<ProviderName | null>(null);

  const onSelect = (providerName: ProviderName) => {
    setSelectedProvider(providerName);
    onProviderSelect(providerName);
  };

  return (
    <div className={styles.providerFilter}>
      {providers.map((provider, index) => (
        <ProviderFilterItem
          key={`provider-${index}`}
          provider={provider}
          count={gameCards.filter(card => card.provider === provider.name).length}
          isSelected={selectedProvider === provider.name}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default ProviderFilter;
