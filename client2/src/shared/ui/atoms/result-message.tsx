import { JSX } from 'react';

import { cn } from '~/shared/lib/css';

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
    <div className={cn(wrapperClasses, className)}>
      {imageComponent && <div className={cn('mb-2')}>{imageComponent}</div>}
      <h1 className={cn(titleClasses)}>{title}</h1>
      <p className={cn(messageClasses)}>{message}</p>
    </div>
  );
}

const wrapperClasses = cn('flex max-w-120 flex-col items-center text-center');
const titleClasses = cn('mb-2 text-3xl font-bold italic');
const messageClasses = cn('max-w-sm text-sm');
