import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoute, CityName } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

import LocationsItem from '../locations-item';
import { SectionHeader, SectionLocations, SectionLogin } from '../sections';
import { isUserAuthorized } from '../../utils';

function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (isUserAuthorized(authorizationStatus)) {
    useEffect(() => {
      navigate(AppRoute.Root);
    }, []);
  }

  return (
    <div className="page page--gray page--login">
      <SectionHeader />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <SectionLogin />
          <SectionLocations className="locations--login locations--current">
            <div className="locations__item">
              <LocationsItem cityName={CityName.Amsterdam} />
            </div>
          </SectionLocations>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
