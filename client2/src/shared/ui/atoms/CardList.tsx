import { Children, JSX, PropsWithChildren } from 'react';

import { cn } from '~/shared/lib/css';

type Cols = 2 | 3;

type CardListProps = PropsWithChildren<{
  cols: Cols;
  className?: string;
}>;

export function CardList({
  className,
  children,
  cols,
}: CardListProps): JSX.Element {
  return (
    <div className={cn('grid gap-4', GRID_COLS_MAP[cols], className)}>
      {Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </div>
  );
}

const GRID_COLS_MAP: Record<Cols, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
};
