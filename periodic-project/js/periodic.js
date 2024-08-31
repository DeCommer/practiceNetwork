fetch("./assets/periodicdata.json")
.then(response => response.json())
.then(data => displayElements(data));

const cards = document.querySelectorAll('.card')

const modal = document.getElementById('info-modal-id');

const displayElements = (data) => {
    const tableMain = document.querySelector('.table-main');
    const closeModal = document.querySelector('.closeModal');
    const dataContainer = document.querySelector('.info-modal')

    tableMain.addEventListener('click',  e => {
        if (!e.target.matches('.card')) return;
        let elemId = Number(e.target.id);
        // console.log(e.target.id)
        for(let i = 0; i < data.elements.length; i++) {
                let i = elemId;
                const dataDisplay = document.querySelector('.data');
                let html =`
                <h1>${data.elements[i].name}</h1>
                <img src="${data.elements[i].image.url}" />
                <p>${data.elements[i].summary}</p>
                <a class="info-link" href="${data.elements[i].source}" target="_blank" >Learn more!</a>
                <div class="card-stats">
                    <img class="bmi" src="${data.elements[i].bohr_model_image}" />
                    <ul>
                        <li><span class="span">Number: </span>${data.elements[i].number}</li>
                        <li><span class="span">Phase: </span>${data.elements[i].phase}</li>
                        <li><span class="span">Catagory: </span>${data.elements[i].category}</li>
                        <li><span class="span">Mass: </span>${data.elements[i].atomic_mass}</li>
                    </ul>
                </div>
                `
                dataDisplay.innerHTML = html;
            }
            
        dataContainer.showModal()

        if(elemId > 0) {
            modal.style.position = 'fixed';
            modal.style.top = `-${document.body.scrollY}px`;
        }
    },{capture: true});

    closeModal.addEventListener('click', () => {
        dataContainer.close();
        elemId = '';
    });
}

//Key functionality
const key1 = document.querySelector('.key-1');
const key2 = document.querySelector('.key-2');
const key3 = document.querySelector('.key-3');
const key4 = document.querySelector('.key-4');
const key5 = document.querySelector('.key-5');
const key6 = document.querySelector('.key-6');
const key7 = document.querySelector('.key-7');
const key8 = document.querySelector('.key-8');
const key9 = document.querySelector('.key-9');
const key10 = document.querySelector('.key-10');


const amKey = document.getElementById('am-key').addEventListener('click', () => {
    cards.forEach(card => {
        if(!card.classList.contains('alkali-metals')) {
            if(card.classList.contains('muted')) {
                card.classList.remove('muted');
                key2.classList.remove('off');
                key3.classList.remove('off');
                key4.classList.remove('off');
                key5.classList.remove('off');
                key6.classList.remove('off');
                key7.classList.remove('off');
                key8.classList.remove('off');
                key9.classList.remove('off');
                key10.classList.remove('off');
            } else {
                card.classList.toggle('muted');
                key2.classList.add('off');
                key3.classList.add('off');
                key4.classList.add('off');
                key5.classList.add('off');
                key6.classList.add('off');
                key7.classList.add('off');
                key8.classList.add('off');
                key9.classList.add('off');
                key10.classList.add('off');
            }
        }
    });
});
document.getElementById('ae-key').addEventListener('click', () => {
    cards.forEach(card => {
        if(!card.classList.contains('alkali-earth-metals')) {
            if(card.classList.contains('muted')) {
                card.classList.remove('muted');
                key1.classList.remove('off');
                key3.classList.remove('off');
                key4.classList.remove('off');
                key5.classList.remove('off');
                key6.classList.remove('off');
                key7.classList.remove('off');
                key8.classList.remove('off');
                key9.classList.remove('off');
                key10.classList.remove('off');
            } else {
                card.classList.add('muted');
                key1.classList.add('off');
                key3.classList.add('off');
                key4.classList.add('off');
                key5.classList.add('off');
                key6.classList.add('off');
                key7.classList.add('off');
                key8.classList.add('off');
                key9.classList.add('off');
                key10.classList.add('off');
            }
        }
    });
});
document.getElementById('tm-key').addEventListener('click', () => {
    cards.forEach(card => {
        if(!card.classList.contains('trans-metals')) {
            if(card.classList.contains('muted')) {
                card.classList.remove('muted');
                key1.classList.remove('off');
                key2.classList.remove('off');
                key4.classList.remove('off');
                key5.classList.remove('off');
                key6.classList.remove('off');
                key7.classList.remove('off');
                key8.classList.remove('off');
                key9.classList.remove('off');
                key10.classList.remove('off');
            } else {
                card.classList.add('muted');
                key1.classList.add('off');
                key2.classList.add('off');
                key4.classList.add('off');
                key5.classList.add('off');
                key6.classList.add('off');
                key7.classList.add('off');
                key8.classList.add('off');
                key9.classList.add('off');
                key10.classList.add('off');
            }
        }
    });
});
document.getElementById('pm-key').addEventListener('click', () => {
    cards.forEach(card => {
        if(!card.classList.contains('post-metals')) {
            if(card.classList.contains('muted')) {
                card.classList.remove('muted');
                key1.classList.remove('off');
                key2.classList.remove('off');
                key3.classList.remove('off');
                key5.classList.remove('off');
                key6.classList.remove('off');
                key7.classList.remove('off');
                key8.classList.remove('off');
                key9.classList.remove('off');
                key10.classList.remove('off');
            } else {
                card.classList.add('muted');
                key1.classList.add('off');
                key2.classList.add('off');
                key3.classList.add('off');
                key5.classList.add('off');
                key6.classList.add('off');
                key7.classList.add('off');
                key8.classList.add('off');
                key9.classList.add('off');
                key10.classList.add('off');
            }
        }
    });
});
document.getElementById('ml-key').addEventListener('click', () => {
    cards.forEach(card => {
        if(!card.classList.contains('metalloids')) {
            if(card.classList.contains('muted')) {
                card.classList.remove('muted');
                key1.classList.remove('off');
                key2.classList.remove('off');
                key3.classList.remove('off');
                key4.classList.remove('off');
                key6.classList.remove('off');
                key7.classList.remove('off');
                key8.classList.remove('off');
                key9.classList.remove('off');
                key10.classList.remove('off');
            } else {
                card.classList.add('muted');
                key1.classList.add('off');
                key2.classList.add('off');
                key3.classList.add('off');
                key4.classList.add('off');
                key6.classList.add('off');
                key7.classList.add('off');
                key8.classList.add('off');
                key9.classList.add('off');
                key10.classList.add('off');
            }
        }
    });
});
document.getElementById('rnm-key').addEventListener('click', () => {
    cards.forEach(card => {
        if(!card.classList.contains('reactive-nonmetals')) {
            if(card.classList.contains('muted')) {
                card.classList.remove('muted');
                key1.classList.remove('off');
                key2.classList.remove('off');
                key3.classList.remove('off');
                key4.classList.remove('off');
                key5.classList.remove('off');
                key7.classList.remove('off');
                key8.classList.remove('off');
                key9.classList.remove('off');
                key10.classList.remove('off');
            } else {
                card.classList.add('muted');
                key1.classList.add('off');
                key2.classList.add('off');
                key3.classList.add('off');
                key4.classList.add('off');
                key5.classList.add('off');
                key7.classList.add('off');
                key8.classList.add('off');
                key9.classList.add('off');
                key10.classList.add('off');
            }
        }
    });
});
document.getElementById('ng-key').addEventListener('click', () => {
    cards.forEach(card => {
        if(!card.classList.contains('noble-gas')) {
            if(card.classList.contains('muted')) {
                card.classList.remove('muted');
                key1.classList.remove('off');
                key2.classList.remove('off');
                key3.classList.remove('off');
                key4.classList.remove('off');
                key5.classList.remove('off');
                key6.classList.remove('off');
                key8.classList.remove('off');
                key9.classList.remove('off');
                key10.classList.remove('off');
            } else {
                card.classList.add('muted');
                key1.classList.add('off');
                key2.classList.add('off');
                key3.classList.add('off');
                key4.classList.add('off');
                key5.classList.add('off');
                key6.classList.add('off');
                key8.classList.add('off');
                key9.classList.add('off');
                key10.classList.add('off');
            }
        }
    });
});
document.getElementById('la-key').addEventListener('click', () => {
    cards.forEach(card => {
        if(!card.classList.contains('lanthanides')) {
            if(card.classList.contains('muted')) {
                card.classList.remove('muted');
                key1.classList.remove('off');
                key2.classList.remove('off');
                key3.classList.remove('off');
                key4.classList.remove('off');
                key5.classList.remove('off');
                key6.classList.remove('off');
                key7.classList.remove('off');
                key9.classList.remove('off');
                key10.classList.remove('off');
            } else {
                card.classList.add('muted');
                key1.classList.add('off');
                key2.classList.add('off');
                key3.classList.add('off');
                key4.classList.add('off');
                key5.classList.add('off');
                key6.classList.add('off');
                key7.classList.add('off');
                key9.classList.add('off');
                key10.classList.add('off');
            }
        }
    });
});
document.getElementById('ac-key').addEventListener('click', () => {
    cards.forEach(card => {
        if(!card.classList.contains('actinides')) {
            if(card.classList.contains('muted')) {
                card.classList.remove('muted');
                key1.classList.remove('off');
                key2.classList.remove('off');
                key3.classList.remove('off');
                key4.classList.remove('off');
                key5.classList.remove('off');
                key6.classList.remove('off');
                key7.classList.remove('off');
                key8.classList.remove('off');
                key10.classList.remove('off');
            } else {
                card.classList.add('muted');
                key1.classList.add('off');
                key2.classList.add('off');
                key3.classList.add('off');
                key4.classList.add('off');
                key5.classList.add('off');
                key6.classList.add('off');
                key7.classList.add('off');
                key8.classList.add('off');
                key10.classList.add('off');
            }
        }
    });
});
document.getElementById('un-key').addEventListener('click', () => {
    cards.forEach(card => {
        if(!card.classList.contains('unknown')) {
            if(card.classList.contains('muted')) {
                card.classList.remove('muted');
                key1.classList.remove('off');
                key2.classList.remove('off');
                key3.classList.remove('off');
                key4.classList.remove('off');
                key5.classList.remove('off');
                key6.classList.remove('off');
                key7.classList.remove('off');
                key8.classList.remove('off');
                key9.classList.remove('off');
            } else {
                card.classList.add('muted');
                key1.classList.add('off');
                key2.classList.add('off');
                key3.classList.add('off');
                key4.classList.add('off');
                key5.classList.add('off');
                key6.classList.add('off');
                key7.classList.add('off');
                key8.classList.add('off');
                key9.classList.add('off');
            }
        }
    });
});

