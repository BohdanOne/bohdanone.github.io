import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';

const paragraphs = [
  `I strive to deliver clean and user-friendly apps which are also up-to-date with fresh trends.`,
  `All my designs are build using Figma. For additional image processing I use GIMP.`,
  `My websites and apps are build on foundation of meaningful and accessible HTML. I try to explore all the possibilities that modern HTML5 provides. Layouts are build using all modern features of CSS3 like Flexbox or Grid. I’m familiar with SCSS and frameworks like Bootstrap and Semantic UI.<br/>
  Frontend logic of my apps is based on modern JavaScript (ES6 and beyond). Beside writing in Vanilla JS I keep exploring possibilities of React (also expanded with Redux). Recently I’m also getting acquainted with Svelte.js.`,
  `Backend of my apps is written in Node.js with Express framework. My database of choice is MongoDB. During development process I’m using tools such as Webpack and Babel. Of course all my projects are build with Git, remote repositiories are stored at GitHub.`,
  `I speak Polish, English and also a bit of Portuguese.<br/>
  I love to learn new things and make things work!`
];

const config = { mass: 5, tension: 2000, friction: 200 };

export default () => {
  const [toggle, set] = useState(true);
  const trail = useTrail(paragraphs.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 'auto' : 0,
    from: { opacity: 0 , x: 20, height: 0}
  });

  return (
    <section className="SkillsPage">
      <h2 className="skills-header">My skills</h2>
      <div className="skills">
        {trail.map(({x, height, ...rest}, index)=>(
          <animated.div
            key={paragraphs[index]}
            className='trails-p'
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`)}}
          >
            <animated.p style={{ height}}>{paragraphs[index]}</animated.p>
          </animated.div>
        ))}
      </div>
    </section>
  );
};