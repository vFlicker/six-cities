import * as S from './styles';

type StartProps = {
  width: number;
  height: number;
  rating: number;
  hasText?: boolean;
};

const MAX_PERCENT = 100;
const TOTAL_RATING = 5;

const convertRatingToPercents = (rating: number): number => {
  return (MAX_PERCENT * rating) / TOTAL_RATING;
};

export function StarRating({
  width,
  height,
  rating,
  hasText = false,
}: StartProps): JSX.Element {
  return (
    <S.StarsWrapper>
      <S.Stars width={width} height={height}>
        <S.StarsItem
          width={width}
          height={height}
          percents={convertRatingToPercents(rating)}
        />
        <S.HiddenText>Rating</S.HiddenText>
      </S.Stars>

      {hasText && <S.Text>{rating}</S.Text>}
    </S.StarsWrapper>
  );
}
