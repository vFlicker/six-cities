import { Offer } from '~/types';

import { CardItem } from '../../card-item';
import { CardList } from '../../card-list';
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
        <S.Title>Other places in the neighbourhood</S.Title>
        {/* TODO: remove all className */}
        <CardList
          className="near-places__list places__list"
          offers={offersNearby}
          getCardItem={(offer) => <CardItem offer={offer} cardType="big" />}
        />
      </S.Section>
    </Container>
  );
}
