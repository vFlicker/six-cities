import { PropsWithChildren } from 'react';

type SectionPlacesProps = PropsWithChildren<{
  className: string;
}>;

export function SectionPlaces({ className = '', children }: SectionPlacesProps): JSX.Element {
  return (
    <section className={`${className} places`}>
      {children}
    </section>
  );
}
