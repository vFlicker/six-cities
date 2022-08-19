import { MouseEvent, PropsWithChildren } from 'react';

import { AppRoute } from '~/constants';

import * as S from './styles';

type LocationItemProps = PropsWithChildren<{
  cityName: string;
  isActive?: boolean;

  onLocationsItemClick?: (evt: MouseEvent) => void;
}>;

export function LocationItem({
  cityName,
  isActive = false,
  onLocationsItemClick,
}: LocationItemProps): JSX.Element {
  return (
    <S.Link
      to={AppRoute.Root}
      isActive={isActive}
      onClick={onLocationsItemClick}
    >
      <S.Text>{cityName}</S.Text>
    </S.Link>
  );
}
