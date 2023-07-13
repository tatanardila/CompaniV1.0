//Create User class 
//skill, projects, account 
import { Account } from "../accounts/accounts.js";
import { Projects } from "../projects/projects.js";
import { Skill } from "../skills/skills.js";

export class User {
    constructor({
        username,
        email = undefined,
        account = [Account],
        projects = [Projects],
        skill = [Skill],
    })
    {
        this.username = username;
        this.email = email;
        this.account = account;
        this.projects= projects;
        this.skill = skill;
    }
    
    addNewSkill(newSkill) {
        this.skill.push(newSkill)
    };
    addNewsProject(newProject) {
        this.projects.push(newProject)
    };
    addNewAccount(newAccount) {
        this.account.push(newAccount)
    };
    publishComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            username: this.name
        });

        comment.publish

    };
}


