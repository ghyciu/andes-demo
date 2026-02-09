import BodyProps from './Body.types';
import BodyText from '../BodyText/BodyText';
import styles from './Body.module.css';

const Body: React.FC<BodyProps> = ({ body }) => {
  return (
    <div className={styles.body}>
      {body.map(bodyText => (
        <BodyText {...bodyText} />
      ))}
    </div>
  );
};

export default Body;
