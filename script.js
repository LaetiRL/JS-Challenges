'use strict';

function calcTip(price) {

    let tip = 0;
    if (price >= 50 && price <= 300) {
        tip = (15 * price) / 100;
    } else {
        tip = (20 * price) / 100;
    }
    return tip;
}

//console.log(calcTip(100));

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

bills.forEach(element => {
    let res = calcTip(element);
    tips.push(res);
});

for(let i = 0; i < bills.length; i++){
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);


function calcAverage (array) {

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let res = Math.round(sum / array.length);
    return res;
};

console.log(calcAverage(bills));