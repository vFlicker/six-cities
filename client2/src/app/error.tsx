'use client';

import { JSX } from 'react';

import { cn } from '~/shared/lib/css';

export default function Error(): JSX.Element {
  return (
    <div className={wrapperClasses}>
      <h1 className={titleClasses}>Something went wrong...</h1>
      <p className={textClasses}>
        An unexpected error has occurred. Please try refreshing the page or
        contact support if the problem persists.
      </p>
    </div>
  );
}

const wrapperClasses = cn(
  'flex h-full flex-col items-center justify-center p-4',
);

const titleClasses = cn('mb-4 text-3xl font-bold text-black');
const textClasses = cn('text-center text-gray-700');
