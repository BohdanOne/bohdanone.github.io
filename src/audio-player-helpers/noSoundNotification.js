export default () => {
  const soundIcon = document.getElementById('soundIcon');
  soundIcon.classList.add('get-attention');
  setTimeout(() => {
    soundIcon.classList.remove('get-attention');
  }, 500);
};