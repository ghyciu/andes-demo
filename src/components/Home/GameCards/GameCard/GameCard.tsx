import GameCardProps from './GameCard.types';
import styles from './GameCard.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameCard: React.FC<GameCardProps> = gameCardProps => {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = React.useState(gameCardProps.isFavorited);

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

  const handleCardClick = () => {
    if (!gameCardProps.href) {
      return;
    }

    navigate(gameCardProps.href);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isFavorited) {
      setIsFavorited(true);
      addToLocalStorage();
    } else {
      setIsFavorited(false);
      removeFromLocalStorage();
    }
  };

  return (
    <div className={styles.gameCard} onClick={handleCardClick}>
      <img src={gameCardProps.imageURL} alt={gameCardProps.name} />
      <FontAwesomeIcon icon={isFavorited ? faHeartSolid : faHeart} className={`${styles.heartIcon} ${isFavorited ? styles.favorited : ''}`} onClick={handleFavoriteClick} />
    </div>
  );
};

export default GameCard;
