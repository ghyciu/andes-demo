interface Tag {
  name: string;
  imageURL: string;
}

export const TAGS: Tag[] = [
  {
    name: 'New',
    imageURL: './assets/images/tags/new.png'
  },
  {
    name: 'Popular',
    imageURL: './assets/images/tags/popular.png'
  },
  {
    name: 'Slots',
    imageURL: './assets/images/tags/slots.png'
  },
  {
    name: 'Bingo',
    imageURL: './assets/images/tags/bingo.png'
  }
];

export type TagName = (typeof TAGS)[number]['name'];

export default Tag;
