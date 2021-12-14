import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  Icon,
  latLng,
  Map,
  Marker,
  TileLayer,
} from 'leaflet';

import { getActiveCard } from '../../store/app-process/selectors';
import { getOffers } from '../../store/offers-data/selectors';

import 'leaflet/dist/leaflet.css';

const LAYER_URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LAYER_OPTIONS = { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' };
const ICON_URL = './img/pin.svg';
const ACTIVE_ICON_URL = './img/pin-active.svg';
const ICON_SIZE: [number, number] = [27, 39];

type MapProps = {
  className: string;
};

const icon = new Icon({
  iconUrl: ICON_URL,
  iconSize: ICON_SIZE,
});

const activeIcon = new Icon({
  iconUrl: ACTIVE_ICON_URL,
  iconSize: ICON_SIZE,
});

function SectionMap({ className = '' }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement>(null);

  const activeCardId = useSelector(getActiveCard);
  const offers = useSelector(getOffers);

  const { city = null } = offers[0] ?? [];

  if (!city) {
    return <section className="cities__map map" />;
  }

  useEffect(() => {
    if (city && mapRef.current) {
      const { latitude, longitude, zoom } = city.location;

      const mapOptions = {
        center: latLng(latitude, longitude),
        zoom,
      };

      const map = new Map(mapRef.current, mapOptions);
      const layer = new TileLayer(LAYER_URL_TEMPLATE, LAYER_OPTIONS);

      map.addLayer(layer);

      offers.forEach((offer) => {
        const { location, id, title } = offer;
        const { latitude, longitude } = location;

        const markerOptions = id === activeCardId ? { icon: activeIcon } : { icon };

        const marker = new Marker(
          latLng(latitude, longitude),
          markerOptions,
        );

        marker.addTo(map).bindPopup(title);
      });

      return () => {
        map.remove();
      };
    }

    return undefined;
  }, [activeCardId, offers]);

  return (
    <section className={`${className}  map`} ref={mapRef} />
  );
}

export default SectionMap;
