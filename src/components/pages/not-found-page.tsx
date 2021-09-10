import React from 'react';
import Header from '../header';
import Footer from '../footer';

function NotFoundPage(): React.ReactElement {
  return (
    <div className="page  page--not-found">
      <Header />
      <main className="page__main page__main--not-found">
        <div className="page__not-found-container container">
          <section className="not-found">
            <h1 className="not-found__title">Page not found</h1>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
