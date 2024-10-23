export default function planets() {
    fetch("./assets/json/planets.json")
.then(response => response.json())
.then(planetData => displayPlanets(planetData));

const displayPlanets = (planetData) => {
    console.log(planetData.planets[0].sectors[3]);
}
  }