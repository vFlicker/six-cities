import { ComponentProps, JSX } from 'react';

import { cn } from '~/shared/lib/css';

type BookmarkIconProps = ComponentProps<'svg'>;

export function BookmarkIcon({
  className,
  ...props
}: BookmarkIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 18"
      className={cn('h-5 w-5 fill-transparent stroke-gray-50', className)}
      {...props}
    >
      <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
    </svg>
  );
}
