import cn from 'classnames';
import { useEffect } from 'react';

import { Header } from '~/widgets/Header/ui/Header';
import { CityFilters } from '~/features/CityFilters';
import { CitySort } from '~/features/CitySort';
import { filtersModel } from '~/entities/filters';
import { Card, hotelsModel } from '~/entities/hotel';
import { fetchAllHotels } from '~/shared/apiActions';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';

import classes from './MainPage.module.css';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllHotels());
  }, [dispatch]);

  const filteredHotels = useAppSelector(hotelsModel.selectFilteredHotels);
  const cityFilter = useAppSelector(filtersModel.selectCityFilter);

  const hotelList = filteredHotels.map((filteredHotel) => (
    <Card key={filteredHotel.id} hotel={filteredHotel} />
  ));

  const filteredHotelsCount = filteredHotels.length;

  return (
    <div className={classes.page}>
      <Header />
      <main className={classes.main}>
        <h1 className="visually-hidden">Cities</h1>
        <CityFilters />
        <div className={classes.cities}>
          <div className={cn('container', classes.citiesContainer)}>
            <section className={classes.places}>
              <h2 className="visually-hidden">Places</h2>
              <b className={classes.placesFound}>
                {filteredHotelsCount} places to stay in {cityFilter}
              </b>
              <CitySort className={classes.sorting} />
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
