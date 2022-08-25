import { convertRatingToPercents } from '~/utils';

import * as S from './styles';

type StartProps = {
  width: number;
  height: number;
  rating: number;
  hasText?: boolean;
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
