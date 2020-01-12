import React, { useState } from 'react';
import { connect } from 'react-redux';
import NavButton from './NavButton';
import audioSource from '../../assets/sounds/fx.mp3';

const MainNav = props => {
  const [activeButton, setActiveButton] = useState('about');

  const handleClick = e => {
    if (e.target.innerText !== activeButton) {
      props.toggleBurger();
      if (props.sound) {
        const audio = new Audio(audioSource);
        audio.play();
      }
    }
    setActiveButton(e.target.innerText)
  }
  return (
    <nav className={ props.open ? "MainNav open": "MainNav" }>
      <NavButton route="/" text="about" active={ activeButton } onClick={ handleClick }/>
      <NavButton route="/skills" text="skills" active={ activeButton } onClick={ handleClick }/>
      <NavButton route="/projects" text="projects" active={ activeButton } onClick={ handleClick }/>
      <NavButton route="/contact" text="contact" active={ activeButton } onClick={ handleClick }/>
    </nav>
  );
}

const mapStateToProps = state => {
  return { sound: state.sound.isOn };
}

export default connect(mapStateToProps)(MainNav);