(function(){

    'use strict'

    document.getElementById('convert').addEventListener('submit', function(e){
        e.preventDefault();

        const dist = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');

        if(dist) {
            const conversion = (dist * 1.609344).toFixed(3);
            answer.innerHTML = `<h2>${dist} miles is ${conversion} kilometers </h2>`;
        } 
        else {
            answer.innerHTML = '<h2>Enter a number</h2>';
        }
    });

})();