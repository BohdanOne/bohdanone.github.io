import vinylS from '../../assets/images/vinyl-store-200.png';
import vinylM from '../../assets/images/vinyl-store-400.png';
import vinylL from '../../assets/images/vinyl-store-800.png';
import gibberS from '../../assets/images/gibber-200.png';
import gibberM from '../../assets/images/gibber-400.png';
import gibberL from '../../assets/images/gibber-800.png';
import tempomatS from '../../assets/images/tempomat-200.png';
import tempomatM from '../../assets/images/tempomat-400.png';
import tempomatL from '../../assets/images/tempomat-800.png';
import simple808S from '../../assets/images/simple808-200.png';
import simple808M from '../../assets/images/simple808-400.png';
import simple808L from '../../assets/images/simple808-800.png';
import weatherS from '../../assets/images/weather-200.png';
import weatherM from '../../assets/images/weather-400.png';
import weatherL from '../../assets/images/weather-800.png';
import portfolioS from '../../assets/images/portfolio-200.png';
import portfolioM from '../../assets/images/portfolio-400.png';
import portfolioL from '../../assets/images/portfolio-800.png';
import productlyS from '../../assets/images/productly-200.png';
import productlyM from '../../assets/images/productly-400.png';
import productlyL from '../../assets/images/productly-800.png';
import caheeS from '../../assets/images/cahee-200.png';
import caheeM from '../../assets/images/cahee-400.png';
import caheeL from '../../assets/images/cahee-800.png';
import wtwS from '../../assets/images/wtw-200.png';
import wtwM from '../../assets/images/wtw-400.png';
import wtwL from '../../assets/images/wtw-800.png';

const projects = [
  {
    name: 'What\'s the Weather v2',
    description: 'Remake of my weather APP. User can check actual weather and forecasts for current or chosen location. App settings allow to choose 2 languages: polish and english; and 2 modes: light and dark. It\'s my first project with TypeScript. Project contains server which formats data incoming from external APIs.',
    imgs: [ wtwS, wtwM, wtwL ],
    technologies: ['React', 'SASS', 'JavaScript', 'CSS3', 'HTML5', 'TypeScript', 'Node.js', 'Express.js'],
    demoUrl: 'https://bohdanone.github.io/whats-the-weather-v2/',
    codeUrl: 'https://github.com/BohdanOne/whats-the-weather-v2'
  },
  {
    name: 'Portfolio Page',
    description: 'My personal developer portfolio page. In the project I try to explore and learn modern features of React (e.g Hooks) and Redux. I also make use of react-related libraries: react-router, react-spring. App includes my first experiments with Web Audio API. Page still under development - more features on the way!',
    imgs: [ portfolioS, portfolioM, portfolioL ],
    technologies: ['React', 'Redux', 'SASS', 'JavaScript', 'CSS3', 'HTML5'],
    demoUrl: 'https://bohdanone.github.io/',
    codeUrl: 'https://github.com/BohdanOne/bohdanone.github.io'
  },
  {
    name: 'Vinyl Store',
    description: 'Application for all music lovers. Guest user can browse collection of record stores (each entry has info, rating, location on google maps, opening hours and reviews). Registered user can edit or remove own profile; see other users profiles; add, edit and delete stores; add, edit and delete reviews. When building this app, my goal was to make full-stack app with implementation of REST API. Demo hosted on Heroku - might take few seconds to load!',
    imgs: [ vinylS, vinylM, vinylL ],
    technologies: ['MongoDB', 'Express.js', 'Node.js', 'EJS', 'Bootstrap', 'JavaScript', 'CSS3', 'HTML5'],
    demoUrl: 'https://vinyl-store.herokuapp.com/',
    codeUrl: 'https://github.com/BohdanOne/vinyl-store'
  },
  {
    name: '! gibber',
    description: 'Minimal Chat App. My first experiments with Sapper and with Socket.IO. Demo hosted on Heroku - might take few seconds to load. App still under development - more features on the way!',
    imgs: [ gibberS, gibberM, gibberL ],
    technologies: ['Svelte', 'Sapper', 'Socket.IO', 'JavaScript', 'CSS3', 'HTML5'],
    demoUrl: 'https://gibber-chat.herokuapp.com/',
    codeUrl: 'https://github.com/BohdanOne/gibber'
  },
  {
    name: 'Tempomat',
    description: 'Tool for musicians. Convert BPM (beats-per-minute) to Millisceconds. App also display italian tempo markings name for given BPM. By default it uses quarter note subdivision, but user can also choose other subdivisions. This is my first application written in Svelte.',
    imgs: [ tempomatS, tempomatM, tempomatL ],
    technologies: ['Svelte', 'JavaScript', 'CSS3', 'HTML5'],
    demoUrl: 'https://bohdanone.github.io/tempomat',
    codeUrl: 'https://github.com/BohdanOne/tempomat'
  },
  {
    name: "What's the Weather",
    description: 'User can check actual weather condition or forecasts fetched from AccuWeather API. If user allow geolocation then app will determine his location using browsers Geolocation API. If geolocation is not allowed (or user wants to check weather for other place) there is also text search option. App built to practice connecting to external API and inserting fetched data in the DOM with Vanilla JS. It was also my first experiment with Geolocation API.',
    imgs: [ weatherS, weatherM, weatherL ],
    technologies: ['JavaScript', 'CSS3', 'HTML5', 'SASS', 'Webpack'],
    demoUrl: 'https://bohdanone.github.io/whatstheweather',
    codeUrl: 'https://github.com/BohdanOne/whatstheweather'
  },
  {
    name: 'Simple 808',
    description: 'Drum machine with loaded sound of legendary TR-808. You can play using keyboard or pressing pads on the screen. Built for fun to practice interactions with DOM elements in Vanilla Java Script.',
    imgs: [ simple808S, simple808M, simple808L ],
    technologies: ['JavaScript', 'CSS3', 'HTML5'],
    demoUrl: 'https://bohdanone.github.io/simple808',
    codeUrl: 'https://github.com/BohdanOne/simple808'
  },
  {
    name: 'Productly',
    description: 'Landing Page created in pure HTML and CSS. Based on free design found at dribbble.com.',
    imgs: [ productlyS, productlyM, productlyL ],
    technologies: ['Webpack', 'SASS', 'CSS3', 'HTML5'],
    demoUrl: 'https://bohdanone.github.io/productly',
    codeUrl: 'https://github.com/BohdanOne/productly'
  },
  {
    name: 'Cahee',
    description: 'Landing Page created to practice psd to html coding. Based on free design from Weekly Webdev Challenge facebook group.',
    imgs: [ caheeS, caheeM, caheeL ],
    technologies: ['Webpack', 'JavaScript', 'SASS', 'CSS3', 'Bootstrap', 'HTML5'],
    demoUrl: 'https://bohdanone.github.io/cahee/',
    codeUrl: 'https://github.com/BohdanOne/cahee'
  }
];

export default projects;