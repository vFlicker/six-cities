import { Link } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

import * as S from './styles';

export function NavList(): JSX.Element {
  const authorizationStatus = useAppSelector(userSlice.getAuthorizationStatus);

  return (
    <S.Nav>
      {authorizationStatus !== AuthorizationStatus.AUTH ? (
        <NoAuthList />
      ) : (
        <AuthList />
      )}
    </S.Nav>
  );
}

function NoAuthList(): JSX.Element {
  return (
    <S.List>
      <S.Item>
        {/* TODO: react-router-dom with styled components */}
        <Link
          to={AppRoute.LOGIN}
          className="header__nav-link header__nav-link--profile"
        >
          <S.Avatar />
          <S.Button>Sign in</S.Button>
        </Link>
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
        <Link
          to={AppRoute.FAVORITES}
          className="header__nav-link header__nav-link--profile"
        >
          <S.Avatar avatarUrl={avatarUrl} />
          <S.Button>{email}</S.Button>
        </Link>
      </S.Item>
      <S.Item>
        {/* TODO: react-router-dom with styled components */}
        <Link
          to={AppRoute.ROOT}
          className="header__nav-link"
          onClick={() => dispatch(userSlice.logout())}
        >
          <S.Button>Sign out</S.Button>
        </Link>
      </S.Item>
    </S.List>
  );
}
