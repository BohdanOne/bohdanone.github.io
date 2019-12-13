import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';

window.addEventListener('resize', () => {
  let vh = window.innerHeight * .01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

ReactDOM.render(<App />, document.getElementById('root'));
