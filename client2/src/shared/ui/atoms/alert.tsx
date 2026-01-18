import { JSX, PropsWithChildren } from 'react';

import { cn } from '~/shared/lib/css';

type AlertVariant = 'error' | 'success' | 'warning' | 'info';

type AlertProps = PropsWithChildren<{
  className?: string;
  variant?: AlertVariant;
}>;

export function Alert({
  variant = 'info',
  children,
  className,
  ...props
}: AlertProps): JSX.Element {
  return (
    <div
      role="alert"
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}

const baseClasses = cn('rounded-md border px-4 py-3 text-sm');

const variantClasses: Record<AlertVariant, string> = {
  error: 'bg-red-50 text-red-700 border-red-200',
  success: 'bg-green-50 text-green-700 border-green-200',
  warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  info: 'bg-blue-50 text-blue-700 border-blue-200',
};
