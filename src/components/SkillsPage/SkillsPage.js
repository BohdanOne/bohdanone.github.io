import React from 'react';
import { useTrail, useSpring, animated } from 'react-spring';
import paragraphs from './paragraphs';

const config = { mass: 5, tension: 2000, friction: 350 };

export default () => {
  const trail = useTrail(paragraphs.length, {
    config,
    opacity: 1,
    x: 0,
    height: 'auto',
    from: { opacity: 0 , x: 800, height: 0},
    delay: 500
  });

  return (
    <section className="SkillsPage">
      <animated.h2
        className="skills-header"
        style={useSpring({config, from: {opacity: 0}, opacity: 1, delay: 600})}
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
      </div>
    </section>
  );
};