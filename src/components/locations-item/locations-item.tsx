import React, { PropsWithChildren } from 'react';

type LocationsItemProps = {
  className?: string,
  city: string,
};

function LocationsItem({ className = '', city }: PropsWithChildren<LocationsItemProps>): React.ReactElement {
  return (
    <a className={`locations__item-link ${className}`} href="/">
      <span>{city}</span>
    </a>
  );
}

export default LocationsItem;
