import cn from 'classnames';

import { LoginForm } from '~/features/LoginForm';
import { AppRoute } from '~/shared/constants';
import { ButtonLink } from '~/shared/ui/ButtonLink';
import { Header } from '~/widgets/Header';

import classes from './LoginPage.module.css';

export function LoginPage(): JSX.Element {
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
              <ButtonLink
                to={AppRoute.ROOT}
                className={classes.locationsLink}
                isActive
              >
                Amsterdam
              </ButtonLink>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
