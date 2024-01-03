import { getProjects } from "./projects";
import { addToTray } from "./todosDOM";

    let todos = [{
        title:"Example",
        description:"What do you think",
        due:new Date(),
        project:getProjects()[0],
        starred:true,
        status:false,
        priority:"Medium",
    },
];

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
    let newTodo = new todo(title,description,new Date(due),project,(starred === 'true'),status,priority);
    todos.push(newTodo);
    addToTray(newTodo);
    console.log(todos);
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


export {getTodos, addTodo, delTodo, formatDate, printTodos};