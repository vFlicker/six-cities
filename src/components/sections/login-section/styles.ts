import styled from '@emotion/styled';
import { visuallyHidden } from '@/components/shared/visually-hidden';

export const Section = styled.section`
  position: relative;
  width: 520px;
  padding-top: 19.6vh;
  padding-right: 60px;
  padding-left: 13px;

  &::after {
    content: '';
    position: absolute;
    width: 12.03vh;
    min-width: 195px;
    height: 100vh;
    min-height: 450px;
    bottom: 0;
    right: -2px;
    background-color: #f5f5f5;
    border-right: 6px solid #4481c3;
    -webkit-transform: skew(-6.5deg);
    transform: skew(-6.5deg);
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  margin-top: 0;
  margin-bottom: 28px;
  font-size: 32px;
  line-height: 1.1875;
  font-weight: 700;
  font-style: oblique;
`;

export const Form = styled.form`
  position: relative;
  z-index: 1;
  width: 341px;
`;

export const InputWrapper = styled.div`
  margin-right: 2px;
`;

export const Label = styled.label`
  ${visuallyHidden}
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 24px;
  padding: 15px 14px 13px;

  border: 1px solid #e6e6e6;
  border-radius: 2px;

  color: #383838;
  font-size: 16px;
  line-height: 1.1875;

  background-color: #fff;

  &::placeholder {
    color: #818181;
  }
`;
