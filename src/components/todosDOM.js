import { delTodo, formatDate } from "./todos"; 

const addToTray = (todoObj) => {
    const tray = document.querySelector('.tray');
    const todo = document.createElement('div');    
    const checkBox = document.createElement('div');
    const name = document.createElement('div');
    const dueDate = document.createElement('div');
    const projectName = document.createElement('div');
    const leftHalf = document.createElement('div');
    const rightHalf = document.createElement('div');
    const bin = document.createElement('div');

    todo.classList.add('todo');
    checkBox.classList.add('check-box');
    name.classList.add('name');
    dueDate.classList.add('due-date');
    projectName.classList.add('project-name');
    leftHalf.classList.add('left-half');
    rightHalf.classList.add('right-half');
    bin.classList.add('bin');

    if(todoObj.status==true) {
        checkBox.classList.add('completed');
    }

    name.textContent=todoObj.title;
    dueDate.textContent=formatDate(todoObj.due);
    projectName.textContent=todoObj.project;
    bin.innerHTML='<i class="fa-solid fa-trash"></i>';
    bin.dataset.hook=todoObj.title;
    

    leftHalf.append(checkBox, name);
    rightHalf.append(projectName, dueDate, bin)

    todo.append(leftHalf,rightHalf);
    tray.appendChild(todo);
    addBinListeners();
}

const clearTray = () =>{
    const todos = Array.from(document.getElementsByClassName('todo'));
    todos.forEach(todo => {
        todo.remove();
    });
}

const addBinListeners = () => {
    const bins = Array.from(document.getElementsByClassName('bin'));
    bins.forEach(bin => {
        bin.addEventListener('click',()=>{
            const name = bin.dataset.hook;
            delTodo(name);
            removeTodo(bin);
        })
    });
}

const removeTodo = (bin) => {
    bin.parentElement.parentElement.remove();
}



export {addToTray, removeTodo, clearTray}