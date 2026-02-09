import React, { useState, useRef, useEffect } from 'react';
import styles from './BannerCarrousel.module.css';
import BannerCarrouselProps from './BannerCarrousel.types';

import { useNavigate } from 'react-router-dom';

const BannerCarrousel: React.FC<BannerCarrouselProps> = ({ banners }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const startX = useRef<number | null>(null);
  const dragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    dragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current || startX.current === null) return;
    const diff = e.touches[0].clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        setCurrentIndex(prev => (prev + 1) % banners.length);
      } else {
        setCurrentIndex(prev => (prev - 1 + banners.length) % banners.length);
      }
      dragging.current = false;
      startX.current = null;
    }
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    startX.current = null;
  };

  // Mouse drag support
  const mouseStartX = useRef<number | null>(null);
  const mouseDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    mouseDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mouseDragging.current || mouseStartX.current === null) return;
    const diff = e.clientX - mouseStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        setCurrentIndex(prev => (prev + 1) % banners.length);
      } else {
        setCurrentIndex(prev => (prev - 1 + banners.length) % banners.length);
      }
      mouseDragging.current = false;
      mouseStartX.current = null;
    }
  };

  const handleMouseUp = () => {
    mouseDragging.current = false;
    mouseStartX.current = null;
  };

  const handleClick = () => {
    navigate(banners[currentIndex].href);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  if (!Array.isArray(banners) || banners.length === 0) {
    return null;
  }

  return (
    <div
      className={styles.bannerCarrousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      tabIndex={0}
      aria-label="Banner carousel"
    >
      <div className={styles.banner} onClick={handleClick}>
        {banners.map((banner, index) => (
          <img key={index} src={banner.imageURL} alt={`Banner ${index + 1}`} className={index === currentIndex ? styles.visible : styles.invisible} />
        ))}
      </div>
    </div>
  );
};

export default BannerCarrousel;
