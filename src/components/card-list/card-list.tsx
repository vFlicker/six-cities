import React, { Fragment, PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
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
  setActiveCard: (id: number) => void,
  offersRequested: () => void,
  offersLoaded: (offers: TOffer[]) => void,
  offersError: (err: string) => void,
  apiService: ApiService,
  loading: boolean,
  error: null | string,
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
    offersRequested,
    offersLoaded,
    offersError,
    apiService,
    loading,
    error,
  } = props;

  const cardListClass = getCardListClass[cardType];

  useEffect(() => {
    offersRequested();
    apiService.getHotels()
      .then((data) => offersLoaded(data))
      .catch((err) => offersError(err));
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

const {
  setActiveCard,
  offersRequested,
  offersLoaded,
  offersError,
} = ActionCreator;

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   setActiveCard: (id: number) => {
//     dispatch(ActionCreator.setActiveCard(id));
//   },
//   offersLoaded: (offers: TOffer[]) => {
//     dispatch(ActionCreator.offersLoaded(offers));
//   },
// });

const mapDispatchToProps = {
  setActiveCard,
  offersRequested,
  offersLoaded,
  offersError,
};

export { CardList };
export default withApiServices()(connect(mapStateToProps, mapDispatchToProps)(CardList));
