import { LatLng, Map, TileLayer } from 'leaflet';
import { useEffect, useState } from 'react';

import { DEFAULT_ZOOM, URL_TEMPLATE } from '../config';

export const useMap = (
  mapRef: React.RefObject<HTMLDivElement | null>,
  centerLat: number,
  centerLng: number,
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map(mapRef.current);
    const layer = new TileLayer(URL_TEMPLATE);
    const view = new LatLng(centerLat, centerLng);
    map.addLayer(layer).setView(view, DEFAULT_ZOOM);
    setMap(map);

    return () => {
      map.remove();
    };
  }, [centerLat, centerLng, mapRef]);

  return map;
};
