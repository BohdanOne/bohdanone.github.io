import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainNav from './MainNav';
import SoundToggler from './SoundToggler';
import Hamburger from './Hamburger';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBurger = () => setIsOpen(!isOpen);
  const location = useLocation();

  return (
    <header className={ isOpen ? "Header open" : "Header" }>
      <MainNav open={ isOpen } toggleBurger={ toggleBurger } />
      <Hamburger open={ isOpen } toggleBurger={ toggleBurger }/>
      {location.pathname === '/' && <SoundToggler />}
    </header>
  );
};