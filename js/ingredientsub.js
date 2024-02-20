let ingredientsToSub =  {
    "allspice" : {
        "name": "allspice",
        "amount": "1 tsp",
        "substitute1": "1/2 teaspoon cinnamon", 
        "substitute2": "1/4 teaspoon ginger",
        "substitute3": "1/4 teaspoon cloves"
    },
    "arrowroot starch" :{
        "name" : "arrowroot starch",
        "amount": "1 tsp",
        "substitute1": "1 tablespoon flour", 
        "substitute2": "1 teaspoon cornstarch"
    },
    "baking mix" :{
        "name" : "baking mix",
        "amount": "1 cup",
        "substitute1": "1 cup pancake mix"
    },
    "baking powder" :{
        "name" : "baking powder",
        "amount": "1 tsp",
        "substitute1": "1/4 teaspoon baking soda plus 1/2 teaspoon cream of tartar", 
        "substitute2": "1/4 teaspoon baking soda plus 1/2 cup buttermilk (decrease liquid in recipe by 1/2 cup)"
    },
}

const display = document.getElementById('display-data');
const input = document.getElementById('input');


let displayIngSub = () => {
    let search = input.value;
    console.log('Search: ', search);
    
    let dataDisplay = Object.values(ingredientsToSub).filter((eventData) => {
        if(search === '') {
            return eventData;
        }else if (eventData.name.toLowerCase().includes(search.toLowerCase())) {
            return eventData;
        }
    }).map((object) => {
        const {name, amount, substitute1, substitute2, substitute3} = object;

        return`
        <div class="container">
        <h3>Ingredient: ${name}</h3>
        <p>Amount: ${amount}</p>
        <p>Sub: ${substitute1}</p>
        <p>Sub: ${substitute2}</p>
        <p>Sub: ${substitute3}</p>
        </div>
        `
    }).join('');

    display.innerHTML = dataDisplay;
}
displayIngSub();

input.addEventListener('input', () => {
    displayIngSub();
});
