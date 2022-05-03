import { Offer } from '@/types';

export const offers: Offer[] = [
  {
    id: 1,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      id: 3,
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
      name: 'Angelina',
    },
    images: ['img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 2.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: '',
    goods: ['Heating', 'Kitchen', 'Cable TV'],
    host: {
      id: 3,
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
      name: 'Angelina',
    },
    images: ['img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 420,
    rating: 5,
    title: 'Beautiful',
    type: 'Apartment',
  },
  {
    id: 3,
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      id: 3,
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Angelina',
    },
    images: [],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 10,
    previewImage: 'img/apartment-02.jpg',
    price: 1020,
    rating: 4.5,
    title: 'Beautiful & luxurious studio at great location Beautiful & luxurious studio at great location',
    type: 'Private room',
  },
  {
    id: 4,
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [],
    host: {
      id: 3,
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
      name: 'Max',
    },
    images: ['img/studio-01.jpg', 'img/room.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 1,
    previewImage: 'img/studio-01.jpg',
    price: 20,
    rating: 0.8,
    title: 'Beautiful',
    type: 'Apartment',
  },
];
