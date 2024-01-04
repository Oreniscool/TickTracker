import {addToProjectTray} from './projectsDOM'
const projects = [];

const addProject = (project,flag) => {
    projects.push(project);
    if(!flag) {localStorage.setItem('projectList', JSON.stringify(projects))};
}

const getProjects = () => {
    return projects;
}

const checkStorageProjects = () => {
    if(!localStorage.getItem('projectList')) {
        populateProjects();
    }
    else {
        setProjects(localStorage.getItem('projectList'));
    }
}

const populateProjects = () => {
    addProject("my project", false);
    addToProjectTray("my project", document.querySelector('.project-segment'));
}

const setProjects = (projectList) => {
     const parsedList=JSON.parse(projectList);
     
     parsedList.forEach(savedProject => {
         addProject(savedProject,true);
         addToProjectTray(savedProject, document.querySelector('.project-segment'));
     })
}




export {getProjects,addProject,checkStorageProjects};