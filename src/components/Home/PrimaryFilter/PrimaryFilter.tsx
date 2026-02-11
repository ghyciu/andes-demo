import TagFilter from './TagFilter/TagFilter';
import PrimaryFilterProps from './PrimaryFilter.types';
import styles from './PrimaryFilter.module.css';
import SearchBar from './SearchBar/SearchBar';
import SearchButton from './SearchButton/SearchButton';
import { useState } from 'react';

const PrimaryFilter: React.FC<PrimaryFilterProps> = ({ searchButton, searchBar, tagFilter }: PrimaryFilterProps) => {
  return (
    <div className={styles.primaryFilter}>
      <div className={styles.columnContainer}>
        <SearchButton onClick={searchButton.onClick} />
        <TagFilter tags={tagFilter.tags} count={tagFilter.count} isLoading={tagFilter.isLoading} onTagSelect={tagFilter.onTagSelect} />
      </div>
      <SearchBar onSearch={searchBar.onSearch} results={searchBar.results} isVisible={searchBar.isVisible} />
    </div>
  );
};

export default PrimaryFilter;
