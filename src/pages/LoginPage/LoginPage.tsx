import classNames from 'classnames';

import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
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
            <form className={classes.form}>
              <Input
                label="E-mail"
                className={classes.input}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <Input
                label="Password"
                className={classes.input}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <Button className={classes.button}>Sign in</Button>
            </form>
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
