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

//console.log(loginUserMessage());


// situation on shoping cart
// ... is rest oprator 

function calculateCartPrice (...num1){

    return num1
}

//console.log(calculateCartPrice(200,400,600));

const user = {
    username: "waqar khan",
    price: 199
}

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)


const myNewArray = [200,600,900]

function returnSecondValue(getArray){

    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));



