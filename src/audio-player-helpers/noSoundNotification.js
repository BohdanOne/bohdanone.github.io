export default () => {
  const soundIconSVG = document.querySelector('.sound-toggler').querySelector('path');
  const flash = setInterval(() => {
    soundIconSVG.setAttribute('fill','#ffa600');
    setTimeout(() => {
      soundIconSVG.removeAttribute('fill','#ffa600');
    }, 200);
  }, 400);
  setTimeout(() => {
    clearInterval(flash);
  }, 2100);
};