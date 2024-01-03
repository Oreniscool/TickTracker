import { getTodos,printTodos } from "./todos";
import { getWeek } from "date-fns";

const openThisWeek= () => {
    const todos = filterThisWeek(getTodos());
    printTodos(todos);
}


const filterThisWeek = (todos) => {
    const filtered = new Array();
    todos.forEach(todo => {
        if(getWeek(todo.due)==getWeek(new Date())) {
            filtered.push(todo);
        }
    });
    return filtered;
}

export {openThisWeek};