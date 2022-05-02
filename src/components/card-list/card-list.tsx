import { Fragment } from 'react';

import { TOffer, TOffers } from '../../types/offer';

type CardListProps = {
  className: string;
  offers: TOffers,
  getCardItem: (offer: TOffer) => JSX.Element;
};

function CardList(props: CardListProps): JSX.Element {
  const { className, offers, getCardItem } = props;

  return (
    <div className={className}>
      {offers.map((offer) => (
        <Fragment key={offer.id}>
          {getCardItem(offer)}
        </Fragment>
      ))}
    </div>
  );
}

export default CardList;
