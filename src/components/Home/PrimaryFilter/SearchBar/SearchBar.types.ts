import GameCard from '../../GameCards/GameCard/GameCard.types';

interface SearchBar {
  onSearch: (searchText: string) => void;
  results: GameCard[];
}

export default SearchBar;
