import React from 'react';
import Header from '../header/header';


const NotFoundPage = () => {
  return (
    <div className="page page--not-found">
      <Header />

      <main className="page__main page__main--not-found">
        <div className="page__not-found-container container">
          <section className="not-found">
            <h1>Page not found</h1>
            <div className="not-found__wrapper">
              <b className="not-found__status">404</b>
              <p className="not-found__status-description">Sorry, the page you requested was not found.</p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

export default NotFoundPage;
