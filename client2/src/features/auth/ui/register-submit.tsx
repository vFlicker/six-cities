'use client';

import { JSX } from 'react';
import { useFormStatus } from 'react-dom';

import { cn } from '~/shared/lib/css';
import { Button } from '~/shared/ui/atoms';

type RegisterProps = {
  className?: string;
};

export function RegisterSubmit({ className }: RegisterProps): JSX.Element {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className={cn(buttonClasses, className)}
      disabled={pending}
    >
      Sign up
    </Button>
  );
}

const buttonClasses = cn('w-full');
