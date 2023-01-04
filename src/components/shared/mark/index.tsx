import * as S from './styles';

type MarkProps = {
  type: 'big' | 'small';
};

export function Mark({ type }: MarkProps): JSX.Element | null {
  return (
    <S.Mark type={type}>
      <span>Premium</span>
    </S.Mark>
  );
}
