import React from 'react';

function SectionLogin(): React.ReactElement {
  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" action="#" method="post">
        <div className="login__input-wrapper form__input-wrapper">
          <label htmlFor="email" className="visually-hidden">E-mail</label>
          <input
            id="email"
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
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
          />
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    </section>
  );
}

export default SectionLogin;
