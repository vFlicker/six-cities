import { cityFilters, DEFAULT_SORT } from '~/entities/hotel';
import { AppRoute } from '~/shared/constants';
import { LocationLink } from '~/shared/ui/LocationLink';

import { pickRandomItem } from '../lib';
import classes from './RandomLocation.module.css';

const randomCity = pickRandomItem(Array.from(cityFilters));
const to = `${AppRoute.ROOT}?filter=${randomCity}&sort=${DEFAULT_SORT}`;

export function RandomLocation(): JSX.Element {
  return (
    <LocationLink to={to} className={classes.locationsLink} isActive>
      {randomCity}
    </LocationLink>
  );
}
