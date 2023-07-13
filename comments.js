//create comment class

export class Comment {
    constructor({
        username,
        content,
        typeOfUser,


    }) {

        this.username = username;    
        this.content = content;
        this.typeOfUser = typeOfUser;
        this.likes = 0;
    };
    publish(){
        console.log(this.username + "( "+ this.typeOfUser + " )");
        console.log(this.content);
        console.log(this.likes);
    };
};

