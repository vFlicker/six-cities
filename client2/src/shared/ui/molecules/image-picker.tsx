'use client';

import Image from 'next/image';
import { ChangeEvent, JSX, useRef, useState } from 'react';

import { cn } from '~/shared/lib/css';

import { Button } from '../atoms';

type ImagePickerProps = {
  label: string;
  name: string;
  className?: string;
};

export function ImagePicker({
  className,
  label,
  name,
}: ImagePickerProps): JSX.Element {
  const imageInput = useRef<HTMLInputElement>(null);

  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null,
  );

  const handlePickClick = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => {
      setPickedImage(fileReader.result);
    });

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={cn(className)}>
      <label htmlFor={name}>{label}</label>
      <div className={controlsClasses}>
        <div className={previewClasses}>
          {!pickedImage && (
            <p className={previewTextClasses}>No image picked yet.</p>
          )}
          {pickedImage && (
            <Image
              className={previewImageClasses}
              src={pickedImage.toString()}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={pickerInputClasses}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <Button onClick={handlePickClick}>Pick an Image</Button>
      </div>
    </div>
  );
}

const controlsClasses = cn('mb-4 flex items-start gap-6');
const pickerInputClasses = cn('hidden');

const previewClasses = cn(
  'border-gray-30 bg-gray-10 relative flex h-40 w-40 items-center justify-center border-2 text-center',
);

const previewTextClasses = cn('m-0 p-4');
const previewImageClasses = cn('object-cover');
