import '../styles/tray.css'
import { getTodos} from './todos';
import { addToTray } from './todosDOM';




const openInbox= () => {
    const content = document.querySelector('.content');
    const todos = getTodos();
    const inbox=document.createElement('div');
    inbox.classList.add('tray');
    content.appendChild(inbox);
    printTodos(todos);
}

const printTodos = (todos) => {
    todos.forEach(todoObj => {
        addToTray(todoObj);
    });
}

const closeInbox=()=>{
    const inbox = document.querySelector(".tray");
    inbox.remove();
}



export {openInbox, closeInbox};