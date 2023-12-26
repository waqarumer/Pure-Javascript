const user = {
    username: "Waqar",
    price: 999,
// this is used for curent context
    welcomeMessage: function(){
        console.log(`${this.username}, wlcome to webiste`);
    }


}

//user.welcomeMessage()

// function chai (){
//     let username = "waqar"
//     console.log(this.username);
// }

// chai()
   

// const chai = function(){
//     let username = "waqar";
//     console.log(this.username);
// }


const chai = () => {
    let username = "waqar"
    console.log(this);
}

// chai()

const addTwo = (num1,num2) => {
    return num1 + num2
}

//console.log(addTwo(3 , 4));


// if we use carly braces then we must use return 

 const addthree = (num1,num2) => ({username:"waqar"})

 console.log(addthree(3,4));