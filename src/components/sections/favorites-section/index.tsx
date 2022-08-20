import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { offersFavoriteSlice } from '~/store';

import { CardItemFavorites } from '../../card-item';
import { CardList } from '../../card-list';
import { Spinner } from '../../spinner';
import { LocationItem } from '../../shared';
import { FavoritesEmptySection } from '../favorites-empty-section';

import * as S from './styles';

export function SectionFavorites(): JSX.Element {
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

              <CardList
                className="favorites__places"
                offers={offers}
                getCardItem={(offer) => <CardItemFavorites offer={offer} />}
              />
            </S.Item>
          ))}
        </S.List>
      </S.Container>
    </S.Section>
  );
}
