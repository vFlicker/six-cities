import { Offer } from '~/types';

import { CardItem } from '../../shared/card-item';
import { Container } from '../../shared';

import * as S from './styles';

type NearPlacesSectionProps = {
  offersNearby: Offer[];
};

export function NearPlacesSection({
  offersNearby,
}: NearPlacesSectionProps): JSX.Element {
  return (
    <Container>
      <S.Section>
        <S.Title>Other places in the neighborhood</S.Title>
        <S.CardList>
          {offersNearby.map((offer) => (
            <CardItem key={offer.id} offer={offer} cardType="big" />
          ))}
        </S.CardList>
      </S.Section>
    </Container>
  );
}
