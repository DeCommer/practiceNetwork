const exchangeRates = {usd: 1};
const fromCurrency = document.querySelector('.converter-container #from');
const toCurrency = document.querySelector('.converter-container #to');
const inputAmount = document.querySelector('.converter-container .input-amount');
const result = document.querySelector('.converter-container .result');
const swapBtn = document.querySelector('.converter-container .swap-btn');

const floatratesUrl = 'http://floatrates.com/daily/usd.json'
const init = async () => {
    try {
        const res = await fetch(floatratesUrl);
        const data = await res.json();

        if(res.ok) {
            for (const currencyCode in data) {
                const currencyInfo = data[currencyCode];
                const { code, name} = currencyInfo;
                
                exchangeRates[currencyCode] = currencyInfo.rate;

                const option1 = document.createElement('option');
                option1.value = code;
                option1.textContent = `${code} - ${name}`;

                const option2 = option1.cloneNode(true);

                fromCurrency.appendChild(option1);
                toCurrency.appendChild(option2);
            }
            //console.log(exchangeRates);
            toCurrency.value = toCurrency.options[1].value;
            convert();
        }
    }catch (error){
        console.log("Error loading currencies")
    }
};

init();

const convert = () => {
    const inputValue = parseFloat(inputAmount.value);
    const fromCurrencyValue = fromCurrency.value.toLowerCase();
    const toCurrencyValue = toCurrency.value.toLowerCase();

    const convertedValue = (inputValue * exchangeRates[toCurrencyValue]) / exchangeRates[fromCurrencyValue];
    const resultValue = `<span class='result-currency'>${toCurrencyValue}</span> ${convertedValue.toFixed(2)}`;
    
    result.innerHTML = isNaN(convertedValue) ? "Enter amount above" : resultValue;
};

toCurrency.addEventListener('change', convert);
fromCurrency.addEventListener('change', convert);
inputAmount.addEventListener('input', convert);
swapBtn.addEventListener('click', () => {
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;

    fromCurrency.value = toCurrencyValue;
    toCurrency.value = fromCurrencyValue;

    convert();

});