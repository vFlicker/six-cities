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
    const imageNames = generateRandomValues(1, 20, 6);
    const imageUrlWithoutName = 'http://localhost:8000/static/hotel/';
    const offerImages = imageNames.map(
      (name) => `${imageUrlWithoutName}${name}.jpg`,
    );
    const comments = getRandomItems(this.mockData.comments);

    const tsvRow: TSVData = {
      cityName: city.name,
      cityLatitude: city.location.latitude.toString(),
      cityLongitude: city.location.longitude.toString(),
      hostUsername: host.username,
      hostEmail: host.email,
      hostAvatarUrl: host.avatarUrl,
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
      locationLatitude:
        city.location.latitude + generateRandomValue(-0.04, 0.04, 6).toString(),
      locationLongitude:
        city.location.longitude +
        generateRandomValue(-0.04, 0.04, 6).toString(),
    };

    console.log(TSVDataGenerator.parse(Object.values(tsvRow).join('\t')));

    return Object.values(tsvRow).join('\t');
  }

  static parse(tsvRow: TSVRow): ParsedTSVData {
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
      locationLatitude,
      locationLongitude,
    ] = tsvRow.split('\t');

    return {
      cityName: cityName as CityName,
      cityLatitude: Number.parseFloat(cityLatitude),
      cityLongitude: Number.parseFloat(cityLongitude),
      hostUsername,
      hostEmail,
      hostAvatarUrl,
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
      locationLatitude: Number.parseFloat(locationLatitude),
      locationLongitude: Number.parseFloat(locationLongitude),
    };
  }
}
