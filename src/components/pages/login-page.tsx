import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '@/constants';
import { useAppSelector } from '@/hooks';
import { appSlice, userSlice } from '@/store';

import { LocationsItem } from '../locations-item';
import { SectionHeader, SectionLocations, SectionLogin } from '../sections';

export function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector(userSlice.getAuthorizationStatus);
  const currentCityName = useAppSelector(appSlice.getCurrentCityName);

  useEffect(() => {
    if (userSlice.isUserAuthorized(authorizationStatus)) {
      navigate(AppRoute.ROOT);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <SectionHeader />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <SectionLogin />
          <SectionLocations className="locations--login locations--current">
            <div className="locations__item">
              <LocationsItem cityName={currentCityName} />
            </div>
          </SectionLocations>
        </div>
      </main>
    </div>
  );
}
