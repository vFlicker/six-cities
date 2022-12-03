import { faker } from '@faker-js/faker/locale/en_US';

import { CityName } from '~/constants';
import { City, Host, Location, Offer, Review, ReviewUser } from '~/types';

const makeUser = (): ReviewUser => ({
  id: faker.datatype.number(),
  name: faker.name.firstName(),
  avatarUrl: faker.image.imageUrl(),
  isPro: faker.datatype.boolean(),
});

const makeLocation = (): Location => ({
  latitude: Number(faker.address.latitude()),
  longitude: Number(faker.address.longitude()),
  zoom: faker.datatype.number({ min: 1, max: 10 }),
});

const makeCity = (): City => ({
  location: makeLocation(),
  name: CityName.Amsterdam,
});

const makeHost = (): Host => ({
  avatarUrl: faker.image.imageUrl(),
  id: faker.datatype.number(),
  name: faker.name.firstName(),
  isPro: faker.datatype.boolean(),
});

export const makeComment = (): Review => ({
  comment: faker.lorem.paragraph(),
  date: faker.datatype.datetime(),
  id: faker.datatype.number(),
  rating: faker.datatype.number({ min: 1, max: 5 }),
  user: makeUser(),
});

export const makeOffer = (): Offer => ({
  bedrooms: faker.datatype.number({ min: 1, max: 4 }),
  city: makeCity(),
  description: faker.lorem.paragraph(),
  goods: faker.helpers.uniqueArray(faker.random.words, 5),
  host: makeHost(),
  id: faker.datatype.number(),
  images: [
    faker.image.imageUrl(),
    faker.image.imageUrl(),
    faker.image.imageUrl(),
  ],
  location: makeLocation(),
  price: faker.datatype.number({ min: 10, max: 1000 }),
  rating: faker.datatype.number({ min: 1, max: 5 }),
  title: faker.lorem.paragraph(),
  type: faker.lorem.word(),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  maxAdults: faker.datatype.number({ min: 1, max: 4 }),
  previewImage: faker.image.imageUrl(),
});
