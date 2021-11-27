import React, { useState } from 'react';
import { connect } from 'react-redux';

import { TState } from '../../store/reducer';
import { ActionCreator, TDispatch } from '../../store/action';
import { SortType } from '../../const';

type SortingProps = {
  currentSortType: SortType,
  changeSortType: (sortType: SortType) => void,
};

function Sorting({ currentSortType, changeSortType }: SortingProps): React.ReactElement {
  const [sortMenuOpened, setSortMenuOpened] = useState<boolean>(false);

  const activeClass = sortMenuOpened ? 'places__options--opened ' : '';

  const handleSortTypeClick = () => {
    setSortMenuOpened((prevState) => !prevState);
  };

  const handleOptionClick = (sortType: SortType) => {
    if (sortType === currentSortType) {
      return;
    }

    changeSortType(sortType);
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

const mapStateToProps = (state: TState) => ({
  currentSortType: state.currentSortType,
});

const mapDispatchToProps = (dispatch: TDispatch) => ({
  changeSortType: (sortType: SortType) => {
    dispatch(ActionCreator.changeSortType(sortType));
    dispatch(ActionCreator.fetchOffers());
  },
});

export { Sorting };
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
