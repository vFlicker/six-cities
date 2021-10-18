import React, { PropsWithChildren } from 'react';

type SectionPlacesProps = {
  className?: string;
}

function SectionPlaces({ className = '', children }: PropsWithChildren<SectionPlacesProps>): React.ReactElement {
  return (
    <section className={`${className} places`}>
      {children}
    </section>
  );
}

export default SectionPlaces;
