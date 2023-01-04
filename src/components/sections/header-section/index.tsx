import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

import { Container, Logo } from '../../shared';
import { AuthList, NoAuthList } from './nav-list';

import * as S from './styles';

export function HeaderSection(): JSX.Element {
  const isUserAuthorized = useAppSelector(userSlice.selectIsUserAuthorized);
  const navList = isUserAuthorized ? <AuthList /> : <NoAuthList />;

  return (
    <S.Header>
      <Container>
        <S.HeaderWrapper>
          <Logo />
          <S.Nav>{navList}</S.Nav>
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
}
