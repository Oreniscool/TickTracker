import { openInbox, createTray } from "./components/inbox";
import { navCol, loadSegments, addSelected, addSegmentOnClick } from "./components/navCol";
import { loadContent, loadTitle } from "./page";
import { todoCreateButton } from './components/todoForm';
import { printProjects, newProject } from "./components/projectsDOM";


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

//Loading inbox initially
createTray();
openInbox();
todoCreateButton();



