let result = document.getElementById('result');
let plusEins = document.getElementById('plus_eins');
let minusEins = document.getElementById('minus_eins');
let plusZehn = document.getElementById('plus_zehn');
let minusZehn = document.getElementById('minus_zehn');
let plusHundert = document.getElementById('plus_hundert');
let minusHundert = document.getElementById('minus_hundert');
let malZwei = document.getElementById('mal_zwei');

let reset = document.getElementById('reset');

let start = 0;

plusEins.addEventListener('click', function () {
    start = start + 1;
    result.innerHTML = start;
})

minusEins.addEventListener('click', function () {
    start = start - 1;
    result.innerHTML = start;
})

plusZehn.addEventListener('click', function () {
    start = start + 10;
    result.innerHTML = start;
})

minusZehn.addEventListener('click', function () {
    start = start - 10;
    result.innerHTML = start;
})

plusHundert.addEventListener('click', function () {
    start = start + 100;
    result.innerHTML = start;
})

minusHundert.addEventListener('click', function () {
    start = start - 100;
    result.innerHTML = start;
})

malZwei.addEventListener('click', function () {
    start = start * 2;
    result.innerHTML = start;
})

reset.addEventListener('click', function () {
    start = 0;
    result.innerHTML = start;
})