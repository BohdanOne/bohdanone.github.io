import React, { Suspense, lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSpring, useTransition, animated } from 'react-spring';
import Header from './Header/Header';
const AboutPage = lazy(() => import('./AboutPage/AboutPage'));
const SkillsPage = lazy(() => import('./SkillsPage/SkillsPage'));

export default () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <animated.div className="App" style={ fade }>
{/* TODO loader component */}
      <Suspense fallback={<div>Loading ...</div>}>
        <Header />
          {transitions.map(({ item, props, key }) => (
            <animated.main key={ key } style={ props }>
              <Switch location={ item }>
                <Route exact path="/" component={ AboutPage }/>
                <Route exact path="/skills" component={ SkillsPage }/>
              </Switch>
            </animated.main>
          ))}
      </Suspense>
    </animated.div>
  );
};