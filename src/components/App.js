import React from 'react';
import Div100vh from 'react-div-100vh';
import Header from './pages/Header';
// import Nav from './pages/Nav';
import AboutPage from './pages/AboutPage';

class App extends React.Component {
  state = { sound: 'on' };

  onSoundChange = () => {
    this.state.sound === 'on' ?
    this.setState({ sound: 'off' }) :
    this.setState({ sound: 'on' });
  };

  render() {
    return (
      <Div100vh>
        <div className="App">
          <Header
            sound={ this.state.sound }
            onSoundChange={ this.onSoundChange }
            />
          <AboutPage sound={ this.state.sound } />
          {/* <Nav /> */}
        </div>
      </Div100vh>
    );
  }
}

export default App;