import * as S from './styles';

export function Spinner(): JSX.Element {
  return (
    <S.Spinner data-testid="spinner">
      <S.Item />
      <S.Item />
      <S.Item />
      <S.Item />
    </S.Spinner>
  );
}
