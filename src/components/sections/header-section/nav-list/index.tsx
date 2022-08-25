import { AppRoute, AuthStatus } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

import * as S from './styles';

function NoAuthList(): JSX.Element {
  return (
    <S.List>
      <S.Item>
        <S.Link to={AppRoute.Login}>
          <S.Avatar />
          <S.Button>Sign in</S.Button>
        </S.Link>
      </S.Item>
    </S.List>
  );
}

function AuthList(): JSX.Element {
  const user = useAppSelector(userSlice.getUser);

  const dispatch = useAppDispatch();

  const { avatarUrl, email } = user || {};

  return (
    <S.List>
      <S.Item>
        <S.Link to={AppRoute.Favorites}>
          <S.Avatar avatarUrl={avatarUrl} />
          <S.Button>{email}</S.Button>
        </S.Link>
      </S.Item>
      <S.Item>
        <S.Link to={AppRoute.Root} onClick={() => dispatch(userSlice.logout())}>
          <S.Button>Sign out</S.Button>
        </S.Link>
      </S.Item>
    </S.List>
  );
}

export function NavList(): JSX.Element {
  const authStatus = useAppSelector(userSlice.getAuthStatus);
  const list = authStatus !== AuthStatus.Auth ? <NoAuthList /> : <AuthList />;

  return <S.Nav>{list}</S.Nav>;
}
