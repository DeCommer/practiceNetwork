const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', checkSection)

checkSection();

function checkSection() {
    const triggerTop = window.innerHeight / 4;
    

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerTop) {
            section.classList.remove('show');
        }else {
            section.classList.add('show');
        }
    })
}


