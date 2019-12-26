import visualizeAudio from'./visualizeAudio';

import audioSource from '../assets/sounds/Zouk.mp3';

export default () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();
  const audio = new Audio(audioSource);
  const audioElement = ctx.createMediaElementSource(audio);
  audioElement.connect(ctx.destination);
  const analyser = ctx.createAnalyser();
  audioElement.connect(analyser);
  visualizeAudio(analyser);
  return [audio, ctx];
}