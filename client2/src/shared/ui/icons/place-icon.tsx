import { ComponentProps, JSX } from 'react';

import { cn } from '~/shared1/lib/css';

type PlaceIconProps = ComponentProps<'svg'>;

export function PlaceIcon({
  className,
  ...props
}: PlaceIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 16"
      className={cn('h-3.5 w-3.5 fill-gray-50 stroke-gray-50', className)}
      strokeWidth="2"
      {...props}
    >
      <path d="M1 15V4.806l5.5-3.61 5.5 3.61V15H1z" />
    </svg>
  );
}
