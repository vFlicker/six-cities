import React from 'react';
import ReactDOM from 'react-dom';
import { offers, reviews } from './mocks';
import App from './components/app';

ReactDOM.render(
  <App
    offers={offers}
    reviews={reviews}
  />,
  document.getElementById('root'),
);
