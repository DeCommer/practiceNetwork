// Show / hide JS
const jsHidden = document.querySelector('.jsHidden');
const toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', function hideCode() {
    if (jsHidden.style.display === "block") {
        jsHidden.style.display = "none";
        toggleBtn.textContent = "See the Javascript"
    } else {
        jsHidden.style.display = "block";
        toggleBtn.textContent = "Hide the Javascript"
    }
  });

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