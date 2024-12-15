import { CityName, PropertyType, UserType } from '#src/shared/enums/index.js';
import {
  generateRandomValue,
  generateRandomValues,
  getRandomBoolean,
  getRandomItem,
  getRandomItems,
} from '#src/shared/helpers/index.js';
import { MockServerData } from '#src/shared/types/index.js';

import { DataGenerator } from './data-generator.interface.js';
import { GeneratorConditions } from './generator.conditions.js';
import { TSVData } from './type/tsv-data.type.js';
import { TSVRow } from './type/tsv-row.type.js';

export class TSVDataGenerator implements DataGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): TSVRow {
    const city = getRandomItem(this.mockData.cities);
    const host = getRandomItem(this.mockData.hosts);
    const imageNames = generateRandomValues(1, 20, 6);
    const imageUrlWithoutName = 'http://localhost:8000/static/hotel/';
    const offerImages = imageNames.map(
      (name) => `${imageUrlWithoutName}${name}.jpg`,
    );

    const tsvRow: TSVData = {
      cityName: city.name as CityName,
      cityLatitude: city.location.latitude,
      cityLongitude: city.location.longitude,
      hostUsername: host.username,
      hostEmail: host.email,
      hostAvatarUrl: host.avatarUrl,
      hostType: getRandomItem(Object.values(UserType)),
      title: getRandomItem(this.mockData.titles),
      description: getRandomItem(this.mockData.descriptions),
      previewImage: offerImages[0],
      offerImages,
      isPremium: getRandomBoolean(),
      isFavorite: getRandomBoolean(),
      rating: generateRandomValue(
        GeneratorConditions.Rating.Min,
        GeneratorConditions.Rating.Max,
        GeneratorConditions.Rating.Decimals,
      ),
      propertyType: getRandomItem(Object.values(PropertyType)),
      roomsCount: generateRandomValue(
        GeneratorConditions.RoomCount.Min,
        GeneratorConditions.RoomCount.Max,
      ),
      guestsCount: generateRandomValue(
        GeneratorConditions.GuestCount.Min,
        GeneratorConditions.GuestCount.Max,
      ),
      rentalPrice: generateRandomValue(
        GeneratorConditions.RentalPrice.Min,
        GeneratorConditions.RentalPrice.Max,
      ),
      amenities: getRandomItems(this.mockData.amenities),
      locationLatitude:
        city.location.latitude + generateRandomValue(-0.04, 0.04, 6),
      locationLongitude:
        city.location.longitude + generateRandomValue(-0.04, 0.04, 6),
    };

    return Object.values(tsvRow).join('\t');
  }

  static parse(tsvRow: TSVRow): TSVData {
    const [
      cityName,
      cityLatitude,
      cityLongitude,
      hostUsername,
      hostEmail,
      hostAvatarUrl,
      hostType,
      title,
      description,
      previewImage,
      offerImages,
      isPremium,
      isFavorite,
      rating,
      propertyType,
      roomsCount,
      guestsCount,
      rentalPrice,
      amenities,
      locationLatitude,
      locationLongitude,
    ] = tsvRow.split('\t');

    return {
      cityName: cityName as CityName,
      cityLatitude: Number(cityLatitude),
      cityLongitude: Number(cityLongitude),
      hostUsername,
      hostEmail,
      hostAvatarUrl,
      hostType: hostType as UserType,
      title,
      description,
      previewImage,
      offerImages: offerImages.split(','),
      isPremium: isPremium === 'true',
      isFavorite: isFavorite === 'true',
      rating: Number(rating),
      propertyType: propertyType as PropertyType,
      roomsCount: Number(roomsCount),
      guestsCount: Number(guestsCount),
      rentalPrice: Number(rentalPrice),
      amenities: amenities.split(','),
      locationLatitude: Number(locationLatitude),
      locationLongitude: Number(locationLongitude),
    };
  }
}
