import React from 'react';

import { CityName } from '../../const';
import LocationsItem from '../locations-item';
import { SectionHeader, SectionLocations, SectionLogin } from '../sections';

function LoginPage(): JSX.Element {
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
