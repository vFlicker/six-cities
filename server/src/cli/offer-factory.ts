import { CityName } from '#src/shared/types/city-name.enum.js';
import { Offer, PropertyType, UserType } from '#src/shared/types/index.js';

function stringToBoolean(value: string): boolean {
  return value === 'true';
}

export class OfferFactory {
  static create([
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
    offerLocationLatitude,
    offerLocationLongitude,
  ]: string[]): Offer {
    return {
      title,
      description,
      city: cityName as CityName,
      previewImage,
      offerImages: offerImages.split(','),
      isPremium: stringToBoolean(isPremium),
      isFavorite: stringToBoolean(isFavorite),
      rating: Number(rating),
      propertyType: propertyType as PropertyType,
      roomsCount: Number(roomsCount),
      guestsCount: Number(guestsCount),
      rentalPrice: Number(rentalPrice),
      amenities: amenities.split(','),
      host: {
        name: hostName,
        email: hostEmail,
        type: hostType as UserType,
        avatarUrl: hostAvatarUrl,
      },
      location: {
        latitude: Number(offerLocationLatitude),
        longitude: Number(offerLocationLongitude),
      },
    };
  }
}
