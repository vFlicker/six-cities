export const calculateWidthPercentage = (rating: number): number => {
  const clampedRating = Math.max(0, Math.min(rating, 5));
  return (clampedRating / 5) * 100;
};
