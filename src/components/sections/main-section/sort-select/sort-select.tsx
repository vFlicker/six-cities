import { useState } from 'react';

import { SortType } from '~/constants';
import { useAppDispatch } from '~/hooks/use-app-dispatch';
import { useAppSelector } from '~/hooks/use-app-selector';
import * as appSlice from '~/store/slices/app/slice';

import * as S from './styles';

export function SortSelect(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const currentSortType = useAppSelector(appSlice.selectCurrentSortType);

  const dispatch = useAppDispatch();

  const handleSelectToggle = () => setIsOpen((prevState) => !prevState);

  const handleSelectItemClick = (sortType: SortType) => {
    if (sortType === currentSortType) return;

    dispatch(appSlice.changeSortType(sortType));
    handleSelectToggle();
  };

  return (
    <S.Select>
      <S.Caption>Sort by</S.Caption>{' '}
      <S.Button type="button" isActive={isOpen} onClick={handleSelectToggle}>
        {currentSortType}
      </S.Button>
      {isOpen && (
        <S.List>
          {Object.values(SortType).map((sortType) => (
            <S.Item
              key={sortType}
              isActive={sortType === currentSortType}
              tabIndex={0}
              role="presentation"
              onClick={() => handleSelectItemClick(sortType)}
              onKeyDown={() => handleSelectItemClick(sortType)}
              data-testid="select-item"
            >
              {sortType}
            </S.Item>
          ))}
        </S.List>
      )}
    </S.Select>
  );
}
