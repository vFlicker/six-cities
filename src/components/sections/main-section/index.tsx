import { Offer } from '~/types';

import { CardItemCities } from '../../card-item';
import { CardList } from '../../card-list';
import { Map } from '../../shared';
import { SortingFrom } from './sorting-form';

import * as S from './styles';

type MainSectionProps = {
  offers: Offer[];
};

export function MainSection({ offers }: MainSectionProps): JSX.Element {
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
          getCardItem={(offer) => <CardItemCities offer={offer} />}
        />
      </S.Section>

      <S.MapWrapper>
        <Map offers={offers} orientation="horizontal" />
      </S.MapWrapper>
    </S.MainContainer>
  );
}
