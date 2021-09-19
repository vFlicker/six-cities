import React, { PropsWithChildren } from 'react';

const RatingTitles = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

interface RatingProps {
  rating: number,
  ratingToggleHandler: (rating: number) => void
}

interface RatingViewProps extends RatingProps {
  title: string,
  currentItem: number
}

function RatingView(props: PropsWithChildren<RatingViewProps>): React.ReactElement {
  const {
    title,
    currentItem,
    rating,
    ratingToggleHandler,
  } = props;

  const isChecked = rating === currentItem;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={currentItem}
        id={`${currentItem}-stars`}
        type="radio"
        checked={isChecked}
        onChange={() => ratingToggleHandler(currentItem)}
      />
      <label
        htmlFor={`${currentItem}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

function Rating(props: PropsWithChildren<RatingProps>): React.ReactElement {
  const { rating, ratingToggleHandler } = props;

  return (
    <div className="reviews__rating-form form__rating">
      {RatingTitles.map((title, index) => {
        const currentItem = RatingTitles.length - index;

        return (
          <RatingView
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

export default Rating;
