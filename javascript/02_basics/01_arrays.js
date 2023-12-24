//array

const myarray = ["spider",1,"hello world"];

// arrays always have 0 base indexing 

const myHeroes = ["batman","hulk"];
const myArray = [0,4,7,8,9];
//another way of declaring array 
//const myArray2 = new array(1,2,3,4,5);

//console.log(myArray2[1]);

//console.log(myArray[1]);

//array methods

//myArray.push(6);
//myArray.pop(); // this method is for removing last value of array without arguments

//myArray.unshift(9); // it is for shifting the index


//myArray.shift()

//to add all emlemnts in to a string 
//const newArray = myArray.join()
//console.log(myArray);


//slice and splice 

console.log("A ", myArray);

const myn1 = myArray.slice(1,3);

console.log(myn1);

console.log("B ",myArray);

const mna2 = myArray.splice(1,8)

console.log("C ", mna2);