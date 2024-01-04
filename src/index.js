import { openInbox, createTray } from "./components/inbox";
import { navCol, loadSegments, addSelected, addSegmentOnClick } from "./components/navCol";
import { loadContent, loadTitle } from "./page";
import { todoCreateButton } from './components/todoForm';
import { printProjects, newProject } from "./components/projectsDOM";
import { checkStorage } from "./components/todos";
import { checkStorageProjects } from "./components/projects";


// Loading page
loadTitle();
loadContent();


//loading Navigation column

navCol();
loadSegments();
addSelected(document.querySelector('.inbox'));



//Loading projects
printProjects();
newProject();
checkStorageProjects();


//Loading inbox initially
createTray();
checkStorage();
openInbox();
todoCreateButton();



