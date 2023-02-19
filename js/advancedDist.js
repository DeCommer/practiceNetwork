

var convertType = "miles";
var heading = document.querySelector('h1');
var intro = document.querySelector('p');
var answerDiv = document.getElementById('convert');
var form = document.getElementById('convert');

document.addEventListener('keydown', function(e) {
    var key = e.code

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

    var distance = parseFloat(document.getElementById('distance').value);

    if(distance) {
        if(convertType == "miles") {
            var converted = (distance * 1.609344).toFixed(3);
        }
    }
    else {
        answerDiv.innerHTML = "<h2>Enter a number</h2>";
    }


});
