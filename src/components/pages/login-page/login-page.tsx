import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '~/constants';
import { useAppSelector } from '~/hooks/use-app-selector';
import * as userSlice from '~/store/slices/user/slice';

import { HeaderSection } from '../../sections/header-section/header-section';
import { LocationSection } from '../../sections/location-section/location-section';
import { LoginSection } from '../../sections/login-section/login-section';
import { PageContent } from '../../shared/page-content';

import * as S from './styles';

export function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const isUserAuthorized = useAppSelector(userSlice.selectIsUserAuthorized);

  useEffect(() => {
    if (isUserAuthorized) {
      navigate(AppRoute.Root);
    }
  }, [isUserAuthorized, navigate]);

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
