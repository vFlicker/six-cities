import * as S from './styles';

import { getButtonSize, Size } from './utils';

type BookmarkButtonProps = {
  size: Size;
  isLoading: boolean;
  isFavorite: boolean;

  onClick: () => void;
};

export function BookmarkButton({
  size,
  isLoading,
  isFavorite,

  onClick,
}: BookmarkButtonProps): JSX.Element {
  const { width, height } = getButtonSize(size);

  return (
    <S.Button
      type="button"
      isFavorite={isFavorite}
      onClick={onClick}
      disabled={isLoading}
    >
      <S.Svg width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </S.Svg>
      <S.HiddenText>To bookmarks</S.HiddenText>
    </S.Button>
  );
}
