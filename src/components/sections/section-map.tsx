import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Icon, latLng, Marker } from 'leaflet';

import { useMap } from '@/hooks';
import { getActiveCard } from '@/redux/state/app/selectors';
import { Offer } from '@/types';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
  className: string;
};

const MapSetting = {
  URL_MARKER_DEFAULT: './img/pin.svg',
  URL_MARKER_CURRENT: './img/pin-active.svg',
  ICON_SIZE: [27, 39] as [number, number],
};

const defaultIcon = new Icon({
  iconUrl: MapSetting.URL_MARKER_DEFAULT,
  iconSize: MapSetting.ICON_SIZE,
});

const currentIcon = new Icon({
  iconUrl: MapSetting.URL_MARKER_CURRENT,
  iconSize: MapSetting.ICON_SIZE,
});

export function SectionMap({ offers, className = '' }: MapProps): JSX.Element {
  const { city } = offers[0];

  const mapRef = useRef<HTMLElement | null>(null);
  const activeCardId = useSelector(getActiveCard);
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
