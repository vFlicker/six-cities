import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { offersFavoriteSlice } from '~/store';

import { CardItem } from '../../shared/card-item';
import { Spinner } from '../../shared';
import { LocationItem } from '../../shared';
import { FavoritesEmptySection } from '../favorites-empty-section';

import * as S from './styles';

export function FavoritesSection(): JSX.Element {
  const offersFavorite = useAppSelector(offersFavoriteSlice.getOffersFavorite);
  const offersFavoriteLoadingStatus = useAppSelector(
    offersFavoriteSlice.getOffersFavoriteLoadingStatus,
  );
  const offersFavoriteError = useAppSelector(
    offersFavoriteSlice.getOffersFavoriteError,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(offersFavoriteSlice.fetchOffersFavorite());
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
