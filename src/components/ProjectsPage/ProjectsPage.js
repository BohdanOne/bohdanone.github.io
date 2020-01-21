import React from 'react';
import { useTrail, animated } from 'react-spring';
import projects from './projects';

const config = { mass: 5, tension: 2000, friction: 350 };

export default () => {
  const trail = useTrail(projects.length, {
    config,
    opacity: 1,
    x: 0,
    height: 'auto',
    from: { opacity: 0 , x: 800, height: 0},
    delay: 500
  });

  return (
  <section className="ProjectsPage">
    <h2 className="ProjectsPage__heading">Projects</h2>
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
            src={projects[index].imgs[0]}
            srcSet={`${projects[index].imgs[0]} 200w, ${projects[index].imgs[1]} 400w, ${projects[index].imgs[2]} 800w`}
            sizes="(max-width: 450px) 200px, (max-width: 800px) 400px, 800px"
            alt={`${projects[index].name} screenshot`}
          />
          <p className="project__description">
            { projects[index].description }
            <br/>
            <span>Technologies: </span>{ projects[index].technologies }
          </p>
          <p className="project__links">
            <a className="project__link" href={ projects[index].demoUrl}>DEMO</a>
            <a className="project__link" href={ projects[index].codeUrl}>CODE</a>
          </p>
          <hr/>
        </animated.div>
      ))}
    </div>
    {/* <div className="temporary-info">
      <h3>Site under development</h3>
      <p>Come back soon.<br/>
        In the meantime you can visit my GitHub profile
      </p>
      <a href="https://github.com/BohdanOne" className="contact-icon github" alt="github link">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8C18.7422 8 8 18.7422 8 32C8 42.6016 14.875 51.6016 24.4141 54.7734C25.6172 54.9922 26.0547 54.2578 26.0547 53.6172C26.0547 53.0469 26.0312 51.5391 26.0234 49.5391C19.3437 50.9844 17.9375 46.3203 17.9375 46.3203C16.8438 43.5469 15.2734 42.8047 15.2734 42.8047C13.0938 41.3203 15.4375 41.3516 15.4375 41.3516C17.8438 41.5234 19.1094 43.8203 19.1094 43.8203C21.25 47.4922 24.7266 46.4297 26.0938 45.8203C26.3125 44.2656 26.9375 43.2109 27.6172 42.6094C22.2891 42.0078 16.6875 39.9453 16.6875 30.75C16.6875 28.125 17.625 25.9844 19.1562 24.3047C18.9141 23.7031 18.0859 21.2578 19.3906 17.9531C19.3906 17.9531 21.4062 17.3125 25.9922 20.4141C27.9062 19.8828 29.9609 19.6172 32 19.6094C34.0391 19.6172 36.0938 19.8828 38.0078 20.4141C42.5938 17.3125 44.6016 17.9531 44.6016 17.9531C45.9141 21.2578 45.0938 23.7031 44.8438 24.3047C46.3828 25.9844 47.3047 28.125 47.3047 30.75C47.3047 39.9688 41.6953 41.9922 36.3516 42.5938C37.2109 43.3281 37.9766 44.7969 37.9766 47.0312C37.9766 50.2422 37.9531 52.8281 37.9531 53.6172C37.9531 54.2578 38.3828 55.0078 39.6016 54.7734C49.1328 51.5937 56 42.6016 56 32C56 18.7422 45.2578 8 32 8Z" />
        </svg>
      </a>
    </div> */}
  </section>
  );
};