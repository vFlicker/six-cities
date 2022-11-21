import { useState } from 'react';

import { SortType } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { appSlice } from '~/store';

import * as S from './styles';

export function SortingFrom(): JSX.Element {
  const [sortMenuOpened, setSortMenuOpened] = useState(false);

  const currentSortType = useAppSelector(appSlice.selectCurrentSortType);

  const dispatch = useAppDispatch();

  const toggleSortMenu = () => setSortMenuOpened((prevState) => !prevState);

  const handleOptionClick = (sortType: SortType) => {
    if (sortType === currentSortType) return;

    dispatch(appSlice.changeSortType(sortType));
    toggleSortMenu();
  };

  return (
    <S.From action="#" method="get">
      <S.Caption>Sort by</S.Caption>{' '}
      <S.Type
        tabIndex={0}
        role="button"
        onClick={toggleSortMenu}
        onKeyDown={toggleSortMenu}
      >
        {currentSortType}
        <S.Arrow width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </S.Arrow>
      </S.Type>
      <S.List isOpen={sortMenuOpened}>
        {Object.entries(SortType).map(([key, sortType]) => (
          <S.Item
            isActive={sortType === currentSortType}
            key={key}
            tabIndex={0}
            role="presentation"
            onClick={() => handleOptionClick(sortType)}
            onKeyDown={() => handleOptionClick(sortType)}
          >
            {sortType}
          </S.Item>
        ))}
      </S.List>
    </S.From>
  );
}
