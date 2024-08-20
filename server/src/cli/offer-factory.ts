import { CityName } from '#src/shared/types/city.type.js';
import { Offer, Property } from '#src/shared/types/offer.type.js';
import { UserType } from '#src/shared/types/user.type.js';

function stringToBoolean(value: string): boolean {
  return value === 'true';
}

export class OfferFactory {
  static create([
    title,
    description,
    cityName,
    cityLocationLatitude,
    cityLocationLongitude,
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
    publishedAt,
  ]: string[]): Offer {
    return {
      title,
      description,
      city: {
        name: cityName as CityName,
        location: {
          latitude: Number(cityLocationLatitude),
          longitude: Number(cityLocationLongitude),
        },
      },
      previewImage,
      offerImages: offerImages.split(','),
      isPremium: stringToBoolean(isPremium),
      isFavorite: stringToBoolean(isFavorite),
      rating: Number(rating),
      propertyType: propertyType as Property,
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
      publishedAt: new Date(publishedAt),
    };
  }
}
