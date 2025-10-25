import { JSX } from 'react';

import { cn } from '~/shared/lib/css';

import { Logo } from '../atoms';
import { container } from '../css';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps): JSX.Element {
  return (
    <footer className={cn(className)}>
      <div className={footerContainerClasses}>
        <Logo width={64} height={33} />
      </div>
    </footer>
  );
}

const footerContainerClasses = cn(
  container.lg,
  'border-gray-20 flex items-start justify-center border-t-2 pt-12 pb-13',
);
