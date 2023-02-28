import { hotelsConfig } from '~/entities/hotel';
import { AppRoute } from '~/shared/constants';
import { ButtonLink } from '~/shared/ui/ButtonLink';

import { pickRandomItem } from '../lib';
import classes from './RandomLocation.module.css';

const randomCity = pickRandomItem(Array.from(hotelsConfig.cityFilters));
const to = `${AppRoute.ROOT}?city=${randomCity}`;

export function RandomLocation(): JSX.Element {
  return (
    <ButtonLink to={to} className={classes.locationsLink} isActive>
      {randomCity}
    </ButtonLink>
  );
}
