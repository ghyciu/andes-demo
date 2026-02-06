export interface Provider {
  name: string;
  imageURL: string;
}

export const PROVIDERS: Provider[] = [
  {
    name: 'Provider A',
    imageURL: './assets/images/providers/providerA.webp'
  },
  {
    name: 'Provider B',
    imageURL: './assets/images/providers/providerB.webp'
  },
  {
    name: 'Provider C',
    imageURL: './assets/images/providers/providerC.webp'
  }
];

export type ProviderName = (typeof PROVIDERS)[number]['name'];
