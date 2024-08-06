import { Global } from '@emotion/react';

import { Button } from './elements/Button';
import { globalColors } from './tokens/colors';
import { globalFonts } from './tokens/fonts';
import { globalNormalize } from './tokens/normalize';
import { globalRadiuses } from './tokens/radiuses';
import { globalResets } from './tokens/resets';

function App(): JSX.Element {
  return (
    <>
      <Global styles={globalNormalize} />
      <Global styles={globalResets} />
      <Global styles={globalFonts} />
      <Global styles={globalRadiuses} />
      <Global styles={globalColors} />

      <Button>Click me</Button>
    </>
  );
}

export { App };
