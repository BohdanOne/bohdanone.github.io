import React from 'react';
import NavButton from './NavButton';
import { useLocation } from 'react-router-dom';

export default props => {
  const location = useLocation();

  const determineActiveButton = () => {
    if (location.pathname === '/') {
      return 'about';
    } else {
      return `${ location.pathname }`.slice(1);
    }
  };

  let active = determineActiveButton();

  const handleClick = () => {
      if (props.open) props.toggleBurger();
  };

  return (
    <nav className={ props.open ? "MainNav open": "MainNav" } aria-expanded={ props.open }>
      <NavButton route="/" text="about" active={ active } onClick={ handleClick }/>
      <NavButton route="/skills" text="skills" active={ active } onClick={ handleClick }/>
      <NavButton route="/projects" text="projects" active={ active } onClick={ handleClick }/>
      <NavButton route="/contact" text="contact" active={ active } onClick={ handleClick }/>
    </nav>
  );
}

