import Tag, { TagName } from '../Tag.types';
import styles from './TagFilterItem.module.css';

interface TagFilterItemProps {
  tag: Tag;
  count: number;
  isSelected: boolean;
  isLoading: boolean;
  onSelect: (tagName: TagName) => void;
}

const TagFilterItem: React.FC<TagFilterItemProps> = ({ tag, count, isSelected, isLoading, onSelect }) => {
  const handleClick = () => {
    onSelect(tag.name);
  };

  return (
    <div className={`${styles.tagFilterItem} ${isSelected ? styles.selected : ''}`} onClick={handleClick}>
      {isSelected && !isLoading && <span className={styles.count}>{count}</span>}
      <img src={tag.imageURL} alt={`${tag.name} tag`} />
      <span>{tag.name}</span>
    </div>
  );
};

export default TagFilterItem;
