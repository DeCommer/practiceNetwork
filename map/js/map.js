const states = document.querySelectorAll('.state');
// const stateName = document.getElementById('state-name');
// const display = document.getElementById('display');
// const closeModal = document.getElementById('closeModal');

fetch("./us_states.json")
.then(response => response.json())
.then(data => displayStates(data));

const displayStates = (data) => {
    // const tableMain = document.querySelector('.table-main');
    const closeModal = document.querySelector('.closeModal');
    const dataContainer = document.querySelector('.info-modal')

    states.forEach((state) => {
        state.addEventListener('click',  e => {
            if (!e.target.matches('.state')) return;
            let stateId = Number(e.target.id);
            let i = stateId;
            console.log(i);
            console.log(data.elements[i].name);
            const dataDisplay = document.querySelector('.data');
            let html =`
                <h1>${data.elements[i].name}</h1>
                <div>
                    <ul>
                        <li><span>Capital: </span>${data.elements[i].capital}</li>
                        <li><span>Largest City: </span>${data.elements[i].largest_city}</li>
                        <li><span>State Bird: </span>${data.elements[i].state_bird}</li>
                        <li><span>State Flower: </span>${data.elements[i].state_flower}</li>
                        <li><span>Nickname: </span>${data.elements[i].nickname}</li>
                        <li><span>Population: </span>${data.elements[i].population}</li>
                        <li><span>Area (sq mi): </span>${data.elements[i].area_sq_mi}</li>
                    </ul>
                </div>
                `
            dataDisplay.innerHTML = html;
            dataContainer.showModal()
        },{capture: true});
    });

    closeModal.addEventListener('click', () => {
        dataContainer.close();
        elemId = '';
    });
}
