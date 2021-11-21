import React, { PropsWithChildren } from 'react';
import { RatingListProps } from '../rating-list/rating-list';

type RatingItemProps = {
  title: string,
  currentItem: number
} & RatingListProps;

function RatingItem(props: PropsWithChildren<RatingItemProps>): React.ReactElement {
  const {
    title,
    currentItem,
    rating,
    onRatingToggle,
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
        onChange={() => onRatingToggle(currentItem)}
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

export default RatingItem;
