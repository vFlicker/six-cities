import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { container } from '~/shared/ui/css';

type GalleryProps = {
  imageUrls: string[];
  className?: string;
};

export function Gallery({ className, imageUrls }: GalleryProps): JSX.Element {
  const first6ImageUrls = imageUrls.slice(0, 6);

  return (
    <div className={cn(container.lg, className)}>
      <div className={classGalleryContainer}>
        <div className={triangleBgLeftClasses} />

        {first6ImageUrls.map((imageUrl) => (
          <div key={imageUrl} className={imageWrapperClasses}>
            <img src={imageUrl} alt="Studio" className={imageClasses} />
          </div>
        ))}

        <div className={triangleBgRightClasses} />
      </div>
    </div>
  );
}

const classGalleryContainer = cn(
  'relative mx-auto flex max-h-[452px] w-[785px] flex-wrap items-start justify-center gap-[2px] overflow-hidden',
);

const triangleBgCommonClasses = cn(
  'bg-size-34px-452px absolute top-0 h-full w-8 bg-[url("/icons/triangle.svg")] bg-no-repeat',
);

const triangleBgLeftClasses = cn(triangleBgCommonClasses, 'left-0 rotate-180');
const triangleBgRightClasses = cn(triangleBgCommonClasses, 'right-0');

const imageWrapperClasses = cn(
  'flex h-[200px] w-[260px] items-center justify-center overflow-hidden',
);

const imageClasses = cn('min-h-full min-w-full flex-grow');
