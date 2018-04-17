/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import './index.css';
// Note: if I put import { App } in curly brackets, eslint will stop complaining
// but the npm run start will not work with msg:
// TypeError: Unable to get property 'map' of undefined or null reference
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
