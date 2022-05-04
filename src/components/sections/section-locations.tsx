import { PropsWithChildren } from 'react';

type SectionLocationsProps = PropsWithChildren<{
  className: string;
}>;

export function SectionLocations({ className = '', children }: SectionLocationsProps): JSX.Element {
  return (
    <section className={`locations ${className}`}>
      {children}
    </section>
  );
}
