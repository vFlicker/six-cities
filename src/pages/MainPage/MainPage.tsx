import { Footer } from '~/shared/ui/Footer/Footer';
import { Header } from '~/widgets/Header/Header';

import classes from './MainPage.module.css';

export function MainPage(): JSX.Element {
  return (
    <div className={classes.page}>
      <Header />
      <h1 className="container">Main Page</h1>
      <Footer />
    </div>
  );
}
