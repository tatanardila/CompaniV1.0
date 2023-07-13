
import { Account } from "./accounts/accounts.js";
import { ProductManager } from "./manager/pm.js";
import {Projects} from "./projects/projects.js";
import {Skill} from "./skills/skills.js";
import {
    ContractorUser,
    DirectEmployeeUser,
    ClientUser,
    AdminUser
} from "../Company1.0/UsersAndTypeOfUsers/typeOfUsers.js";
import { Comment } from "./comments/comments.js";

// create the projects instances -project uno y project dos-
const projectUno = new Projects({
    projectName: "project Uno",
    productManager: " ",
    lang: "English",
    account: [],
});

const projectDos = new Projects({
    projectName: "project Dos",
    lang: "English"
});


// create the Account instances  -account uno & account dos- 
const accountUno = new Account ({
    accountName: "account Uno",
    projects: [projectUno],
});


const accountDos = new Account ({
    accountName: "account Dos",
    projects: [projectDos],
});


projectDos.addNewAccount(accountDos)
projectUno.addNewAccount(accountUno)


// create the productManager instances  -hernan y francisco-
const hernan = new ProductManager({
    managername: "hernan",
    projects: projectDos,
});


const francisco = new ProductManager({
    managername: "francisco",
    projects: projectUno,
});


// create the skills instances -Skill uno y Skill dos-

const skillUno = new Skill ({
    skillName: "skill Uno",
    technologies: "Java Sc, Node Js",
});

const skillDos = new Skill ({
    skillName: "skill Dos",
    technologies: "Java Sc, Node Js",
});


// create the Type of user instances, two for each kind

const mateo = new AdminUser({
    username: "Mateo",
    email: "mateoAdmin@lean-tech.io",
    account:[accountDos, accountUno],
    projects: [projectDos, projectUno],
    skill: [skillDos],
});

const alejo = new AdminUser({
    username: "alejo",
    email: "alejandro@lean-tech.io",
    account:[accountDos],
    projects: [projectDos],
    skill: [skillDos],
});

const pachito = new ClientUser ({
    username: "Pachito",
    email: "pachi@gmail.com",
    account: [accountUno],
    projects: [projectUno]
});

const juancho = new ClientUser ({
    username: "Juancho",
    email: "juanchi@gmail.com",
    account: [accountDos],
    projects: [projectDos]
});

const jesus = new DirectEmployeeUser({
    username: "Jesus",
    email: "jesus@lean-tech.io",
    account: [accountDos],
    projects: [projectDos],
    skill: [skillUno],
});

const maria = new DirectEmployeeUser({
    username: "Maria",
    email: "maria@lean-tech.io",
    account: [accountDos],
    projects: [projectDos],
    skill: [skillUno],
});

const esteban = new ContractorUser({
    username: "ESTEBAN",
    email: "esteban@lean-tech.io",
    account: [accountDos, accountUno],
    projects: [projectUno, projectDos],
    skill: [skillDos], 
});

const manuel = new ContractorUser({
    username: "Manuel",
    email: "manuel@lean-tech.io",
    account: [accountUno],
    projects: [projectDos],
    skill: [skillUno], 
});

const commentA = new Comment({
    username: "Mateo",
    content: 'it is a comment from Mateo Admin',
    typeOfUser: "AdminUser" 
});


//print the users
console.log(alejo);
console.log(mateo);
console.log(pachito);
console.log(juancho);
console.log(jesus);
console.log(maria);
console.log(esteban);
console.log(manuel);



commentA.publish(); 



