import '../styles/form.css';
import { returnToInbox } from './inbox';
import { getProjects } from './projects';
import { getCurrProject } from './projectsDOM';
import { addTodo } from './todos';

const todoCreateButton = () => {
    const tray = document.querySelector('.tray');
    const createButton = document.createElement('div');
    createButton.classList.add("create-button");
    createButton.innerHTML='<i class="fa-solid fa-plus"></i>';
    createButton.addEventListener('click', ()=> {
        todoCreateForm();
    })
    tray.appendChild(createButton);
}

const createFilm = () => {
    const film = document.createElement('div');
    film.classList.add('film');
    document.body.appendChild(film);
}

const todoCreateForm = () =>{
    createFilm();
    const film = document.querySelector('.film');
    const formPanel = document.createElement('div');
    formPanel.classList.add('form-panel');
    film.appendChild(formPanel);
    createFormElements(formPanel);
    submittingForm();
    cancelForm();
}

const createFormElements= (formPanel) => {
    const form = document.createElement('form');
    form.classList.add('todo-form')
    form.setAttribute('action','');
    //Form inputs
    //title
    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.name = 'title';
    inputTitle.placeholder = 'Enter title here...';
    inputTitle.classList.add("title-input");
    inputTitle.setAttribute('required', '');


    //description
    const inputDesc = document.createElement('textarea');
    inputDesc.name = 'description';
    inputDesc.placeholder = 'Enter details here...';
    inputDesc.classList.add("text-input")

    //grided inputs
    const grid = document.createElement('grid');
    grid.classList.add('grid');

    const priorityAndProject = document.createElement('div');
    priorityAndProject.classList.add('pro-pri');
    //project inputs
    const inputProject = document.createElement('select');
    inputProject.name = 'project';
    inputProject.classList.add('dropdown');
    inputProject.classList.add('project-input');
    if(getCurrProject()===null) {
        addOptions(inputProject,getProjects());
    }
    else {
        addOptions(inputProject,[getCurrProject()]);
    }
    //due date
    const inputDate = document.createElement('input');
    inputDate.type='date';
    inputDate.classList.add('date-input');
    inputDate.name='dueDate';
    inputDate.valueAsDate = new Date();

    
    //star input 
    const inputStar = document.createElement('div');
    inputStar.dataset.star = false;
    inputStar.classList.add('star-input');
    inputStar.innerHTML='<i class="fa-regular fa-star"></i>';
    inputStar.addEventListener('click', function(){
        toggleStar(inputStar);
    })

    //priority input
    const inputPriority = document.createElement('select');
    inputPriority.name = 'priority';
    inputPriority.classList.add('dropdown');
    inputPriority.classList.add('priority-input');
    addOptions(inputPriority,["Low","Medium","High"]);

    //submit button
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.type="submit";
    submitButton.textContent="Create";

    //appending
    priorityAndProject.append(inputProject,inputPriority);
    grid.append(priorityAndProject, inputDate, inputStar, submitButton);
    form.append(inputTitle,inputDesc,grid);
    formPanel.appendChild(form);
}

const submittingForm = () => {
    const form = document.querySelector('.todo-form');
    const film = document.querySelector('.film');
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        handleInputs();
        film.remove();
        todoCreateButton();
    })
}
const handleInputs = () => {
    const inputTitle = document.querySelector('.title-input');
    const inputDesc = document.querySelector('.text-input');
    const inputProject = document.querySelector('.project-input');
    const inputStar = document.querySelector('.star-input');
    const inputDate = document.querySelector('.date-input');
    const inputPriority = document.querySelector('.priority-input') 
    addTodo(inputTitle.value,inputDesc.value,inputDate.value,inputProject.value,inputStar.dataset.star,false,inputPriority.value);
    
    //code to return to inbox after new todo but when not in any project
    returnToInbox();
}

const cancelForm = () => {
    const form = document.querySelector('.todo-form');
    const film = document.querySelector('.film');

    window.addEventListener('keydown', function (e){
        if(e.key=='Escape') {
            form.remove();
            film.remove();
        }
    })
}

const addOptions= (dropdown, array) => {
    array.forEach(element => {
        const option = document.createElement('option');
        option.setAttribute('value',element);
        option.textContent=element;
        dropdown.appendChild(option);
    });
}


const toggleStar = (inputStar) => {
    if(inputStar.dataset.star=='false') {
        inputStar.dataset.star=true;
        inputStar.innerHTML='<i class="fa-solid fa-star" aria-hidden="true"></i>'
    }
    else if(inputStar.dataset.star=='true') {
        inputStar.dataset.star=false;
        inputStar.innerHTML='<i class="fa-regular fa-star" aria-hidden="true"></i>'
    }
}


export {todoCreateButton};
