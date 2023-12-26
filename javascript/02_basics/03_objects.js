// there are 2 ways of defining objects 
// 1 literal and 2 constructer 

// also anotherway of defining object is singleton when we defined in literals then it nevers make singleton 
// create.object it is singleton or constructer way of defining object 

//object literals 

// to declaring symbol
const mysymbol = Symbol("key1")

const JsUsers = {
    name: "waqar khan",
    "full name" : "waqar umer farooq",
    [mysymbol] : "mykey1",
    age: 31,
    location:"Lahore",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["monday","saturday"]
}

//to access object

//console.log((JsUsers.email));

//console.log(JsUsers["name"]);
//console.log(JsUsers[mysymbol]);

JsUsers.email = "waqarkhan@gmail.com";

//console.log(JsUsers.email);

//to lock values we use freeze method

//Object.freeze(JsUsers);

//console.log(JsUsers);


//to use function in object 

JsUsers.greeting = function(){
    console.log("hello js users");
}


console.log(JsUsers.greeting());

JsUsers.greetingtwo = function(){
    console.log(`Hello js users, ${this.name}`);
}


console.log(JsUsers.greetingtwo());

