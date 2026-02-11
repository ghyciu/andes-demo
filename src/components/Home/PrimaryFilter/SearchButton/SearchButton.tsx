import SearchButtonProps from './SearchButton.types';
import styles from './SearchButton.module.css';
import { useState } from 'react';

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const SEARCH_BUTTON_IMAGE_PATH = './assets/images/icons/search.png';

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <div className={`${styles.searchButton} ${isActive ? styles.active : ''}`} onClick={handleClick}>
      <img src={SEARCH_BUTTON_IMAGE_PATH} />
      <span>Search</span>
    </div>
  );
};

export default SearchButton;
