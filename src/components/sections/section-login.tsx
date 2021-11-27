import React, { FormEvent, useRef } from 'react';
import { connect } from 'react-redux';

import { ActionCreator, TDispatch } from '../../store/action';
import { TAuthData } from '../../types';

type SectionLoginProps = {
  onSubmit: (data: TAuthData) => void,
};

function SectionLogin({ onSubmit }: SectionLoginProps): React.ReactElement {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (!emailRef.current || !passwordRef.current) {
      return;
    }

    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label htmlFor="email" className="visually-hidden">E-mail</label>
          <input
            id="email"
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            ref={emailRef}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label htmlFor="password" className="visually-hidden">Password</label>
          <input
            id="password"
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
        </div>
        <button className="login__submit form__submit button" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
}

const mapDispatchToProps = (dispatch: TDispatch) => ({
  onSubmit: (authData: TAuthData) => {
    dispatch(ActionCreator.login(authData));
  },
});

export { SectionLogin };
export default connect(null, mapDispatchToProps)(SectionLogin);
