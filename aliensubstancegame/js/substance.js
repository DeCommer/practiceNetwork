export default function substances() {
    fetch("./assets/json/substances.json")
    .then(response => response.json())
    .then(substanceData => substanceDealing(substanceData));

    const substanceDealing = (substanceData) => {
        console.log(substanceData.substances);
    }
}
