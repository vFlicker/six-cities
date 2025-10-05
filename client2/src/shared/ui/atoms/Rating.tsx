import { JSX } from 'react';

import { cn } from '~/shared/lib/css';

type RatingSize = 'small' | 'medium' | 'large';

type RatingProps = {
  size: RatingSize;
  rating: number;
  className?: string;
};

export function Rating({ className, rating, size }: RatingProps): JSX.Element {
  const widthPercentage = calculateWidthPercentage(rating);

  return (
    <div className={cn('relative', sizeClasses[size].container, className)}>
      <div className={inactiveStarsClasses(size)} />

      <div
        className={activeStarsWrapperClasses}
        style={{ width: `${widthPercentage}%` }}
      >
        <div className={activeStarsClasses(size)} />
      </div>

      <span className="sr-only">Rating: {rating} out of 5</span>
    </div>
  );
}

const calculateWidthPercentage = (rating: number): number => {
  const clampedRating = Math.max(0, Math.min(rating, 5));
  return (clampedRating / 5) * 100;
};

const sizeClasses: Record<RatingSize, { container: string; stars: string }> = {
  small: {
    container: 'h-3 w-[73px]',
    stars: 'w-[73px] bg-[length:73px_12px]',
  },
  medium: {
    container: 'h-4 w-[98px]',
    stars: 'w-[98px] bg-[length:98px_16px]',
  },
  large: {
    container: 'h-6 w-[147px]',
    stars: 'w-[147px] bg-[length:147px_24px]',
  },
};

const inactiveStarsClasses = (size: RatingSize) =>
  cn(
    'absolute top-0 left-0 h-full bg-[url(/icons/stars-no-active.svg)] bg-left bg-no-repeat',
    sizeClasses[size].stars,
  );

const activeStarsWrapperClasses = cn(
  'absolute top-0 left-0 h-full overflow-hidden',
);

const activeStarsClasses = (size: RatingSize) =>
  cn(
    'h-full bg-[url(/icons/stars-active.svg)] bg-left bg-no-repeat',
    sizeClasses[size].stars,
  );
