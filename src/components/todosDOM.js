import { delTodo, formatDate, saveToStorage} from "./todos"; 

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
    const description = document.createElement('div');

    priority.classList.add('priority');
    todo.classList.add('todo');
    name.classList.add('name');
    dueDate.classList.add('due-date');
    projectName.classList.add('project-name');
    leftHalf.classList.add('left-half');
    rightHalf.classList.add('right-half');
    bin.classList.add('bin');
    star.classList.add('todo-star');
    description.classList.add('todo-description');

    selectStatus(todoObj,checkBox,todo);
    selectPriority(todoObj,priority);

    if(todoObj.starred==false) {
        star.style.display='none';
    }

    toggleStatus(todoObj,checkBox,todo);
   
    name.textContent=todoObj.title;
    dueDate.textContent=formatDate(todoObj.due);
    projectName.textContent=todoObj.project;
    bin.innerHTML='<i class="fa-solid fa-trash"></i>';
    bin.dataset.hook=todoObj.title;
    star.innerHTML='<i class="fa-solid fa-star"></i>'
    description.textContent=charLimit(todoObj.description,100);

    leftHalf.append(checkBox, name, description);
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


const toggleStatus = (todoObj,checkBox,todo) => {
    checkBox.addEventListener('click', ()=> {
        if(todoObj.status==false) {
            checkBox.classList.add('completed');
            todo.classList.add('todo-done');
            todoObj.status=true;
            
        }
        else if(todoObj.status==true) {
            checkBox.classList.remove('completed');
            todo.classList.remove('todo-done')
            todoObj.status=false;
        }
        saveToStorage()
    })
}

const selectStatus = (todoObj,checkBox,todo) => {
    checkBox.classList.add('check-box');
    if(todoObj.status==true) {
        checkBox.classList.add('completed');
        todo.classList.add('todo-done');
    }
}

const charLimit = (string, limit) => {
    return string.substring(0, limit)
}


export {addToTray, removeTodo, clearTray}