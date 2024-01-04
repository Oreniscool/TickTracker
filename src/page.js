import './styles/style.css'

const loadTitle = () => {
    const titleBar = document.createElement('div');
    const credit = document.createElement('div');
    credit.classList.add('credit');
    titleBar.classList.add('title-bar');
    titleBar.classList.add('pink');
    titleBar.textContent="TickTracker";
    credit.innerHTML='<a href="https://github.com/Oreniscool"><i class="fa-brands fa-github"></i></a>';
    titleBar.appendChild(credit);
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