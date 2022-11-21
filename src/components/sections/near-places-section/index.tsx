import { useAppSelector } from '~/hooks';
import { offersSlice } from '~/store';

import { CardItem, Container, Map } from '../../shared';

import * as S from './styles';

export function NearPlacesSection(): JSX.Element {
  const offersNearby = useAppSelector(offersSlice.selectNearby);

  return (
    <>
      <Map offers={offersNearby} orientation="vertical" />

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
    </>
  );
}
