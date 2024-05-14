const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");
const button = document.querySelector("#button");

runEventListener();

const currency = new Currency();

function runEventListener(){
    button.addEventListener("click", exchange);
}

function exchange(){
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

    currency.exchangeCurrency(amount, firstOptionValue, secondOptionValue)
    .then((result)=>{
        resultInput.value = result.toFixed(1);
    })
}