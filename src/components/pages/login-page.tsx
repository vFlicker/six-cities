import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '~/constants';
import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

import { SectionHeader, LocationSection, SectionLogin } from '../sections';
import { FlexContainer } from '../shared';

export function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const authStatus = useAppSelector(userSlice.getAuthStatus);

  useEffect(() => {
    if (userSlice.isUserAuthorized(authStatus)) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <SectionHeader />
      <main className="page__main page__main--login">
        {/* // TODO: <Layout grid fullWidth /> */}
        <FlexContainer>
          <SectionLogin />
          <LocationSection />
        </FlexContainer>
      </main>
    </div>
  );
}
