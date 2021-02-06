import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import NotFoundPage from '../not-found-page/not-found-page';

import {placeCardPropTypes} from '../../prop-types/place-card';


const App = (props) => {
  const {places} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage places={ places } />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  places: PropTypes.arrayOf(
      placeCardPropTypes
  )
};

export default App;
