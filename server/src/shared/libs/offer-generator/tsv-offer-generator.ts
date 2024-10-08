import {
  generateRandomValue,
  getRandomBoolean,
  getRandomItem,
  getRandomItems,
} from '#src/shared/helpers/index.js';
import {
  CityName,
  MockServerData,
  PropertyType,
  TSVOffer,
  UserType,
} from '#src/shared/types/index.js';

import {
  GUEST_COUNT_RANGE,
  LATITUDE_RANGE,
  LONGITUDE_RANGE,
  RATING_RANGE,
  RENTAL_PRICE_RANGE,
  ROOM_COUNT_RANGE,
} from './offer-conditions.js';

export class TSVOfferGenerator implements TSVOfferGenerator {
  static generate(mockData: MockServerData): string {
    const tsvOffer: TSVOffer = {
      title: getRandomItem(mockData.titles),
      description: getRandomItem(mockData.descriptions),
      cityName: getRandomItem(Object.values(CityName)),
      previewImage: getRandomItem(mockData.offerImages),
      offerImages: getRandomItems(mockData.offerImages),
      isPremium: getRandomBoolean(),
      isFavorite: getRandomBoolean(),
      rating: generateRandomValue(
        RATING_RANGE.MIN,
        RATING_RANGE.MAX,
        RATING_RANGE.DECIMALS,
      ),
      propertyType: getRandomItem(Object.values(PropertyType)),
      roomsCount: generateRandomValue(
        ROOM_COUNT_RANGE.MIN,
        ROOM_COUNT_RANGE.MAX,
      ),
      guestsCount: generateRandomValue(
        GUEST_COUNT_RANGE.MIN,
        GUEST_COUNT_RANGE.MAX,
      ),
      rentalPrice: generateRandomValue(
        RENTAL_PRICE_RANGE.MIN,
        RENTAL_PRICE_RANGE.MAX,
      ),
      amenities: getRandomItems(mockData.amenities),
      hostName: getRandomItem(mockData.hostNames),
      hostEmail: getRandomItem(mockData.hostEmails),
      hostAvatarUrl: getRandomItem(mockData.hostAvatars),
      hostType: getRandomItem(Object.values(UserType)),
      offerLocationLatitude: generateRandomValue(
        LATITUDE_RANGE.MIN,
        LATITUDE_RANGE.MAX,
        LATITUDE_RANGE.DECIMALS,
      ),
      offerLocationLongitude: generateRandomValue(
        LONGITUDE_RANGE.MIN,
        LONGITUDE_RANGE.MAX,
        LONGITUDE_RANGE.DECIMALS,
      ),
    };

    return Object.values(tsvOffer).join('\t');
  }
}
