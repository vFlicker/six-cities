import { Offer } from '~/types';

import { CardItemCities } from '../../card-item';
import { CardList } from '../../card-list';
import { Sorting } from '../../sorting';
import { SectionMap, SectionPlaces } from '../index';

import * as S from './styles';

type MainSectionProps = {
  offers: Offer[];
};

export function MainSection({ offers }: MainSectionProps): JSX.Element {
  return (
    <S.MainContainer>
      <SectionPlaces className="cities__places">
        <S.Title>Places</S.Title>

        <S.PlacesFound>
          {offers.length} places to stay in Amsterdam
        </S.PlacesFound>

        <Sorting />

        <CardList
          className="cities__places-list places__list tabs__content"
          offers={offers}
          getCardItem={(offer) => <CardItemCities offer={offer} />}
        />
      </SectionPlaces>

      <S.MapWrapper>
        <SectionMap offers={offers} className="cities__map" />
      </S.MapWrapper>
    </S.MainContainer>
  );
}
