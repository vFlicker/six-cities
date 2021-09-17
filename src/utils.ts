const MAX_PERCENT = 100;
const TOTAL_RATING = 5;

const convertRatingToPercents = (rating: number): string => `${(MAX_PERCENT * rating) / TOTAL_RATING}%`;

export default convertRatingToPercents;
