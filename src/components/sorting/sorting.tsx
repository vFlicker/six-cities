import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SortType } from '@/constants';
import { SortType as TSortType } from '@/types';
import { changeSortType } from '@/redux/state/app/app-slice';
import { getCurrentSortType } from '@/redux/state/offers/selectors';

export function Sorting(): JSX.Element {
  const [sortMenuOpened, setSortMenuOpened] = useState(false);

  const currentSortType = useSelector(getCurrentSortType);

  const dispatch = useDispatch();

  const activeClass = sortMenuOpened ? 'places__options--opened ' : '';

  const handleSortTypeClick = () => {
    setSortMenuOpened((prevState) => !prevState);
  };

  const handleOptionClick = (sortType: TSortType) => {
    if (sortType === currentSortType) {
      return;
    }

    dispatch(changeSortType(sortType));

    setSortMenuOpened((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        role="button"
        onClick={handleSortTypeClick}
        onKeyDown={handleSortTypeClick}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom  ${activeClass}`}>
        {Object.entries(SortType).map(([key, sortType]) => {
          const optionClass = currentSortType === sortType ? 'places__option--active' : '';
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
