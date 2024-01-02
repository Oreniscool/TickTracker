import '../styles/form.css';
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
}

const createFormElements= (formPanel) => {
    const form = document.createElement('form');
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
    inputProject.innerHTML=`<option value="1">My projects</option>`;

    //due date
    const inputDate = document.createElement('div');
    inputDate.classList.add('date-input');
    inputDate.textContent="Placeholder";

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
    const form = document.querySelector('form');
    const film = document.querySelector('.film');
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        handleInputs();
        film.remove();
        refreshTodos();
        todoCreateButton();
    })
}
const handleInputs = () => {
    const inputTitle = document.querySelector('.title-input');
    const inputDesc = document.querySelector('.text-input');
    const inputProject = document.querySelector('.dropdown');
    const inputStar = document.querySelector('.star-input');
    const inputDate =document.querySelector('.date-input');
    addTodo(inputTitle.value,inputDesc.value,"20",inputProject.value,false,false)
}


export {todoCreateButton};