import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoute } from '@/constants';
import { getCurrentCityName } from '@/redux/state/offers/selectors';
import { getAuthorizationStatus } from '@/redux/state/user/selectors';

import { LocationsItem } from '../locations-item';
import { SectionHeader, SectionLocations, SectionLogin } from '../sections';
import { isUserAuthorized } from '../../utils/user';

export function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const currentCityName = useSelector(getCurrentCityName);

  useEffect(() => {
    if (isUserAuthorized(authorizationStatus)) {
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
