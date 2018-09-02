import { elements } from "./base";
import { url_blog } from '../config';
import moment from 'moment';

const parseDate = (date) => {
    return moment(date).format('DD/MM/YYYY');
}

export const renderPost = (post) => {
    const markup = `
        <div class="col-1-of-3">
            <a class="blog__post" href="${url_blog}${post.url}" target="_blank">
                <img src=${post.feature_image} alt=${post.title} class="blog__header">
                <div class="blog__body">
                    <h2 class="blog__title">${post.title}</h2>
                    <span class="blog__date">${parseDate(post.published_at)}</span>
                    <span class="blog__bar">&nbsp;</span>
                    <p class="blog__text">
                       ${post.custom_excerpt}
                    </p>
                </div>
            </a>
        </div>
     `
    ;
    
    elements.blog_container.insertAdjacentHTML('beforeend', markup);
}