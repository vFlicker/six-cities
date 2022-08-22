const MAX_PERCENT = 100;
const TOTAL_RATING = 5;

export const convertRatingToPercents = (rating: number): string => {
  return `${(MAX_PERCENT * rating) / TOTAL_RATING}%`;
};
