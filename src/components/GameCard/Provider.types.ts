interface Provider {
  name: string;
  imageURL: string;
}

export const PROVIDERS: Provider[] = [
  {
    name: 'Provider A',
    imageURL: './images/provider/providerA.png'
  },
  {
    name: 'Provider B',
    imageURL: './images/provider/providerB.png'
  },
  {
    name: 'Provider C',
    imageURL: './images/provider/providerC.png'
  }
];

export type ProviderName = (typeof PROVIDERS)[number]['name'];
