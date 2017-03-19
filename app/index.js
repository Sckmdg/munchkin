import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';

const app = document.createElement('div');
document.body.appendChild(app);

const render = App => {
  ReactDOM.render(
    <AppContainer><App /></AppContainer>,
    app
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => render(App));
}
