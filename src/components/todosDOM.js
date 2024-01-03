import { openInbox } from "./inbox";
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
    const star = document.createElement('div');
    const priority = document.createElement('div');

    priority.classList.add('priority');
    todo.classList.add('todo');
    checkBox.classList.add('check-box');
    name.classList.add('name');
    dueDate.classList.add('due-date');
    projectName.classList.add('project-name');
    leftHalf.classList.add('left-half');
    rightHalf.classList.add('right-half');
    bin.classList.add('bin');
    star.classList.add('todo-star');

    selectPriority(todoObj,priority);

    if(todoObj.starred==false) {
        star.style.display='none';
    }

    if(todoObj.status==true) {
        checkBox.classList.add('completed');
    }

    name.textContent=todoObj.title;
    dueDate.textContent=formatDate(todoObj.due);
    projectName.textContent=todoObj.project;
    bin.innerHTML='<i class="fa-solid fa-trash"></i>';
    bin.dataset.hook=todoObj.title;
    star.innerHTML='<i class="fa-solid fa-star"></i>'

    leftHalf.append(checkBox, name);
    rightHalf.append(star,priority, projectName, dueDate, bin);

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

const selectPriority = (todoObj,priority) => {
    priority.innerHTML='<i class="fa-solid fa-circle"></i>'
    if(todoObj.priority=="Low") {
        priority.classList.add("low");
    }
    else if(todoObj.priority=="Medium") {
        priority.classList.add("medium");
    }
    else if(todoObj.priority=="High") {
        priority.classList.add("high");
    }
}

export {addToTray, removeTodo, clearTray}