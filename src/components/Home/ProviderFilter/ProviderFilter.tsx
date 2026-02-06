import React, { useState } from 'react';

import { PROVIDERS, Provider } from '../Provider.types';
import ProviderFilterItem from '../ProviderFilterItem/ProviderFilterItem';
import GameCard from '../GameCard/GameCard.types';
import styles from './ProviderFilter.module.css';

interface ProviderFilterProps {
  providers: Provider[];
  gameCards: GameCard[];
}

const ProviderFilter: React.FC<ProviderFilterProps> = ({ providers, gameCards }) => {
  const activeProviderNames = Array.from(new Set(gameCards.map(card => card.provider)));
  const filteredProviders = providers.filter(provider => activeProviderNames.includes(provider.name));

  return (
    <div className={styles.providerFilter}>
      {filteredProviders.map((provider, index) => (
        <ProviderFilterItem key={`provider-${index}`} provider={provider} count={gameCards.filter(card => card.provider === provider.name).length} />
      ))}
    </div>
  );
};

export default ProviderFilter;
