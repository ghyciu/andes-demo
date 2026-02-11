import TagFilter from './TagFilter/TagFilter';
import PrimaryFilterProps from './PrimaryFilter.types';
import styles from './PrimaryFilter.module.css';
import SearchBar from './SearchBar/SearchBar';

const PrimaryFilter: React.FC<PrimaryFilterProps> = ({ searchBar, tagFilter }: PrimaryFilterProps) => {
  return (
    <div className={styles.primaryFilter}>
      <div className={styles.columnContainer}>
        Search Button
        <TagFilter tags={tagFilter.tags} count={tagFilter.count} isLoading={tagFilter.isLoading} onTagSelect={tagFilter.onTagSelect} />
      </div>
      <SearchBar onSearch={searchBar.onSearch} results={searchBar.results} />
    </div>
  );
};

export default PrimaryFilter;
