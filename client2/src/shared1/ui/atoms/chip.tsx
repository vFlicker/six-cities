import { JSX } from 'react';

import { cn } from '~/shared1/lib/css';

type ChipSize = 'small' | 'large';

type ChipProps = {
  size: ChipSize;
  className?: string;
};

export function Chip({ className, size }: ChipProps): JSX.Element {
  return (
    <div
      className={cn(
        'bg-blue-20 mb-2 inline-flex -skew-x-10 rounded-sm px-[11px] pt-[7px] pb-[5px] pl-2',
        className,
      )}
    >
      <span
        className={cn(
          'block skew-x-10 font-bold text-white italic',
          sizeClasses[size],
        )}
      >
        Premium
      </span>
    </div>
  );
}

const sizeClasses: Record<ChipSize, string> = {
  small: cn('text-xs leading-4'),
  large: cn('text-base leading-5'),
};
