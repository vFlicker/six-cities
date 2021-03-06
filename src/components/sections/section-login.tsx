import { FormEvent, useRef } from 'react';

import { useAppDispatch } from '@/hooks';
import { userSlice } from '@/store';

export function SectionLogin(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!emailRef.current || !passwordRef.current) return;

    dispatch(userSlice.login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
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
