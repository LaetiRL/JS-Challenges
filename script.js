'use strict';

let dRes = [44, 23, 71];
let kRes = [65, 54, 49];

dRes = [85, 54, 41];
kRes = [23, 34, 27];



const calcAverage = array => {
    let sum = array[0] + array[1] + array[2];
    let res = Math.round(sum / 3);
    return res;
};

console.log(calcAverage(dRes));
console.log(calcAverage(kRes));


function checkWinner (dauphin, koala) {

    if (dauphin > koala) {
        console.log(`L’équipe Dauphin gagne! (${dauphin} vs ${koala}).`);
    } 
    else if (dauphin < koala) {
       console.log(`L’équipe Koala gagne! (${koala} vs ${dauphin}).`);
    }

}

checkWinner(calcAverage(dRes), calcAverage(kRes));