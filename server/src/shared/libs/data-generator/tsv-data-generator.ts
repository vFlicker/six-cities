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
import { ParsedTSVData, TSVData } from './type/tsv-data.type.js';
import { TSVRow } from './type/tsv-row.type.js';

export class TSVDataGenerator implements DataGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): TSVRow {
    const city = getRandomItem(this.mockData.cities);
    const host = getRandomItem(this.mockData.hosts);
    const randomNumbers = generateRandomValues(1, 20, 6);
    const offerImages = randomNumbers.map((number) => `offer-${number}.jpg`);
    const comments = getRandomItems(this.mockData.comments);
    const { latitude, longitude } = city.location;
    const offerLatitude = latitude + generateRandomValue(-0.04, 0.04, 6);
    const offerLongitude = longitude + generateRandomValue(-0.04, 0.04, 6);

    const tsvRow: TSVData = {
      cityName: city.name,
      cityLatitude: city.location.latitude.toString(),
      cityLongitude: city.location.longitude.toString(),
      hostUsername: host.username,
      hostEmail: host.email,
      hostAvatar: host.avatar,
      hostType: getRandomItem(Object.values(UserType)),
      title: getRandomItem(this.mockData.titles),
      description: getRandomItem(this.mockData.descriptions),
      comments: comments.join('|'),
      commentRatings: generateRandomValues(
        GeneratorConditions.CommentRating.Min,
        GeneratorConditions.CommentRating.Max,
        comments.length,
      ).join('|'),
      previewImage: offerImages[0],
      offerImages: offerImages.join('|'),
      isPremium: getRandomBoolean().toString(),
      isFavorite: getRandomBoolean().toString(),
      offerRating: generateRandomValue(
        GeneratorConditions.OfferRating.Min,
        GeneratorConditions.OfferRating.Max,
        GeneratorConditions.OfferRating.Decimals,
      ).toString(),
      propertyType: getRandomItem(Object.values(PropertyType)),
      roomsCount: generateRandomValue(
        GeneratorConditions.RoomCount.Min,
        GeneratorConditions.RoomCount.Max,
      ).toString(),
      guestsCount: generateRandomValue(
        GeneratorConditions.GuestCount.Min,
        GeneratorConditions.GuestCount.Max,
      ).toString(),
      rentalPrice: generateRandomValue(
        GeneratorConditions.RentalPrice.Min,
        GeneratorConditions.RentalPrice.Max,
      ).toString(),
      amenities: getRandomItems(this.mockData.amenities).join('|'),
      offerLatitude: offerLatitude.toString(),
      offerLongitude: offerLongitude.toString(),
    };

    return Object.values(tsvRow).join('\t');
  }

  static parse(tsvRow: TSVRow): ParsedTSVData {
    const [
      cityName,
      cityLatitude,
      cityLongitude,
      hostUsername,
      hostEmail,
      hostAvatar,
      hostType,
      title,
      description,
      comments,
      commentRatings,
      previewImage,
      offerImages,
      isPremium,
      isFavorite,
      offerRating,
      propertyType,
      roomsCount,
      guestsCount,
      rentalPrice,
      amenities,
      offerLatitude,
      offerLongitude,
    ] = tsvRow.split('\t');

    return {
      cityName: cityName as CityName,
      cityLatitude: Number.parseFloat(cityLatitude),
      cityLongitude: Number.parseFloat(cityLongitude),
      hostUsername,
      hostEmail,
      hostAvatar,
      hostType: hostType as UserType,
      title,
      description,
      comments: comments.split('|'),
      commentRatings: commentRatings.split('|').map(Number),
      previewImage,
      offerImages: offerImages.split('|'),
      isPremium: isPremium === 'true',
      isFavorite: isFavorite === 'true',
      offerRating: Number(offerRating),
      propertyType: propertyType as PropertyType,
      roomsCount: Number(roomsCount),
      guestsCount: Number(guestsCount),
      rentalPrice: Number(rentalPrice),
      amenities: amenities.split('|'),
      offerLatitude: Number.parseFloat(offerLatitude),
      offerLongitude: Number.parseFloat(offerLongitude),
    };
  }
}
