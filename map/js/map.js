const states = document.querySelectorAll('.state');
const stateName = document.getElementById('state-name');

states.forEach((state, index) => {
    state.addEventListener('click', () =>{
        stateName.textContent = `${state.dataset.name}`;
    });
});