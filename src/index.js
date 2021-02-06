import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {MOCK_PLACES} from "./data";

ReactDOM.render(
    <App
      places={MOCK_PLACES}
    />,
    document.querySelector(`#root`),
);
