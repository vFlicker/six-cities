import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';

import { authModel } from '~/entities/auth';
import { PrivateRoute } from '~/entities/auth';
import { LoginPage, RegisterPage } from '~/pages/auth';
import { FavoritesPage } from '~/pages/favorite';
import { HomePage } from '~/pages/home';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { OfferPage } from '~/pages/offer';
import { AppRoute } from '~/shared/libs/router';
import { globalColors } from '~/shared/theme/colors';
import { globalFonts } from '~/shared/theme/fonts';
import { SpriteWithIcons } from '~/shared/theme/icons';
import { globalNormalize } from '~/shared/theme/normalize';
import { globalRadiuses } from '~/shared/theme/radiuses';
import { globalResets } from '~/shared/theme/resets';
import { globalTextShadows } from '~/shared/theme/textShadow';
import { Loader } from '~/shared/ui/Loader';

function App(): JSX.Element {
  const isAuthChecked = authModel.useAuthStore(authModel.getIsAuthChecked);

  if (!isAuthChecked) return <Loader />;

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
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Register} element={<RegisterPage />} />

        <Route
          path={`${AppRoute.Offers}/:offerId`}
          element={
            <PrivateRoute>
              <OfferPage />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <SpriteWithIcons />
    </>
  );
}

export { App };
