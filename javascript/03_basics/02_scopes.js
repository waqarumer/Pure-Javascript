// function scopes is used in variabl defination eg let var const 


//let a = 10
//const b = 20
//var c = 30

// {} is scope declaration it is defined in function or any other object scope

//console.log(a);
//console.log(b);
//console.log(c);

// there are two methods of scopes 1 block scope and 2nd is global scope

// let a = 300

// if (true) {
//     let a = 10
//     const b = 20
//     console.log("inter: ", a);
    
// }

// for (let i  = 0; i  < array.length; i ++) {
//     const element = array[i ];
    
// }

// console.log(a);

function one(){
    const username = "waqar"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()