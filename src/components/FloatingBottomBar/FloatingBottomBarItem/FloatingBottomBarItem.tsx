import FloatingBottomBarItemProps from './FloatingBottomBarItem.types';
import styles from './FloatingBottomBarItem.module.css';
import { useNavigate } from 'react-router-dom';

const FloatingBottomBarItem: React.FC<FloatingBottomBarItemProps> = ({ icon, text, href }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!href) {
      return;
    }
    navigate(href);
  };

  return (
    <div className={styles.floatingBottomBarItem} onClick={handleClick}>
      <img src={icon} />
      <span>{text}</span>
    </div>
  );
};

export default FloatingBottomBarItem;
