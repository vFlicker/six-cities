import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { NotFound } from '~/shared/ui/atoms';
import { defaultLayoutClasses } from '~/shared/ui/css';
import { Header } from '~/widget/header';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className={cn(defaultLayoutClasses)}>
      <Header className={headerClasses} />
      <NotFound
        title="Offer Not Found"
        description="The offer you are looking for does not exist."
      />
    </div>
  );
}

const headerClasses = cn('bg-gray-10');
