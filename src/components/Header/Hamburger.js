import React from 'react';

export default props => {
  const renderBurger = () => {
    if (props.open) {
      return (
        <button
          onClick={ props.toggleBurger }
          role="switch" aria-checked="true"
          className="icon hamburger"
        >
          <svg
            viewBox="-6 -6 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.21875 0.78125L0.78125 2.21875L9.5625 11L0.78125 19.7812L2.21875 21.2188L11 12.4375L19.7812 21.2188L21.2188 19.7812L12.4375 11L21.2188 2.21875L19.7812 0.78125L11 9.5625L2.21875 0.78125Z"/>
          </svg>
        </button>
      );
    } else {
      return (
        <button
          onClick={ props.toggleBurger }
          role="switch" aria-checked="false"
          className="icon hamburger"
          aria-label="Navigation Toggle"
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 7V9H28V7H4ZM4 15V17H28V15H4ZM4 23V25H28V23H4Z"/>
          </svg>
        </button>
      );
    }
  }
  return renderBurger();
};