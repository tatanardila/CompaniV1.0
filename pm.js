//create PM class

export class ProductManager{
    constructor({
        managername,
        projects = []
    }){
        this.managername = managername;
        this.projects = projects;
    };
    addNewProject(newProject) {
    this.projects.push(newProject);
    };    
};
