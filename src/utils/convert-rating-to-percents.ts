const MAX_PERCENT = 100;
const TOTAL_RATING = 5;

export const convertRatingToPercents = (rating: number): number => {
  return (MAX_PERCENT * rating) / TOTAL_RATING;
};
