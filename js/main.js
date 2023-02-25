const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', checkSection)

checkSection();

function checkSection() {
    const triggerBottom = window.innerHeight / 5 * 4;
    const triggerTop = window.innerHeight / 4;
    

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }

        if(sectionTop < triggerTop) {
            section.classList.remove('show');
        }else {
            section.classList.add('show');
        }

    })
}