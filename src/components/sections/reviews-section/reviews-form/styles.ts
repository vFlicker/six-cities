import styled from '@emotion/styled';

import { starActiveIconSrc } from '~/assets/images';
import { Textarea as TextareaBase } from '~/components/shared';

export const From = styled.form`
  margin-right: -30px;
  padding-left: 76px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 1.2143;
  font-weight: 700;
  font-style: oblique;
  color: #000;
`;

export const Textarea = styled(TextareaBase)`
  width: 568px;
  height: 92px;
  margin-bottom: 12px;
  padding: 15px 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HelpText = styled.p`
  width: 402px;
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 1.334;
`;

export const Star = styled.span`
  padding-left: 15px;
  background-image: url(${starActiveIconSrc});
  background-size: 12px 11px;
  background-repeat: no-repeat;
`;

export const TextAmount = styled.b`
  font-weight: 700;
`;
