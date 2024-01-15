//promises

const promisOne = new Promise(function(resolve, reject){

    //Do an async task 
    //DB calls, cryptography,network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})


promisOne.then(function(){
    console.log("Promis Consumed");
})

//another way of making promis 

new Promise( function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout( function(){
        resolve({username:"waqar",email:"waqar@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout( function(){
        let error = true

        if (!error) {
            resolve({username:"waqar khan",password:"1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})


promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promis is either resolve or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout( function(){
        let error = true

        if (!error) {
            resolve({username:"Javascript",password:"1234323"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
   try {
        const response = await promiseFive
        console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
       
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()