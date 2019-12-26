import React from 'react';
import { connect } from 'react-redux';
import noSoundNotification from '../../audio-player/noSoundNotification';
import audioPlayer from '../../audio-player/audioPlayer';

class AudioTogglingImage extends React.Component {
  state = {
    audio: null,
    ctx: null
  };

  componentDidMount() {
    if(this.props.sound) {
      const [audio, ctx] = audioPlayer();
      this.setState({audio, ctx});
    }
  };

  componentDidUpdate() {
    if (this.state.audio) {
      if(!this.props.sound && this.state.audio.duration > 0) {
        this.state.audio.pause();
      } else if (this.props.sound && this.state.audio.duration > 0) {
        this.state.audio.play();
      }
    }
  };

  async componentWillUnmount() {
    if(this.state.ctx) {
      await this.state.ctx.suspend();
    }
  }

  playSound = (ctx, audio) => {
    if(audio) {
      if (audio.duration === 0 || audio.paused) {
        ctx.resume();
        audio.play();
      } else {
        audio.pause();
      }
    }
  ;}

  onImageInteraction = sound => !sound ?noSoundNotification() : this.playSound(this.state.ctx, this.state.audio);

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