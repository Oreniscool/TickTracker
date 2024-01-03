import { getProjects, addProject } from "./projects";
import '../styles/projects.css'
import { addSegmentOnClick } from "./navCol";
import { printProject } from "./projectCategories";

let currProject = null;
const getCurrProject = () => {
    return currProject;
}
const resetCurrProject = () => {
    currProject=null;
}


const printProjects = () => {
    const nav = document.querySelector('.nav');
    const projectSegment = document.createElement('div');
    projectSegment.classList.add('project-segment');

    const projects = getProjects();

    projects.forEach(projectElement =>{
        addToProjectTray(projectElement,projectSegment)
    });
    nav.appendChild(projectSegment);
    addSegmentOnClick();
}

const addToProjectTray = (projectElement,projectSegment) => {
    const project=document.createElement('div');
        project.classList.add('element');
        project.setAttribute('id','project');
        project.textContent='#'+projectElement;
        project.addEventListener('click', ()=>{
            currProject=projectElement;
            printProject(projectElement);
        })
        projectSegment.appendChild(project);
        addSegmentOnClick();
}

const newProject = () => {
    const projectSegment = document.querySelector('.project-segment');
    const newProj = document.createElement('form');
    newProj.classList.add('new-project');
    const addIcon = document.createElement('div');
    addIcon.classList.add('add-icon');
    addIcon.textContent="+";
    newProj.appendChild(addIcon);
    addIcon.addEventListener('click', function(){
        addIcon.remove();
        inputProjName(newProj);
    })
    projectSegment.appendChild(newProj);
}

const inputProjName = (newProj) => {
    const inputProj = document.createElement('input')
    inputProj.type='text';
    inputProj.name='projectName';
    inputProj.classList.add('project-input')
    
    const submit = document.createElement('input');
    submit.type='submit';
    submit.setAttribute('hidden','');
    newProj.append(inputProj,submit);
    newProj.addEventListener('submit', (e)=>{
        e.preventDefault();
        handleInput(inputProj.value);
        newProj.remove();
        addToProjectTray(inputProj.value, document.querySelector('.project-segment'));
        newProject();
    })
    cancelProjForm();
}

const handleInput = (input) => {
    addProject(input);
}

const cancelProjForm = () => {
    const projForm = document.querySelector('.new-project');
    projForm.addEventListener('keydown', function (e){
        if(e.key=='Escape') {
            projForm.remove();
            newProject();
        }
    })
}
export {printProjects, newProject, getCurrProject, resetCurrProject};