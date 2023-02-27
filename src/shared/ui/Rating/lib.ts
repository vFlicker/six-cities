type Style = { width: string };

const convertRatingToPercentage = (rating: number): number => {
  const MAX_PERCENT = 100;
  const TOTAL_RATING = 5;

  return (MAX_PERCENT * rating) / TOTAL_RATING;
};

export const getStarsStyle = (rating: number): Style => {
  const percentage = convertRatingToPercentage(rating);

  const style = { width: `${percentage}%` };
  return style;
};
