import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { offersFavoriteSlice } from '@/store';

import { CardItemFavorites } from '../card-item';
import { CardList } from '../card-list';
import { Spinner } from '../spinner';
import { Container, LocationItem } from '../shared';
import { FavoritesEmptySection } from './favorites-empty-section';

export function SectionFavorites(): JSX.Element {
  const offersFavorite = useAppSelector(offersFavoriteSlice.getOffersFavorite);
  const offersFavoriteLoadingStatus = useAppSelector(
    offersFavoriteSlice.getOffersFavoriteLoadingStatus,
  );
  const offersFavoriteError = useAppSelector(offersFavoriteSlice.getOffersFavoriteError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(offersFavoriteSlice.fetchOffersFavorite());
  }, [dispatch]);

  if (offersFavoriteLoadingStatus) {
    return <Spinner />;
  }

  if (offersFavoriteError) {
    return <h1>Error!</h1>;
  }

  if (!offersFavorite.length) {
    return (
      <FavoritesEmptySection />
    );
  }

  return (
    <section className="favorites">
      <Container>
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {offersFavorite.map((offer) => (
            <li key={offer.city.name} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <LocationItem isActive cityName={offer.city.name} />
                </div>
              </div>

              <CardList
                className="favorites__places"
                offers={offersFavorite}
                getCardItem={(offer) => <CardItemFavorites offer={offer} />}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
