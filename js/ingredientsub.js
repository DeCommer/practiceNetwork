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
    "baking soda" :{
        "name" : "baking soda",
        "amount": "1 tsp",
        "substitute1": "4 teaspoons baking powder", 
        "substitute2": "1 teaspoon potassium bicarbonate and 1/3 teaspoon salt. NOTE: If the recipe calls for an acidic liquid such as sour cream, yogurt, buttermilk, vinegar, molasses, or citrus juice, you should replace it with the same amount of whole milk"
    },
    "beer" :{
        "name" : "beer",
        "amount": "1 cup",
        "substitute1": "1 cup nonalcoholic beer", 
        "substitute2": "1 cup chicken broth"
    },
    "brandy" :{
        "name" : "brandy",
        "amount": "1/4 cup",
        "substitute1": "1 teaspoon imitation brandy extract plus enough water to make 1/4 cup"
    },
    "bread crumbs" :{
        "name" : "bread crumbs",
        "amount": "1 cup",
        "substitute1": "1 cup cracker crumbs", 
        "substitute2": "1 cup matzo meal",
        "substitute3": "1 cup ground oats"
    },
    "egg" :{
        "name" : "egg",
        "amount": "1 whole (3 tablespoons or 1.7 oz)",
        "substitute1": "2 1/2 tablespoons of powdered egg substitute plus 2 1/2 tablespoons water ", 
        "substitute2": "1/4 cup liquid egg substitute",
        "substitute3": "1/4 cup silken tofu pureed"
    },
}

data = ingredientsToSub;

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
            <h3>Ingredient: <span class="ingredient-span">${name}</span></h3>
            <p><span>Amount: </span> ${amount}</p>
            <p><span>You can substitute with: </span> ${substitute1}</p>
            <p><span>or with: </span> ${substitute2}</p>
            <p>Click to close</p>
            </div>
            `
        }else {
            return`
            <div class="container">
            <h3>Ingredient: <span class="ingredient-span">${name}</span></h3>
            <p><span>Amount: </span> ${amount}</p>
            <p><span>You can substitute with:  </span> ${substitute1}</p>
            <p><span>or with: </span> ${substitute2}</p>
            <p><span>or with: </span> ${substitute3}</p>
            <p>*Click to close</p>
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

close.addEventListener('click', () => {
    document.getElementById('hidden').classList.add('hide')
    display.innerHTML = '';
});
