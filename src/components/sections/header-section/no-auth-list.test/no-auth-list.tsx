import { AppRoute } from '~/constants';

import * as S from '../styles';

export function NoAuthList(): JSX.Element {
  return (
    <S.List>
      <S.Item>
        <S.Link to={AppRoute.Login}>
          <S.Avatar />
          <S.LinkText>Sign in</S.LinkText>
        </S.Link>
      </S.Item>
    </S.List>
  );
}
