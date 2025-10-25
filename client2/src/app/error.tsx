'use client';

import { JSX } from 'react';

export default function Error(): JSX.Element {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-3xl font-bold text-black">
        Something went wrong...
      </h1>
      <p className="text-center text-gray-700">
        An unexpected error has occurred. Please try refreshing the page or
        contact support if the problem persists.
      </p>
    </div>
  );
}
