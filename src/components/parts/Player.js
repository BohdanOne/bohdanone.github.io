import React from 'react';

class Player extends React.Component {
  canPlay = false;

  componentDidMount() {
    if(this.props.sound === 'on') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.audio = new Audio(this.props.audioSource);
      const audioElement = this.ctx.createMediaElementSource(this.audio);
      audioElement.connect(this.ctx.destination);
      this.analyser = this.ctx.createAnalyser();
      audioElement.connect(this.analyser);
      this.waveform(this.analyser);
    }
  };

  waveform = analyser => {
    const canvas = document.getElementById('canvas');
    const canvasContext = canvas.getContext('2d');

    visualize();

    function visualize() {
      let WIDTH = window.innerWidth;
      let HEIGHT = canvas.height;

      analyser.fftSize = 256;
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

        const sliceWidth = WIDTH * 1.5 / bufferLength;
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
      }

      draw();
   }
  };

  componentDidUpdate() {
    this.canPlay = false;
    if(this.props.sound === 'off') {
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
    if(sound === 'off') {
      this.noSoundNotification();
    } else {
      this.canPlay = !this.canPlay;
      if (this.canPlay){
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
        <canvas id="canvas"></canvas>
        <img
          id={ this.props.imgId }
          className={ this.props.imgClass }
          src={ this.props.imgSrc[0] }
          srcSet={ `${this.props.imgSrc[0]}, ${this.props.imgSrc[1]} 2x, ${this.props.imgSrc[2]} 3x` }
          alt={ this.props.imgAlt }
          onClick={ () => this.onPlayerClick(this.props.sound) }
          data-playing="false"
        />
      </>
    );
  };
};

export default Player;