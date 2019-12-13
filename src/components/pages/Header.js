import React from 'react';
import SoundToggler from '../parts/SoundToggler';
// import Hamburger from '../parts/Hamburger';

class Header extends React.Component {
  onSoundChange = () => {
    this.props.onSoundChange();
  };

  render() {
    return (
      <header className="Header">
        <SoundToggler sound={ this.props.sound } onClick={this.onSoundChange}/>
        {/* <Hamburger /> */}
      </header>
    );
  }
};

export default Header;