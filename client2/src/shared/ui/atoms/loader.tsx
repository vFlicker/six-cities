import { JSX } from 'react';

import { cn } from '~/shared/lib/css';

type LoaderSize = 'sm' | 'md' | 'lg';

type LoaderProps = {
  size: LoaderSize;
  className?: string;
};

export function Loader({ className, size }: LoaderProps): JSX.Element {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(wrapperClasses, className)}
    >
      <div className={cn(loaderClasses, sizeClasses[size])} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

const sizeClasses: Record<LoaderSize, string> = {
  sm: cn('h-6 w-6 border-2'),
  md: cn('h-8 w-8 border-4'),
  lg: cn('h-12 w-12 border-4'),
};

const wrapperClasses = cn('flex items-center justify-center');

const loaderClasses = cn(
  'border-blue-20 border-t-blue-30 animate-spin rounded-full',
);
