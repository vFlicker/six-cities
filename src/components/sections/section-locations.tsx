import { PropsWithChildren } from 'react';

type SectionLocationsProps = PropsWithChildren<{
  className: string;
}>;

export function SectionLocations(props: SectionLocationsProps): JSX.Element {
  const { className = '', children } = props;

  return (
    <section className={`locations ${className}`}>
      {children}
    </section>
  );
}
