import { JSX } from 'react';

import { cn } from '~/shared/lib/css';

type ErrorProps = {
  message: string;
  className?: string;
};

export function Error({ className, message }: ErrorProps): JSX.Element {
  return <div className={cn('text-sm text-red-500', className)}>{message}</div>;
}
