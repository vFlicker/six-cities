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
  UserType,
} from '#src/shared/types/index.js';

import { DataGenerator } from './data-generator.interface.js';
import { GeneratorConditions } from './generator.conditions.js';
import { TSVData } from './type/tsv-data.type.js';
import { TSVRow } from './type/tsv-row.type.js';

export class TSVDataGenerator implements DataGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): TSVRow {
    const tsvRow: TSVData = {
      title: getRandomItem(this.mockData.titles),
      description: getRandomItem(this.mockData.descriptions),
      cityName: getRandomItem(Object.values(CityName)),
      previewImage: getRandomItem(this.mockData.offerImages),
      offerImages: getRandomItems(this.mockData.offerImages),
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
      hostName: getRandomItem(this.mockData.hostNames),
      hostEmail: getRandomItem(this.mockData.hostEmails),
      hostAvatarUrl: getRandomItem(this.mockData.hostAvatars),
      hostType: getRandomItem(Object.values(UserType)),
      locationLatitude: generateRandomValue(
        GeneratorConditions.Latitude.Min,
        GeneratorConditions.Latitude.Max,
        GeneratorConditions.Latitude.Decimals,
      ),
      locationLongitude: generateRandomValue(
        GeneratorConditions.Longitude.Min,
        GeneratorConditions.Longitude.Max,
        GeneratorConditions.Longitude.Decimals,
      ),
    };

    return Object.values(tsvRow).join('\t');
  }

  static parse(tsvRow: TSVRow): TSVData {
    const [
      title,
      description,
      cityName,
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
      hostName,
      hostEmail,
      hostAvatarUrl,
      hostType,
      locationLatitude,
      locationLongitude,
    ] = tsvRow.split('\t');

    return {
      title,
      description,
      cityName: cityName as CityName,
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
      hostName,
      hostEmail,
      hostAvatarUrl,
      hostType: hostType as UserType,
      locationLatitude: Number(locationLatitude),
      locationLongitude: Number(locationLongitude),
    };
  }
}
