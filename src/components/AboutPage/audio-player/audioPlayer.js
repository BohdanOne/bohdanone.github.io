import visualizeAudio from'./visualizeAudio';

export default audioSource => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();
  const audio = new Audio(audioSource);
  const gainNode = ctx.createGain();
  gainNode.gain.value = .5;
  const audioElement = ctx.createMediaElementSource(audio);
  audioElement.connect(gainNode).connect(ctx.destination);
  const analyser = ctx.createAnalyser();
  audioElement.connect(analyser);
  visualizeAudio(analyser);
  return [audio, ctx];
}