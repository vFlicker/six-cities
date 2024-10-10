import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';

import { globalColors } from '~/shared/tokens/colors';
import { globalFonts } from '~/shared/tokens/fonts';
import { SpriteWithIcons } from '~/shared/tokens/icons';
import { globalNormalize } from '~/shared/tokens/normalize';
import { globalRadiuses } from '~/shared/tokens/radiuses';
import { globalResets } from '~/shared/tokens/resets';
import { globalTextShadows } from '~/shared/tokens/textShadow';

import { PrivateRoute } from '../components/PrivateRoute';
import { AppRoute } from '../constants';
import { FavoritesPage } from '../pages/FavoritesPage';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { OfferPage } from '../pages/OfferPage';

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
        <Route index path={AppRoute.Root} element={<MainPage />} />
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
