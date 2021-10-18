import React from 'react';
import { SectionHeader, SectionLocations, SectionLogin } from '../sections';
import LocationsItem from '../locations-item';

function LoginPage(): React.ReactElement {
  return (
    <div className="page page--gray page--login">
      <SectionHeader />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <SectionLogin />
          <SectionLocations className="locations--login locations--current">
            <div className="locations__item">
              <LocationsItem city="Amsterdam" />
            </div>
          </SectionLocations>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
