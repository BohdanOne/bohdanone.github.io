export default analyser => {
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

    function draw() {
      requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);

      canvasContext.fillStyle = 'rgba(255,255,255,0.1)';
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