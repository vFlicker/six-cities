import { AppRoute } from '~/shared/constants';
import { ButtonLink } from '~/shared/ui/ButtonLink';
import { Footer } from '~/shared/ui/Footer/Footer';
import { Header } from '~/widgets/Header/Header';

import classes from './MainPage.module.css';

export function MainPage(): JSX.Element {
  return (
    <div className={classes.page}>
      <Header />
      <main className={classes.main}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="container">
            <ul className={classes.locationsList}>
              <li className={classes.locationsItem}>
                <ButtonLink to={AppRoute.ROOT}>Paris</ButtonLink>
              </li>

              <li className={classes.locationsItem}>
                <ButtonLink to={AppRoute.ROOT}>Cologne</ButtonLink>
              </li>

              <li className={classes.locationsItem}>
                <ButtonLink to={AppRoute.ROOT}>Brussels</ButtonLink>
              </li>

              <li className={classes.locationsItem}>
                <ButtonLink to={AppRoute.ROOT} isActive>
                  Amsterdam
                </ButtonLink>
              </li>

              <li className={classes.locationsItem}>
                <ButtonLink to={AppRoute.ROOT}>Hamburg</ButtonLink>
              </li>

              <li className={classes.locationsItem}>
                <ButtonLink to={AppRoute.ROOT}>Dusseldorf</ButtonLink>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
