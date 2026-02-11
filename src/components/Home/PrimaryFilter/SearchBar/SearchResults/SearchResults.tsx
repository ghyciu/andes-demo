import SearchResultsProps from './SearchResults.types';
import styles from './SearchResults.module.css';
import SearchResult from './SearchResult/SearchResult';

const SearchResults: React.FC<SearchResultsProps> = ({ results, isVisible }) => {
  if (results.length === 0 || !isVisible) {
    return null;
  }

  return (
    <div className={styles.searchResults}>
      {results.map(result => (
        <SearchResult {...result} />
      ))}
    </div>
  );
};

export default SearchResults;
