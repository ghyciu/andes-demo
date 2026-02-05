import Tag, { TagName } from '../Tag.types';
import styles from './TagFilterItem.module.css';

interface TagFilterItemProps {
  tag: Tag;
  isSelected: boolean;
  onSelect: (tagName: TagName) => void;
  count: number;
}

const TagFilterItem: React.FC<TagFilterItemProps> = ({ tag, isSelected, onSelect, count }) => {
  const handleClick = () => {
    onSelect(tag.name);
  };

  return (
    <div className={`${styles.tagFilterItem} ${isSelected ? styles.selected : ''}`} onClick={handleClick}>
      {isSelected && <span className={styles.count}>{count}</span>}
      <img src={tag.imageURL} alt={`${tag.name} tag`} />
      <span>{tag.name}</span>
    </div>
  );
};

export default TagFilterItem;
