import { MouseEvent, PropsWithChildren } from 'react';

import { AppRoute } from '~/constants';

import * as S from './styles';

type LocationProps = PropsWithChildren<{
  cityName: string;
  isActive?: boolean;

  onClick?: (evt: MouseEvent) => void;
}>;

export function Location({
  cityName,
  isActive = false,

  onClick,
}: LocationProps): JSX.Element {
  return (
    <S.Link to={AppRoute.Root} isActive={isActive} onClick={onClick}>
      <S.Text>{cityName}</S.Text>
    </S.Link>
  );
}
