import { JSX } from 'react';

import { cn } from '~/shared/lib/css';

type ErrorProps = {
  message: string;
  className?: string;
};

export function Error({ className, message }: ErrorProps): JSX.Element {
  return <div className={cn(errorClasses, className)}>{message}</div>;
}

const errorClasses = cn('text-sm text-red-500');
