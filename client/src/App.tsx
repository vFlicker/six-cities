import { Global } from '@emotion/react';

import { Button } from './elements/Button';
import { globalColors } from './tokens/colors';
import { globalRadiuses } from './tokens/radiuses';

function App(): JSX.Element {
  return (
    <>
      <Global styles={globalRadiuses} />
      <Global styles={globalColors} />

      <Button>Click me</Button>
    </>
  );
}

export { App };
