import { useNavigate } from 'react-router-dom';
import GameCard from '../../../../GameCards/GameCard/GameCard.types';
import styles from './SearchResult.module.css';

const SearchResult: React.FC<GameCard> = ({ name, imageURL, href }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!href) {
      return;
    }
    navigate(href);
  };

  return (
    <div className={styles.searchResult} onClick={handleClick}>
      <img src={imageURL} />
      <span>{name}</span>
    </div>
  );
};

export default SearchResult;
