import { AppRoute } from '~/constants';
import { useAppDispatch } from '~/hooks/use-app-dispatch';
import { useAppSelector } from '~/hooks/use-app-selector';
import * as offersSlice from '~/store/slices/offers/slice';
import * as userSlice from '~/store/slices/user/slice';

import * as S from '../styles';

export function AuthList(): JSX.Element | null {
  const user = useAppSelector(userSlice.selectUser);
  const favoriteOffers = useAppSelector(offersSlice.selectFavorites);

  const dispatch = useAppDispatch();

  const { avatarUrl, email } = user || {};

  const favoriteCount = favoriteOffers.length;

  return (
    <S.List>
      <S.Item>
        <S.Link to={AppRoute.Favorites}>
          <S.Avatar avatarUrl={avatarUrl} />
          {Boolean(favoriteCount) && (
            <S.Counter data-testid="counter">{favoriteCount}</S.Counter>
          )}
          <S.LinkText>{email}</S.LinkText>
        </S.Link>
      </S.Item>
      <S.Item>
        <S.Link to={AppRoute.Root} onClick={() => dispatch(userSlice.logout())}>
          <S.LinkText>Sign out</S.LinkText>
        </S.Link>
      </S.Item>
    </S.List>
  );
}
