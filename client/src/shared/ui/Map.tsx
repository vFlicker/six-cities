import 'leaflet/dist/leaflet.css';

import styled from '@emotion/styled';
import Leaflet, { LatLngTuple } from 'leaflet';
import { useEffect, useRef } from 'react';

type MapProps = {
  letLng: LatLngTuple;
  markers: LatLngTuple[];
  className?: string;
};

const urlTemplate =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const options = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
};

function Map({ letLng, markers, className }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const map = Leaflet.map(mapRef.current);
    const layer = Leaflet.tileLayer(urlTemplate, options);
    const view = Leaflet.latLng(...letLng);

    map.addLayer(layer).setView(view, 12);

    for (const marker of markers) {
      Leaflet.marker(marker).addTo(map);
    }

    return () => {
      map.remove();
    };
  }, [letLng, markers]);

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
