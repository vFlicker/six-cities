import React from 'react';
import ReactDOM from 'react-dom';
import { offers } from './mocks';
import App from './components/app';

ReactDOM.render(
  <App
    offers={offers}
  />,
  document.getElementById('root'),
);
