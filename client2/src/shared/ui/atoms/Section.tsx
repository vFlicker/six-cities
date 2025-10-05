import { JSX, PropsWithChildren } from 'react';

import { containerClasses } from '~/shared/css';
import { cn } from '~/shared/lib/css';

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
