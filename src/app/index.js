//JS scripts
import Typed from 'typed.js';
import 'particles.js';
import 'waypoints/lib/noframework.waypoints';
import smoothScroll from 'smoothscroll';

// DOM elements
import {
    elements
} from './views/base';

// Styles 
import '../styles/scss/main.scss';


// NAVIGATION CONTROLLER

const closeNav = () => {
    elements.nav.classList.remove('open');
    document.body.style.overflowY = 'auto';
}

elements.closeNav.addEventListener('click', () => {
    closeNav();
});

elements.nav_items.forEach( el => {
    el.addEventListener('click', () => {
        closeNav();
        window.scrollTo({
            top: document.querySelector(`${el.dataset.dest}`).offsetTop
        })
        //smoothScroll(document.querySelector(`${el.dataset.dest}`), 1200);
    });
});

// HEADER CONTROLLER

elements.openNav.addEventListener('click', () => {
    elements.nav.classList.add('open');
    document.body.style.overflowY = 'hidden';
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

elements.header_btn.addEventListener('click', () => {
    // window.scrollTo({
    //     top: elements.section_projects.offsetTop
    // })
    smoothScroll(elements.section_projects, 1000);
});

//NAVBAR

// document.addEventListener('DOMContentLoaded', () => {
//    
// })

const removeActive = () => {
    document.querySelectorAll('.navbar__item--active').forEach((el) => {
        el.classList.remove('navbar__item--active');
    })
}

const navbar_wp = new Waypoint({
    element: elements.navbar,
    handler: function (direction) {
        if (direction == 'up') {
            this.element.classList.remove('navbar--sticky');
            elements.section_about.style.marginTop = `0px`;
        } else {
            this.element.classList.add('navbar--sticky');
            elements.section_about.style.marginTop = `60px`;
        }
    }
})

elements.navbar_items.forEach( el => {
    el.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector(`${el.dataset.dest}`).offsetTop
        })
    })
});

// ABOUT
