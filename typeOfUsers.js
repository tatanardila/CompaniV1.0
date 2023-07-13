//create the type of users using inheritance from the User class
//with reserved words "super and props"
import { User } from "./Users.js";


class ContractorUser extends User {
    constructor(props){
        super(props);
    }

    addNewProject(newProject){
        this.projects.push(newProject);
        if (newProject.isInternal){
        console.warn("hi " + this.username +" now you are in a internal project")
        }
    }
};

class DirectEmployeeUser extends User {
    constructor(props){
        super(props);
    }

    addNewProject(newProject){
        if (newProject.lang === "German"){
        console.warn("hi " + this.username +" you can't work in a project with German language")
        } else {
        this.projects.push(newProject);
        }
    }
};

class ClientUser extends User {
    constructor(props){
        super(props)
    };
    addNewProject(newProject) {
        this.projects.push(newProject);
    };
    publishComment (commentContent) {
        const comment = new comment ({
            content: commentContent,
            typeOfUser: typeof ClientUser
        });

        comment.publish();
    };
    
};

class AdminUser extends User {
    constructor(props){
        super(props)
    };

    addNewProject(newProject) {
        this.projects.push(newProject);
    };
    publishComment (commentContent) {
        const comment = new comment ({
            content: commentContent,
            typeOfUser: typeof AdminUser
        });

        comment.publish();
    };
    
};

export{
    ContractorUser,
    DirectEmployeeUser,
    ClientUser,
    AdminUser
};