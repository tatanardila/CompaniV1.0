import { Account } from "../accounts/accounts.js";
import { Projects } from "../projects/projects.js";
import { ProductManager } from "../manager/pm.js";
import { Skill } from "../skills/skills.js";
import {
    DirectEmployeeUser,
    ContractorUser,
    ClientUser,
    AdminUser
} from "../UsersAndTypeOfUsers/typeOfUsers.js";

//instances of projects class and leantech account

const walt = new Projects ({
    projectName: "walt",
    productManager: stefany,
    lang: "English",
    account: [leanTech,leanSolution, p44],
});

const trinet = new Projects ({
    projectName: "trinet",
    productManager: laura,
    isInternal: true,
    lang: "German",
    account: [leanTech],
});

const ottomoto = new Projects({
    projectName: "ottomoto",
    productManager: Claudia,
    lang: "Portuguese",
    account:[leanTech],
});

// instances from lean Solutions account

const waitlist = new Projects ({
    projectName: "waitlist",
    productManager: paulina,
    lang: "Spanish",
    account: [leanSolution],
});


const carrierAssure = new Projects ({
    projectName: "carrier Assure",
    productManager: paulina,
    lang: "German",
    account: [leanSolutions],
});

// from the p44 account

const lss = new Projects ({
    projectName: "lss",
    productManager: mariela,
    lang: "English",
    account: [Account.p44],
});

const testBack = new Projects ({
    projectName: "testBack",
    productManager: solGuevara,
    lang: "English",
    account: [p44],
});




// new instances of Account class

const leanTech = new Account ({
    accountName: "lean Tech",
    projects: [walt, trinet, ottomoto],
});

const leanSolution = new Account({
    accountName: "leanSolution",
    projects: [waitlist, carrierAssure],
});

const p44 = new Account({
    accountName: "p44",
    projects: [lss, testBack],
});



//create instances of PM class

const laura =  new ProductManager ({
    managername: "Laura",
    projects: trinet,
});

const stefany = new ProductManager({
    productManagerName: "Stefany",
    projects: walt,
});

const claudia = new ProductManager({
    productManagerName: "Claudia",
    projects: ottomoto,
});

const paulina = new ProductManager({
    productManagerName: "Paulina",
    projects: [waitlist, carrierAssure],
});

const mariela = new ProductManager({
    productManagerName: "Paulina",
    projects: [lss],
})

const solGuevara = new ProductManager({
    productManagerName: "Sol Guevara",
    projects: [testBack],
});


// define the skills for users


const backend = new Skill ({
    skillName: "Backend",
    technologies: "Java Sc, Node Js",
});

const frontend = new Skill ({
    skillName: "frontend",
    technologies: "html, react,",
});

const scrum = new Skill ({
    skillName: "scrum",
    technologies: "Agile, jira",
});


const qa = new Skill ({
    skillName: "qa",
    technologies: "selenium, testrail",
});


//creamos los usuarios
const gianca = new ContractorUser({
    username: "Gianca",
    email: "Gianca@lean-tech.io",
    account: leanTech, leanSolution,
    projects: [walt, waitlist],
    skill: [backend], 
});

const carlos = new DirectEmployeeUser({
    username: "Carlos",
    email: "carlos@lean-tech.io",
    account: [leanTech, leanSolution],
    projects: [walt, waitlist],
    skill: [backend],
});

console.log(carlos);