import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import projectsList from './projects';

const config = { mass: 5, tension: 2000, friction: 350 };

export default () => {
  const [searchTerm, setSearch] = useState('');
  let projects = !searchTerm ? projectsList : projectsList.filter(project => project.technologies.includes(searchTerm));

  const trail = useTrail(projects.length, {
    config,
    opacity: 1,
    x: 0,
    height: 'auto',
    from: { opacity: 0 , x: 500, height: 0},
    delay: 500
  });

  return (
  <section className="ProjectsPage">
    <h2 className="ProjectsPage__heading">Projects</h2>
    <div className="ProjectsPage__filter">
      <label className="ProjectsPage__filter__label">Filter by technology:
        <select
          className="ProjectsPage__filter__select"
          defaultValue={searchTerm}
          onChange={e => setSearch(e.target.value)}
        >
          <option value="HTML5">HTML5</option>
          <option value="CSS3">CSS3</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Node.js">Node.js</option>
          <option value="Express.js">Express.js</option>
          <option value="EJS">EJS</option>
          <option value="MongoDB">MongoDB</option>
          <option value="Bootstrap">Bootstrap</option>
          <option value="SCSS">SCSS</option>
          <option value="React">React</option>
          <option value="Redux">Redux</option>
          <option value="Svelte">Svelte</option>
          <option value="Sapper">Sapper</option>
          <option value="Socket.IO">Socket.IO</option>
          <option value="Webpack">Webpack</option>
        </select>
      </label>
    </div>
    <div className="ProjectsPage__container">
      { trail.map(({x, height, ...rest}, index) => (
        <animated.div
          className="project"
          key={ projects[index].name }
          style={{ ...rest, transform: x.interpolate(x => `translate3d(0, ${x}px, 0)`)}}
        >
          <h3 className="project__title">
            { projects[index].name }
          </h3>
          <img
            className="project__img"
            src={projects[index].imgs[0]}
            srcSet={`${projects[index].imgs[0]} 200w, ${projects[index].imgs[1]} 400w, ${projects[index].imgs[2]} 800w`}
            sizes="(max-width: 300px) 200px, (max-width: 400px) 400px, 800px"
            alt={`${projects[index].name} screenshot`}
          />
          <p className="project__description">
            { projects[index].description }
          </p>
          <p className="project__technologies">
            <span>Built with: </span>{ projects[index].technologies.join(', ') }.
          </p>
          <div className="project__links">
            <a className="project__link" href={ projects[index].demoUrl}>DEMO</a>
            <a className="project__link" href={ projects[index].codeUrl}>CODE</a>
          </div>
          <nav className="project__nav">
            <button
              className="nav__button--back-to-top"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            >BACK TO TOP</button>
          </nav>
        </animated.div>
      ))}
    </div>
  </section>
  );
};