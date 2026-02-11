import { ChangeEvent } from 'react';
import SearchBarProps from './SearchBar.types';
import SearchResults from './SearchResults/SearchResults';
import styles from './SearchBar.module.css';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, results }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input id="searchBar" placeholder="Search" onChange={handleChange} />
      <SearchResults results={results} />
    </div>
  );
};

export default SearchBar;
