import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { IconName } from '~/shared/theme/icons';
import { Button } from '~/shared/ui/Button';
import { FormRating } from '~/shared/ui/FormRating';
import { Icon, IconSize } from '~/shared/ui/Icon';
import { Input } from '~/shared/ui/Input';
import { withAttrs } from '~/shared/ui/withAttrs';

type AddCommentProps = {
  className?: string;
};

function AddComment({ className }: AddCommentProps): JSX.Element {
  return (
    <Form className={className} action="/" method="post">
      <StyledTextareaLabel htmlFor="review">Your review</StyledTextareaLabel>
      <StyledFormRating />
      <StyledTextarea name="review" id="review" />
      <StyledButtonWrapper>
        <StyledHelpText>
          To submit review please make sure to set <StyledStarIcon /> rating and
          describe your stay with at least{' '}
          <StyledAmount>50 characters</StyledAmount>.
        </StyledHelpText>
        <Button disabled>Submit</Button>
      </StyledButtonWrapper>
    </Form>
  );
}
export { AddComment };

const Form = styled.form`
  padding-left: 76px;
`;

const StyledFormRating = styled(FormRating)`
  margin-bottom: 22px;
`;

const StyledTextarea = withAttrs(
  {
    as: 'textarea',
    placeholder:
      'Tell how was your stay, what you like and what can be improved',
  },
  styled(Input)`
    width: 568px;
    height: 92px;
    margin-bottom: 12px;
  `,
);

const StyledTextareaLabel = styled.label`
  display: inline-block;
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 1.2143;
  font-weight: 700;
  font-style: oblique;
  color: ${Color.BLACK};
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledHelpText = styled.p`
  width: 400px;
  font-size: 12px;
  line-height: 1.334;
`;

const StyledStarIcon = withAttrs(
  {
    name: IconName.Star,
    size: IconSize.Small,
  },
  styled(Icon)`
    position: relative;
    top: 2px;
    fill: ${Color.ORANGE_10};
  `,
);

const StyledAmount = styled.b`
  font-weight: 700;
`;
