import { getTodos, printTodos } from "./todos";
import { clearTray } from "./todosDOM";


const printProject = (name) => {
    const todos =  filterProject(getTodos(), name);
    clearTray();
    printTodos(todos);
}


const filterProject = (todos,name) => {
    const filtered = new Array();
    todos.forEach(todo => {
        if(todo.project==name) {
            filtered.push(todo);
        }
    });
    return filtered;
}

export {printProject};