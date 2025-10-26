import { ComponentProps } from 'react';

import { cn } from '~/shared/lib/css';

import { Error } from '../atoms';

type InputProps = {
  errorMessage?: string;
} & ComponentProps<'input'>;

export function Input({ className, errorMessage, ...props }: InputProps) {
  return (
    <div>
      <input className={cn(inputClasses, className)} {...props} />
      {errorMessage && (
        <Error className={errorClasses} message={errorMessage} />
      )}
    </div>
  );
}

const inputClasses = cn(
  'text-gray-90 hover:border-gray-90 focus:border-gray-90 border-gray-30 w-full rounded-sm border bg-white px-4 pt-4 pb-3 text-base placeholder-gray-50 transition-colors focus:outline-none',
);

const errorClasses = cn('mb-2');
