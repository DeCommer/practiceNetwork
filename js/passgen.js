(function(){

    'use strict'

    document.getElementById('convert').addEventListener('submit', function(e){
        e.preventDefault();

        const chars = parseFloat(document.getElementById('distance').value); //gets number from textfield
        const answer = document.getElementById('answer');

        if(chars) {

            const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
            'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8' ,'9',
            '!', '@', '#', '$', '%', '&', '*', '?', '~']
    
            const final_pass = []

//           const conversion = (chars * 1.609344).toFixed(3);

            function shuffle(array) {
                let currentIndex = array.length,  randomIndex;
            
                // While there remain elements to shuffle.
                while (currentIndex > 0) {
            
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
            
                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
                return array;
            }

            answer.innerHTML = `<h2>${shuffle(array)}</h2>`;
        } 

        else {
            answer.innerHTML = '<h2>Enter a number</h2>';
        }
    });

})();


// for ch in range(1, n_letters + 1):
//     final_pass.append(random.choice(alpha))

// random.shuffle(final_pass)
// final_rand_password = ""

// for char in final_pass:
//     final_rand_password += char

// print(final_rand_password)