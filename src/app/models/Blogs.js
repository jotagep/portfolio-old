import { url_api, client_id, client_secret } from '../config';

export default class Blogs {
    constructor() {
        this.posts = []
    };

    async getBlogs() {
        try {
            const res = await fetch(ghost.url.api('posts', {limit: 3}))
                .then(res => res.json());
            
            this.posts = res.posts;

        } catch (error) {
            console.log(error);
        }
    }
}