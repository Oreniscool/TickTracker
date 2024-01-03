import { getTodos,printTodos } from "./todos";

const openStarred= () => {
    const todos = filterStarred(getTodos());
    printTodos(todos);
}


const filterStarred = (todos) => {
    const filtered = new Array();
    todos.forEach(todo => {
        if(todo.starred==true) {
            filtered.push(todo);
        }
    });
    return filtered;
}

export {openStarred};