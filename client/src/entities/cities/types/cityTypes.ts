// TODO: duplicate types with entities/offer/types/offerTypes.ts
type Location = {
  latitude: number;
  longitude: number;
};

export type City = {
  name: string;
  location: Location;
};
