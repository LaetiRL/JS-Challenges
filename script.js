'use strict';

let price = 275;
price = 40;
//price = 430;

if (price >= 50 && price <= 300) {
    let tip = (15 * price) / 100;
    console.log("La note était de ",price,", le pourboire de ",tip," et la valeur totale était de ", price + tip)
} else {
    let tip = (20 * price) / 100;
    console.log("La note était de ",price,", le pourboire de ",tip," et la valeur totale était de ", price + tip)
}

let tip;

price >= 50 && price <= 300 ? tip = (15 * price) / 100 : tip = (20 * price) / 100;

console.log("La note était de ",price,", le pourboire de ",tip," et la valeur totale était de ", price + tip);