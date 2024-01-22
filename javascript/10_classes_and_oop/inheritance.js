class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

//inheritence of user 

class Teacher extends User{
    constructor(username,email,password){
        super(username) // this is for adding all object 
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new courses was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")


chai.addCourses()

const masalachai = new User("masalachai");

masalachai.logMe()

console.log(chai instanceof User);