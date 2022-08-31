import { useAppDispatch } from '~/hooks';
import { appSlice } from '~/store';
import { Offer } from '~/types';

import { CardItem, Map } from '../../shared';
import { SortingFrom } from './sorting-form';

import * as S from './styles';

type MainSectionProps = {
  offers: Offer[];
};

export function MainSection({ offers }: MainSectionProps): JSX.Element {
  const dispatch = useAppDispatch();

  const cardList = offers.map((offer) => (
    <CardItem
      key={offer.id}
      offer={offer}
      cardType="big"
      onCardItemMouseEnter={() => dispatch(appSlice.setActiveCardId(offer.id))}
      onCardItemMouseLeave={() => dispatch(appSlice.setActiveCardId(-1))}
    />
  ));

  return (
    <S.MainContainer>
      <S.Section>
        <S.HiddenTitle>Places</S.HiddenTitle>

        <S.PlacesFound>
          {offers.length} places to stay in Amsterdam
        </S.PlacesFound>

        <SortingFrom />

        <S.CardList>{cardList}</S.CardList>
      </S.Section>

      <S.MapWrapper>
        <Map offers={offers} orientation="horizontal" />
      </S.MapWrapper>
    </S.MainContainer>
  );
}
