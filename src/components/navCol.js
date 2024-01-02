import '../styles/nav-col.css';

const navCol = () => {
    const content = document.querySelector('.content');
    const nav = document.createElement('div');
    nav.classList.add('nav');
    content.appendChild(nav);
}

const loadSegments = () => {
    const nav = document.querySelector('.nav');
    const segments = document.createElement('div');
    segments.classList.add('segments');
    addSegments(getSegments(),segments);
    nav.appendChild(segments);
    addSegmentOnClick();
}

const getSegments = () => {
    return [{name:'Inbox', icon:'<i class="fa-solid fa-inbox"></i>', class:'inbox'},
            {name:'Today', icon:'<i class="fa-solid fa-calendar-day"></i>', class:'today'},
            {name:'This week', icon:'<i class="fa-solid fa-calendar-week"></i>', class:'week'},
            {name:'Starred', icon:'<i class="fa-solid fa-star"></i>', class:'star'}]
}

const addSegments = (segmentsArray,segments) => {
    segmentsArray.forEach(segment => {
        
        const element = document.createElement('div');
        element.classList.add('element');
        element.classList.add(segment.class);
        
        const icon = document.createElement('div')
        icon.innerHTML=segment.icon;
    
        const text = document.createElement('div');
        text.textContent=segment.name;

        element.append(icon,text);
        segments.appendChild(element);
    });
}

const addSegmentOnClick = ()=> {
    const elements = Array.from(document.getElementsByClassName('element'));
    elements.forEach(element => {
        element.addEventListener('click', ()=>{
            removeSelected(elements);
            addSelected(element);
        })
    })
}

const removeSelected = (elements) => {
    elements.forEach(element =>{
        element.classList.remove('selected');
    })
}

const addSelected = (element) => {
    element.classList.add('selected');
}

export {navCol, loadSegments, addSelected};