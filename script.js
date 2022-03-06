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

const bills = [125, 555, 44];
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