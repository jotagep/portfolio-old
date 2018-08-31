import { elements } from "./base";

const parseTags = (tags) => {
   return tags.map( tag => `"${tag}"`);
}

export const renderProject = (project) => {
    const markup = `
        <figure class="projects__item" data-groups='[${parseTags(project.tags).join(',')}]'>
        <img src=${project.img} alt=${project.title}>
        <figcaption class="projects__item--selected">
            <h4>${project.title}</h4>
            <span>${project.techs}</span>
        </figcaption>
     `
    ;
    
    elements.projects_container.insertAdjacentHTML('beforeend', markup);
}