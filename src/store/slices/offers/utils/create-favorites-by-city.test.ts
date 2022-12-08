import { CityName } from '~/constants';
import { makeOffer } from '~/utils';

import { createFavoritesByCity } from './create-favorites-by-city';

const offer1 = makeOffer({ cityName: CityName.Amsterdam });
const offer2 = makeOffer({ cityName: CityName.Amsterdam });
const offer3 = makeOffer({ cityName: CityName.Brussels });

describe('createFavoritesByCity', () => {
  it('should correctly create dictionary', () => {
    expect(createFavoritesByCity([offer1, offer2, offer3])).toEqual({
      [CityName.Amsterdam]: [offer1, offer2],
      [CityName.Brussels]: [offer3],
    });
  });

  it("should't correctly create dictionary", () => {
    expect(createFavoritesByCity([])).not.toEqual({
      [CityName.Amsterdam]: [offer1, offer2],
      [CityName.Brussels]: [offer3],
    });

    expect(createFavoritesByCity([offer1, offer2, offer3])).not.toEqual({});
  });
});
