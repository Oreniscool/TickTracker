import { openInbox, removeTodo } from "./components/inbox";
import { navCol, loadSegments, addSelected } from "./components/navCol";
import { loadContent, loadTitle } from "./page";
import { todoCreateButton } from './components/todoForm';



// Loading page
loadTitle();
loadContent();

//loading Navigation column
navCol();
loadSegments();
addSelected(document.querySelector('.inbox'));

//Loading inbox initially
openInbox();
todoCreateButton();


