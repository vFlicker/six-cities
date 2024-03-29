import { useRef } from 'react';

import { useAppSelector } from '~/hooks/use-app-selector';
import { useMapWithPins } from '~/hooks/use-map-with-pins';
import * as appSlice from '~/store/slices/app/slice';
import { Offer } from '~/types/offer';

import * as S from './styles';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  orientation: 'horizontal' | 'vertical';
};

export function Map({ offers, orientation }: MapProps): JSX.Element {
  const activeCardId = useAppSelector(appSlice.selectActiveCardId);
  const mapRef = useRef<HTMLElement | null>(null);

  useMapWithPins(offers, activeCardId, mapRef);

  return <S.Map ref={mapRef} orientation={orientation} data-testid="map" />;
}
