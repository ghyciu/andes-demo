import Tag, { TagName } from '../../Tag.types';

interface TagFilter {
  tags: Tag[];
  count: number;
  isLoading: boolean;
  onTagSelect: (tagName: TagName) => void;
}

export default TagFilter;
