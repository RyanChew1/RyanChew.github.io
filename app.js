const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls-wrapper');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i=0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    //Button scroll active class
    for(let i=0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('wheel',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }
}

allSections.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if (id){
        sectBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        sections.forEach((section)=>{
            section.classList.remove('active');
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})

let activeSectionIndex = 0;
let isScrolling = false;

document.addEventListener('wheel', (event) => {
    event.preventDefault();
    
    if (!isScrolling) {
        isScrolling = true;

        const scrollDirection = Math.sign(event.deltaY);
        const nextSectionIndex = activeSectionIndex + scrollDirection;

        if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
            const nextSection = sections[nextSectionIndex];
            const nextSectionId = nextSection.id;
            const nextSectionButton = document.querySelector(`[data-id="${nextSectionId}"]`);

            sectBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            nextSectionButton.classList.add('active');

            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            nextSection.classList.add('active');
            activeSectionIndex = nextSectionIndex;

            activeSectionIndex = nextSectionIndex;
        }
        
        for(let i=0; i< sectBtn.length; i++){
            const nextSection = sections[nextSectionIndex];
            const nextSectionId = nextSection.id;
            const nextSectionButton = document.querySelector(`[data-id="${nextSectionId}"]`);
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            nextSectionButton.className += ' active-btn';
    }

        setTimeout(() => {
            isScrolling = false;
        }, 500); // debounce time in milliseconds
    }
}, {passive: false});

let prevScrollY = window.scrollY;


PageTransitions();