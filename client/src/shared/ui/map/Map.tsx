import 'leaflet/dist/leaflet.css';

import styled from '@emotion/styled';
import { LatLngTuple } from 'leaflet';
import { useRef } from 'react';

import { useMap } from './hooks/useMap';
import { useMarkers } from './hooks/useMarkers';
import { MarkerLocation } from './type';

type MapProps = {
  mapCenter: LatLngTuple;
  markerLocations?: MarkerLocation[];
  activeMarkerId?: string;
  className?: string;
};

function Map({
  mapCenter,
  markerLocations,
  activeMarkerId,
  className,
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapCenterLat, mapCenterLng] = mapCenter;
  const map = useMap(mapRef, mapCenterLat, mapCenterLng);
  useMarkers(map, markerLocations, activeMarkerId);

  return <StyledMap ref={mapRef} className={className}></StyledMap>;
}

export { Map };
export type { LatLngTuple };

const StyledMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`;
