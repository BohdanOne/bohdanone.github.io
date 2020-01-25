import React from 'react';
import { useTrail, useSpring, animated } from 'react-spring';
import paragraphs from './paragraphs';
import BackToTopButton from '../utils/BackToTopButton';
import animationConfig from '../utils/animationConfig';

export default () => {
  const trail = useTrail(paragraphs.length, animationConfig);

  return (
    <section className="SkillsPage">
      <animated.h2
        className="skills-header"
        style={useSpring(animationConfig)}
      >
        My skills
      </animated.h2>
      <div className="skills">
        {trail.map(({x, height, ...rest}, index)=>(
          <animated.div
            key={paragraphs[index]}
            className='trails-p'
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`)}}
          >
            <animated.p>{paragraphs[index]}</animated.p>
          </animated.div>
        ))}
        <BackToTopButton />
      </div>
    </section>
  );
};