import { MutableRefObject, useEffect } from 'react';
import { Icon, latLng, Marker } from 'leaflet';

import { pinActiveIconSrc, pinIconSrc } from '~/assets/images';
import { Offer } from '~/types';

import { useMap } from './useMap';

const ICON_SIZE = [27, 39] as [number, number];

const defaultIcon = new Icon({
  iconUrl: pinIconSrc,
  iconSize: ICON_SIZE,
});

const currentIcon = new Icon({
  iconUrl: pinActiveIconSrc,
  iconSize: ICON_SIZE,
});

export const useMapWithPins = (
  offers: Offer[],
  activeCardId: number,
  mapRef: MutableRefObject<HTMLElement | null>,
): void => {
  const { location } = offers[0].city;

  const map = useMap(location, mapRef);

  useEffect(() => {
    if (!map.current) return;

    const markers: Marker[] = [];

    for (const offer of offers) {
      const { location, id, title } = offer;
      const { latitude, longitude } = location;

      const marker = new Marker(latLng(latitude, longitude));
      markers.push(marker);

      const icon = id === activeCardId ? currentIcon : defaultIcon;
      marker.setIcon(icon).bindPopup(title).addTo(map.current);
    }

    return () => markers.forEach((marker) => marker.remove());
  }, [activeCardId, offers, map]);
};
