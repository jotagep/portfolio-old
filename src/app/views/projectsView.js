import {
    elements
} from "./base";

const parseTags = (tags) => {
    return tags.map(tag => `"${tag}"`);
}

export const renderProject = (project, i) => {
    const markup = `
        <figure class="projects__item" data-groups='[${parseTags(project.tags).join(',')}]' data-ind=${i}>
        <img src=${project.thumb} alt=${project.title}>
        <figcaption class="projects__item--selected">
            <h4>${project.title}</h4>
            <span>${project.brief}</span>
        </figcaption>
     `;

    elements.projects_container.insertAdjacentHTML('beforeend', markup);
}

export const cleanFilter = () => {
    document.querySelector('.projects__filters--active').classList.remove('projects__filters--active');
}

export const renderModal = (project) => {

    const images = project.imgs.map(img => {
        return `<img src=${img} alt=${project.title}></img>`
    }).join('');

    const techs = project.techs.map(tech => {
        return `<li>${tech}</li>`
    }).join('');



    const markup = `
        <div class="modal__card">
            <div class="modal__header">
                ${images}
            </div>
            <div class="modal__body">
                <div class="modal__close">
                    <i class="fas fa-times"></i>
                </div>
                <h3 class="modal__title">${project.title}</h3>
                <hr>
                <p class="modal__description">${project.description}</p>
                <ul class="modal__techs">
                    ${techs}
                </ul>
                <div class="modal__links">
                    ${project.github ? `<a href=${project.github} class="modal__git"  target="_blank" rel="noopener">
                    Ver codigo <i class="fab fa-github"></i>
                    </a>`:''}

                    ${project.url ? `<a href=${project.url} class="modal__url" target="_blank" rel="noopener">
                    Ver sitio <i class="fas fa-globe-americas"></i>
                </a>`:''}
                </div>
            </div>
        </div>
    `;

    elements.modal.insertAdjacentHTML('beforeend', markup);
}