import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import noSoundNotification from './audio-player/noSoundNotification';
import audioPlayer from './audio-player/audioPlayer';
import audioSource from '../../assets/sounds/Zouk.mp3';

const AudioTogglingImage = props => {
  const [audio, setAudio] = useState();
  const [ctx, setCtx] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (props.sound) {
      if (!audio) {
        const [audio, ctx] = audioPlayer(audioSource);
        setAudio(audio);
        setCtx(ctx);
      }
      if (isPlaying) {
        ctx.resume();
        audio.play();
      } else {
        audio && audio.pause();
      }
    } else {
      audio && audio.pause();
    }
    return () => audio && audio.pause();
  }, [props.sound, isPlaying, audio, ctx]);

  const onImageInteraction = sound => {
    !sound ? noSoundNotification() : setIsPlaying(!isPlaying);
  };

  return (
    <>
      <img
        className={ props.imgClass }
        src={ props.imgSrc[0] }
        srcSet={ `${props.imgSrc[0]}, ${props.imgSrc[1]} 2x, ${props.imgSrc[2]} 3x` }
        alt={ props.imgAlt }
        onClick={ () => onImageInteraction(props.sound) }
        onKeyPress={ () => onImageInteraction(props.sound) }
        tabIndex="0"
        role="button"
      />
    </>
  );
}

const mapStateToProps = state => { return { sound: state.sound.isOn } };

export default connect(mapStateToProps)(AudioTogglingImage);