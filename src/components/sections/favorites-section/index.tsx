import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { offerSlice } from '~/store';

import { CardItem, LocationItem, Spinner } from '../../shared';
import { FavoritesEmptySection } from '../favorites-empty-section';

import * as S from './styles';

export function FavoritesSection(): JSX.Element {
  const offersFavorite = useAppSelector(offerSlice.getFavorites);
  const offersFavoriteLoadingStatus = useAppSelector(
    offerSlice.getLoadingStatus,
  );
  const offersFavoriteError = useAppSelector(offerSlice.getError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(offerSlice.fetchFavoriteOffers());
  }, [dispatch]);

  if (offersFavoriteLoadingStatus) {
    return <Spinner />;
  }

  if (offersFavoriteError) {
    return <S.Title>Error!</S.Title>;
  }

  if (!Object.keys(offersFavorite).length) {
    return <FavoritesEmptySection />;
  }

  return (
    <S.Section>
      <S.Container>
        <S.Title>Saved listing</S.Title>
        <S.List>
          {Object.entries(offersFavorite).map(([cityName, offers]) => (
            <S.Item key={cityName}>
              <S.LocationWrapper>
                <LocationItem isActive cityName={cityName} />
              </S.LocationWrapper>

              <S.CardList>
                {offers.map((offer) => (
                  <CardItem key={offer.id} offer={offer} cardType="small" />
                ))}
              </S.CardList>
            </S.Item>
          ))}
        </S.List>
      </S.Container>
    </S.Section>
  );
}
