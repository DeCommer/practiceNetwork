const enterBtn = document.getElementById('enter_btn');
const copy = document.getElementById('copy-btn');
const clear = document.getElementById('clr_btn');
let progress = document.querySelector('.progress-bar');
let num = 0;
let total = 10;

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z',
'0', '1', '2', '3', '4', '5', '6', '7', '8' ,'9',
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ':',
';', '"', "'", '<', '>', ',', '.', '?', '/'];

const generateRandomPassword = (n_letters) => {
    let final_pass = [];
    for (let ch = 1; ch <= n_letters; ch++) {
    final_pass.push(alpha[Math.floor(Math.random() * alpha.length)]);
    }
    final_pass.sort(() => Math.random() - 0.5);
    let final_rand_password = final_pass.join('');
    return final_rand_password;
};

const progressBarFill = () => {
    let increment = 100 / total;
    let progress = document.querySelector('.progress-bar');
    let width = progress.style.width.replace('%', '');
    width = parseInt(width) + increment;
    width = (num / total) * 100+'%';
    progress.style.width = width;
};

enterBtn.addEventListener('click', () => {
    const chars = parseFloat(document.getElementById('input').value);
    const result = document.getElementById('result-txt');
    
    if(chars > 50) {
        message.innerHTML = '<h2>Enter number less than 50 characters.</h2>';
        reset();
    }else if(chars <= 5) {
        num = 1;
        progress.style.backgroundColor = '#c1121f'
        progressBarFill();
        result.innerHTML = `<h2 class="result-txt">${generateRandomPassword(chars)}</h2>`;
        copy.classList.remove('hide');
        console.log(num)
    }else if(chars >= 6 && chars <= 10) {
        num = 6;
        progress.style.backgroundColor = '#fddf00'
        progressBarFill();
        result.innerHTML = `<h2 class="result-txt">${generateRandomPassword(chars)}</h2>`;
        copy.classList.remove('hide');
        console.log(num)
    }else if(chars >= 11 && chars <= 25) {
        num = 8;
        progress.style.backgroundColor = '#42e31aff'
        progressBarFill();
        result.innerHTML = `<h2 class="result-txt">${generateRandomPassword(chars)}</h2>`;
        copy.classList.remove('hide');
        console.log(num)
    }else if(chars >= 26) {
        num = 10;
        progress.style.backgroundColor = '#42e31aff'
        progressBarFill();
        result.innerHTML = `<h2 class="result-txt">${generateRandomPassword(chars)}</h2>`;
        copy.classList.remove('hide');
        console.log(num)
    }else {
        message.innerHTML = '<h2>Enter a number</h2>';
        setTimeout(() =>{
            message.textContent = '';
        }, 1200);
    }
});

copy.addEventListener('click', () => {
    let copyText = document.getElementById("result-txt").textContent;
    let message = document.getElementById('message');
  
    navigator.clipboard.writeText(copyText)
      .then(function() {
        message.textContent = `✅ Password copied`
        setTimeout(() =>{
            message.textContent = '';
        }, 1500);
      })
      .catch(function(error) {
        console.log("Failed to copy text: " + error);
      });
  });

  const reset = () => {
    num = 0;
    progressBarFill();
    document.getElementById('input').value = "";
    result.innerHTML = `<h3 id="result-txt"></h3>`;
    message.innerHTML = '';
    copy.classList.add('hide');
  }

clear.addEventListener('click', () => {
    reset();
});