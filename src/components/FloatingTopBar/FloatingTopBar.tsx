import styles from './FloatingTopBar.module.css';

const FloatingTopBar: React.FC = () => {
  return (
    <div className={styles.floatingTopBar}>
      <div className="logo"></div>
      <div className="actions"></div>
    </div>
  );
};

export default FloatingTopBar;
