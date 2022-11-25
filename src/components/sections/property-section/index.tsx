import { Offer } from '~/types';

import { Gallery } from './gallery';
import { Property } from './property';

import * as S from './styles';

type PropertySectionProps = {
  offer: Offer;
};

export function PropertySection({ offer }: PropertySectionProps): JSX.Element {
  return (
    <S.Section>
      <Gallery images={offer.images} />
      <Property {...offer} />
    </S.Section>
  );
}
