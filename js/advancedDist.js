let convertType = "miles";
const heading = document.querySelector('h1');
const intro = document.querySelector('p');
const answerDiv = document.getElementById('convert');
const form = document.getElementById('convert');
const instruct = document.getElementById('instructions');

document.addEventListener('keydown', function(e) {
    let key = e.code
    if(key == 'KeyK') {
        convertType = 'kilometers';
        heading.innerHTML = "Kilometers to Miles Converter"
        intro.innerHTML = "Type in a number to convert Km to Mi"
        
    } else if( key == 'KeyM') {
        convertType = 'miles';
        heading.innerHTML = "Miles to Kilometer Converter"
        intro.innerHTML = "Type in a number to convert Mi to Km"
    }
});
form.addEventListener('submit', function(e){
    e.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    if(distance) {
        if(convertType == "miles") {
            const converted = (distance * 1.609344).toFixed(3);
            answer.innerHTML = `${distance} miles equals ${converted} kilometers`;
        }
        else {
            const converted = (distance * 0.621371192).toFixed(3);
            answer.innerHTML = `${distance} kilometers equals ${converted} miles`
        }
    }
    else {
        instruct.innerHTML = "<p>Enter a number</p>";
        answerDiv.reset();
        setTimeout(() => {
            const element = instruct.innerHTML = "<p>Press k for kilometer conversion or m for mile conversion</p>";
            element.remove();
        }, 1200);

    }
});
