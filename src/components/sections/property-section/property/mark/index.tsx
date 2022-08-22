import * as S from './styles';

type MarkProps = {
  isPremium?: boolean;
};

export function Mark({ isPremium }: MarkProps): JSX.Element | null {
  if (!isPremium) return null;

  return (
    <S.Mark>
      <span>Premium</span>
    </S.Mark>
  );
}
