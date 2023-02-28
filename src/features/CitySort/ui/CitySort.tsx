/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import cn from 'classnames';
import classes from './CitySort.module.css';

type CitySortProps = {
  className?: string;
};

export function CitySort({ className }: CitySortProps): JSX.Element {
  return (
    <form className={cn(className, classes.sorting)} action="#" method="get">
      <span className={classes.caption}>Sort by:</span>
      <span className={classes.type} tabIndex={0}>
        Popular
        <svg className={classes.arrow} width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn(classes.options, classes.opened, classes.custom)}>
        <li className={cn(classes.option, classes.active)} tabIndex={0}>
          Popular
        </li>
        <li className={classes.option} tabIndex={0}>
          Price: low to high
        </li>
        <li className={classes.option} tabIndex={0}>
          Price: high to low
        </li>
        <li className={classes.option} tabIndex={0}>
          Top rated first
        </li>
      </ul>
    </form>
  );
}
