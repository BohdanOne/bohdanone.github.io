import React from 'react';

class Player extends React.Component {

  componentDidMount() {
    if(this.props.sound) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.audio = new Audio(this.props.audioSource);
      const audioElement = this.ctx.createMediaElementSource(this.audio);
      audioElement.connect(this.ctx.destination);
      const analyser = this.ctx.createAnalyser();
      audioElement.connect(analyser);
      this.waveform(analyser);
    }
  };

  waveform = analyser => {
    const canvas = document.getElementById('canvas');
    const canvasContext = canvas.getContext('2d');
    canvas.setAttribute('width', window.innerWidth);

    visualize();

    function visualize() {
      let WIDTH = canvas.width;
      let HEIGHT = canvas.height;

      analyser.fftSize = 512;
      const bufferLength = analyser.fftSize;
      const dataArray = new Uint8Array(bufferLength);

      canvasContext.clearRect(0, 0, WIDTH, HEIGHT);

      const draw = function () {
        requestAnimationFrame(draw);
        analyser.getByteTimeDomainData(dataArray);

        canvasContext.fillStyle = 'rgba(255,255,255,.2)';
        canvasContext.fillRect(0, 0, WIDTH, HEIGHT);
        canvasContext.lineWidth = 1;
        canvasContext.strokeStyle = '#ffa600';

        canvasContext.beginPath();

        const sliceWidth = WIDTH / bufferLength;
        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = v * HEIGHT / 2;

          if (i === 0) {
            canvasContext.moveTo(x, y);
          } else {
            canvasContext.lineTo(x, y);
          }

          x += sliceWidth;
        }

        canvasContext.lineTo(canvas.width, canvas.height / 2);
        canvasContext.stroke();
      };

      draw();
   }
  };

  componentDidUpdate() {
    if(!this.props.sound) {
      this.audio.src = '';
      this.audio.load();
    } else {
      this.audio.src = this.props.audioSource;
    }
  };

  noSoundNotification = () => {
    const soundIcon = document.getElementById('soundIcon');
    soundIcon.classList.add('get-attention');
    setTimeout(() => {
      soundIcon.classList.remove('get-attention');
    }, 500);
  };

  onPlayerClick = sound => {
    if(!sound) {
      this.noSoundNotification();
    } else {
      if (this.audio.duration === 0 || this.audio.paused){
        this.ctx.resume();
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  };

  render() {
    return (
      <>
        <img
          id={ this.props.imgId }
          className={ this.props.imgClass }
          src={ this.props.imgSrc[0] }
          srcSet={ `${this.props.imgSrc[0]}, ${this.props.imgSrc[1]} 2x, ${this.props.imgSrc[2]} 3x` }
          alt={ this.props.imgAlt }
          onClick={ () => this.onPlayerClick(this.props.sound) }
          onKeyPress={ () => this.onPlayerClick(this.props.sound) }
          data-playing="false"
          tabIndex="0"
          role="button"
        />
      </>
    );
  };
};

export default Player;