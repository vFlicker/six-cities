import { useSearchParams } from 'react-router-dom';

import { cityFilters, hotelsModel } from '~/entities/hotel';
import { useAppSelector } from '~/shared/hooks';
import { LocationLink } from '~/shared/ui/LocationLink';

import classes from './CityFilters.module.css';

export function CityFilters(): JSX.Element {
  const [searchParams] = useSearchParams();
  const cityFilter = useAppSelector(hotelsModel.selectFilter);

  const filtersList = Array.from(cityFilters).map((city) => {
    searchParams.set('filter', city);

    const to = `?${searchParams.toString()}`;
    const isActive = cityFilter === city;

    return (
      <li key={city}>
        <LocationLink to={to} isActive={isActive}>
          {city}
        </LocationLink>
      </li>
    );
  });

  return (
    <section className="container">
      <ul className={classes.filter}>{filtersList}</ul>
    </section>
  );
}
