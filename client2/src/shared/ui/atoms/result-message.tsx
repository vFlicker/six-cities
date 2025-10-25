import { JSX } from 'react';

import { cn } from '~/shared1/lib/css';

type ResultMessageProps = {
  title: string;
  message: string;
  imageComponent?: JSX.Element;
  className?: string;
};

export function ResultMessage({
  className,
  title,
  message,
  imageComponent,
}: ResultMessageProps): JSX.Element {
  return (
    <div
      className={cn(
        'flex max-w-120 flex-col items-center text-center',
        className,
      )}
    >
      {imageComponent && <div className={cn('mb-2')}>{imageComponent}</div>}
      <h1 className={cn('mb-2 text-3xl font-bold italic')}>{title}</h1>
      <p className={cn('max-w-sm text-sm')}>{message}</p>
    </div>
  );
}
