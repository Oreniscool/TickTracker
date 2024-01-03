import '../styles/form.css';
import { getProjects } from './projects';
import { getCurrProject } from './projectsDOM';
import { addTodo, refreshTodos } from './todos';



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

    //project inputs
    const inputProject = document.createElement('select');
    inputProject.name = 'project';
    inputProject.classList.add('dropdown');
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
    inputStar.classList.add('star-input');
    inputStar.innerHTML='<i class="fa-sharp fa-regular fa-star"></i>';

    //submit button
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.type="submit";
    submitButton.textContent="Create";

    //appending
    grid.append(inputProject,inputDate,inputStar,submitButton)
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
    const inputProject = document.querySelector('.dropdown');
    const inputStar = document.querySelector('.star-input');
    const inputDate =document.querySelector('.date-input');
    addTodo(inputTitle.value,inputDesc.value,inputDate.value,inputProject.value,false,false)
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


export {todoCreateButton};
