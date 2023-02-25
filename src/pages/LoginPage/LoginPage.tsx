import classNames from 'classnames';

import { LoginForm } from '~/features/LoginForm';
import { Header } from '~/widgets/Header';

import classes from './LoginPage.module.css';

export function LoginPage(): JSX.Element {
  return (
    <div className={classes.page}>
      <Header />

      <main className={classes.main}>
        <div className={classNames('container', classes.container)}>
          <section className={classes.login}>
            <h1 className={classes.title}>Sign in</h1>
            <LoginForm />
          </section>
          {/* TODO: create location button */}
          {/* <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section> */}
        </div>
      </main>
    </div>
  );
}
