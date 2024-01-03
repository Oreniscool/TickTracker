import '../styles/tray.css'
import { getTodos, printTodos} from './todos';
import { addSelected, removeSelected } from './navCol';
import { getCurrProject } from './projectsDOM';
import { clearTray } from './todosDOM';


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

const returnToInbox = () => {
    if(getCurrProject()==null) {
        clearTray();
        openInbox();
        removeSelected(document.querySelectorAll('.element'));
        addSelected(document.querySelector('.inbox'));
    } 
}
export {openInbox, returnToInbox, createTray};