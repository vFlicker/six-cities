import styled from '@emotion/styled';

import { FavoriteStatus } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { offerSlice, offersNearbySlice } from '@/store';
import { Offer } from '@/types';
import { convertRatingToPercents } from '@/utils';

import { Container } from '../shared';

import { SectionMap, SectionReviews } from './index';

type OfferProps = {
  offer: Offer;
}

export function SectionProperty({ offer }: OfferProps): JSX.Element {
  const offersNearby = useAppSelector(offersNearbySlice.getOffersNearby);
  const dispatch = useAppDispatch();

  const {
    bedrooms: bedroomCount,
    description,
    goods,
    host,
    id,
    images,
    isFavorite,
    isPremium,
    maxAdults: maxAdultsCount,
    price,
    rating,
    title,
    type,
  } = offer;

  const { avatarUrl, isPro, name: authorName } = host;

  const buttonFavoriteClass = isFavorite
    ? 'button property__bookmark-button  property__bookmark-button--active'
    : 'button property__bookmark-button';

  const handleFavoriteButtonClick = () => {
    // TODO: add favoriteInProgress
    dispatch(offerSlice.changeOfferFavoriteStatus({
      id,
      status: isFavorite ? FavoriteStatus.NOT_FAVORITE : FavoriteStatus.FAVORITE,
    }));
  };

  return (
    <section className="property">
      <Container>
        <div className="property__gallery">
          {images.map((imageUrl) => (
            <div className="property__image-wrapper" key={imageUrl}>
              <img className="property__image" src={imageUrl} alt="Studio" />
            </div>
          ))}
        </div>
      </Container>
      <PropertyContainer>
        <div className="property__wrapper">
          {isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button
              className={buttonFavoriteClass}
              type="button"
              onClick={handleFavoriteButtonClick}
            >
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: convertRatingToPercents(rating) }} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {`${bedroomCount} Bedrooms`}
            </li>
            <li className="property__feature property__feature--adults">
              {`Max ${maxAdultsCount} adults`}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">
              &euro;
              {price}
            </b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goods.map((item) => (
                <li className="property__inside-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="property__avatar user__avatar"
                  src={avatarUrl}
                  width="74"
                  height="74"
                  alt={authorName}
                />
              </div>
              <span className="property__user-name">
                {authorName}
              </span>
              {isPro && (
                <span className="property__user-status">
                  Pro
                </span>
              )}
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>

          <SectionReviews />
        </div>
      </PropertyContainer>
      <SectionMap className="property__map" offers={offersNearby} />
    </section>
  );
}

const PropertyContainer = styled(Container)`
  position: relative;
  overflow-x: hidden
`;
