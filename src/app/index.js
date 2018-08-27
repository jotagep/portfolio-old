//JS scripts
import Typed from 'typed.js';
import 'particles.js';

// DOM elements
import { elements } from './views/base';

// Styles 
import '../styles/scss/main.scss';


// NAVIGATION CONTROLLER

elements.closeNav.addEventListener('click', () => {
    elements.nav.classList.remove('open');
});

// HEADER CONTROLLER

elements.openNav.addEventListener('click', () => {
    elements.nav.classList.add('open')
})

const typed = new Typed('#jotagep', {
    showCursor: false,
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    backDelay: 5000,
    strings: ['jotagep', 'Jorge G. Palacin']
});

particlesJS.load('particles', 'assets/particlesjs-config.json', () => {
    console.log('Particle JS - loaded');
})