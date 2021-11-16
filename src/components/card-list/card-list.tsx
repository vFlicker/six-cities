import React, { Fragment, PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TState } from '../../store/reducer';
import { ActionCreator } from '../../store/action';
import { CardType } from '../../const';
import { TOffer } from '../../types';
import ApiService from '../../services/api-service';
import withApiServices from '../../hocs/with-api-services';
import {
  CardItemCities,
  CardItemFavorites,
  CardItemNearPlaces
} from '../card-item';
import Spinner from '../spinner';

type CardListProps = {
  cardType: CardType
  offers: TOffer[],
  loading: boolean,
  error: null | string,
  setActiveCard: (id: number) => void,
  fetchOffers: () => void,
};

const getCardListClass: Record<CardType, string> = {
  [CardType.CITIES]: 'cities__places-list places__list tabs__content',
  [CardType.FAVORITES]: 'favorites__places',
  [CardType.NEAR_PLACES]: 'near-places__list places__list',
};

const getComponentByType = (
  type: CardType,
  offer: TOffer,
  onMouseEnter: (evt: React.MouseEvent) => void,
  onMouseLeave: (evt: React.MouseEvent) => void,
) => {
  switch (type) {
    case CardType.CITIES:
      return (
        <CardItemCities
          offer={offer}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    case CardType.FAVORITES:
      return (
        <CardItemFavorites
          offer={offer}
        />
      );
    case CardType.NEAR_PLACES:
      return (
        <CardItemNearPlaces
          offer={offer}
        />
      );
    default:
      throw new Error('Unknown CardType');
  }
};

function CardList(props: PropsWithChildren<CardListProps>): React.ReactElement {
  const {
    cardType,
    offers,
    setActiveCard,
    loading,
    error,
    fetchOffers,
  } = props;

  const cardListClass = getCardListClass[cardType];

  useEffect(() => {
    fetchOffers();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className={cardListClass}>
      {offers.map((offer) => {
        const onMouseEnter = () => {
          setActiveCard(offer.id);
        };

        const onMouseLeave = () => {
          setActiveCard(-1);
        };

        return (
          <Fragment key={offer.id}>
            {getComponentByType(cardType, offer, onMouseEnter, onMouseLeave)}
          </Fragment>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state: TState) => ({
  offers: state.offers,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch: Dispatch, { apiService }: {apiService: ApiService}) => ({
  setActiveCard: (id: number) => {
    dispatch(ActionCreator.setActiveCard(id));
  },
  fetchOffers: () => {
    dispatch(ActionCreator.offersRequested());
    apiService.getHotels()
      .then((data) => dispatch(ActionCreator.offersLoaded(data)))
      .catch((err) => dispatch(ActionCreator.offersError(err)));
  },
});

export { CardList };
export default withApiServices()(
  connect(mapStateToProps, mapDispatchToProps)(CardList),
);
