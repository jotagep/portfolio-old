export default class Projects {
    constructor() {
        this.projects = [
            {
                title: 'Shap Web',
                techs: 'JavaScript + CSS',
                img: 'assets/img/shap.png',
                tags: ['JS']
            },
            {
                title: 'Dark Web',
                techs: 'JavaScript + CSS',
                img: 'assets/img/shap.png',
                tags: ['ANGULAR']
            },
            {
                title: 'Shap Ingo',
                techs: 'JavaScript + Bootstrap',
                img: 'assets/img/shap.png',
                tags: ['ANGULAR']
            },
            {
                title: 'Serio Web',
                techs: 'JavaScript + Pug',
                img: 'assets/img/shap.png',
                tags: ['JS']
            },
            {
                title: 'Shap Web',
                techs: 'JavaScript + CSS',
                img: 'assets/img/shap.png',
                tags: ['NODE']
            },
            {
                title: 'DinoMark Web',
                techs: 'JavaScript + CSS',
                img: 'assets/img/shap.png',
                tags: ['JS']
            },
        ]
    }

    getProjects() {
        return this.projects;
    }
}