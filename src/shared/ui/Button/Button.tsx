import classNames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export function Button({ className, children }: ButtonProps): JSX.Element {
  return (
    <button className={classNames(classes.button, className)}>
      {children}
    </button>
  );
}
