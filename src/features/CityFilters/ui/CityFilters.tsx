import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { filtersModel } from '~/entities/filters';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import { CityName } from '~/shared/types/hotel';
import { ButtonLink } from '~/shared/ui/ButtonLink';

import { cityFilters } from '../config';
import classes from './CityFilters.module.css';

export function CityFilters(): JSX.Element {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const cityFilter = useAppSelector(filtersModel.selectCityFilter);

  useEffect(() => {
    const filter = searchParams.get('city') as CityName | null;
    if (!filter) return;
    dispatch(filtersModel.changeCityFilter(filter));
  }, [dispatch, searchParams]);

  const filtersList = Array.from(cityFilters).map((city) => {
    const to = `?city=${city}`;
    const isActive = cityFilter === city;

    return (
      <li key={city}>
        <ButtonLink to={to} isActive={isActive}>
          {city}
        </ButtonLink>
      </li>
    );
  });

  return (
    <section className="container">
      <ul className={classes.filter}>{filtersList}</ul>
    </section>
  );
}
