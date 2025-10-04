import { JSX } from 'react';

import { Button } from '~/shared/ui/Button';
import { SlantedButton } from '~/shared/ui/SlantedButton';
import { TextButton } from '~/shared/ui/TextButton';

export default function HomePage(): JSX.Element {
  return (
    <div>
      <Button>Sign in</Button>
      <SlantedButton active>Slanted Button</SlantedButton>
      <SlantedButton>Slanted Button</SlantedButton>
      <TextButton>Sign out</TextButton>
    </div>
  );
}
