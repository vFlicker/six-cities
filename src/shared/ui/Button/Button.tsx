import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export function Button({
  className,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className={cn(className, classes.button)} {...props}>
      {children}
    </button>
  );
}
