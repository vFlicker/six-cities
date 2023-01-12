import { MutableRefObject, useEffect, useRef } from 'react';
import { latLng, Map, TileLayer } from 'leaflet';

import { Location } from '~/types';

const LAYER_URL_TEMPLATE =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

const LAYER_OPTIONS = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

const getView = (location: Location) => {
  const { latitude, longitude, zoom } = location;
  const center = latLng(latitude, longitude);

  return [center, zoom] as const;
};

export function useMap(
  location: Location,
  mapRef: MutableRefObject<HTMLElement | null>,
): MutableRefObject<Map | null> {
  const refInstanceMap = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map(mapRef.current);
    const layer = new TileLayer(LAYER_URL_TEMPLATE, LAYER_OPTIONS);
    const view = getView(location);

    map.addLayer(layer).setView(...view);

    refInstanceMap.current = map;

    return () => {
      map.remove();
    };
  }, [location, mapRef]);

  return refInstanceMap;
}
