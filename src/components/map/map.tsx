import React, { PropsWithChildren, useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import { OfferListItem } from '../../types';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: OfferListItem[];
}

const icon = leaflet.icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
});

const layerUrlTemplate = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

const layerOptions = {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

function Map({ offers }: PropsWithChildren<MapProps>): React.ReactElement {
  const { city } = offers[0];

  const mapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return undefined;
    }

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
      leaflet
        .marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, { icon })
        .addTo(map)
        .bindPopup(offer.title);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="cities__map map" ref={mapRef} />
  );
}

export default Map;
