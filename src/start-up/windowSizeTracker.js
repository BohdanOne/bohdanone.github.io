export default () => {
  let root = document.documentElement;
  document.addEventListener('DOMContentLoaded', () => {
    root.style.setProperty('--grid-width', `${window.innerWidth/5}px`);
    root.style.setProperty('--grid-height', `${window.innerHeight/9}px`);
    window.onresize = () => {
      root.style.setProperty('--grid-width', `${window.innerWidth/5}px`);
      root.style.setProperty('--grid-height', `${window.innerHeight/9}px`);
    }
  });
}