import React, { Suspense, lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSpring, useTransition, animated } from 'react-spring';
import Header from './Header/Header';
const AboutPage = lazy(() => import('./AboutPage/AboutPage'));
const SkillsPage = lazy(() => import('./SkillsPage/SkillsPage'));
const ProjectsPage = lazy(() => import('./ProjectsPage/ProjectsPage'));
const ContactPage = lazy(() => import('./ContactPage/ContactPage'));

export default () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-100%)'  }
  });

  return (
    <animated.div className="App" style={ fade }>
{/* TODO loader component */}
      <Suspense fallback={<div>Loading ...</div>}>
{/* ===================== */}
        <Header />
          {transitions.map(({ item, props, key }) => (
            <animated.main key={ key } style={ props }>
              <Switch location={ item }>
                <Route exact path="/" component={ AboutPage }/>
                <Route exact path="/skills" component={ SkillsPage }/>
                <Route exact path="/projects" component={ ProjectsPage }/>
                <Route exact path="/contact" component={ ContactPage }/>
              </Switch>
            </animated.main>
          ))}
      </Suspense>
    </animated.div>
  );
};