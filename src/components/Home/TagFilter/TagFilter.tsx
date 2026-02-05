import React, { useState } from 'react';

import Tag, { TagName } from '../Tag.types';
import TagFilterItem from '../TagFilterItem/TagFilterItem';
import styles from './TagFilter.module.css';

interface TagFilterProps {
  tags: Tag[];
  onTagSelect: (tagName: TagName) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, onTagSelect }) => {
  const [selectedTag, setSelectedTag] = useState<TagName | null>(null);

  const onSelect = (tagName: TagName) => {
    setSelectedTag(tagName);
    onTagSelect(tagName);
  };

  return (
    <div className={styles.tagFilter}>
      {tags.map((tag, index) => (
        <TagFilterItem key={`tag-${index}`} tag={tag} isSelected={selectedTag === tag.name} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default TagFilter;
