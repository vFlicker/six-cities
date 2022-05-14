import { useEffect } from 'react';

import { offersFavoriteSlice } from '@/store';

import { CardItemFavorites } from '../card-item';
import { CardList } from '../card-list';
import { LocationsItem } from '../locations-item';
import { Spinner } from '../spinner';
import { useAppDispatch, useAppSelector } from '@/hooks';

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

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {offersFavorite.map((offer) => (
          <li key={offer.city.name} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <LocationsItem cityName={offer.city.name} />
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
    </section>
  );
}
