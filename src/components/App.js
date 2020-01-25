import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
const AboutPage = lazy(() => import('./AboutPage/AboutPage'));
const SkillsPage = lazy(() => import('./SkillsPage/SkillsPage'));
const ProjectsPage = lazy(() => import('./ProjectsPage/ProjectsPage'));
const ContactPage = lazy(() => import('./ContactPage/ContactPage'));

export default () => {
  return (
    <div className="App">
      <Header />
{/* TODO loader component */}
      <Suspense fallback={<div>Loading ...</div>}>
{/* ===================== */}
        <main>
          <Switch >
            <Route exact path="/" component={ AboutPage }/>
            <Route exact path="/skills" component={ SkillsPage }/>
            <Route exact path="/projects" component={ ProjectsPage }/>
            <Route exact path="/contact" component={ ContactPage }/>
          </Switch>
        </main>
      </Suspense>
    </div>
  );
};