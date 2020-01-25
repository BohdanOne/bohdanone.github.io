import React from 'react';
import { useTrail, useSpring, animated } from 'react-spring';
import animationConfig from '../utils/animationConfig';
import links from './links';

export default () => {
  const trail = useTrail(links.length, animationConfig);

  return (
    <section className="ContactPage">
      <animated.h2
        className="contact-header"
        style={useSpring(animationConfig)}
      >Let's get in touch!</animated.h2>
      {trail.map(({x, height, ...rest}, index)=>(
        <animated.a
          key={links[index].name}
          href={links[index].href}
          alt={links[index].name}
          className={`contact-icon ${links[index].name}`}
          style={{ ...rest, transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`)}}
        >
          {links[index].svg}
        </animated.a>
      ))}
      <animated.a
        href="/Bohdan-Imiela-resume.pdf"
        className="resume-link"
        style={useSpring(animationConfig)}
      >download my resume</animated.a>
    </section>
  );
};