const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];
let juliaCorrected = juliaData.slice(1, 3);
let combinedData = [];
combinedData = juliaCorrected.concat(kateData);
const checkDogs = function(arr) {
    for(dog in combinedData) {
        combinedData[dog] > 3 ? console.log(`Dog number ${dog} is an adult, and is 
        ${combinedData[dog]} years old. `) : console.log(`Dog number ${dog} is still a puppy`)
    }
};
// console.log(combinedData);
console.log(checkDogs(combinedData));
//** I was close */

//****** correct way */
const checkDogs2 = function(dogsJul, dogsKat) {
    const dogsJulCorrected = dogsJul.slice();
    dogsJulCorrected.splice(0, 1);
    dogsJulCorrected.splice(-2);
    const dogs = dogsJulCorrected.concat(dogsKat);
    dogs.forEach(function(dog, i) {
        if(dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old. `);
        }else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }
    });
};

checkDogs2([3,5,2,12,7], [4, 1, 15, 8, 3])

