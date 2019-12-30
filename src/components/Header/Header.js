import React from 'react';
import MainNav from './MainNav';
import SoundToggler from './SoundToggler';
import Hamburger from './Hamburger';

export default () => {
  return (
    <header className="Header">
      <MainNav />
      <Hamburger />
      <SoundToggler />
    </header>
  );
};