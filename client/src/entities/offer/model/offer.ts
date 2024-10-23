type Location = {
  latitude: number;
  longitude: number;
};

export type Offer = {
  id: string;
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
    type: string;
    avatarUrl: string;
  };
  location: Location;
};
