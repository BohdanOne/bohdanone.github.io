import React, { useState } from 'react';
import { useTrail, animated, useSpring } from 'react-spring';
import projectsList from './projects';
import BackToTopButton from '../utils/BackToTopButton';
import animationConfig from '../utils/animationConfig';

export default () => {
  const [searchTerm, setSearch] = useState('');

  let projects = !searchTerm
    ? projectsList
    : projectsList.filter(project => project.technologies.includes(searchTerm));

  const trail = useTrail(projects.length, animationConfig);

  return (
    <section className='projects-page'>
      <animated.h2 className='title' style={useSpring(animationConfig)}>
        Projects
      </animated.h2>
      <animated.div className='filter' style={useSpring(animationConfig)}>
        <label className='filter__label'>
          Filter by technology:
          <select
            className='filter__select'
            defaultValue={searchTerm}
            onChange={e => setSearch(e.target.value)}
          >
            <option value='HTML5'>HTML5</option>
            <option value='CSS3'>CSS3</option>
            <option value='JavaScript'>JavaScript</option>
            <option value='Node.js'>Node.js</option>
            <option value='Express.js'>Express.js</option>
            <option value='EJS'>EJS</option>
            <option value='MongoDB'>MongoDB</option>
            <option value='Bootstrap'>Bootstrap</option>
            <option value='SASS'>SASS</option>
            <option value='React'>React</option>
            <option value='Redux'>Redux</option>
            <option value='Svelte'>Svelte</option>
            <option value='Sapper'>Sapper</option>
            <option value='Socket.IO'>Socket.IO</option>
            <option value='Webpack'>Webpack</option>
            <option value='TypeScript'>TypeScript</option>
          </select>
        </label>
      </animated.div>
      <div className='projects-container'>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            className='project'
            key={projects[index].name}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`)
            }}
          >
            <h3 className='project__title'>{projects[index].name}</h3>
            <picture className='project__picture'>
              <source srcSet={`${projects[index].imgs[3]}`} media="(max-width: 200px)" type='image/webp'/>
              <source srcSet={`${projects[index].imgs[4]}`} media="(min-width: 201px) and (max-width: 400px)" type='image/webp'/>
              <source srcSet={`${projects[index].imgs[5]}`} media="(min-width: 401px)" type='image/webp'/>
              <source srcSet={`${projects[index].imgs[0]}`} media="(max-width: 200px)" />
              <source srcSet={`${projects[index].imgs[1]}`} media="(min-width: 201px) and (max-width: 400px)" />
              <source srcSet={`${projects[index].imgs[2]}`} media="(min-width: 401px)" />
              <img
                className='project__img'
                src={projects[index].imgs[0]}
                alt={`${projects[index].name} screenshot`}
              />
            </picture>
            <p className='project__description'>
              {projects[index].description}
            </p>
            <p className='project__technologies'>
              <span>Built with: </span>
              {projects[index].technologies.join(', ')}.
            </p>
            <div className='project__links'>
              <a className='project__link' href={projects[index].demoUrl}>
                DEMO
              </a>
              <a className='project__link' href={projects[index].codeUrl}>
                CODE
              </a>
            </div>
            <nav className='project__nav'>
              <BackToTopButton />
            </nav>
          </animated.div>
        ))}
      </div>
    </section>
  );
};
