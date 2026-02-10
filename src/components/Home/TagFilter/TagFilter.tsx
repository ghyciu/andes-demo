import React, { useState } from 'react';

import Tag, { TagName } from '../Tag.types';
import TagFilterItem from './TagFilterItem/TagFilterItem';
import styles from './TagFilter.module.css';

interface TagFilterProps {
  tags: Tag[];
  count: number;
  isLoading: boolean;
  onTagSelect: (tagName: TagName) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, count, isLoading, onTagSelect }) => {
  const [selectedTag, setSelectedTag] = useState<TagName | null>(null);

  const onSelect = (tagName: TagName) => {
    setSelectedTag(tagName);
    onTagSelect(tagName);
  };

  const homeTag: Tag = { name: 'Home', imageURL: './assets/images/tags/home.png' };

  return (
    <div className={styles.tagFilter}>
      <TagFilterItem key="tag-home" tag={homeTag} count={count} isSelected={selectedTag === 'Home' || selectedTag === null} isLoading={isLoading} onSelect={onSelect} />
      {tags
        .filter(tag => tag.name !== 'Home')
        .map((tag, index) => (
          <TagFilterItem key={`tag-${index}`} tag={tag} count={count} isSelected={selectedTag === tag.name} isLoading={isLoading} onSelect={onSelect} />
        ))}
    </div>
  );
};

export default TagFilter;
