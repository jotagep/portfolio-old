//JS scripts
import Typed from 'typed.js';
import 'particles.js';
import 'waypoints/lib/noframework.waypoints';

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

//NAVBAR

document.addEventListener('DOMContentLoaded', () => {
    //
})

const waypoint = new Waypoint({
    element: elements.navbar,
    handler: function(direction) {
      direction == 'up' ? this.element.classList.remove('navbar--sticky') : this.element.classList.add('navbar--sticky');
    }
})