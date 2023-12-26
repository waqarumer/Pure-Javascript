//for each loop

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (item) {

//     console.log(item);
    
// })


//foreach using arrow function 

// coding.forEach(
//     (item) => {
//         console.log(item);
//     }
// )

//using function ittration foreach

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// foreach also have index and values 

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })


// foreach in object 
const myCoding = [
    {
        languagename: "javascript",
        languagefileName: "js"
    },
    {
        languagename: "python",
        languagefileName: "py"
    },
    {
        languagename: "java",
        languagefileName: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languagename);
})