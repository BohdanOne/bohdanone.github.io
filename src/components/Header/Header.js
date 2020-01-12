import React, { useState } from 'react';
import MainNav from './MainNav';
import SoundToggler from './SoundToggler';
import Hamburger from './Hamburger';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBurger = () => setIsOpen(!isOpen);

  return (
    <header className={ isOpen ? "Header open" : "Header" }>
      <MainNav open={ isOpen } toggleBurger={ toggleBurger } />
      <Hamburger open={ isOpen } toggleBurger={ toggleBurger }/>
      <SoundToggler />
    </header>
  );
};

export default Header;