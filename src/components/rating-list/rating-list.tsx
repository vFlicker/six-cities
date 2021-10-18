import React, { PropsWithChildren } from 'react';
import RatingItem from '../rating-item';

const RatingTitles: string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export type RatingListProps = {
  rating: number,
  ratingToggleHandler: (rating: number) => void
}

function RatingList(props: PropsWithChildren<RatingListProps>): React.ReactElement {
  const { rating, ratingToggleHandler } = props;

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
            ratingToggleHandler={ratingToggleHandler}
          />
        );
      })}
    </div>
  );
}

export default RatingList;
