import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './pages/Header';
import AboutPage from './pages/AboutPage';

const App = props => {
  return (
    <div className="App">
      <Header />
      <AboutPage sound={ props.sound } />
    </div>
  );
};

const mapStateToProps = state => {
  return { sound: state.sound.isOn };
};

export default connect(mapStateToProps, actions)(App);