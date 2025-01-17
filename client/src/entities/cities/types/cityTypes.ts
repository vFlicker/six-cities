// TODO: duplicate types with entities/offer/types/offerTypes.ts
type Location = {
  coordinates: [number, number];
};

export type City = {
  name: string;
  location: Location;
};
