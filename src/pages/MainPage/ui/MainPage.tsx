import cn from 'classnames';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Header } from '~/widgets/Header/ui/Header';
import { CityFilters } from '~/features/CityFilters';
import { CitySort } from '~/features/CitySort';
import { Sort, Card, hotelsModel } from '~/entities/hotel';
import { fetchAllHotels } from '~/shared/apiActions';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import { CityName } from '~/shared/types/hotel';

import classes from './MainPage.module.css';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllHotels());
  }, [dispatch]);

  const [searchParams] = useSearchParams();

  const filter = useAppSelector(hotelsModel.selectFilter);
  const sort = useAppSelector(hotelsModel.selectSort);

  useEffect(() => {
    const filterParam = searchParams.get('filter') as CityName | null;
    const sortParam = searchParams.get('sort') as Sort | null;

    if (filterParam && filterParam !== filter) {
      dispatch(hotelsModel.changeFilter(filterParam));
    }

    if (sortParam && sortParam !== sort) {
      dispatch(hotelsModel.changeSort(sortParam));
    }
  }, [dispatch, filter, searchParams, sort]);

  const filteredAndSortedHotels = useAppSelector(
    hotelsModel.selectFilteredAndSortedHotels,
  );

  const cityFilter = useAppSelector(hotelsModel.selectFilter);

  const hotelList = filteredAndSortedHotels.map((filteredHotel) => (
    <Card key={filteredHotel.id} hotel={filteredHotel} />
  ));

  const filteredHotelsCount = filteredAndSortedHotels.length;

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
