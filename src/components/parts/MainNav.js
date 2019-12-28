import React from 'react';
import NavButton from './NavButton';

class MainNav extends React.Component {
  render() {
    return (
      <nav>
        <NavButton route="/" text="about" isPressed="true" />
        <NavButton route="/skills" text="skills" isPressed="false"/>

        {/* <button className="nav-button" aria-pressed="false">
          projects
          </button>
          <button className="nav-button" aria-pressed="false">
          contact
        </button> */}
      </nav>
    );
  }
}

export default MainNav;