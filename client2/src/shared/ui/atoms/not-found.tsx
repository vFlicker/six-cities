import { JSX } from 'react';

import { cn } from '~/shared/lib/css';

type NotFoundProps = {
  title: string;
  description?: string;
  className?: string;
};

export function NotFound({
  className,
  title,
  description,
}: NotFoundProps): JSX.Element {
  return (
    <div className={cn(contentWrapperClasses, className)}>
      <h1 className={titleClasses}>{title}</h1>
      {description && <p className={descriptionClasses}>{description}</p>}
    </div>
  );
}

const contentWrapperClasses = cn(
  'flex h-full flex-grow flex-col items-center overflow-y-hidden p-[30vh]',
);

const titleClasses = cn('text-4xl font-bold italic');
const descriptionClasses = cn('text-lg');
