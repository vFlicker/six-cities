import NextLink from 'next/link';
import { ComponentProps, JSX } from 'react';

import { cn } from '~/shared1/lib/css';

import { baseButtonClasses } from '../css';

type ButtonBaseProps = {
  isActive?: boolean;
};

type ButtonProps = ComponentProps<'button'> & ButtonBaseProps;
type LinkProps = ComponentProps<typeof NextLink> & ButtonBaseProps;

export function SlantedButton({
  className,
  children,
  isActive = false,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        baseButtonClasses,
        buttonClasses,
        isActive && activeButtonClasses,
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
  isActive = false,
  ...props
}: LinkProps): JSX.Element {
  return (
    <NextLink
      className={cn(
        baseButtonClasses,
        buttonClasses,
        isActive && activeButtonClasses,
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
