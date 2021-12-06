import React, { PropsWithChildren } from 'react';

type SectionLocationsProps = PropsWithChildren<{
  className: string;
}>;

function SectionLocations(props: SectionLocationsProps): JSX.Element {
  const { className = '', children } = props;

  return (
    <section className={`locations ${className}`}>
      {children}
    </section>
  );
}

export default SectionLocations;
