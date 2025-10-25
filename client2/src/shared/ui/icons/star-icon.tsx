import { ComponentProps, JSX } from 'react';

import { cn } from '~/shared/lib/css';

type StarIconProps = ComponentProps<'svg'>;

export function StarIcon({ className, ...props }: StarIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 12"
      className={cn('fill-gray-40 h-8.5 w-8.5', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
      />
    </svg>
  );
}
