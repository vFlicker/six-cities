import React, { Fragment, PropsWithChildren } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { TState } from '../../store/reducer';
import { ActionCreator } from '../../store/action';
import { CardType } from '../../const';
import { TOffer } from '../../types';
import {
  CardItemCities,
  CardItemFavorites,
  CardItemNearPlaces
} from '../card-item';

type CardListProps = {
  cardType: CardType
  offers: TOffer[],
  setActiveCard: (id: number) => void
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
  } = props;

  const cardListClass = getCardListClass[cardType];

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
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveCard: (id: number) => {
    dispatch(ActionCreator.setActiveCard(id));
  },
});

export { CardList };
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
