import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';

const root = document.getElementById('root');

document.addEventListener('DOMContentLoaded',() => {
  root.style.setProperty('height', `${window.innerHeight}px`);
  window.onresize = () => {
    root.style.setProperty('height', `${window.innerHeight}px`);
  }
});

ReactDOM.render(<App />, root);