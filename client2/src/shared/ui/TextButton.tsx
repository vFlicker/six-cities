import NextLink from 'next/link';
import { ComponentProps, JSX } from 'react';

import { baseButtonStyles } from '~/shared/css/baseButtonStyles';
import { cn } from '~/shared/lib/css';

type ButtonProps = ComponentProps<'button'>;
type LinkProps = ComponentProps<typeof NextLink>;

const buttonStyles = cn(
  'text-gray-90 inline-flex items-center gap-2 text-sm hover:text-shadow-2xs focus:text-shadow-2xs active:text-shadow-2xs',
);

export function TextButton({
  className,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(baseButtonStyles, buttonStyles, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TextLink({
  className,
  children,
  ...props
}: LinkProps): JSX.Element {
  return (
    <NextLink
      className={cn(baseButtonStyles, buttonStyles, className)}
      {...props}
    >
      {children}
    </NextLink>
  );
}
