// create account class to define the accounts

class Account{
    constructor({
        accountName,
        projects
    }) {
        this.accountName = accountName;
        this.projects = projects;
    };
};

export{Account};