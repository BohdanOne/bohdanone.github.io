import React from 'react';
import SoundToggler from '../parts/SoundToggler';
// import Hamburger from '../parts/Hamburger';

class Header extends React.Component {

  render() {
    return (
      <header className="Header">
        <SoundToggler />
        {/* <Hamburger /> */}
      </header>
    );
  }
};

export default Header;