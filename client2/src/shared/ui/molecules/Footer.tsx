import { JSX } from 'react';

import { containerClasses } from '~/shared/css';
import { cn } from '~/shared/lib/css';

import { Logo } from '../atoms';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps): JSX.Element {
  return (
    <footer className={className}>
      <div
        className={cn(
          `${containerClasses.lg} border-gray-20 flex items-start justify-center border-t-2 pt-12 pb-13`,
        )}
      >
        <Logo width={64} height={33} />
      </div>
    </footer>
  );
}
