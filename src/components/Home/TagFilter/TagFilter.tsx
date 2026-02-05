import Tag from '../Tag.types';
import styles from './TagFilter.module.css';

interface TagFilterProps {
  tags: Tag[];
}

const TagFilter: React.FC<TagFilterProps> = tagFilterProps => {
  return (
    <div className={styles.tagFilter}>
      {tagFilterProps.tags.map(tag => (
        <div key={tag.name} className={styles.tagFilterItem}>
          <img src={tag.imageURL} alt={`${tag.name} tag`} />
          <span>{tag.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TagFilter;
