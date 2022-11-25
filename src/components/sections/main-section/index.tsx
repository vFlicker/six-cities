import { useAppDispatch, useAppSelector } from '~/hooks';
import { appSlice, offersSlice } from '~/store';

import { CardItem, Map, Spinner } from '../../shared';
import { ErrorSection } from '../error-section';
import { MainEmptySection } from '../main-empty-section';
import { SortingFrom } from './sorting-form';

import * as S from './styles';

export function MainSection(): JSX.Element {
  const cityName = useAppSelector(appSlice.selectCurrentCityName);
  const sortedOffers = useAppSelector(offersSlice.selectSortedOffers);
  const isLoading = useAppSelector(offersSlice.selectLoadingStatus);
  const error = useAppSelector(offersSlice.selectError);

  const dispatch = useAppDispatch();

  const cardList = sortedOffers.map((offer) => (
    <CardItem
      key={offer.id}
      offer={offer}
      cardType="big"
      onCardItemMouseEnter={() => dispatch(appSlice.setActiveCardId(offer.id))}
      onCardItemMouseLeave={() => dispatch(appSlice.setActiveCardId(-1))}
    />
  ));

  if (error) return <ErrorSection />;

  if (isLoading) return <Spinner />;

  if (!sortedOffers.length) return <MainEmptySection />;

  return (
    <S.MainContainer>
      <S.Section>
        <S.HiddenTitle>Places</S.HiddenTitle>

        <S.PlacesFound>
          {sortedOffers.length} places to stay in {cityName}
        </S.PlacesFound>

        <SortingFrom />

        <S.CardList>{cardList}</S.CardList>
      </S.Section>

      <S.MapWrapper>
        <Map offers={sortedOffers} orientation="horizontal" />
      </S.MapWrapper>
    </S.MainContainer>
  );
}
