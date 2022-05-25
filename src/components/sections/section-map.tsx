import { useEffect, useRef } from 'react';
import { Icon, latLng, Marker } from 'leaflet';

import { useAppSelector, useMap } from '@/hooks';
import { appSlice } from '@/store';
import { Offer } from '@/types';

import 'leaflet/dist/leaflet.css';
import {
  pinActiveIconSrc as URL_MARKER_CURRENT,
  pinIconSrc as URL_MARKER_DEFAULT,
} from '@/assets/images';

type MapProps = {
  offers: Offer[];
  className: string;
};

const ICON_SIZE: [number, number] = [27, 39];

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: ICON_SIZE,
});

const currentIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: ICON_SIZE,
});

export function SectionMap({ offers, className = '' }: MapProps): JSX.Element {
  const { city } = offers[0];

  const mapRef = useRef<HTMLElement | null>(null);
  const activeCardId = useAppSelector(appSlice.getActiveCardId);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      offers.forEach((offer) => {
        const { location, id, title } = offer;
        const { latitude, longitude } = location;

        const icon = id === activeCardId ? currentIcon : defaultIcon;

        const marker = new Marker(latLng(latitude, longitude));
        markers.push(marker);

        marker
          .setIcon(icon)
          .bindPopup(title)
          .addTo(map);
      });
    }

    return () => markers.forEach((marker) => marker.remove());
  }, [activeCardId, map, offers]);

  return (
    <section className={`${className}  map`} ref={mapRef} />
  );
}
