export default function planets() {
    fetch("./assets/json/planets.json")
    .then(response => response.json())
    .then(planetData => displayPlanets(planetData));

    const planetNameText = document.getElementById("planet-name-txt");
    const sectorNameText = document.getElementById("sector-name-txt");
    const placeBtn_0 = document.getElementById("place-btn-0");
    const placeBtn_1 = document.getElementById("place-btn-1");
    const placeBtn_2 = document.getElementById("place-btn-2");
    const placeBtn_3 = document.getElementById("place-btn-3");
    const spaceshipBtn = document.getElementById("place-btn-ship");
    const spaceshipModal = document.getElementById("space-ship-modal");
    const overlay = document.querySelector(".overlay");

    const planet0Btn = document.getElementById("planet0");
    const planet1Btn = document.getElementById("planet1");
    const planet2Btn = document.getElementById("planet2");

    let timeUnits = document.getElementById("time-units-text");
    let money = document.getElementById("money-text");
    let bank = document.getElementById("bank-text");
    let debt = document.getElementById("debt-text");

    let moneyValue = 1000;
    let bankValue = 0.00;
    let debitValue = 500;
    
    function displaySpaceshipModal() {
        overlay.style.display = "block";
        spaceshipModal.classList.remove("hide");
        spaceshipModal.style.position = 'fixed';
        spaceshipModal.style.top = `-${document.body.scrollY}px`;
    };
    
    function closeModal() {
        const closeImageBtn = document.querySelector('.close-input-modal');
        closeImageBtn.addEventListener('click', () => {
            overlay.style.display = "none";
            spaceshipModal.classList.add('hide');
        });
    }
    
    let message = document.getElementById("message-text");
    
    function displayPlanets(planetData) {
        timeUnits.innerText = 30;
        money.innerText = moneyValue + debitValue;
        bank.innerText = bankValue;
        debt.innerText = debitValue;
        let currentPlanet = planetData.planets[0];
        planetSwitch();

        placeBtn_0.addEventListener('click', () => {
            message.innerHTML = `<p>You have traveled to ${planetData.planets[0].sectors[0]}</P>`;
            sectorNameText.innerHTML = planetData.planets[0].sectors[0];
            placeBtn_0.classList.add("active");
            placeBtn_1.classList.remove("active");
            placeBtn_2.classList.remove("active");
            placeBtn_3.classList.remove("active");
            timeUnits.innerText --;
        });
        placeBtn_1.addEventListener('click', () => {
            message.innerHTML = `<p>You have traveled to ${planetData.planets[0].sectors[1]}</P>`;
            sectorNameText.innerHTML = planetData.planets[0].sectors[1];
            placeBtn_0.classList.remove("active");
            placeBtn_1.classList.add("active");
            placeBtn_2.classList.remove("active");
            placeBtn_3.classList.remove("active");
            timeUnits.innerText --;
        });
        placeBtn_2.addEventListener('click', () => {
            message.innerHTML = `<p>You have traveled to ${planetData.planets[0].sectors[2]}</P>`;
            sectorNameText.innerHTML = planetData.planets[0].sectors[2];
            placeBtn_0.classList.remove("active");
            placeBtn_1.classList.remove("active");
            placeBtn_2.classList.add("active");
            placeBtn_3.classList.remove("active");
            timeUnits.innerText --;
        });
        placeBtn_3.addEventListener('click', () => {
            message.innerHTML = `<p>You have traveled to ${planetData.planets[0].sectors[3]}</P>`;
            sectorNameText.innerHTML = planetData.planets[0].sectors[3];
            placeBtn_0.classList.remove("active");
            placeBtn_1.classList.remove("active");
            placeBtn_2.classList.remove("active");
            placeBtn_3.classList.add("active");
            timeUnits.innerText --;
        });

        spaceshipBtn.addEventListener('click', () => {
            displaySpaceshipModal();
            closeModal();
        });

        planet0Btn.addEventListener('click', () => {
            currentPlanet = planetData.planets[0];
            placeBtn_0.classList.add("active");
            placeBtn_1.classList.remove("active");
            placeBtn_2.classList.remove("active");
            placeBtn_3.classList.remove("active");
            planetSwitch();
            overlay.style.display = "none";
            spaceshipModal.classList.add('hide');
            timeUnits.innerText -= 3;
        });
        planet1Btn.addEventListener('click', () => {
            currentPlanet = planetData.planets[1];
            placeBtn_0.classList.add("active");
            placeBtn_1.classList.remove("active");
            placeBtn_2.classList.remove("active");
            placeBtn_3.classList.remove("active");
            planetSwitch();
            overlay.style.display = "none";
            spaceshipModal.classList.add('hide');
            timeUnits.innerText -= 2;
        });
        planet2Btn.addEventListener('click', () => {
            currentPlanet = planetData.planets[2];
            placeBtn_0.classList.add("active");
            placeBtn_1.classList.remove("active");
            placeBtn_2.classList.remove("active");
            placeBtn_3.classList.remove("active");
            planetSwitch();
            overlay.style.display = "none";
            spaceshipModal.classList.add('hide');
            timeUnits.innerText -= 5;
        });

        function planetSwitch() {
            if(currentPlanet === planetData.planets[0]) {
                planet0Btn.disabled = true;
                planet1Btn.disabled = false;
                planet2Btn.disabled = false;
                planetNameText.innerHTML = planetData.planets[0].name;
                sectorNameText.innerHTML = planetData.planets[0].sectors[0]; 
                placeBtn_0.innerHTML = planetData.planets[0].sectors[0];
                placeBtn_1.innerHTML = planetData.planets[0].sectors[1];
                placeBtn_2.innerHTML = planetData.planets[0].sectors[2];
                placeBtn_3.innerHTML = planetData.planets[0].sectors[3];
                placeBtn_0.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[0].sectors[0]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[0].sectors[0];
                    placeBtn_0.classList.add("active");
                    placeBtn_1.classList.remove("active");
                    placeBtn_2.classList.remove("active");
                    placeBtn_3.classList.remove("active");
                });
                placeBtn_1.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[0].sectors[1]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[0].sectors[1];
                    placeBtn_0.classList.remove("active");
                    placeBtn_1.classList.add("active");
                    placeBtn_2.classList.remove("active");
                    placeBtn_3.classList.remove("active");
                });
                placeBtn_2.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[0].sectors[2]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[0].sectors[2];
                    placeBtn_0.classList.remove("active");
                    placeBtn_1.classList.remove("active");
                    placeBtn_2.classList.add("active");
                    placeBtn_3.classList.remove("active");
                });
                placeBtn_3.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[0].sectors[3]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[0].sectors[3];
                    placeBtn_0.classList.remove("active");
                    placeBtn_1.classList.remove("active");
                    placeBtn_2.classList.remove("active");
                    placeBtn_3.classList.add("active");
                });

            }else if(currentPlanet === planetData.planets[1]) {
                planet0Btn.disabled = false;
                planet1Btn.disabled = true;
                planet2Btn.disabled = false;
                planetNameText.innerHTML = planetData.planets[1].name;
                sectorNameText.innerHTML = planetData.planets[1].sectors[0];
                placeBtn_0.innerHTML = planetData.planets[1].sectors[0];
                placeBtn_1.innerHTML = planetData.planets[1].sectors[1];
                placeBtn_2.innerHTML = planetData.planets[1].sectors[2];
                placeBtn_3.innerHTML = planetData.planets[1].sectors[3];
                placeBtn_0.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[1].sectors[0]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[1].sectors[0];
                    placeBtn_0.classList.add("active");
                    placeBtn_1.classList.remove("active");
                    placeBtn_2.classList.remove("active");
                    placeBtn_3.classList.remove("active");
                });
                placeBtn_1.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[1].sectors[1]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[1].sectors[1];
                    placeBtn_0.classList.remove("active");
                    placeBtn_1.classList.add("active");
                    placeBtn_2.classList.remove("active");
                    placeBtn_3.classList.remove("active");
                });
                placeBtn_2.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[1].sectors[2]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[1].sectors[2];
                    placeBtn_0.classList.remove("active");
                    placeBtn_1.classList.remove("active");
                    placeBtn_2.classList.add("active");
                    placeBtn_3.classList.remove("active");
                });
                placeBtn_3.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[1].sectors[3]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[1].sectors[3];
                    placeBtn_0.classList.remove("active");
                    placeBtn_1.classList.remove("active");
                    placeBtn_2.classList.remove("active");
                    placeBtn_3.classList.add("active");
                });

            }else if(currentPlanet === planetData.planets[2]) {
                planet0Btn.disabled = false;
                planet1Btn.disabled = false;
                planet2Btn.disabled = true;
                planetNameText.innerHTML = planetData.planets[2].name;
                sectorNameText.innerHTML = planetData.planets[2].sectors[0];
                placeBtn_0.innerHTML = planetData.planets[2].sectors[0];
                placeBtn_1.innerHTML = planetData.planets[2].sectors[1];
                placeBtn_2.innerHTML = planetData.planets[2].sectors[2];
                placeBtn_3.innerHTML = planetData.planets[2].sectors[3];
                placeBtn_0.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[2].sectors[0]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[2].sectors[0];
                    placeBtn_0.classList.add("active");
                    placeBtn_1.classList.remove("active");
                    placeBtn_2.classList.remove("active");
                    placeBtn_3.classList.remove("active");
                });
                placeBtn_1.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[2].sectors[1]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[2].sectors[1];
                    placeBtn_0.classList.remove("active");
                    placeBtn_1.classList.add("active");
                    placeBtn_2.classList.remove("active");
                    placeBtn_3.classList.remove("active");
                });
                placeBtn_2.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[2].sectors[2]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[2].sectors[2];
                    placeBtn_0.classList.remove("active");
                    placeBtn_1.classList.remove("active");
                    placeBtn_2.classList.add("active");
                    placeBtn_3.classList.remove("active");
                });
                placeBtn_3.addEventListener('click', () => {
                    message.innerHTML = `<p>You have traveled to ${planetData.planets[2].sectors[3]}</P>`;
                    sectorNameText.innerHTML = planetData.planets[2].sectors[3];
                    placeBtn_0.classList.remove("active");
                    placeBtn_1.classList.remove("active");
                    placeBtn_2.classList.remove("active");
                    placeBtn_3.classList.add("active");
                });
            }
        }
    }
}