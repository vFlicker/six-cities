import NextLink from 'next/link';
import { ComponentProps, JSX } from 'react';

import { baseButtonStyles } from '~/shared/css/baseButtonStyles';
import { cn } from '~/shared/lib/css';

type ButtonBaseProps = {
  active?: boolean;
};

type ButtonProps = ComponentProps<'button'> & ButtonBaseProps;
type LinkProps = ComponentProps<typeof NextLink> & ButtonBaseProps;

const buttonStyles = cn(
  '-skew-x-15 rounded py-2 pr-5 pl-4 text-lg font-light italic hover:text-shadow-xs',
);

const activeButtonStyles = cn(
  'bg-blue-20 focus:bg-blue-30 hover:bg-blue-30 text-white text-shadow-white text-shadow-xs',
);

const buttonTextStyles = cn('block skew-x-15');

export function SlantedButton({
  className,
  children,
  active = false,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        baseButtonStyles,
        buttonStyles,
        active && activeButtonStyles,
        className,
      )}
      {...props}
    >
      <span className={buttonTextStyles}>{children}</span>
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
        baseButtonStyles,
        buttonStyles,
        active && activeButtonStyles,
        className,
      )}
      {...props}
    >
      <span className={buttonTextStyles}>{children}</span>
    </NextLink>
  );
}
