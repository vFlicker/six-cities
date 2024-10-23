import { Offer } from '~/entities/offer';

export const offers: Offer[] = [
  {
    id: '67084bb47f682bbc9871d2a0',
    title: 'Offer title',
    description: 'Offer description',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.38333,
        longitude: 4.9,
      },
    },
    previewImage: 'https://www.google.com',
    offerImages: ['https://www.google.com'],
    isPremium: true,
    isFavorite: true,
    rating: 5,
    propertyType: 'apartment',
    roomsCount: 2,
    guestsCount: 2,
    rentalPrice: 100,
    amenities: ['wifi'],
    host: {
      name: 'John Doe',
      email: 'john@mail.com',
      type: 'pro',
      avatarUrl: 'https://www.example-image.com',
    },
    location: {
      latitude: 50.4501,
      longitude: 30.5234,
    },
  },
];
