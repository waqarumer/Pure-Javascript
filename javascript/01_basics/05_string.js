const name = "waqar khan"

const repoCount = 50

//console.log(name + repoCount + "Value")

// use backticks advance method of using string 

// following is string interpulation

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// another way of declaring string

const gameName = new String('waqar khan');

//console.log(gameName);

//key value pair 

//console.log(gameName[1]);
//to see objects 

//console.log(gameName.__proto__);

//console.log(gameName.length);

//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//to find position of charecter

//console.log(gameName.indexOf('a'));

//to divide in substring 

const newString = gameName.substring(0 , 4);

//console.log(newString);

const anotherString = gameName.slice(-8,4)

//console.log(anotherString);

// trim function to reduce space 

const newStringTrim = "      hello world     "

//console.log(newStringTrim.trim());

// replace function 

const url = "httpsL//waqarkhan.com/waqar%20Khan";

console.log(url.replace('%20','_'));

const game_string = new String("waqar-khan");

console.log(game_string.split('-'));
