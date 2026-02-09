import GameCardProps from './GameCard.types';
import styles from './GameCard.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const GameCard: React.FC<GameCardProps> = gameCardProps => {
  const [isFavorited, setIsFavorited] = React.useState(false);

  // Adds game card ID to favorites list in local storage
  const addToLocalStorage = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = [...favorites, gameCardProps.id];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  // Removes game card ID from favorites list in local storage
  const removeFromLocalStorage = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newFavorites = favorites.filter((id: string) => id !== gameCardProps.id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const handleClick = () => {
    if (!isFavorited) {
      setIsFavorited(true);
      addToLocalStorage();
    } else {
      setIsFavorited(false);
      removeFromLocalStorage();
    }
  };

  return (
    <div className={styles.gameCard}>
      <img src={gameCardProps.imageURL} alt={gameCardProps.name} />
      <FontAwesomeIcon icon={isFavorited ? faHeartSolid : faHeart} className={`${styles.heartIcon} ${isFavorited ? styles.favorited : ''}`} onClick={handleClick} />
    </div>
  );
};

export default GameCard;
