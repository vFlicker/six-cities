import { LatLng, Map, TileLayer } from 'leaflet';
import { RefObject, useEffect, useState } from 'react';

import { DEFAULT_ZOOM, URL_TEMPLATE } from '../config';

export const useMap = (
  mapRef: RefObject<HTMLDivElement | null>,
  centerLat: number,
  centerLng: number,
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const mapElement = mapRef.current;
    if (!mapElement) return;

    const newMap = new Map(mapElement);
    const layer = new TileLayer(URL_TEMPLATE);
    const view = new LatLng(centerLat, centerLng);
    newMap.addLayer(layer).setView(view, DEFAULT_ZOOM);
    setMap(newMap);

    return () => {
      newMap.remove();
    };
  }, [centerLat, centerLng, mapRef]);

  return map;
};
