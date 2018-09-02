//JS scripts
import Typed from 'typed.js';
import 'particles.js';
import 'waypoints/lib/noframework.waypoints';
import smoothScroll from 'smoothscroll';
import Shuffle from 'shufflejs';

import "@babel/polyfill";

// DOM elements
import {
    elements
} from './views/base';

// Styles 
import '../styles/scss/main.scss';

//Models
import Projects from './models/Projects';
import Blogs from './models/Blogs';

//Views
import * as projectsView from './views/projectsView';
import * as blogsView from './views/blogsView';


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
});

elements.sections.forEach(function (sec) {
    new Waypoint({
        element: sec,
        handler: function (dir) {
            const prevWp = this.previous();

            if (dir == 'down') {
                if (prevWp) {
                    document.querySelector(`[data-section="#${prevWp.element.id}"]`).classList.remove('navbar__item--active');
                }
                document.querySelector(`[data-section="#${this.element.id}"]`).classList.add('navbar__item--active');
            } else {
                console.log(dir);
                document.querySelector(`[data-section="#${this.element.id}"]`).classList.remove('navbar__item--active');
                if (prevWp) {
                    document.querySelector(`[data-section="#${prevWp.element.id}"]`).classList.add('navbar__item--active');
                }                
            }          
        },
        group: 'section'
    })
});

// ABOUT


// PROJECTS

const projects = new Projects();

projects.list.forEach(project => {
    projectsView.renderProject(project);
});

const shuffleProject = new Shuffle(elements.projects_container, {
    itemSelector: '.projects__item',
    sizer: '.projects__sizer',
    speed: 700
});

// BLOG


const blogController = async () => {
    const blogs = new Blogs();
    await blogs.getBlogs();

    blogs.posts.forEach(post => {
        blogsView.renderPost(post);
    });
}

/* 
----- EVENT HANDLERS (CLICKS) -------------------------------------- 
*/

// Window before load
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Window Loaded
document.addEventListener('DOMContentLoaded', () => {
    blogController().then(() => {
        // Blog handler
        document.querySelectorAll('.blog__post').forEach(post => {
            post.addEventListener('mouseenter', () => {
                document.querySelectorAll('.blog__post').forEach(p => {
                    if (p != post) {
                        p.classList.add('blog__post--fade');
                    }
                });
                post.classList.add('blog__post--hover');
            });
            post.addEventListener('mouseleave', () => {
                document.querySelectorAll('.blog__post').forEach(p => {
                    if (p != post) {
                        p.classList.remove('blog__post--fade');
                    }
                });
                post.classList.remove('blog__post--hover');
            })
        })
    });
})

// -- Navigation handlers
elements.closeNav.addEventListener('click', () => {
    closeNav();
});

elements.nav_items.forEach(el => {
    el.addEventListener('click', () => {
        closeNav();
        smoothScroll(document.querySelector(`${el.dataset.dest}`), 1200);
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

elements.navbar_items.forEach(el => {
    el.addEventListener('click', () => {
        smoothScroll(document.querySelector(`${el.dataset.section}`), 1200);
    })
});

// Projects handlers

elements.projects_filters.forEach(fil => {
    fil.addEventListener('click', () => {
        projectsView.cleanFilter();
        fil.classList.add('projects__filters--active');
        shuffleProject.filter(fil.dataset.filter);
    })
})

// Contact form

elements.contact_form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (e.target.checkValidity()) {
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            msg: e.target.msg.value
        }

        // Send email
        fetch('https://formspree.io/hello@jotagep.com', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            alertify.success('Success message');
            // Reset form
            this.reset();
        })
    };
});

// Footer handlers

elements.topBtn.addEventListener('click', () => {
    smoothScroll(document.body, 1000);
})