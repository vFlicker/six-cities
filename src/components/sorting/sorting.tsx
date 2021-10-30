import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { TState } from '../../store/reducer';
import { ActionCreator } from '../../store/action';
import { SortType } from '../../const';

type SortingProps = {
  currentSortType: SortType,
  changeSortType: (sortType: SortType) => void,
};

function Sorting({ currentSortType, changeSortType }: SortingProps): React.ReactElement {
  const [sortMenuOpened, setSortMenuOpened] = useState<boolean>(false);

  const activeClass = sortMenuOpened ? 'places__options--opened ' : '';

  const onSortTypeClick = () => {
    setSortMenuOpened((prevState) => !prevState);
  };

  const onOptionClick = (sortType: SortType) => {
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
        onClick={onSortTypeClick}
        onKeyDown={onSortTypeClick}
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
              onClick={() => onOptionClick(sortType)}
              onKeyDown={() => onOptionClick(sortType)}
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeSortType: (sortType: SortType) => {
    dispatch(ActionCreator.changeSortType(sortType));
    dispatch(ActionCreator.setOffers());
  },
});

export { Sorting };
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
