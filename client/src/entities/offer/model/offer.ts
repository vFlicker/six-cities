type Location = {
  latitude: number;
  longitude: number;
};

export type OfferId = string;

export type Offer = {
  id: OfferId;
  title: string;
  description: string;
  city: {
    name: string;
    location: Location;
  };
  previewImage: string;
  offerImages: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  propertyType: string;
  roomsCount: number;
  guestsCount: number;
  rentalPrice: number;
  amenities: string[];
  host: {
    name: string;
    email: string;
    type: 'pro' | 'regular';
    avatarUrl: string;
  };
  location: Location;
};
