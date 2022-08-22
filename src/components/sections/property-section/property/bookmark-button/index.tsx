import * as S from './styles';

type BookmarkButtonProps = {
  isFavorite?: boolean;

  onClick: () => void;
};

export function BookmarkButton({
  isFavorite,

  onClick,
}: BookmarkButtonProps): JSX.Element {
  return (
    <S.Button type="button" isFavorite={isFavorite} onClick={onClick}>
      <S.Svg width="31" height="33">
        <use xlinkHref="#icon-bookmark" />
      </S.Svg>
      <S.HiddenText>To bookmarks</S.HiddenText>
    </S.Button>
  );
}
