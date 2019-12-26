import React from 'react';
import { Link } from 'react-router-dom';

class NavButton extends React.Component {

  render() {
    return (
      <Link
      to={this.props.route}
      className="nav-button"
      role="button"
      aria-pressed={ this.props.isPressed }
      >
        {this.props.text}
      </Link>
    );
  }
}

export default NavButton;