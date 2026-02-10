import FloatingBottomBarItem from './FloatingBottomBarItem/FloatingBottomBarItem.types';

interface FloatingBottomBar {
  items: FloatingBottomBarItem[];
}

export const FLOATING_BOTTOM_BAR_ITEMS: FloatingBottomBarItem[] = [
  {
    icon: '/assets/images/categories/sports.png',
    text: 'Sports',
    href: '/sports'
  },
  {
    icon: '/assets/images/categories/favorites.png',
    text: 'Favorites',
    href: '/favorites'
  },
  {
    icon: '/assets/images/categories/recent.png',
    text: 'Recent',
    href: '/recent'
  },
  {
    icon: '/assets/images/categories/casino.png',
    text: 'Casino',
    href: '/'
  },
  {
    icon: '/assets/images/categories/expand.png',
    text: 'Expand'
  }
];

export default FloatingBottomBar;
