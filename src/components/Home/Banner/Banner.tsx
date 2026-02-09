import React, { useState } from 'react';
import styles from './Banner.module.css';

interface BannerProps {
  images: string[];
}

const Banner: React.FC<BannerProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Banner ${index + 1}`} className={index === currentIndex ? styles.visible : styles.invisible} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
