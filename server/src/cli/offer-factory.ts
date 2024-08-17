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
    publishedAt,
    cityName,
    cityLocationLatitude,
    cityLocationLongitude,
    previewImage,
    images,
    isPremium,
    isFavorite,
    rating,
    propertyType,
    rooms,
    guestsCount,
    price,
    amenities,
    hostName,
    hostEmail,
    hostAvatarUrl,
    hostPassword,
    hostType,
    offerLocationLatitude,
    offerLocationLongitude,
  ]: string[]): Offer {
    return {
      title,
      description,
      publishedAt: new Date(publishedAt),
      city: {
        name: cityName as CityName,
        location: {
          latitude: Number(cityLocationLatitude),
          longitude: Number(cityLocationLongitude),
        },
      },
      previewImage,
      images: images.split(','),
      isPremium: stringToBoolean(isPremium),
      isFavorite: stringToBoolean(isFavorite),
      rating: Number(rating),
      propertyType: propertyType as Property,
      rooms: Number(rooms),
      guestsCount: Number(guestsCount),
      price: Number(price),
      amenities: amenities.split(','),
      host: {
        name: hostName,
        email: hostEmail,
        password: hostPassword,
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
