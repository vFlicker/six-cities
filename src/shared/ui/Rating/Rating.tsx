import cn from 'classnames';

import { getStarsStyle } from './lib';
import classes from './Rating.module.css';

type Size = 'big' | 'medium' | 'small';

type RatingProps = {
  value: number;
  size: Size;
  hasText?: boolean;
  className?: string;
};

export function Rating({
  value,
  size,
  className,
  hasText = false,
}: RatingProps): JSX.Element {
  const style = getStarsStyle(value);

  return (
    <div className={cn(className, classes.rating, classes[size])}>
      <div className={cn(classes.stars)}>
        <span style={style}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {hasText && <span className={classes.text}>{value}</span>}
    </div>
  );
}
