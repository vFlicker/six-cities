import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { IndexPage } from './pages/IndexPage';
import { OfferPage } from './pages/OfferPage';
import { globalColors } from './tokens/colors';
import { globalFonts } from './tokens/fonts';
import { SpriteWithIcons } from './tokens/icons';
import { globalNormalize } from './tokens/normalize';
import { globalRadiuses } from './tokens/radiuses';
import { globalResets } from './tokens/resets';
import { globalTextShadows } from './tokens/textShadow';

function App(): JSX.Element {
  return (
    <>
      <Global styles={globalNormalize} />
      <Global styles={globalResets} />
      <Global styles={globalFonts} />
      <Global styles={globalRadiuses} />
      <Global styles={globalColors} />
      <Global styles={globalTextShadows} />

      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="/offer" element={<OfferPage />} />
        </Route>
      </Routes>

      <SpriteWithIcons />
    </>
  );
}

export { App };
