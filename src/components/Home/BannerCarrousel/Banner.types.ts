interface Banner {
  imageURL: string;
  href: string;
}

export const BANNERS: Banner[] = [
  { imageURL: './assets/images/banners/banner1.jpg', href: '/banner1' },
  { imageURL: './assets/images/banners/banner2.jpg', href: '/banner2' },
  { imageURL: './assets/images/banners/banner3.jpg', href: '/banner3' }
];

export default Banner;
