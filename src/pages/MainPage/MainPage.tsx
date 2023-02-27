import cn from 'classnames';
import { useEffect } from 'react';

import { Card, hotelsModel } from '~/entities/hotels';
import { fetchAllHotels } from '~/shared/apiActions';
import { AppRoute } from '~/shared/constants';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import { ButtonLink } from '~/shared/ui/ButtonLink';
import { Header } from '~/widgets/Header/Header';

import classes from './MainPage.module.css';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllHotels());
  }, [dispatch]);

  const hotels = useAppSelector(hotelsModel.selectAllHotels);
  const hotelList = hotels.map((hotel) => (
    <Card key={hotel.id} hotel={hotel} />
  ));

  return (
    <div className={classes.page}>
      <Header />
      <main className={classes.main}>
        <h1 className="visually-hidden">Cities</h1>
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
        <div className={classes.cities}>
          <div className={cn('container', classes.citiesContainer)}>
            <section className={classes.places}>
              <h2 className="visually-hidden">Places</h2>
              <b className={classes.placesFound}>
                312 places to stay in Amsterdam
              </b>
              <div className={classes.placesList}>{hotelList}</div>
            </section>
            <div className={classes.mapContainer}>
              <section className={classes.map}></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
