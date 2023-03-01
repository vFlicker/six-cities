import cn from 'classnames';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { citySort, hotelsModel } from '~/entities/hotel';
import { useAppSelector } from '~/shared/hooks';

import classes from './CitySort.module.css';

type CitySortProps = {
  className?: string;
};

export function CitySort({ className }: CitySortProps): JSX.Element {
  const [isSortListOpen, setIsSortListOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const sort = useAppSelector(hotelsModel.selectSort);

  const handleButtonClick = () => {
    setIsSortListOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleLinkClick = () => setIsSortListOpen(false);

  const sortName = citySort[sort];

  const listClassNames = cn(classes.options, classes.custom, {
    [classes.opened]: isSortListOpen,
  });

  const sortList = Object.entries(citySort).map(([key, value]) => {
    searchParams.set('sort', key);

    const to = `?${searchParams.toString()}`;

    const classNames = cn(classes.option, {
      [classes.active]: sort === key,
    });

    return (
      <li key={key}>
        <Link to={to} className={classNames} onClick={handleLinkClick}>
          {value}
        </Link>
      </li>
    );
  });

  return (
    <form className={cn(className, classes.sorting)} action="#" method="get">
      <span className={classes.caption}>Sort by:</span>
      <button
        type="button"
        className={classes.type}
        onClick={handleButtonClick}
      >
        {sortName}
        <svg className={classes.arrow} width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </button>
      <ul className={listClassNames}>{sortList}</ul>
    </form>
  );
}
