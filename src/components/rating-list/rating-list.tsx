import React, { PropsWithChildren } from 'react';
import RatingItem from '../rating-item';

const RatingTitles: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export type RatingListProps = {
  rating: number,
  onRatingToggle: (rating: number) => void
}

function RatingList(props: PropsWithChildren<RatingListProps>): React.ReactElement {
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

export default RatingList;
