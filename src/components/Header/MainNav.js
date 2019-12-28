import React from 'react';
import { connect } from 'react-redux';
import NavButton from './NavButton';
import audioSource from '../../assets/sounds/fx.mp3';

class MainNav extends React.Component {
  state = { active: 'about' };

  handleClick = e => {
    if (e.target.innerText !== this.state.active) {
      if (this.props.sound) {
        const audio = new Audio(audioSource);
        audio.play();
      }
      this.setState({ active: e.target.innerText });
    }
  }

  render() {
    return (
      <nav>
        <NavButton route="/" text="about" active={ this.state.active } onClick={this.handleClick}/>
        <NavButton route="/skills" text="skills" active={ this.state.active } onClick={this.handleClick}/>

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

const mapStateToProps = state => {
  return { sound: state.sound.isOn};
}

export default connect(mapStateToProps)(MainNav);