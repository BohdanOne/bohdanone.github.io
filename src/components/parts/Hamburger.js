import React from 'react';

const Hamburger = props => {
  return (
    <div role="button" onClick={ props.onClick }>
      <svg className="icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7V9H28V7H4ZM4 15V17H28V15H4ZM4 23V25H28V23H4Z"/>
      </svg>
    </div>
  );
};

export default Hamburger;