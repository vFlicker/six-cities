import { Offer } from '~/types';

import { CardList } from '../../card-list';
import { CardItemNearPlaces } from '../../card-item';
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
          getCardItem={(offer) => <CardItemNearPlaces offer={offer} />}
        />
      </S.Section>
    </Container>
  );
}
