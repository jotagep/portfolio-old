import { url_api, client_id, client_secret } from '../config';

export default class Blogs {
    constructor() {
        this.posts = []
    };

    async getBlogs() {
        try {
            const res = await fetch(`${url_api}?limit=3&client_id=${client_id}&client_secret=${client_secret}`)
                .then(res => res.json());
            
            this.posts = res.posts;

        } catch (error) {
            console.log(error);
        }
    }
}