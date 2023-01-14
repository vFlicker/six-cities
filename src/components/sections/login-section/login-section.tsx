import { SyntheticEvent, useRef } from 'react';

import { useAppDispatch } from '~/hooks/use-app-dispatch';
import * as userSlice from '~/store/slices/user/slice';

import { Button } from '../../shared/button/button';

import * as S from './styles';

export function LoginSection(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      const data = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      dispatch(userSlice.login(data));
    }
  };

  return (
    <S.Section>
      <S.Title>Sign in</S.Title>
      <S.Form action="#" method="post" onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            data-testid="email"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor="password">Password</S.Label>
          <S.Input
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            data-testid="password"
          />
        </S.InputWrapper>
        <Button type="submit" fullWidth>
          Sign in
        </Button>
      </S.Form>
    </S.Section>
  );
}
