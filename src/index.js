import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './styles/index.scss';
import App from './components/App';

const root = document.getElementById('root');

document.addEventListener('DOMContentLoaded',() => {
  root.style.setProperty('height', `${window.innerHeight}px`);
  window.onresize = () => {
    root.style.setProperty('height', `${window.innerHeight}px`);
  }
});

ReactDOM.render(
  <Provider store={ createStore(reducers, {})}>
    <App />
  </Provider>,
  root
);