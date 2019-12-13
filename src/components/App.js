import React from 'react';
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
      <div className="App">
        <Header
          sound={ this.state.sound }
          onSoundChange={ this.onSoundChange }
        />
        <AboutPage sound={ this.state.sound } />
        {/* <Nav /> */}
     </div>
    );
  }
}

export default App;