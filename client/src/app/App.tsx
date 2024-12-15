import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage, RegisterPage } from '~/pages/auth';
import { globalColors } from '~/shared/theme/colors';
import { globalFonts } from '~/shared/theme/fonts';
import { SpriteWithIcons } from '~/shared/theme/icons';
import { globalNormalize } from '~/shared/theme/normalize';
import { globalRadiuses } from '~/shared/theme/radiuses';
import { globalResets } from '~/shared/theme/resets';
import { globalTextShadows } from '~/shared/theme/textShadow';

import { FavoritesPage } from '../pages/favorite';
import { HomePage } from '../pages/home';
import { OfferPage } from '../pages/offer';
import { AppRoute } from '../shared/router';
import { PrivateRoute } from '../shared/ui/PrivateRoute';

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
        <Route index path={`${AppRoute.Root}`} element={<HomePage />} />
        <Route path={`${AppRoute.Offers}/:offerId`} element={<OfferPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route element={<PrivateRoute isAllowed={true} />}>
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>

      <SpriteWithIcons />
    </>
  );
}

export { App };
