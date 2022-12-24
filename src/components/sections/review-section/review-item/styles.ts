import styled from '@emotion/styled';

import { avatarIconSrc } from '~/assets/images';

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 22px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 54px;
  margin-right: 22px;
`;

export const AvatarWrapper = styled.div`
  min-width: 54px;
  width: 54px;
  height: 54px;
  margin-bottom: 10px;

  background-image: url(${avatarIconSrc});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Name = styled.span`
  font-size: 14px;
  line-height: 1.2143;
  color: #000;
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Info = styled.div``;

export const StarRatingWrapper = styled.div`
  margin-bottom: 7px;
`;

export const Comment = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 1.75;
  color: #000;
`;

export const Time = styled.time`
  font-size: 14px;
  line-height: 1;
  color: #5d5d5d;
`;
