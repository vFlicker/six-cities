import { JSX, PropsWithChildren } from 'react';

import { cn } from '~/shared1/lib/css';

import { containerClasses } from '../css';

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
    <div className={cn(`${containerClasses.md} grid gap-6`, className)}>
      <h2 className={cn('mx-auto text-2xl leading-4 font-bold italic')}>
        {title}
      </h2>
      {children}
    </div>
  );
}
