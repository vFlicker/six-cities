import { RatingItem, RatingListProps } from '../rating-item';

// TODO: use type for RatingItemProps
const RatingTitles = ['perfect', 'good', 'not bad', 'badly', 'terribly'] as const;

// TODO: move all form components to separate directory
export function RatingList({ rating, onRatingToggle }: RatingListProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {RatingTitles.map((title, index) => {
        const currentItem = RatingTitles.length - index;

        return (
          <RatingItem
            key={title}
            title={title}
            currentItem={currentItem}
            rating={rating}
            onRatingToggle={onRatingToggle}
          />
        );
      })}
    </div>
  );
}
