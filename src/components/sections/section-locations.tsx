import React, { PropsWithChildren } from 'react';

type SectionLocationsProps = {
  className?: string,
}

function SectionLocations({ className = '', children }: PropsWithChildren<SectionLocationsProps>): React.ReactElement {
  return (
    <section className={`locations ${className}`}>
      {children}
    </section>
  );
}

export default SectionLocations;
