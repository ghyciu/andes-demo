import BodyTextProps, { Section, Paragraph } from './BodyText.types';
import styles from './BodyText.module.css';

const BodyText: React.FC<BodyTextProps> = ({ type, text }) => {
  switch (type) {
    case Section:
      return <div className={styles.section}>{text}</div>;
    case Paragraph:
      return <div className={styles.paragraph}>{text}</div>;
    default:
      return null;
  }
};

export default BodyText;
