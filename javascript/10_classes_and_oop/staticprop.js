class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);

    }

    static createId(){
        return `123`
    }
}

const waqar = new User("waqar")

//console.log(waqar.createId());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@gmail.com")
console.log(iphone.createId());