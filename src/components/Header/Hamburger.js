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
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 7V9H28V7H4ZM4 23V25H28V23H4Z"/>
          </svg>
        </button>
      );
    } else {
      return (
        <button
          onClick={ props.toggleBurger }
          role="switch" aria-checked="false"
          className="icon hamburger"
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