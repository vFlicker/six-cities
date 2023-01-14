import { useAppSelector } from '~/hooks/use-app-selector';
import * as userSlice from '~/store/slices/user/slice';

import { Container } from '../../shared/container';
import { Logo } from '../../shared/logo/logo';
import { AuthList } from './auth-list/auth-list';
import { NoAuthList } from './no-auth-list.test/no-auth-list';

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
