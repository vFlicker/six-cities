import * as S from './styles';

type RatingListProps = {
  rating: number;

  onRatingToggle: (rating: number) => void;
};

type RatingItemProps = {
  title: string;
  currentItem: number;
} & RatingListProps;

const ratingTitles = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export function RatingList({
  rating,

  onRatingToggle,
}: RatingListProps): JSX.Element {
  return (
    <S.Rating>
      {ratingTitles.map((title, index) => (
        <RatingItem
          key={title}
          title={title}
          currentItem={ratingTitles.length - index}
          rating={rating}
          onRatingToggle={onRatingToggle}
        />
      ))}
    </S.Rating>
  );
}

function RatingItem({
  title,
  currentItem,
  rating,

  onRatingToggle,
}: RatingItemProps): JSX.Element {
  return (
    <>
      <S.Input
        name="rating"
        value={currentItem}
        id={`${currentItem}-stars`}
        type="radio"
        checked={rating === currentItem}
        onChange={() => onRatingToggle(currentItem)}
      />
      <S.Label
        htmlFor={`${currentItem}-stars`}
        className="form__rating-label"
        title={title}
      >
        <S.Image width="37" height="33">
          <use xlinkHref="#icon-star" />
        </S.Image>
      </S.Label>
    </>
  );
}
