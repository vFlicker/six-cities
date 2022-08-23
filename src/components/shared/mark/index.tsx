import * as S from './styles';

type MarkProps = {
  type: 'big' | 'small';
  isPremium?: boolean;
};

export function Mark({ isPremium, type }: MarkProps): JSX.Element | null {
  if (!isPremium) return null;

  return (
    <S.Mark type={type}>
      <span>Premium</span>
    </S.Mark>
  );
}
