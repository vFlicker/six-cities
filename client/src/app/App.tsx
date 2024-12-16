import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage, RegisterPage } from '~/pages/auth';
import { FavoritesPage } from '~/pages/favorite';
import { HomePage } from '~/pages/home';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { OfferPage } from '~/pages/offer';
import { AuthStatus } from '~/shared/auth';
import { AppRoute } from '~/shared/router';
import { globalColors } from '~/shared/theme/colors';
import { globalFonts } from '~/shared/theme/fonts';
import { SpriteWithIcons } from '~/shared/theme/icons';
import { globalNormalize } from '~/shared/theme/normalize';
import { globalRadiuses } from '~/shared/theme/radiuses';
import { globalResets } from '~/shared/theme/resets';
import { globalTextShadows } from '~/shared/theme/textShadow';
import { PrivateRoute } from '~/shared/ui/PrivateRoute';

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
        <Route path={AppRoute.Root} element={<HomePage />} />
        <Route path={`${AppRoute.Offers}/:offerId`} element={<OfferPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Register} element={<RegisterPage />} />
        <Route element={<PrivateRoute authStatus={AuthStatus.Auth} />}>
          <Route path={AppRoute.Favorites} element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <SpriteWithIcons />
    </>
  );
}

export { App };
