import React, { useState, useEffect } from 'react';

import { ProviderName } from '../Provider.types';
import ProviderFilterProps from './ProviderFilter.types';
import ProviderFilterItem from './ProviderFilterItem/ProviderFilterItem';
import styles from './ProviderFilter.module.css';

const ProviderFilter: React.FC<ProviderFilterProps> = ({ providers, gameCards, onProviderSelect, selectedTag }) => {
  const [selectedProvider, setSelectedProvider] = useState<ProviderName | null>(null);

  const onSelect = (providerName: ProviderName | null) => {
    setSelectedProvider(providerName);
    onProviderSelect(providerName);
  };

  // Resets filter when the selected tag is changed
  useEffect(() => {
    setSelectedProvider(null);
  }, [selectedTag]);

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
