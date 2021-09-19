import React from 'react';

const RatingTitles = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

interface RatingViewProps {
  title: string,
  currentItem: number
}

function RatingView(props: RatingViewProps): React.ReactElement {
  const {
    title,
    currentItem,
  } = props;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={currentItem}
        id={`${currentItem}-stars`}
        type="radio"
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

function Rating(): React.ReactElement {
  return (
    <div className="reviews__rating-form form__rating">
      {RatingTitles.map((title, index) => {
        const currentItem = RatingTitles.length - index;

        return (
          <RatingView
            key={title}
            title={title}
            currentItem={currentItem}
          />
        );
      })}
    </div>
  );
}

export default Rating;
