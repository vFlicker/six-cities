import { Offer } from '~/types';

import { Gallery } from './gallery';
import { Property } from './property';

import * as S from './styles';

type OfferProps = {
  offer: Offer;
};

export function PropertySection({ offer }: OfferProps): JSX.Element {
  const { images, ...props } = offer;

  return (
    <S.Section>
      <Gallery images={images} />

      <Property {...props} />
    </S.Section>
  );
}
