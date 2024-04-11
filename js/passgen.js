const enterBtn = document.getElementById('enter_btn');

enterBtn.addEventListener('click', () => {
    const chars = parseFloat(document.getElementById('input').value);
    const result = document.getElementById('result-txt');   


    if(chars > 50) {
        result.textContent = `Enter number below 50 characters.`
    }else if(chars) {
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
        result.innerHTML = `<h2 class="result-txt">${generateRandomPassword(chars)}</h2>`;
    } 
    else {
        result.innerHTML = '<h2>Enter a number</h2>';
    }
});
