import BodyProps from './Body.types';
import styles from './Body.module.css';

const Body: React.FC<BodyProps> = ({ body }) => {
  return (
    <div className={styles.body}>
      {body.map(bodyText => (
        <div>Body Text</div>
      ))}
    </div>
  );
};

export default Body;
