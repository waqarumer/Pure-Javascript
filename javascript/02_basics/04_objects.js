/// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);


// to define object with function or object 


const regularUser = {
    email: "waqar@gmail.com",
    fullname: {
        userfullname: {
            firstname: "waqar",
            lstname: "khan"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 = {obj1, obj2}

//assign is method to copy or modify source 

const obj3 = Object.assign(obj1,obj2)

// anotherway to define target and source 

const obj4 = Object.assign({},obj1,obj2)

// another way is spreading method to combine object 


const obj5 = {...obj1 , ...obj2}

console.log(obj5);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('isLoggedIn'));