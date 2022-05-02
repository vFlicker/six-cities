import { TOffer } from '../../../types/offer';

import CardItem from '../card-item';

type CardItemNearPlacesProps = {
  offer: TOffer;
};

const cardClass = 'near-places__card';
const cardImageWrapperClass = 'near-places__image-wrapper';
const imageWidth = 260;
const imageHeight = 200;

function CardItemNearPlaces(props: CardItemNearPlacesProps): JSX.Element {
  return (
    <CardItem
      {...props}
      cardClass={cardClass}
      cardImageWrapperClass={cardImageWrapperClass}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
    />
  );
}

export default CardItemNearPlaces;
