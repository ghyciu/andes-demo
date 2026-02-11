import { ChangeEvent, useState } from 'react';
import SearchBarProps from './SearchBar.types';
import SearchResults from './SearchResults/SearchResults';
import styles from './SearchBar.module.css';
import React, { useRef, useEffect } from 'react';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, results, isVisible }) => {
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      onSearch(value);
      setSearchResultsVisible(true);
    }, 2000);
  };

  const handleFocus = () => {
    setSearchResultsVisible(true);
  };
  const searchBarRef = useRef<HTMLDivElement>(null);

  // On mount, creates a click listener for clicks outside of the search bar
  // Hides the search results when the user clicks outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setSearchResultsVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.searchBar} ref={searchBarRef}>
      <input id="searchBar" placeholder="Search" onChange={handleChange} onFocus={handleFocus} />
      <SearchResults results={results} isVisible={searchResultsVisible} />
    </div>
  );
};

export default SearchBar;
