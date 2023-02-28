import { MouseEvent } from 'react';

import { filtersModel } from '~/entities/filters';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import { ButtonLink } from '~/shared/ui/ButtonLink';

import { cityFilters } from '../config';
import classes from './CityFilters.module.css';

export function CityFilters(): JSX.Element {
  const dispatch = useAppDispatch();

  const cityFilter = useAppSelector(filtersModel.selectCityFilter);

  const filtersList = Array.from(cityFilters).map((city) => {
    const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
      evt.preventDefault();
      dispatch(filtersModel.changeCityFilter(city));
    };

    const to = `?city=${city}`;
    const isActive = cityFilter === city;

    return (
      <li key={city}>
        <ButtonLink to={to} isActive={isActive} onClick={handleClick}>
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
