(function(){

    'use strict'

    document.getElementById('genrate').addEventListener('submit', function(e){
        e.preventDefault();

        const chars = parseFloat(document.getElementById('n_field').value); //gets number from textfield
        const answer = document.getElementById('answer');

        if(chars) {

//           const conversion = (chars * 1.609344).toFixed(3);

            const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
            'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8' ,'9',
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ':',
            ';', '"', "'", '<', '>', ',', '.', '?', '/'];

            function generateRandomPassword(n_letters) {
            let final_pass = [];
            for (let ch = 1; ch <= n_letters; ch++) {
            final_pass.push(alpha[Math.floor(Math.random() * alpha.length)]);
            }
            // JavaScript arrays have a built-in method to shuffle
            final_pass.sort(() => Math.random() - 0.5);
            let final_rand_password = final_pass.join('');
            return final_rand_password;
            }

            answer.innerHTML = `<h2>${generateRandomPassword(chars)}</h2>`;
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