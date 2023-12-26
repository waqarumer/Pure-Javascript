// reducer 
// it is used in cart 

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currentvalue){
//     console.log(`acc: ${acc} and currentValue: ${currentvalue}`);
//     return acc + currentvalue
// }, 0)

// use arrow function 

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal);

