import React, { PropsWithChildren } from 'react';

type SectionPlacesProps = PropsWithChildren<{
  className: string;
}>;

function SectionPlaces({ className = '', children }: SectionPlacesProps): JSX.Element {
  return (
    <section className={`${className} places`}>
      {children}
    </section>
  );
}

export default SectionPlaces;
