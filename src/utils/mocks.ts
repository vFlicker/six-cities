import { faker } from '@faker-js/faker/locale/en_US';

import { Review } from '~/types';

export const makeComment = (): Review => ({
  comment: faker.name.jobTitle(),
  date: faker.datatype.datetime(),
  id: faker.datatype.number(),
  rating: faker.datatype.number({ min: 1, max: 5 }),
  user: {
    id: faker.datatype.number(),
    name: faker.name.firstName(),
    avatarUrl: faker.image.imageUrl(),
    isPro: faker.datatype.boolean(),
  },
});
