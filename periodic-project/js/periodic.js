fetch("./assets/periodicdata.json")
.then(response => response.json())
.then(data => displayElements(data));

const displayElements = (data) => {
    console.log(data.elements);

const tableMain = document.querySelector('.table-main');
const closeModal = document.querySelector('.closeModal');

const dataContainer = document.querySelector('.info-modal')

tableMain.addEventListener('click',  e => {
    if (!e.target.matches('.card')) return;
    let test = Number(e.target.id);
    console.log(`target: ${Number(e.target.id)}`)
        for(let i = 0; i < data.elements.length; i++) {
            let i = test;
            const dataDisplay = document.querySelector('.data');
            let html =`
            <h1>${data.elements[i].name}</h1>
            <img src="${data.elements[i].image.url}" />
            <p>${data.elements[i].summary}</p>
            <div class="card-stats">
            <img class="bmi" src="${data.elements[i].bohr_model_image}" />
                <ul>
                    <li><span>Number: </span>${data.elements[i].number}</li>
                    <li><span>Phase: </span>${data.elements[i].phase}</li>
                    <li><span>Catagory: </span>${data.elements[i].category}</li>
                    <li><span>Mass: </span>${data.elements[i].atomic_mass}</li>
                </ul>
            </div>
            `
            dataDisplay.innerHTML = html;
            }
            dataContainer.classList.remove('hidden')
            
        }, {capture: true});

    closeModal.addEventListener('click', () => {
        dataContainer.classList.add('hidden');
        test = '';
    });
}

