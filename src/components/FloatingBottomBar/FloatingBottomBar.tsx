import styles from './FloatingBottomBar.module.css';
import FloatingBottomBarProps from './FloatingBottomBar.types';
import FloatingBottomBarItem from './FloatingBottomBarItem/FloatingBottomBarItem';

const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({ items }) => {
  return (
    <div className={styles.floatingBottomBar}>
      {items.map(item => (
        <FloatingBottomBarItem icon={item.icon} text={item.text} href={item.href ? item.href : ''} />
      ))}
    </div>
  );
};

export default FloatingBottomBar;
