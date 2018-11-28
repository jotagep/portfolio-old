export default class Projects {
    constructor() {
        this.list = [{
                title: 'Forkify',
                brief: 'JavaScript ES6',
                description: 'Forkify es una aplicación que te muestra diferentes recetas y los ingredientes que las componen. Las datos provienen de la API de <b>food2Fork.com</b>',
                thumb: 'assets/img/projects/fork.png',
                techs: ['JS', 'ES6', 'REST API', 'Webpack'],
                imgs: ['assets/img/projects/fork_1.png', 'assets/img/projects/fork_2.png'],
                tags: ['JS'],
                url: 'https://jgforkify.netlify.com/',
                github: 'https://github.com/jotagep/forkify'
            },
            {
                title: 'Restaurant Reviews',
                brief: 'JavaScript + Service Worker',
                description: 'Esta aplicación se trata del proyecto final del curso de especialista en desarrollo web movil impartido por <b>Google</b> y <b>Udacity</b>. Consiste en la creación de una <b>PWA</b>, siguiendo las buenas practicas para optimizar la performance',
                techs: ['JS', 'Service Worker', 'PWA', 'REST API'],
                imgs: ['assets/img/projects/rest_1.png', 'assets/img/projects/rest_2.png'],
                thumb: 'assets/img/projects/rest.png',
                tags: ['JS'],
                github: 'https://github.com/jotagep/mws-restaurant-udacity'
            },
            {
                title: 'Pixel Drawer',
                brief: 'React 16.6',
                description: 'Esta aplicación nos permite hacer pixel art de la manera más sencilla e intuitiva posible. Cambia el grid a tu gusto y descarga tu dibujo final',
                techs: ['React', 'Javascript', 'CSS3'],
                imgs: ['assets/img/projects/react_pixel_1.png', 'assets/img/projects/react_pixel_2.png'],
                thumb: 'assets/img/projects/react_pixel.png',
                tags: ['REACT'],
                github: 'https://github.com/jotagep/PixelDrawer',
                url: 'https://jotagep.github.io/PixelDrawer/'
            },
            {
                title: 'ChatBase',
                brief: 'Angular + Firebase',
                description: 'Un <b>chat</b> completo en tiempo real. También tiene sistema de registro y login gestionado por la autentificación de <b>Firebase</b>',
                techs: ['CSS3', 'Angular', 'Firebase'],
                imgs: ['assets/img/projects/chat_1.png', 'assets/img/projects/chat_2.png', 'assets/img/projects/chat_3.png'],
                thumb: 'assets/img/projects/chat.png',
                tags: ['ANGULAR'],
                github: 'https://github.com/jotagep/chatBase',
                url: 'https://chatbase-bd38b.firebaseapp.com/'
            },
            {
                title: 'Weather App',
                brief: 'Ionic + REST API',
                description: 'Apliación multiplataforma desarrollada en <b>Ionic</b>. Recibe los datos de la API de <b>wunderground.com</b> y muestra el tiempo en esa zona',
                techs: ['Ionic 3', 'Angular', 'REST API', 'TypeScript'],
                imgs: ['assets/img/projects/weather_1.png', 'assets/img/projects/weather_2.png'],
                thumb: 'assets/img/projects/weather.png',
                tags: ['IONIC'],
                github: 'https://github.com/jotagep/WeatherApp'
            },
            {
                title: 'eManagement Sport',
                brief: 'Bootstrap + jQuery',
                description: 'Un landing page <b>responsive</b> dedicado a una agencia de representación de jugadores de eSports. Utilizando el framework de diseño bootstrap para el layout del sitio.',
                techs: ['Responsive Design', 'jQuery', 'CSS3', 'Bootstrap'],
                imgs: ['assets/img/projects/esport_1.png', 'assets/img/projects/esport_2.png'],
                thumb: 'assets/img/projects/esport.png',
                tags: ['JS'],
                url: 'http://www.emanagementsport.com/'
            }
        ]
    }
}