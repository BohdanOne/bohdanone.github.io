import React from 'react';
import Player from '../parts/Player';

import drummer from '../../assets/images/drummer.png';
import drummer2x from '../../assets/images/drummer@2x.png';
import drummer3x from '../../assets/images/drummer@3x.png';
import zouk from '../../assets/sounds/Zouk.mp3';

const AboutPage = props => {
  return (
    <section className="AboutPage">
      <div className="slide">
        <h1 className="main-header">
          <span className="hi">Hi!</span>
          <span className="bohdan">I'm Bohdan</span>
        </h1>
        <h2 className="sub-header">
          <span className="play-drums">I play drums...</span>
          <span className="click-me">
            <span role="img" aria-label="Backhand Index Pointing Left">👈 </span>
            click me to listen
            <span role="img" aria-label="Drum"> 🥁</span>
          </span>
          <span className="make-apps"><a href="https://github.com/BohdanOne">...and make apps!</a></span>
        </h2>
        <Player
          sound={ props.sound }
          audioSource={ zouk }
          imgId="drummer"
          imgClass="drummer"
          imgSrc={ [drummer, drummer2x, drummer3x] }
          imgAlt="Bohdan Imiela play drums"
        />
        <p className="disclaimer">
          Site under developement. Come back soon!
        </p>
      </div>
    </section>
  );
};

export default AboutPage;