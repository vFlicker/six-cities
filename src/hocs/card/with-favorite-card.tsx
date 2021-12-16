import React, { ComponentType } from 'react';

type HOCProps = {
  cardClass: string;
  cardImageWrapperClass: string;
  cardInfoClass?: string;
  imageWidth: number;
  imageHeight: number;
};

type ComponentProps<P = null> = Omit<P, keyof HOCProps>;

const cardClass = 'favorites__card';
const cardImageWrapperClass = 'favorites__image-wrapper';
const cardInfoClass = 'favorites__card-info';
const imageWidth = 150;
const imageHeight = 110;

function withFavoriteCard<P>(WrappedComponent: ComponentType<P>)
  : ComponentType<ComponentProps<P>> {
  function WithFavoriteCard(props: ComponentProps): JSX.Element {
    return (
      <WrappedComponent
        {...props as P}
        cardClass={cardClass}
        cardImageWrapperClass={cardImageWrapperClass}
        cardInfoClass={cardInfoClass}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    );
  }

  return WithFavoriteCard;
}

export default withFavoriteCard;
