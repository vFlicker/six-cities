import { SyntheticEvent, useRef } from 'react';

import { useAppDispatch } from '~/hooks';
import { userSlice } from '~/store';

import { Button } from '../../shared';

import * as S from './styles';

export function LoginSection(): JSX.Element {
  const formRef = useRef<HTMLFormElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    const target = evt.target as typeof evt.target & {
      email: { value: string };
      password: { value: string };
    };

    dispatch(
      userSlice.login({
        email: target.email.value,
        password: target.password.value,
      }),
    );
  };

  return (
    <S.Section>
      <S.Title>Sign in</S.Title>
      <S.Form action="#" method="post" onSubmit={handleSubmit} ref={formRef}>
        <S.InputWrapper>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor="password">Password</S.Label>
          <S.Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </S.InputWrapper>
        <Button type="submit" fullWidth>
          Sign in
        </Button>
      </S.Form>
    </S.Section>
  );
}
