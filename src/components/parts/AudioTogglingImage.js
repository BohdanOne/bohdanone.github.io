import React from 'react';
import { connect } from 'react-redux';
import noSoundNotification from '../../audio-player/noSoundNotification';
import audioPlayer from '../../audio-player/audioPlayer';

class AudioTogglingImage extends React.Component {
  state = {
    audio: null,
    ctx: null,
    isPlaying: false
  };

  componentDidMount() {
    if(this.props.sound) {
      const [audio, ctx] = audioPlayer();
      this.setState({audio, ctx});
    }
  };

  componentDidUpdate() {
    if (this.props.sound && this.state.isPlaying) {
      if (this.state.audio) {
        this.state.ctx.resume();
        this.state.audio.play();
      } else {
        const [audio, ctx] = audioPlayer();
        this.setState({audio, ctx});
      }
    } else {
      this.state.audio && this.state.audio.pause();
    }
  }

  async componentWillUnmount() {
    if(this.state.ctx) {
      await this.state.ctx.suspend();
    }
  }

  playSound = () => this.setState({ isPlaying: ! this.state.isPlaying });

  onImageInteraction = sound => {
    !sound ?
      noSoundNotification() :
      this.playSound();
  }

  render() {
    return (
      <>
        <img
          className={ this.props.imgClass }
          src={ this.props.imgSrc[0] }
          srcSet={ `${this.props.imgSrc[0]}, ${this.props.imgSrc[1]} 2x, ${this.props.imgSrc[2]} 3x` }
          alt={ this.props.imgAlt }
          onClick={ () => this.onImageInteraction(this.props.sound) }
          onKeyPress={ () => this.onImageInteraction(this.props.sound) }
          tabIndex="0"
          role="button"
        />
      </>
    );
  };
};

const mapStateToProps = state => {
  return { sound: state.sound.isOn };
}

export default connect(mapStateToProps)(AudioTogglingImage);