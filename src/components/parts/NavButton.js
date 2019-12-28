import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <Link
    to={props.route}
    className="nav-button"
    role="button"
    aria-pressed={ props.active === props.text }
    onClick={ props.onClick }
    onKeyPress={ props.onClick }
    >
      {props.text}
    </Link>
  );
}