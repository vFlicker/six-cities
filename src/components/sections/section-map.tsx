import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Icon, latLng, Marker } from 'leaflet';

import { getActiveCard } from '../../store/app-process/selectors';
import { getOffers } from '../../store/offers-data/selectors';
import useMap from '../../hooks/use-map';

import 'leaflet/dist/leaflet.css';

const ICON_URL = './img/pin.svg';
const ACTIVE_ICON_URL = './img/pin-active.svg';
const ICON_SIZE: [number, number] = [27, 39];

type MapProps = {
  className: string;
};

const defaultIcon = new Icon({
  iconUrl: ICON_URL,
  iconSize: ICON_SIZE,
});

const currentIcon = new Icon({
  iconUrl: ACTIVE_ICON_URL,
  iconSize: ICON_SIZE,
});

function SectionMap({ className = '' }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement>(null);

  const activeCardId = useSelector(getActiveCard);
  const offers = useSelector(getOffers);

  const { city } = offers[0];

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

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [activeCardId, map, offers]);

  return (
    <section className={`${className}  map`} ref={mapRef} />
  );
}

export default SectionMap;
