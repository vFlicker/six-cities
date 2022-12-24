import * as S from './styles';

type HostProps = {
  authorName: string;
  description: string;
  avatarUrl: string;
  isPro: boolean;
};

export function Host({
  authorName,
  avatarUrl,
  description,
  isPro,
}: HostProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>Meet the host</S.Title>

      <S.User>
        <S.AvatarWrapper isPro={isPro}>
          <S.Avatar width="74" height="74" src={avatarUrl} alt={authorName} />
        </S.AvatarWrapper>
        <S.Name>{authorName}</S.Name>
      </S.User>

      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
