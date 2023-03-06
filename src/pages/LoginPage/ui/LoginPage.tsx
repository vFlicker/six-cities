import cn from 'classnames';
import { Navigate } from 'react-router-dom';

import { Header } from '~/widgets/Header';
import { LoginForm } from '~/features/LoginForm';
import { RandomLocation } from '~/features/RandomLocation';
import { userModel } from '~/entities/user';
import { AppRoute } from '~/shared/constants';
import { useAppSelector } from '~/shared/hooks';

import classes from './LoginPage.module.css';

export function LoginPage(): JSX.Element {
  const isAuthenticated = useAppSelector(userModel.selectIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={AppRoute.ROOT} />;
  }

  return (
    <div className={classes.page}>
      <Header />

      <main className={classes.main}>
        <div className={cn('container', classes.container)}>
          <section className={classes.login}>
            <h1 className={classes.title}>Sign in</h1>
            <LoginForm />
          </section>
          <section className={classes.locations}>
            <div className={classes.locationsItem}>
              <RandomLocation />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}