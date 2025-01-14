import { authModel } from '~/entities/auth';
import { Comments, useComments } from '~/entities/comment';
import { AddComment } from '~/features/addComment';
import { Loader } from '~/shared/ui/Loader';

import { Section } from './Section';

type ReviewsSectionProps = {
  className?: string;
};

function ReviewsSection({ className }: ReviewsSectionProps): JSX.Element {
  const { comments, isCommentsPending } = useComments();
  const isAuthenticated = authModel.useAuthStore(authModel.getIsAuthenticated);

  if (isCommentsPending) return <Loader />;
  const commentsCount = comments!.length;

  return (
    <Section className={className} title={`Reviews · ${commentsCount}`}>
      <Comments comments={comments!} />
      {isAuthenticated && <AddComment />}
    </Section>
  );
}
export { ReviewsSection };
