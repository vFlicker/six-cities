import { useAppSelector } from '~/hooks';
import { offersNearbySlice } from '~/store';
import { Offer } from '~/types';

import { Map } from '../../shared';
import { Gallery } from './gallery';
import { Property } from './property';

import * as S from './styles';

type OfferProps = {
  offer: Offer;
};

export function PropertySection({ offer }: OfferProps): JSX.Element {
  const { images, ...props } = offer;

  const offers = useAppSelector(offersNearbySlice.getOffers);

  return (
    <S.Section>
      <Gallery images={images} />

      <Property {...props} />

      <Map offers={offers} orientation="vertical" />
    </S.Section>
  );
}
