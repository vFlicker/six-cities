import * as S from './styles';

type NotFoundProps = {
  iconSrc: string;
  title: string;
  description: string;
};

export function NotFound({
  iconSrc,
  title,
  description,
}: NotFoundProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Icon src={iconSrc} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
