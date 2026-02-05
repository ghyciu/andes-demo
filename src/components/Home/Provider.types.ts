interface Provider {
  name: string;
  imageURL: string;
}

export const PROVIDERS: Provider[] = [
  {
    name: 'Provider A',
    imageURL: './images/providers/providerA.png'
  },
  {
    name: 'Provider B',
    imageURL: './images/providers/providerB.png'
  },
  {
    name: 'Provider C',
    imageURL: './images/providers/providerC.png'
  }
];

export type ProviderName = (typeof PROVIDERS)[number]['name'];
