import styled from '@emotion/styled';
import { ComponentProps, forwardRef } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { ErrorBlock } from './ErrorBlock';

type InputProps = {
  errorMessage?: string;
} & ComponentProps<typeof StyledInput>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { errorMessage, ...props }: InputProps,
  ref,
) {
  return (
    <div>
      <StyledInput ref={ref} {...props} />
      <StyledErrorBlock message={errorMessage} />
    </div>
  );
});

export { Input };

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 14px 13px;
  font-size: 16px;
  line-height: 1.1875;
  color: ${Color.GRAY_90};
  background-color: ${Color.WHITE};
  border: 1px solid ${Color.GRAY_30};
  border-radius: ${Radius.RADIUS_2};

  &:hover,
  &:focus {
    border-color: ${Color.GRAY_40};
  }

  &::placeholder {
    color: ${Color.GRAY_50};
  }
`;

const StyledErrorBlock = styled(ErrorBlock)`
  margin-top: 8px;
`;
