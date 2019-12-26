import React from 'react';
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
    if(!this.props.sound && this.state.audio.duration > 0) {
      this.state.audio.pause();
    } else if(this.props.sound && this.state.audio.duration > 0) {
      this.state.audio.play();
    }
  };

  playSound = (ctx, audio) => {
    if (audio.duration === 0 || audio.paused){
      ctx.resume();
      audio.play();
    } else {
      audio.pause();
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
          data-playing="false"
          tabIndex="0"
          role="button"
        />
      </>
    );
  };
};

export default AudioTogglingImage;