fetch("https://decommer.github.io/practiceNetwork/assets/notes.json")
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data) {

    const display = document.getElementById('display-data');
    const input = document.getElementById('input');
    const enterBtn = document.querySelector('.btn');
    const close = document.querySelector('.results-wrapper');

    let displayIngSub = () => {
        let search = input.value;
        
        let dataDisplay = Object.values(data).filter((eventData) => {
            if(search === '') {
                return '';
            }else if (eventData.name.toLowerCase().includes(search.toLowerCase())) {
                return eventData;
            }
        }).map((object) => {
            const {name, amount, substitute1, substitute2, substitute3} = object;
            if (substitute3 === undefined) {
                return`
                <div class="container">
                <p class="close">x</p>
                <h3>Ingredient: <span class="ingredient-span">${name}</span></h3>
                <p><span>Amount: </span> ${amount}</p>
                <p><span>You can substitute with: </span> ${substitute1}</p>
                <p><span>or with: </span> ${substitute2}</p>
                </div>
                `
            }else {
                return`
                <div class="container">
                <p class="close">x</p>
                <h3>Ingredient: <span class="ingredient-span">${name}</span></h3>
                <p><span>Amount: </span> ${amount}</p>
                <p><span>You can substitute with:  </span> ${substitute1}</p>
                <p><span>or with: </span> ${substitute2}</p>
                <p><span>or with: </span> ${substitute3}</p>
                </div>
                `
            }
        }).join('');

        display.innerHTML = dataDisplay;
    }
    displayIngSub();

    enterBtn.addEventListener('click', () => {
        document.getElementById('hidden').classList.remove('hide')
        displayIngSub();
        input.value = '';
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
        console.log('Enter key pressed!');
        document.getElementById('hidden').classList.remove('hide')
        displayIngSub();
        input.value = '';
        }
    });

    close.addEventListener('click', () => {
        document.getElementById('hidden').classList.add('hide')
        display.innerHTML = '';
    });
}


