const coding = ["js","ruby","java","python","cpp"]

// following is used to check foreach loop is used or not in variable 
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

//forach loop is not used in variable 

const myNums = [1,2,3,4,5,6,7,8,9]

// if u use scope {} in array or object u must use retun

const newNums = myNums.filter((num) => num > 4)

console.log(newNums);