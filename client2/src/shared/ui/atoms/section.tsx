import { JSX, PropsWithChildren } from 'react';

import { cn } from '~/shared/lib/css';

import { container } from '../css';

type SectionProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export function Section({
  className,
  title,
  children,
}: SectionProps): JSX.Element {
  return (
    <div className={cn(wrapperClasses, className)}>
      <h2 className={cn(titleClasses)}>{title}</h2>
      {children}
    </div>
  );
}

const wrapperClasses = cn(container.md, 'grid gap-6');
const titleClasses = cn('mx-auto text-2xl leading-4 font-bold italic');
