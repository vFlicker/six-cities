import { NO_ACTIVE_CARD } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { appSlice, offersSlice } from '~/store';

import { CardItem } from '../../shared/card-item/card-item';
import { ErrorMessage } from '../../shared/error-message/error-message';
import { Map } from '../../shared/map/map';
import { Spinner } from '../../shared/spinner/spinner';
import { MainEmptySection } from './main-empty-section/main-empty-section';
import { SortSelect } from './sort-select/sort-select';

import * as S from './styles';

export function MainSection(): JSX.Element {
  const cityName = useAppSelector(appSlice.selectCurrentCityName);
  const sortedOffers = useAppSelector(offersSlice.selectSortedOffers);
  const isLoading = useAppSelector(offersSlice.selectIsLoading);
  const error = useAppSelector(offersSlice.selectError);

  const dispatch = useAppDispatch();

  const cardList = sortedOffers.map((offer) => (
    <CardItem
      key={offer.id}
      offer={offer}
      cardType="big"
      onCardItemMouseEnter={() => dispatch(appSlice.setActiveCardId(offer.id))}
      onCardItemMouseLeave={() =>
        dispatch(appSlice.setActiveCardId(NO_ACTIVE_CARD))
      }
    />
  ));

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage />;

  if (!sortedOffers.length) return <MainEmptySection />;

  return (
    <S.MainContainer>
      <S.Section>
        <S.HiddenTitle>Places</S.HiddenTitle>

        <S.PlacesFound>
          {sortedOffers.length} places to stay in {cityName}
        </S.PlacesFound>

        <SortSelect />

        <S.CardList>{cardList}</S.CardList>
      </S.Section>

      <S.MapWrapper>
        <Map offers={sortedOffers} orientation="horizontal" />
      </S.MapWrapper>
    </S.MainContainer>
  );
}
