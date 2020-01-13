import React from 'react';
import { useSpring, animated } from 'react-spring';
import AudioTogglingImage from './AudioTogglingImage';

import drummer from '../../assets/images/drummer.png';
import drummer2x from '../../assets/images/drummer@2x.png';
import drummer3x from '../../assets/images/drummer@3x.png';

export default () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateX(200%) rotate(-30deg)' },
    to: { opacity: 1, transform: 'translateX(0%) rotate(15deg)' },
    delay: 3000
  });

  return (
      <section className="AboutPage">
        <canvas id="canvas"></canvas>

        <h2 className="hi">Hi!</h2>
        <h3 className="bohdan">My name is Bohdan</h3>

        <AudioTogglingImage
          imgClass="drummer"
          imgSrc={ [drummer, drummer2x, drummer3x] }
          imgAlt="Bohdan Imiela play drums"
        />

        <p className="play-drums">I play drums...</p>
        <animated.p style={ fadeIn } className="click-to-listen">
          <span role="img" aria-label="Backhand Index Pointing Left">👈 </span>
          click to listen
          <span role="img" aria-label="Drum"> 🥁</span>
        </animated.p>
        <p className="gh-link"><a href="https://github.com/BohdanOne">...and I build apps.</a></p>
      </section>
  );
};