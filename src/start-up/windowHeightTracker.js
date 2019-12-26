export default root => {
    document.addEventListener('DOMContentLoaded', () => {
      root.style.setProperty('height', `${window.innerHeight}px`);
      window.onresize = () => {
        root.style.setProperty('height', `${window.innerHeight}px`);
      }
    });
  }