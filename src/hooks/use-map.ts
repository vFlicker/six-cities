import { MutableRefObject, useEffect, useState } from 'react';
import { latLng, Map, TileLayer } from 'leaflet';

import { City } from '@/types';

const LAYER_URL_TEMPLATE =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LAYER_OPTIONS = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const { latitude, longitude, zoom } = city.location;

    if (map) {
      map.flyTo(latLng(latitude, longitude), zoom);
    }

    if (mapRef.current !== null && map === null) {
      const map = new Map(mapRef.current);
      const layer = new TileLayer(LAYER_URL_TEMPLATE, LAYER_OPTIONS);

      map.addLayer(layer).setView(latLng(latitude, longitude), zoom);

      setMap(map);
    }
  }, [mapRef, city, map]);

  return map;
}
