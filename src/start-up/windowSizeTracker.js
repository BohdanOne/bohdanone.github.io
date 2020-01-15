export default () => {
  let root = document.documentElement;
  const setSize = (w, h) => {
    let width = w < 1000 ? w : 1000;
    root.style.setProperty('--grid-width', `${width/5}px`);
    root.style.setProperty('--grid-height', `${h/9}px`);
  }
  document.addEventListener('DOMContentLoaded', () => {
    setSize(window.innerWidth, window.innerHeight);
    window.onresize = () => {
      setSize(window.innerWidth, window.innerHeight);
    }
  });
}