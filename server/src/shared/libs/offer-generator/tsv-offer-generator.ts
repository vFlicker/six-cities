import dayjs from 'dayjs';

import {
  generateRandomValue,
  getRandomBoolean,
  getRandomItem,
  getRandomItems,
} from '#src/shared/helpers/common.js';
import { CityName } from '#src/shared/types/city.type.js';
import { MockServerData } from '#src/shared/types/mock-server-data-type.js';
import { Property } from '#src/shared/types/offer.type.js';
import { TSVOffer } from '#src/shared/types/tsv-offer.js';
import { UserType } from '#src/shared/types/user.type.js';

import {
  GUEST_COUNT_RANGE,
  LATITUDE_RANGE,
  LONGITUDE_RANGE,
  RATING_RANGE,
  ROOM_COUNT_RANGE,
  WEEK_DAYS,
} from './offer-conditions.js';

export class TSVOfferGenerator implements TSVOfferGenerator {
  static generate(mockData: MockServerData): string {
    const tsvOffer: TSVOffer = {
      title: getRandomItem(mockData.titles),
      description: getRandomItem(mockData.descriptions),
      cityName: getRandomItem(Object.values(CityName)),
      cityLocationLatitude: generateRandomValue(
        LATITUDE_RANGE.MIN,
        LATITUDE_RANGE.MAX,
        LATITUDE_RANGE.DECIMALS,
      ),
      cityLocationLongitude: generateRandomValue(
        LONGITUDE_RANGE.MIN,
        LONGITUDE_RANGE.MAX,
        LONGITUDE_RANGE.DECIMALS,
      ),
      previewImage: getRandomItem(mockData.offerImages),
      offerImages: getRandomItems(mockData.offerImages),
      isPremium: getRandomBoolean(),
      isFavorite: getRandomBoolean(),
      rating: generateRandomValue(
        RATING_RANGE.MIN,
        RATING_RANGE.MAX,
        RATING_RANGE.DECIMALS,
      ),
      propertyType: getRandomItem(Object.values(Property)),
      roomsCount: generateRandomValue(
        ROOM_COUNT_RANGE.MIN,
        ROOM_COUNT_RANGE.MAX,
      ),
      guestsCount: generateRandomValue(
        GUEST_COUNT_RANGE.MIN,
        GUEST_COUNT_RANGE.MAX,
      ),
      rentalPrice: generateRandomValue(RATING_RANGE.MIN, RATING_RANGE.MAX),
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
      publishedAt: dayjs()
        .subtract(generateRandomValue(WEEK_DAYS.FIRST, WEEK_DAYS.LAST), 'day')
        .toISOString(),
    };

    return Object.values(tsvOffer).join('\t');
  }
}