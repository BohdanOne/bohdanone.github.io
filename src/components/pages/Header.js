import React from 'react';
import MainNav from '../parts/MainNav';
import SoundToggler from '../parts/SoundToggler';
// import Hamburger from '../parts/Hamburger';

export default () => {
  return (
    <header className="Header">
      <MainNav />
      {/* <Hamburger /> */}
      <SoundToggler />
    </header>
  );
};