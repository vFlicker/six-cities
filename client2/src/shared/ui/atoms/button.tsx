import NextLink from 'next/link';
import { ComponentProps, JSX } from 'react';

import { cn } from '~/shared/lib/css';

import { baseButtonClasses } from '../css';

type ButtonProps = ComponentProps<'button'>;
type LinkProps = ComponentProps<typeof NextLink>;

export function Button({
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={cn(baseButtonClasses, buttonClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function Link({
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
  'focus:bg-blue-30 disabled:bg-gray-40 bg-blue-20 hover:bg-blue-30 rounded px-5 pt-3 pb-2 text-white',
);
