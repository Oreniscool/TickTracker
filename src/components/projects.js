const projects = ["my projects"];

const addProject = (project) => {
    projects.push(project);
}

const getProjects = () => {
    return projects;
}


export {getProjects,addProject};