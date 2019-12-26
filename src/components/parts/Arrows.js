import React from 'react';

class Nav extends React.Component {
  render() {
    return(
      <nav className="Nav">
        <div role="button" className="icon arrows-down" >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.21875 6.6875L3.78125 8.09375L16 20.3125L28.2188 8.09375L26.7812 6.6875L16 17.4688L5.21875 6.6875ZM5.21875 13.6875L3.78125 15.0938L16 27.3125L28.2188 15.0938L26.7812 13.6875L16 24.4688L5.21875 13.6875Z" />
          </svg>
        </div>
        <div role="button" className="icon arrow-right">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9688 4.28125L11.5312 5.71875L21.8125 16L11.5312 26.2812L12.9688 27.7188L23.9688 16.7188L24.6562 16L23.9688 15.2812L12.9688 4.28125Z" />
          </svg>

        </div>
      </nav>
    );
  };
}

export default Nav;