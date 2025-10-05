import NextLink from 'next/link';
import { ComponentProps, JSX } from 'react';

import { baseButtonClasses } from '~/shared/css';
import { cn } from '~/shared/lib/css';

type ButtonBaseProps = {
  active?: boolean;
};

type ButtonProps = ComponentProps<'button'> & ButtonBaseProps;
type LinkProps = ComponentProps<typeof NextLink> & ButtonBaseProps;

export function SlantedButton({
  className,
  children,
  active = false,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        baseButtonClasses,
        buttonClasses,
        active && activeButtonClasses,
        className,
      )}
      {...props}
    >
      <span className={buttonTextClasses}>{children}</span>
    </button>
  );
}

export function SlantedLink({
  className,
  children,
  active = false,
  ...props
}: LinkProps): JSX.Element {
  return (
    <NextLink
      className={cn(
        baseButtonClasses,
        buttonClasses,
        active && activeButtonClasses,
        className,
      )}
      {...props}
    >
      <span className={buttonTextClasses}>{children}</span>
    </NextLink>
  );
}

const buttonClasses = cn(
  '-skew-x-15 rounded py-2 pr-5 pl-4 text-lg font-light italic hover:text-shadow-xs',
);

const activeButtonClasses = cn(
  'bg-blue-20 focus:bg-blue-30 hover:bg-blue-30 text-white text-shadow-white text-shadow-xs',
);

const buttonTextClasses = cn('block skew-x-15');
