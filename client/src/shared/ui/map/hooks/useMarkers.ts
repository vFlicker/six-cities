import { Icon, Map, Marker } from 'leaflet';
import { useEffect } from 'react';

import { activePinIcon, defaultPinIcon } from '~/shared/assets/images';

import { MarkerLocation } from '../type';

const defaultPin = new Icon({
  iconUrl: defaultPinIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activePin = new Icon({
  iconUrl: activePinIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const useMarkers = (
  map: Map | null,
  markerLocations?: MarkerLocation[],
  activeId?: string,
): void => {
  useEffect(() => {
    if (!map || !markerLocations) return;

    const markers: Marker[] = [];

    for (const { id, location } of markerLocations) {
      const icon = id === activeId ? activePin : defaultPin;
      const marker = new Marker(location, { icon });
      marker.addTo(map);
      markers.push(marker);
    }

    return () => {
      for (const marker of markers) {
        map.removeLayer(marker);
      }
    };
  }, [activeId, map, markerLocations]);
};
