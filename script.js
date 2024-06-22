const convert = document.getElementById("convert");
const result = document.getElementById("result");
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");

convert.addEventListener("click", function() {
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let amt = parseFloat(amount.value);

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            let rate = data.rates[toCurrency];
            let total = amt * rate;
            result.innerHTML = `${amt} ${fromCurrency} = ${total} ${toCurrency}`;
        });
});
const rates = {
    "USD": 63.49,
    "EUR": 72.20,
    "GBP": 85.12
};

const list = document.getElementById("list");

Object.keys(rates).forEach(key => {
    let rate = rates[key];
    let listItem = document.createElement("li");
    listItem.textContent = `${key} = ${rate} RUB`;
    list.appendChild(listItem);
});
