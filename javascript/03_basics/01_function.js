function sayMyName(){
    console.log("w");
    console.log("a");
    console.log("q");
    console.log("a");
    console.log("r");
}

//sayMyName()

// function addTwoNumers(number1 , number2){
//     console.log(number1 + number2);
    
// }

//addTwoNumers(3,5)

// when u create function defination u pass parameters and arguments 


function addTwoNumers(number1 , number2){
    // let result = number1 + number2

    // return result

    //another way 

    return number1 + number2
    
}
const result = addTwoNumers(3,5);

//console.log("Result", result);


function loginUserMessage(username){
    if (username === undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());