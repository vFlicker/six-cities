import { RatingItem, RatingListProps } from '../rating-item';

const RatingTitles: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export function RatingList(props: RatingListProps): JSX.Element {
  const { rating, onRatingToggle } = props;

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
