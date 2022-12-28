import { faker } from '@faker-js/faker/locale/en_US';

import { CityName } from '~/constants';
import { Host, Location, Offer, Review, ReviewUser, User } from '~/types';

type MakeReviewArgs = Partial<Review>;

type MakeOfferArgs = Partial<Offer> & {
  cityName?: CityName;
};

export const error = new Error('Same error...');

export const makeReviewUser = (): ReviewUser => ({
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

const makeHost = (): Host => ({
  avatarUrl: faker.image.imageUrl(),
  id: faker.datatype.number(),
  name: faker.name.firstName(),
  isPro: faker.datatype.boolean(),
});

export const makeReview = ({ date }: MakeReviewArgs = {}): Review => ({
  comment: faker.lorem.paragraph(),
  date: date ?? faker.datatype.datetime(),
  id: faker.datatype.number(),
  rating: faker.datatype.number({ min: 1, max: 5 }),
  user: makeReviewUser(),
});

export const makeOffer = ({
  cityName,
  id,
  price,
  rating,
  isFavorite,
  title,
  isPremium,
}: MakeOfferArgs = {}): Offer => ({
  bedrooms: faker.datatype.number({ min: 1, max: 4 }),
  city: {
    location: makeLocation(),
    name: cityName ?? CityName.Amsterdam,
  },
  description: faker.lorem.paragraph(),
  goods: faker.helpers.uniqueArray(faker.random.words, 5),
  host: makeHost(),
  id: id ?? faker.datatype.number(),
  images: [
    faker.image.imageUrl(),
    faker.image.imageUrl(),
    faker.image.imageUrl(),
  ],
  location: makeLocation(),
  price: price ?? faker.datatype.number({ min: 10, max: 1000 }),
  rating: rating ?? faker.datatype.number({ min: 1, max: 5 }),
  title: title ?? faker.lorem.paragraph(),
  type: faker.random.word(),
  isFavorite: isFavorite ?? faker.datatype.boolean(),
  isPremium: isPremium ?? faker.datatype.boolean(),
  maxAdults: faker.datatype.number({ min: 1, max: 4 }),
  previewImage: faker.image.imageUrl(),
});

export const makeUser = (): User => ({
  id: faker.datatype.number(),
  name: faker.name.firstName(),
  avatarUrl: faker.image.imageUrl(),
  isPro: faker.datatype.boolean(),
  email: faker.internet.email(),
  token: faker.datatype.string(32),
});
