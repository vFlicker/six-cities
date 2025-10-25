import { ComponentProps, JSX } from 'react';

import { cn } from '~/shared/lib/css';

type BedroomsIconProps = ComponentProps<'svg'>;

export function BedroomsIcon({
  className,
  ...props
}: BedroomsIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 18"
      className={cn('h-3.5 w-3.5', className)}
      {...props}
    >
      <path
        d="M.5 1.578V.5h13v15h-1.979V3.451l-.416-.07L.5 1.578z"
        stroke="#9b9b9b"
        fill="#ffffff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1l12 2v15L0 16V1z"
        fill="#9b9b9b"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        fill="#ffffff"
      />
    </svg>
  );
}
