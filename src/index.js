import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './styles/index.scss';
import App from './components/App';

import { compose } from 'redux';

const root = document.getElementById('root');

document.addEventListener('DOMContentLoaded',() => {
  root.style.setProperty('height', `${window.innerHeight}px`);
  window.onresize = () => {
    root.style.setProperty('height', `${window.innerHeight}px`);
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

// const store = createStore(reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);