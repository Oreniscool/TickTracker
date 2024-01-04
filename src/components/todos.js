import { addToTray, clearTray } from "./todosDOM";

let todos = [];

const getTodos = () => {
    return todos;
}

function todo(title,description,due,project,starred,status,priority) {
    this.title=title;
    this.description=description;
    this.due=due;
    this.project=project;
    this.starred=starred;
    this.status=status;
    this.priority=priority;
}

const addTodo = (title,description,due,project,starred,status,priority) => {
    let newTodo = new todo(title,description,new Date(due),project,(starred === 'true' || starred === true),status,priority);
    if(checkDuplicate(newTodo)){return;}
    addToTray(newTodo);
    todos.push(newTodo);
    saveToStorage();
}

const findTodo = (name) => {
    for(let i=0;i<todos.length;i++) {
        if(todos[i].title===name) {
            return i;        
        }
    }
}

const delTodo = (name) => {
    removeItem(findTodo(name),todos);
    saveToStorage()
}

const removeItem = (index,array) => {
    if(index===undefined) {
        return;
    }
    array.splice(index, 1);
}

const formatDate = (date) => {
     const day=date.getDate();
     const month=date.getMonth()+1;
     return day+'/'+month;
}

const printTodos = (todos) => {
    todos.forEach(todoObj => {
        addToTray(todoObj);
    });
}

const checkStorage = () => {
    if(!localStorage.getItem('todoList')) {
        populateTodos();
    }
    else {
        setTodos(localStorage.getItem('todoList'));
    }
}

const populateTodos = () => {
    console.log('New session, hello there!')
}

const setTodos = (todoList) => {
     const parsedList=JSON.parse(todoList);
     parsedList.forEach(savedTodo => {
        addTodo(savedTodo.title,savedTodo.description,savedTodo.due,savedTodo.project,savedTodo.starred,savedTodo.status,savedTodo.priority);
     })
     clearTray();
}

const checkDuplicate = (todoObj) => {
    const i = findTodo(todoObj.title);
    if(i==undefined){return false};
    if(todoObj.description==todos[i].description, todoObj.project==todos[i].project, todoObj.due==todos[i].due) {
        return true;
    }
}

const saveToStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(todos));
}

export {getTodos, addTodo, delTodo, formatDate, printTodos, findTodo, checkStorage, saveToStorage};