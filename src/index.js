import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {MOCK_PLACES} from './mocks/offers';
import {MOCK_REVIEWS} from './mocks/reviews';

ReactDOM.render(
    <App
      places={MOCK_PLACES}
      reviews={MOCK_REVIEWS}
    />,
    document.querySelector(`#root`),
);
