import * as S from './styles';

type BookmarkButtonProps = {
  width: number;
  height: number;
  isFavorite?: boolean;

  onClick: () => void;
};

export function BookmarkButton({
  width,
  height,
  isFavorite,

  onClick,
}: BookmarkButtonProps): JSX.Element {
  return (
    <S.Button type="button" isFavorite={isFavorite} onClick={onClick}>
      <S.Svg width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </S.Svg>
      <S.HiddenText>To bookmarks</S.HiddenText>
    </S.Button>
  );
}
