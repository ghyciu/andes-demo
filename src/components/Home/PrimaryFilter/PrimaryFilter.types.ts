import SearchBar from './SearchBar/SearchBar.types';
import SearchButton from './SearchButton/SearchButton.types';
import TagFilter from './TagFilter/TagFilter.types';

interface PrimaryFilter {
  searchButton: SearchButton;
  tagFilter: TagFilter;
  searchBar: SearchBar;
}

export default PrimaryFilter;
