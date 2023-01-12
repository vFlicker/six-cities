import { Fragment } from 'react';

import * as S from './styles';

type ReviewRatingProps = {
  rating: number;

  onRatingToggle: (rating: number) => void;
};

const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export function ReviewRating({
  rating,

  onRatingToggle,
}: ReviewRatingProps): JSX.Element {
  return (
    <S.Rating>
      {RATING_TITLES.map((title, index) => {
        const value = RATING_TITLES.length - index;

        return (
          <Fragment key={title}>
            <S.Input
              name="rating"
              value={value}
              id={`rating-item-${value}`}
              type="radio"
              checked={rating === value}
              onChange={() => onRatingToggle(value)}
              data-testid="rating-item"
            />
            <S.Label
              htmlFor={`rating-item-${value}`}
              className="form__rating-label"
              title={title}
            >
              <S.Image width="37" height="33">
                <use xlinkHref="#icon-star" />
              </S.Image>
            </S.Label>
          </Fragment>
        );
      })}
    </S.Rating>
  );
}
