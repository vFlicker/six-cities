import cn from 'classnames';

import classes from './Card.module.css';

type CardProps = {
  className?: string;
};

export function Card({ className }: CardProps): JSX.Element {
  return (
    <article className={cn(className, classes.card)}>
      <div className={classes.mark}>
        <span>Premium</span>
      </div>
      <div className={classes.imageWrapper}>
        <a href="/">
          <img
            className={classes.image}
            src="https://via.placeholder.com/260x200"
            width="260"
            height="200"
            alt="Place"
          />
        </a>
      </div>
      <div className={classes.info}>
        <div className={classes.priceWrapper}>
          <div className={classes.price}>
            <b className={classes.priceValue}>&euro;120</b>
            <span className={classes.priceText}>&#47;&nbsp;night</span>
          </div>
          <button className={classes.bookmarkButton} type="button">
            <svg className={classes.bookmarkIcon} width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className={classes.rating}>
          <div className={cn(classes.rating, classes.stars)}>
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className={classes.title}>
          <a href="/">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className={classes.type}>Apartment</p>
      </div>
    </article>
  );
}
