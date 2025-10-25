import { JSX } from 'react';

import { cn } from '~/shared/lib/css';

type LoaderSize = 'sm' | 'md' | 'lg';

type LoaderProps = {
  size: LoaderSize;
  className?: string;
};

export function Loader({ className, size }: LoaderProps): JSX.Element {
  const sizeClasses: Record<LoaderSize, string> = {
    sm: 'w-6 h-6 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn('flex items-center justify-center', className)}
    >
      <div
        className={cn(
          'border-blue-20 border-t-blue-30 animate-spin rounded-full',
          sizeClasses[size],
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
