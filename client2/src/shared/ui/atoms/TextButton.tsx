import NextLink from 'next/link';
import { ComponentProps, JSX } from 'react';

import { baseButtonClasses } from '~/shared/css';
import { cn } from '~/shared/lib/css';

type ButtonProps = ComponentProps<'button'>;
type LinkProps = ComponentProps<typeof NextLink>;

export function TextButton({
  className,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(baseButtonClasses, buttonClasses, className)}
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
      className={cn(baseButtonClasses, buttonClasses, className)}
      {...props}
    >
      {children}
    </NextLink>
  );
}

const buttonClasses = cn(
  'text-gray-90 inline-flex items-center gap-2 text-sm hover:text-shadow-2xs focus:text-shadow-2xs active:text-shadow-2xs',
);
