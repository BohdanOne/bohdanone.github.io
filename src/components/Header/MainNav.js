import React, { useState } from 'react';
import { connect } from 'react-redux';
import NavButton from './NavButton';
import audioSource from '../../assets/sounds/fx.mp3';

const MainNav = props => {
  const [active, setActive] = useState('about');

  const handleClick = e => {
    if (e.target.innerText !== active) {
      if (props.sound) {
        const audio = new Audio(audioSource);
        audio.play();
      }
    }
    setActive(e.target.innerText)
  }
  return (
    <nav className="MainNav">
      <NavButton route="/" text="about" active={ active } onClick={ handleClick }/>
      <NavButton route="/skills" text="skills" active={ active } onClick={ handleClick }/>
      <NavButton route="/projects" text="projects" active={ active } onClick={ handleClick }/>
      <NavButton route="/contact" text="contact" active={ active } onClick={ handleClick }/>
    </nav>
  );
}

const mapStateToProps = state => {
  return { sound: state.sound.isOn};
}

export default connect(mapStateToProps)(MainNav);