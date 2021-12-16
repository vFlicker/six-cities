import React, { ComponentType } from 'react';

type HOCProps = {
  cardClass: string;
  cardImageWrapperClass: string;
  imageWidth: number;
  imageHeight: number;
};

type ComponentProps<P = null> = Omit<P, keyof HOCProps>;

const cardClass = 'near-places__card';
const cardImageWrapperClass = 'near-places__image-wrapper';
const imageWidth = 260;
const imageHeight = 200;

function withPlacesCard<P>(WrappedComponent: ComponentType<P>)
  : ComponentType<ComponentProps<P>> {
  function WithPlacesCard(props: ComponentProps): JSX.Element {
    return (
      <WrappedComponent
        {...props as P}
        cardClass={cardClass}
        cardImageWrapperClass={cardImageWrapperClass}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    );
  }

  return WithPlacesCard;
}

export default withPlacesCard;
