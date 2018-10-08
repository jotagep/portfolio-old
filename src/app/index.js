//JS scripts
import Typed from 'typed.js';
import 'particles.js';
import ProgressBar from 'progressbar.js';
import 'waypoints/lib/noframework.waypoints';
import smoothScroll from 'smoothscroll';
import toast from 'toastr';
import Shuffle from 'shufflejs';
import {
    tns
} from "tiny-slider/src/tiny-slider";

import "@babel/polyfill";

// DOM elements
import {
    elements
} from './views/base';

// Styles 
import '../styles/scss/main.scss';
import 'toastr/toastr.scss';
import 'tiny-slider/src/tiny-slider.scss';

//Models
import Projects from './models/Projects';
import Blogs from './models/Blogs';

//Views
import * as projectsView from './views/projectsView';
import * as blogsView from './views/blogsView';


// STATE

const state = {};

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

function navbar_wp() {
    new Waypoint({
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
}


function highlightNavbar() {
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
                    document.querySelector(`[data-section="#${this.element.id}"]`).classList.remove('navbar__item--active');
                    if (prevWp) {
                        document.querySelector(`[data-section="#${prevWp.element.id}"]`).classList.add('navbar__item--active');
                    }
                }
            },
            group: 'section',
            offset: 100
        })
    });
}

// ABOUT

function skills_wp () {
    new Waypoint({
        element: document.querySelector('.skills'),
        handler: function () {
            if (!state.loaded) {
                document.querySelectorAll('.skills__contain').forEach( (el, i) => {
                    const fill = parseFloat(el.dataset.fill) / 100.0;
                    const bar = new ProgressBar.Line(el, {
                        color: '#2AA9D2',
                        easing: 'easeInOut',
                        duration: 1000,
                    });
                    setTimeout(() => {
                        bar.animate(fill);
                    }, i*150) 
                });
                state.loaded = true;
            }
        },
        offset: '45%'
    })
}


// PROJECTS

const projectCtrl = () => {
    state.projects = new Projects();

    state.projects.list.forEach((project, i) => {
        projectsView.renderProject(project, i);
    });

    const shuffleProject = new Shuffle(elements.projects_container, {
        itemSelector: '.projects__item',
        speed: 700,
        isCentered: true
    });

    elements.projects_filters.forEach(fil => {
        fil.addEventListener('click', () => {
            projectsView.cleanFilter();
            fil.classList.add('projects__filters--active');
            shuffleProject.filter(fil.dataset.filter);
        })
    })

    document.querySelectorAll('.projects__item').forEach(item => {
        item.addEventListener('click', () => {
            openModal(item.dataset.ind);
            elements.modal.classList.add('modal--open');
        })
    });
}


// BLOG

function blogHandler() {
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
}

const blogController = async () => {
    state.blogs = new Blogs();
    await state.blogs.getBlogs();

    state.blogs.posts.forEach(post => {
        blogsView.renderPost(post);
    });
}

// CONTACTO

// MODAL-PROJECT CONTROLLER

const openModal = (id) => {
    projectsView.renderModal(state.projects.list[id]);

    state.slider = tns({
        container: '.modal__header',
        items: 1,
        controls: false,
        nav: false,
        mousedrag: true,
        autoplay: true,
    });
    document.querySelector('[data-action="stop"]').style.display = 'none';
    document.querySelector('.modal__close').addEventListener('click', () => {
        elements.modal.classList.remove('modal--open');
        document.querySelector('.modal__card').remove();
        state.slider.destroy();
    });
}



/* 
----- EVENT HANDLERS (CLICKS) STATIC ELEMENTS -------------------------------------- 
*/

// Window before load
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Window Loaded
document.addEventListener('DOMContentLoaded', () => {
    navbar_wp();
    skills_wp();
    projectCtrl();
    highlightNavbar();
    blogController().then(() => {
        blogHandler();
        highlightNavbar();
    });
})

// -- Modal handlers
elements.modal_back.addEventListener('click', () => {
    elements.modal.classList.remove('modal--open');
    document.querySelector('.modal__card').remove();
    state.slider.destroy();
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
        if (el.dataset.section != '#section-blog') {
            smoothScroll(document.querySelector(`${el.dataset.section}`), 1200);
        }
        document.querySelector('.navbar__toggler').classList.remove('navbar__toggler--open');
        elements.navbar_collapse.classList.remove('navbar__collapse--open');
    })
});

elements.navbar_btn.addEventListener('click', function () {
    this.classList.toggle('navbar__toggler--open');
    elements.navbar_collapse.classList.toggle('navbar__collapse--open');
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
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            toast.success('Mensaje enviado', 'Contacto', {
                positionClass: "toast-bottom-right"
            });
            // Reset form
            e.target.reset();
        })
    };
});

// Footer handlers

elements.topBtn.addEventListener('click', () => {
    smoothScroll(document.body, 1000);
})