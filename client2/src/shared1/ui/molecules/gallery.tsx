import { JSX } from 'react';

import { cn } from '~/shared1/lib/css';
import { containerClasses } from '~/shared1/ui/css';

type GalleryProps = {
  imageUrls: string[];
  className?: string;
};

export function Gallery({ className, imageUrls }: GalleryProps): JSX.Element {
  const first6ImageUrls = imageUrls.slice(0, 6);

  return (
    <div className={cn(containerClasses.lg, className)}>
      <div className="relative mx-auto flex max-h-[452px] w-[785px] flex-wrap items-start justify-center gap-[2px] overflow-hidden">
        <div className={cn(triangleBgClasses, 'left-0 rotate-180')} />
        <div className={cn(triangleBgClasses, 'right-0')} />

        {first6ImageUrls.map((imageUrl) => (
          <div
            key={imageUrl}
            className="flex h-[200px] w-[260px] items-center justify-center overflow-hidden"
          >
            <img
              src={imageUrl}
              alt="Studio"
              className="min-h-full min-w-full flex-grow"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const triangleBgClasses = cn(
  'bg-size-34px-452px absolute top-0 h-full w-8 bg-[url("/icons/triangle.svg")] bg-no-repeat',
);
