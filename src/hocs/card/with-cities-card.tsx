import React, { ComponentType } from 'react';

type HOCProps = {
  cardClass: string;
  cardImageWrapperClass: string;
  imageWidth: number;
  imageHeight: number;
};

type ComponentProps<P = null> = Omit<P, keyof HOCProps>;

const cardClass = 'cities__place-card';
const cardImageWrapperClass = 'cities__image-wrapper';
const imageWidth = 260;
const imageHeight = 200;

function withCitiesCard<P>(WrappedComponent: ComponentType<P>)
  : ComponentType<ComponentProps<P>> {
  function WithApiServices(props: ComponentProps): JSX.Element {
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

  return WithApiServices;
}

export default withCitiesCard;
