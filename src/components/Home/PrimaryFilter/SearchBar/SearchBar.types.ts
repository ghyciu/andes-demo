import GameCard from '../../GameCards/GameCard/GameCard.types';

interface SearchBar {
  onSearch: (searchText: string) => void;
  results: GameCard[];
  isVisible: boolean;
}

export default SearchBar;
