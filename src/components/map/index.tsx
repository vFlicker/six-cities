import { useEffect, useRef } from 'react';
import { Icon, latLng, Marker } from 'leaflet';

import { pinActiveIconSrc, pinIconSrc } from '~/assets/images';
import { useAppSelector, useMap } from '~/hooks';
import { appSlice } from '~/store';
import { Offer } from '~/types';

import StyledProps, * as S from './styles';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offer[];
} & StyledProps;

const ICON_SIZE = [27, 39] as [number, number];

const defaultIcon = new Icon({
  iconUrl: pinIconSrc,
  iconSize: ICON_SIZE,
});

const currentIcon = new Icon({
  iconUrl: pinActiveIconSrc,
  iconSize: ICON_SIZE,
});

export function Map({ offers, orientation }: MapProps): JSX.Element {
  const { city } = offers[0];

  const mapRef = useRef<HTMLElement | null>(null);
  const activeCardId = useAppSelector(appSlice.getActiveCardId);
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

        marker.setIcon(icon).bindPopup(title).addTo(map);
      });
    }

    return () => markers.forEach((marker) => marker.remove());
  }, [activeCardId, map, offers]);

  return <S.Map ref={mapRef} orientation={orientation} />;
}
