import cn from 'classnames';

import { Hotel } from '~/shared/types/hotel';
import { Rating } from '~/shared/ui/Rating';

import classes from './Card.module.css';

type CardProps = {
  hotel: Hotel;
  action?: JSX.Element;
  className?: string;
};

export function Card({ hotel, action, className }: CardProps): JSX.Element {
  const { isPremium, previewImage, price, title, type, rating } = hotel;

  const mark = isPremium && (
    <div className={classes.mark}>
      <span>Premium</span>
    </div>
  );

  return (
    <article className={cn(className, classes.card)}>
      {mark}
      <div className={classes.imageWrapper}>
        <a href="/">
          <img
            className={classes.image}
            src={previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </a>
      </div>
      <div className={classes.info}>
        <div className={classes.infoHeader}>
          <div className={classes.price}>
            <b className={classes.priceValue}>&euro;{price}</b>
            <span className={classes.priceText}>&#47;&nbsp;night</span>
          </div>
          {action}
        </div>
        <Rating className={classes.rating} size="small" value={rating} />
        <h2 className={classes.title}>
          <a href="/">{title}</a>
        </h2>
        <p className={classes.type}>{type}</p>
      </div>
    </article>
  );
}
