//let score = "33abc"
let score = true;
//console.log(typeof score);

//another way of getting type of

//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NAN
// true => 1; false => 0

//let isLoggedIn = 1
let isLoggedIn = "waqar Khan"
let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);

// "" => false
//"waqar" => true

// let someNumber = 33

// let stringNumber = String(someNumber)

// //console.log(someNumber);

// console.log(typeof stringNumber);


// ********************oprations*********************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "khan"

let str3 = str1 + str2
//console.log(str3);
//console.log("1" + 2);
//console.log("1" + 2 +2);
//console.log(2 + 2 +"1");

let gameCounter = 100
//prefix increment
//gameCounter++;

//postfix increment
++gameCounter;
//console.log(gameCounter);

let x = 3
let y = x++;

console.log(`x:${x}, y:${y}`);

let a = 3;
let b = ++a;

console.log(`a:${a},b:${b}`);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment for knowing prefix and post fix