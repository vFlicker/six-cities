import cn from 'classnames';

import { Header } from '~/widgets/Header';
import { LoginForm } from '~/features/LoginForm';
import { RandomLocation } from '~/features/RandomLocation';

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
              <RandomLocation />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
