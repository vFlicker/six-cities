import { ComponentProps, JSX } from 'react';

import { cn } from '~/shared1/lib/css';

type AdultsIconProps = ComponentProps<'svg'>;

export function AdultsIcon({
  className,
  ...props
}: AdultsIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 12"
      className={cn('h-3.5 w-3.5 fill-gray-50', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM6 9.5a3.5 3.5 0 1 1 7 0V12H6V9.5zM3.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM0 9.3A2.3 2.3 0 0 1 2.3 7h2.167c1.03 0 1.61 1.186.978 2v3H0V9.3z"
      />
    </svg>
  );
}
