import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import leaflet from 'leaflet';

import { getActiveCard } from '../../store/app-process';
import { getOffers } from '../../store/offer-data';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  className: string;
};

const icon = leaflet.icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
});

const activeIcon = leaflet.icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [27, 39],
});

const layerUrlTemplate = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

const layerOptions = {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

function SectionMap({ className = '' }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement>(null);

  const activeCardId = useSelector(getActiveCard);
  const offers = useSelector(getOffers);

  const currentOffer = offers[0] ?? [];
  const { city = null } = currentOffer;

  useEffect(() => {
    if (city && mapRef.current) {
      const map = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(layerUrlTemplate, layerOptions)
        .addTo(map);

      offers.forEach((offer) => {
        const options = offer.id === activeCardId
          ? { icon: activeIcon }
          : { icon };

        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, options)
          .addTo(map)
          .bindPopup(offer.title);
      });

      return () => {
        map.remove();
      };
    }

    return undefined;
  }, [activeCardId, offers]);

  if (!city) {
    return <section className="cities__map map" />;
  }

  return (
    <section className={`${className}  map`} ref={mapRef} />
  );
}

export default SectionMap;
