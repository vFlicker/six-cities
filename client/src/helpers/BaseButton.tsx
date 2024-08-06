import styled from '@emotion/styled';
import { ComponentProps } from 'react';

type BaseButtonProps = ComponentProps<'button'>;

function BaseButton({ children, ...props }: BaseButtonProps) {
  return (
    <StyledBaseButton type="button" {...props}>
      {children}
    </StyledBaseButton>
  );
}

const StyledBaseButton = styled.button`
  display: inline-block;
  padding: 0;
  background: 0 0;
  border: none;
  text-decoration: none;
  font: inherit;
  text-align: center;
  word-break: break-word;
  word-wrap: wrap;
  overflow-wrap: break-word;
  transition: color .3s, background-color .3s;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export { BaseButton };
