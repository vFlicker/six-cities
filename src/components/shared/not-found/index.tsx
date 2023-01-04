import * as S from './styles';

type NotFoundProps = {
  iconSrc: string;
  alt: string;
  title: string;
  description: string;
};

export function NotFound({
  iconSrc,
  alt,
  title,
  description,
}: NotFoundProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Icon src={iconSrc} alt={alt} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
