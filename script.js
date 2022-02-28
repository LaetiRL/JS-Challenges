'use strict';

let dRes = [96, 108, 89];
let kRes = [88, 91, 110];

dRes = [97, 112, 101];
kRes = [109, 95, 123];

dRes = [97, 112, 101];
kRes = [109, 95, 106];

const dSum = dRes.reduce(function(a, b) {
    return a + b;
}, 0);
const kSum = kRes.reduce(function(a, b) {
    return a + b;
}, 0);

const dAverage = Math.round(dSum / 3);
const kAverage = Math.round(kSum / 3);
console.log(dAverage, kAverage);

if (dAverage > 100 || kAverage > 100) {
    if (dAverage > kAverage) {
        console.log("Les Dauphins gagnent!");
    } 
    else if (dAverage === kAverage) {
        console.log("Égalité");
    } 
    else {
        console.log("Les Koalas gagnent!");
    }
} 
else {
    console.log("Pas de gagnant");
}