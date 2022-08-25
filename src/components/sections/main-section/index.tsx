import { useAppDispatch } from '~/hooks';
import { appSlice } from '~/store';
import { Offer } from '~/types';

import { CardItem } from '../../card-item';
import { CardList } from '../../card-list';
import { Map } from '../../shared';
import { SortingFrom } from './sorting-form';

import * as S from './styles';

type MainSectionProps = {
  offers: Offer[];
};

export function MainSection({ offers }: MainSectionProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <S.MainContainer>
      <S.Section>
        <S.HiddenTitle>Places</S.HiddenTitle>

        <S.PlacesFound>
          {offers.length} places to stay in Amsterdam
        </S.PlacesFound>

        <SortingFrom />

        <CardList
          className="cities__places-list places__list tabs__content"
          offers={offers}
          getCardItem={(offer) => (
            <CardItem
              offer={offer}
              cardType="big"
              onCardItemMouseEnter={() =>
                dispatch(appSlice.setActiveCardId(offer.id))
              }
              onCardItemMouseLeave={() =>
                dispatch(appSlice.setActiveCardId(-1))
              }
            />
          )}
        />
      </S.Section>

      <S.MapWrapper>
        <Map offers={offers} orientation="horizontal" />
      </S.MapWrapper>
    </S.MainContainer>
  );
}
