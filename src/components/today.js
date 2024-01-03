import { getTodos,printTodos } from "./todos";
import { lightFormat } from "date-fns";

const openToday= () => {
    const todos = filterToday(getTodos());
    printTodos(todos);
}


const filterToday = (todos) => {
    const filtered = new Array();
    todos.forEach(todo => {
        if(lightFormat(todo.due,'yyyy-MM-dd')==lightFormat(new Date(),'yyyy-MM-dd')) {
            filtered.push(todo);
        }
    });
    return filtered;
}

export {openToday};