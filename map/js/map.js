const states = document.querySelectorAll('.state');
const stateName = document.getElementById('state-name');
const display = document.getElementById('display');
const closeModal = document.getElementById('closeModal')

states.forEach((state) => {
    state.addEventListener('click', () =>{
        stateName.textContent = `${state.dataset.name}`;
        display.classList.remove('hidden');
    });
});

closeModal.addEventListener('click', () => {
    display.classList.add('hidden');
});