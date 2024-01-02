import './styles/style.css'

const loadTitle = () => {
    const titleBar = document.createElement('div');
    titleBar.classList.add('title-bar');
    titleBar.classList.add('pink');
    titleBar.textContent="TickTracker";
    document.body.appendChild(titleBar);
}


const loadContent = () => {
    const body = document.querySelector('body');
    body.classList.add('pink');
    const content = document.createElement('div');
    content.classList.add('content');
    body.appendChild(content);
}


export {loadContent,loadTitle};