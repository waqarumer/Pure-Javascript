const score = 400
// javascript default type of script as number 

//u can also define specifically as number 

const balance = new Number(100)

//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 23.46978

console.log(otherNumber.toPrecision(2));

const hundreds = 100000

//console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++ Maths +++++++++++++++++++++++++++


//console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,6,2,8));
// console.log((Math.max(5,9,3,1,7,8)));

console.log(Math.random());
console.log(Math.random() * 10 + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);