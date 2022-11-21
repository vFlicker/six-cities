import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '~/constants';
import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

import { PageContent } from '../../shared';
import { HeaderSection, LocationSection, LoginSection } from '../../sections';

import * as S from './styles';

export function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const authStatus = useAppSelector(userSlice.selectAuthStatus);

  useEffect(() => {
    if (userSlice.isUserAuthorized(authStatus)) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);

  return (
    <S.Page>
      <HeaderSection />

      <PageContent>
        <S.Container>
          <LoginSection />
          <LocationSection />
        </S.Container>
      </PageContent>
    </S.Page>
  );
}
