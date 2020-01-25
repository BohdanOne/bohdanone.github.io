import React from 'react';

export default () => (
  <button
    className="back-to-top-button"
    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    aria-label="Back to Top"
  >
    <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 0.6875L0.59375 15.0938L1.28125 15.8125L5.1875 19.7188L5.90625 20.4062L15 11.3125L24.0938 20.4062L24.8125 19.7188L28.7188 15.8125L29.4062 15.0938L15 0.6875ZM15 3.53125L26.5625 15.125L24.125 17.5625L15.7188 9.1875L15 8.5L14.2812 9.1875L5.875 17.5625L3.4375 15.125L15 3.53125Z"/>
    </svg>
  </button>
);