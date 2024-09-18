import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { AppRoute } from './constants';
import { FavoritesPage } from './pages/FavoritesPage';
import { IndexPage } from './pages/IndexPage';
import { LoginPage } from './pages/LoginPage';
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
        <Route index path={AppRoute.Root} element={<IndexPage />} />
        <Route path="offer" element={<OfferPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<PrivateRoute isAllowed={true} />}>
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>

      <SpriteWithIcons />
    </>
  );
}

export { App };
