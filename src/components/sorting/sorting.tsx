import React, { useState } from 'react';
import { TSortNames } from '../../types';

const sortNames: TSortNames[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

function Sorting(): React.ReactElement {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [sortOptionType, setSortOptionType] = useState<string>('Popular');

  const activeClass = isActive ? 'places__options--opened ' : '';

  const onSortTypeClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const onOptionClick = (type: string) => {
    setSortOptionType(type);
    setIsActive((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        role="button"
        onClick={onSortTypeClick}
        onKeyDown={onSortTypeClick}
      >
        {sortOptionType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom  ${activeClass}`}>
        {sortNames.map((sortName) => {
          const optionClass = sortOptionType === sortName ? 'places__option--active' : '';
          return (
            <li
              key={sortName}
              className={`places__option ${optionClass}`}
              tabIndex={0}
              role="presentation"
              onClick={() => onOptionClick(sortName)}
              onKeyDown={() => onOptionClick(sortName)}
            >
              {sortName}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default Sorting;
