'use strict';

let height = [78, 92];
let weight = [1.69, 1.95]; 

height = [95, 85];
weight = [1.88, 1.76];

const imcB = height[0] / (weight[0] * weight[0]);
const imcM = height[1] / (weight[1] * weight[1]);

console.log(imcB, imcM);

if (imcB > imcM) {
    console.log("Bernard a un IMC ",imcB.toFixed(1)," plus élevé que Marcel ",imcM.toFixed(1));
} else {
    console.log("Marcel a un IMC ",imcM.toFixed(1)," plus élevé que Bernard",imcB.toFixed(1));
}

if (imcB < 23) {
    console.log("Bernard: Insuffisance pondérale");

} else if (imcB < 28) {
    console.log("Bernard: Poids normal");

} else if (imcB || imcM < 33) {
    console.log("Bernard: Surpoids");

} else if (imcB || imcM < 43) {
    console.log("Bernard: Obésité");

} else if (imcB || imcM >= 43) {
    console.log("Bernard: Obésité importante");
}

if (imcM < 23) {
    console.log("Marcel: Insuffisance pondérale");

} else if (imcB < 28) {
    console.log("Marcel: Poids normal");

} else if (imcB || imcM < 33) {
    console.log("Marcel: Surpoids");

} else if (imcB || imcM < 43) {
    console.log("Marcel: Obésité");

} else if (imcB || imcM >= 43) {
    console.log("Marcel: Obésité importante");
}