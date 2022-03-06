'use strict';

const bernard = {
    firstname : "Bernard",
    weight : 78,
    height : 1.69,
    calcBMI : function (){
        const imcB = this.weight / (this.height * this.height);
        return imcB.toFixed(1);
    },
}

const marcel = {
    firstname : "Marcel",
    weight : 92,
    height : 1.95,
    calcBMI : function (){
        const imcM = this.weight / (this.height * this.height)
        return imcM.toFixed(1);
    },
}

bernard.weight = 95;
bernard.height = 1.88;
marcel.weight = 85;
marcel.height = 1.76;

if (bernard.calcBMI> marcel.calcBMI) {
    console.log(`L’IMC de Bernard (${bernard.calcBMI()}) est plus élevé que celui de Marcel (${marcel.calcBMI()})`);
} else {
    console.log(`L’IMC de Marcel (${marcel.calcBMI()}) est plus élevé que celui de Bernard (${bernard.calcBMI()})`);
}