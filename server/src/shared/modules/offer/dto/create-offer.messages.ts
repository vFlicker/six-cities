export const CreateOfferMessages = {
  title: {
    invalidFormat: 'Title must be a string',
    lengthField: 'Title must be between 8 and 128 characters',
  },
  description: {
    invalidFormat: 'Description must be a string',
    lengthField: 'Description must be between 16 and 1024 characters',
  },
  city: {
    invalidFormat: 'Invalid city name',
  },
  previewImage: {
    invalidFormat: 'Preview image must be a string',
    maxLength: 'Max length for preview image is 255',
  },
  offerImages: {
    invalidFormat: 'Offer images must be an array of strings',
  },
  isPremium: {
    invalidFormat: 'Is premium must be a boolean',
  },
  isFavorite: {
    invalidFormat: 'Is favorite must be a boolean',
  },
  rating: {
    invalidFormat: 'Rating must be an integer',
    minValue: 'Minimum rating is 1',
    maxValue: 'Maximum rating is 5',
  },
  propertyType: {
    invalid: 'Invalid property type',
  },
  roomsCount: {
    invalidFormat: 'Rooms count must be an integer',
    minValue: 'Minimum rooms count is 1',
    maxValue: 'Maximum rooms count is 10',
  },
  guestsCount: {
    invalidFormat: 'Guests count must be an integer',
    minValue: 'Minimum guests count is 1',
    maxValue: 'Maximum guests count is 10',
  },
  rentalPrice: {
    invalidFormat: 'Rental price must be an integer',
    minValue: 'Min rental price is 10',
    maxValue: 'Max rental price is 1000000',
  },
  amenities: {
    invalidFormat: 'Amenities must be an array of strings',
  },
  hostId: {
    invalidFormat: 'Host ID must be a valid id',
  },
};
