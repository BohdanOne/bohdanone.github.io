import vinylS from '../../assets/images/vinyl-store-200.png';
import vinylM from '../../assets/images/vinyl-store-400.png';
import vinylL from '../../assets/images/vinyl-store-800.png';
import gibberS from '../../assets/images/gibber-200.png';
import gibberM from '../../assets/images/gibber-400.png';
import gibberL from '../../assets/images/gibber-800.png';

const projects = [
  {
    name: 'Vinyl Store',
    description: 'Application wich lets you browse, add and comment your favorite record stores.',
    imgs: [ vinylS, vinylM, vinylL ],
    technologies: 'MongoDB, Express.js, Node.js, EJS, Bootstrap',
    demoUrl: 'https://vinyl-store.herokuapp.com/',
    codeUrl: 'https://github.com/BohdanOne/vinyl-store'
  },
  {
    name: '! gibber',
    description: 'Minimal Chat App.',
    imgs: [ gibberS, gibberM, gibberL ],
    technologies: 'Svelte, Sapper, Socket.IO',
    demoUrl: 'https://giber-chat.herokuapp.com/',
    codeUrl: 'https://github.com/BohdanOne/gibber'
  }
];

export default projects;