//create Projects class

export class Projects {
    constructor({
        projectName,
        lang = "English",
        isInternal = false,
        account = []
    }){
        this.projectName = projectName; 
        this._lang = lang;
        this.isInternal = isInternal;
        this.account = account;
    };

    get lang(){
        return this._lang;
    };

    set lang(newlang){
        const allowedLangs = ["English", "Spanish", "German", "Portuguese"];
        if (!allowedLangs.includes(newlang)){
            console.error("sorry only admitted language's are: English, Spanish, German and Portuguese");
        } else {
            this._lang = newlang;
        }     
    };
    addNewsProject(newProject) {
        this.projects.push(newProject)
    };
    addNewAccount(newAccount) {
        this.account.push(newAccount)
    };
    
};


