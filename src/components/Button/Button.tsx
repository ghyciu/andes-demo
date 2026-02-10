import ButtonProps from './Button.types';
import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';

const Button: React.FC<ButtonProps> = ({ children, style, className, href }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!href) {
      return;
    }

    navigate(href);
  };

  return (
    <div className={`${styles.button} ${className ? className : ''}`} style={style} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Button;
