import { addToTray } from "./todosDOM";

    let todos = [{
        title:"Example",
        description:"What do you think",
        due:"26",
        project:"My projects",
        starred:true,
        status:false,
    },
];

const getTodos = () => {
    return todos;
}

function todo(title,description,due,project,starred,status) {
    this.title=title;
    this.description=description;
    this.due=due;
    this.project=project;
    this.starred=starred;
    this.status=status;
}

const addTodo = (title,description,due,project,starred,status) => {
    let newTodo = new todo(title,description,due,project,starred,status);
    todos.push(newTodo);
    addToTray(newTodo);
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
}

const removeItem = (index,array) => {
    if(index===undefined) {
        return;
    }
    array.splice(index, 1);
}



export {getTodos, addTodo, delTodo};