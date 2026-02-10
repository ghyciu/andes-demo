import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './FloatingTopBar.module.css';
import buttonStyles from '../Button/Button.module.css';

const LOGO_PATH = './assets/images/logo.jpg';
const LOGO_DEST = '/home';

const FloatingTopBar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(LOGO_DEST);
  };

  return (
    <div className={styles.floatingTopBar}>
      <div className={styles.floatingTopBarLogo}>
        <FontAwesomeIcon icon={faBars} />
        <img src={LOGO_PATH} onClick={handleClick} />
      </div>
      <div className={styles.floatingTopBarActions}>
        <Button href="/home">Log In</Button>
        <Button href="/home" className={buttonStyles.green}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default FloatingTopBar;
