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


// NAVIGATION 

const closeNav = () => {
    elements.nav.classList.remove('open');
    document.body.style.overflowY = 'auto';
}

// HEADER 

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

// ABOUT


// PROJECTS

const projects = new Projects();

projects.getProjects().forEach( project => {
    projectsView.renderProject(project);
});    

const shuffleProject = new Shuffle(elements.projects_container, {
    itemSelector: '.projects__item',
    sizer: '.projects__sizer',
    speed: 700
});

/* 
----- EVENT HANDLERS (CLICKS) -------------------------------------- 
*/

// -- Navigation handlers
elements.closeNav.addEventListener('click', () => {
    closeNav();
});

elements.nav_items.forEach( el => {
    el.addEventListener('click', () => {
        closeNav();
        window.scrollTo({
            top: document.querySelector(`${el.dataset.dest}`).offsetTop
        })
        
    });
});

// Header handlers
elements.openNav.addEventListener('click', () => {
    elements.nav.classList.add('open');
    document.body.style.overflowY = 'hidden';
})

elements.header_btn.addEventListener('click', () => {
    smoothScroll(elements.section_projects, 1000);
});

// Navbar handlers

elements.navbar_items.forEach( el => {
    el.addEventListener('click', () => {
        smoothScroll(document.querySelector(`${el.dataset.dest}`), 1200);
    })
});

// Projects handlers

elements.projects_filters.forEach( fil => {
    fil.addEventListener('click', () => {
        projectsView.cleanFilter();
        fil.classList.add('projects__filters--active');
        shuffleProject.filter(fil.dataset.filter);
    })
})