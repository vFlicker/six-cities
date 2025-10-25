import { ComponentProps, JSX } from 'react';

import { cn } from '~/shared1/lib/css';

type ArrowIconProps = ComponentProps<'svg'>;

export function ArrowIcon({
  className,
  ...props
}: ArrowIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7 4"
      className={cn('stroke-gray-90 h-2 w-2', className)}
      strokeWidth="1"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
      />
    </svg>
  );
}
