import '../styles/tray.css'
import { getTodos, printTodos} from './todos';

const createTray= () => {
    const content = document.querySelector('.content');
    const tray=document.createElement('div');
    tray.classList.add('tray');
    content.appendChild(tray);
}
const openInbox= () => {
    const todos = getTodos();
    printTodos(todos);
}


export {openInbox, createTray};