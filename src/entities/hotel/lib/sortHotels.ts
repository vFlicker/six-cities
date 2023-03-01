import { Hotel } from '~/shared/types/hotel';
import { Sort } from '../types';

type SortFunction = (firstHotel: Hotel, secondHotel: Hotel) => number;

const sortType: Record<Sort, SortFunction> = {
  popular: () => 0,
  priceLow: (firstHotel, secondHotel) => firstHotel.price - secondHotel.price,
  priceHigh: (firstHotel, secondHotel) => secondHotel.price - firstHotel.price,
  topRated: (firstHotel, secondHotel) => secondHotel.rating - firstHotel.rating,
};

export const sortHotels = (hotels: Hotel[], sort: Sort): Hotel[] => {
  const clonedHotels = [...hotels];
  const sortCallback = sortType[sort];
  const sortedHotels = clonedHotels.sort(sortCallback);
  return sortedHotels;
};
