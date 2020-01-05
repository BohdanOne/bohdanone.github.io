import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SoundToggler = props => {
  const toggleSound = () => props.toggleSound();

  const renderButton = () => {
    if (props.sound) {
      return (
        <button onClick={toggleSound} role="switch" aria-checked="true" >
          <svg className="icon sound-toggler" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3.59375L15.2812 5.28125L9.5625 11H5V21H9.5625L15.2812 26.7188L17 28.4062V3.59375ZM23.8125 8.1875L22.4062 9.59375C25.9258 13.1133 25.9258 18.7617 22.4062 22.2812L23.8125 23.7188C28.0938 19.4375 28.0938 12.4688 23.8125 8.1875ZM15 8.4375V23.5625L10.7188 19.2812L10.4062 19H7V13H10.4062L10.7188 12.7188L15 8.4375ZM20.9062 11.0938L19.5 12.5C21.4102 14.4102 21.4023 17.5742 19.4688 19.5938L20.9375 21C23.6016 18.2188 23.5938 13.7812 20.9062 11.0938Z" />
          </svg>
        </button>
      );
    } else {
      return (
        <button onClick={toggleSound} role="switch" aria-checked="false">
          <svg className="icon sound-toggler" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 4.59375L13.2812 6.28125L8.5625 11H4V21H8.5625L13.2812 25.7188L15 27.4062V4.59375ZM13 9.4375V22.5625L9.71875 19.2812L9.40625 19H6V13H9.40625L9.71875 12.7188L13 9.4375ZM20.2188 11.7812L18.7812 13.2188L21.5625 16L18.7812 18.7812L20.2188 20.2188L23 17.4375L25.7812 20.2188L27.2188 18.7812L24.4375 16L27.2188 13.2188L25.7812 11.7812L23 14.5625L20.2188 11.7812Z" />
          </svg>
        </button>
      );
    }
  };

  return renderButton();
};

const mapStateToProps = state => {
  return { sound: state.sound.isOn };
};

export default connect(mapStateToProps, actions)(SoundToggler);