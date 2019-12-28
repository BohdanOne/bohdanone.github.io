import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import audioSource from '../../assets/sounds/fx.mp3';

class NavButton extends React.Component {
  playSound = sound => {
    if (sound) {
      const audio = new Audio(audioSource);
      audio.play();
    }
  }

  render() {
    return (
      <Link
      to={this.props.route}
      className="nav-button"
      role="button"
      aria-pressed={ this.props.isPressed }
      onClick={ () => this.playSound(this.props.sound) }
      onKeyPress={ () => this.playSound(this.props.sound) }
      >
        {this.props.text}
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return { sound: state.sound.isOn};
}

export default connect(mapStateToProps)(NavButton);