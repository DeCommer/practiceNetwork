// Show / hide JS

const jsModal = document.querySelector('.jsHidden');

const openJsModal = function() {
    jsModal.classList.remove('hidden');
    aboutOverlay.classList.remove('hidden');
}

const closeJsModal = function() {
    jsModal.classList.add('hidden');
    aboutOverlay.classList.add('hidden');
}

document.querySelector('.jsBtn').addEventListener('click', openJsModal);
document.querySelector('.closeJsModal').addEventListener('click', closeJsModal);
document.querySelector('.aboutOverlay').addEventListener('click', closeJsModal);


// Modal

const aboutModal = document.querySelector('.aboutModal');
const aboutOverlay = document.querySelector('.aboutOverlay');

const openAboutModal = function() {
    aboutModal.classList.remove('hidden');
    aboutOverlay.classList.remove('hidden');
}

const closeAboutModal = function() {
    aboutModal.classList.add('hidden');
    aboutOverlay.classList.add('hidden');
}

document.querySelector('.aboutBtn').addEventListener('click', openAboutModal);
document.querySelector('.closeAboutModal').addEventListener('click', closeAboutModal);
document.querySelector('.aboutOverlay').addEventListener('click', closeAboutModal);
