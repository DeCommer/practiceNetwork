

let detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();

    let destName = e.target.elements['name'].value;
    let destLocation = e.target.elements['location'].value;
    let destPhoto = e.target.elements['photo'].value;
    let destDescription = e.target.elements['description'].value;

    for(let i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
    }

    let destCard = createCard(destName, destLocation, destPhoto, destDescription);

    let titleChng = document.getElementById('destinations_container');

    if(titleChng.children.length === 0) {
        document.getElementById('title').innerHTML = "Wish my list!"
    }

    document.querySelector('#destinations_container').appendChild(destCard);
}

function createCard(name, location, photoURL, desc) {
    var card = document.createElement('div');
    card.className= 'card';

    let img = document.createElement('img');
    img.setAttribute('alt', name);

    let defaulPhotoUrl = "./assets/img/sample.jpg";

    if(photoURL.length === 0) {
        img.src = defaulPhotoUrl;
    }
    else {
        img.setAttribute('src', photoURL);
    }

    card.appendChild(img);

    let cardBod = document.createElement('div');
    cardBod.className = 'card-Body'; 

    let cardTitle = document.createElement("h3");
    cardTitle.innerHTML = name;
    cardBod.appendChild(cardTitle);

    let cardSubTitle = document.createElement('h4');
    cardSubTitle.innerText = location;
    cardBod.appendChild(cardSubTitle);

    if(desc.length !== 0) {
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = desc;
        cardBod.appendChild(cardText);
    }

    let cardDelete = document.createElement('button');
    cardDelete.innerHTML = 'Remove';

    cardDelete.addEventListener('click', removeDestination);
    cardBod.appendChild(cardDelete);

    card.appendChild(cardBod);

    return card;
}

function removeDestination(e) {
    let card = e.target.parentElement.parentElement;
    card.remove();
}

