export const GeneratorConditions = {
  Latitude: { Min: 1, Max: 100, Decimals: 5 },
  Longitude: { Min: 1, Max: 100, Decimals: 5 },
  Rating: { Min: 1, Max: 5, Decimals: 1 },
  RoomCount: { Min: 1, Max: 5 },
  GuestCount: { Min: 1, Max: 5 },
  RentalPrice: { Min: 10, Max: 1_000_000 },
};
