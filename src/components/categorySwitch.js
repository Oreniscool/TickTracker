import { openInbox } from "./inbox";
import { openToday } from "./today";
import { clearTray } from "./todosDOM";
import { openThisWeek } from "./week";


const openCat = (name) => {
    clearTray();
    if(name=="Inbox") {
        openInbox();
    }
    else if(name=="Today") {
        openToday();
    }
    else if(name=="This week") {
        openThisWeek();
    }
}

export {openCat};