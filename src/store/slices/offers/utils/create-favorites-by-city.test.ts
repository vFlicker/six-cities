import { CityName } from '~/constants';
import { makeOffer } from '~/utils/mock-data';

import { createFavoritesByCity } from './create-favorites-by-city';

const offer1 = makeOffer({ cityName: CityName.Amsterdam });
const offer2 = makeOffer({ cityName: CityName.Brussels });
const offer3 = makeOffer({ cityName: CityName.Amsterdam });

describe('createFavoritesByCity', () => {
  it('should create correctly dictionary', () => {
    const result = createFavoritesByCity([offer1, offer2, offer3]);

    expect(result).toEqual({
      [CityName.Amsterdam]: [offer1, offer3],
      [CityName.Brussels]: [offer2],
    });
  });
});
