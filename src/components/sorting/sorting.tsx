import { useState } from 'react';

import { SortType } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { SortType as TSortType } from '~/types';
import { appSlice } from '~/store';

export function Sorting(): JSX.Element {
  const [sortMenuOpened, setSortMenuOpened] = useState(false);

  const currentSortType = useAppSelector(appSlice.getCurrentSortType);

  const dispatch = useAppDispatch();

  const toggleSortMenu = () => setSortMenuOpened((prevState) => !prevState);

  const handleOptionClick = (sortType: TSortType) => {
    if (sortType === currentSortType) return;

    dispatch(appSlice.changeSortType(sortType));
    toggleSortMenu();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        role="button"
        onClick={toggleSortMenu}
        onKeyDown={toggleSortMenu}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          sortMenuOpened ? 'places__options--opened ' : ''
        }`}
      >
        {Object.entries(SortType).map(([key, sortType]) => {
          const optionClass =
            currentSortType === sortType ? 'places__option--active' : '';
          return (
            <li
              key={key}
              className={`places__option ${optionClass}`}
              tabIndex={0}
              role="presentation"
              onClick={() => handleOptionClick(sortType)}
              onKeyDown={() => handleOptionClick(sortType)}
            >
              {sortType}
            </li>
          );
        })}
      </ul>
    </form>
  );
}
