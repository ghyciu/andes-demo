import TagFilter from './TagFilter/TagFilter';
import PrimaryFilterProps from './PrimaryFilter.types';
import styles from './PrimaryFilter.module.css';

const PrimaryFilter: React.FC<PrimaryFilterProps> = ({ tagFilter }: PrimaryFilterProps) => {
  return (
    <div className={styles.primaryFilter}>
      <div className={styles.columnContainer}>
        Search Button
        <TagFilter tags={tagFilter.tags} count={tagFilter.count} isLoading={tagFilter.isLoading} onTagSelect={tagFilter.onTagSelect} />
      </div>
      Search Bar
    </div>
  );
};

export default PrimaryFilter;
