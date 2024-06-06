const states = document.querySelectorAll('.state');
const mapTxt = document.getElementById('svg');

fetch("./assets/us_states.json")
.then(response => response.json())
.then(data => displayStates(data));

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const displayStates = (data) => {
    // const tableMain = document.querySelector('.table-main');
    const closeModal = document.querySelector('.closeModal');
    const dataContainer = document.querySelector('.info-modal')
    states.forEach((state) => {
        state.addEventListener('click',  e => {
            if (!e.target.matches('.state')) return;
            let stateId = Number(e.target.id);
            let i = stateId;
            // console.log(i)
            const dataDisplay = document.querySelector('.data');
            let html =`
            <div class="data-container">
                <h1 class="title">${data.USStates[i].name}</h1>
                <img src="${data.USStates[i].flag}">
                <div class="info-container">
                    <ul>
                        <li><span>Capital: </span>${data.USStates[i].capital}</li>
                        <li><span>Largest City: </span>${data.USStates[i].largest_city}</li>
                        <li><span>State Bird: </span>${data.USStates[i].state_bird}</li>
                        <li><span>State Flower: </span>${data.USStates[i].state_flower}</li>
                        <li><span>Nickname: </span>${data.USStates[i].nickname}</li>
                        <li><span>Became a State: </span>${data.USStates[i].Became_a_state}</li>
                        <li><span>Population: </span>${formatNumber(data.USStates[i].population)}</li>
                        <li><span>Area (sq mi): </span>${formatNumber(data.USStates[i].area_sq_mi)}</li>
                    </ul>
                </div>
                    <a class="info-link" href="${data.USStates[i].wiki}" target="_blank">Learn more!</a>
            </div>
            `
            dataDisplay.innerHTML = html;
            dataContainer.showModal()
        },{capture: true});
    });
    closeModal.addEventListener('click', () => {
        dataContainer.close();
    });
}

// mapTxt.addEventListener('click', () => {
//     console.log("Clicked");
// });
