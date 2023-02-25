import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Input.module.css';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

export function Input({ label, className, ...props }: InputProps): JSX.Element {
  return (
    <label>
      <span className="visually-hidden">{label}</span>
      <input className={cn(className, classes.input)} {...props} />
    </label>
  );
}
