//JS scripts
import Typed from 'typed.js';
import 'particles.js';
import 'waypoints/lib/noframework.waypoints';
import smoothScroll from 'smoothscroll';
import Shuffle from 'shufflejs';

// DOM elements
import { elements } from './views/base';

// Styles 
import '../styles/scss/main.scss';

//Models
import Projects from './models/Projects';

//Views
import * as projectsView from './views/projectsView';


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


// PROJECTS



elements.projects_filters.forEach( el => {
    el.addEventListener('click', () => {
        document.querySelector('.projects__filters--active').classList.remove('projects__filters--active');
        el.classList.add('projects__filters--active');
        shuffleProject.filter(`${el.dataset.filter}`);
    })
})

const projects = new Projects();

projects.getProjects().forEach( project => {
    projectsView.renderProject(project);
});    

const shuffleProject = new Shuffle(elements.projects_container, {
    itemSelector: '.projects__item',
    sizer: '.projects__sizer',
    speed: 700
});