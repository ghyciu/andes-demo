import React, { useState } from 'react';

import { Provider, ProviderName } from '../Provider.types';
import ProviderFilterItem from '../ProviderFilterItem/ProviderFilterItem';
import GameCard from '../GameCard/GameCard.types';
import styles from './ProviderFilter.module.css';

interface ProviderFilterProps {
  providers: Provider[];
  gameCards: GameCard[];
}

const ProviderFilter: React.FC<ProviderFilterProps> = ({ providers, gameCards }) => {
  const [selectedProvider, setSelectedProvider] = useState<ProviderName | null>(null);

  const activeProviderNames = Array.from(new Set(gameCards.map(card => card.provider)));
  const filteredProviders = providers.filter(provider => activeProviderNames.includes(provider.name));

  const onSelect = (providerName: ProviderName) => {
    setSelectedProvider(providerName);
  };

  return (
    <div className={styles.providerFilter}>
      {filteredProviders.map((provider, index) => (
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
