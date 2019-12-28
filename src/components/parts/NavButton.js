import React from 'react';
import { Link } from 'react-router-dom';

class NavButton extends React.Component {
  playSound = () => {
    console.log('BIP')
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

export default NavButton;