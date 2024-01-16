
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai",25)
const tea = createUser("tea",250)


chai.printMe()


// a new object is created: the new keyword initiates the creation of a new javascript object  





