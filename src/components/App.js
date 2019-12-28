import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import * as actions from '../actions';
import Header from './Header/Header';
const AboutPage = lazy(() => import('./AboutPage/AboutPage'));
const SkillsPage = lazy(() => import('./SkillsPage/SkillsPage'));

const App = props => {
  return (
    <Router>
      <div className="App">
{/* TODO loader component */}
        <Suspense fallback={<div>Loading ...</div>}>
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route
                exact path="/"
                component={ AboutPage }
                />
              <Route path="/skills" component={ SkillsPage }/>
            </Switch>
          </AnimatePresence>
        </Suspense>
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return { sound: state.sound.isOn };
};

export default connect(mapStateToProps, actions)(App);