import classes from './BookmarkButton.module.css';

export function BookmarkButton(): JSX.Element {
  return (
    <button className={classes.button} type="button">
      <svg className={classes.icon} width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
