import { Comments } from '~/entities/comment';
import { AddComment } from '~/features/addComment';

import { Section } from './Section';

type ReviewsSectionProps = {
  className?: string;
};

function ReviewsSection({ className }: ReviewsSectionProps): JSX.Element {
  return (
    <Section className={className} title="Reviews &middot; 1">
      <Comments />
      <AddComment />
    </Section>
  );
}
export { ReviewsSection };
