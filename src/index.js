import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './styles/index.scss';
import App from './components/App';
import windowHeightTracker from './start-up/windowHeightTracker';
import toggleOutlines from './start-up/toggleOutlines';

///// redux dev tools
import { compose } from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());
// ====
// const store = createStore(reducers, {});
// ====

const root = document.getElementById('root');

windowHeightTracker(root);
toggleOutlines();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);