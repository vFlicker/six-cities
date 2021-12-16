import { MutableRefObject, useEffect, useState } from 'react';
import { latLng, Map, TileLayer } from 'leaflet';

import { TCity } from '../types/offer';

const LAYER_URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LAYER_OPTIONS = { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' };

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: TCity): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const { latitude, longitude, zoom } = city.location;

      const mapOptions = {
        center: latLng(latitude, longitude),
        zoom,
      };

      const map = new Map(mapRef.current, mapOptions);
      const layer = new TileLayer(LAYER_URL_TEMPLATE, LAYER_OPTIONS);

      map.addLayer(layer);

      setMap(map);
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
