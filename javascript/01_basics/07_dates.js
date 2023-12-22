//Dates


let myDate = new Date()


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023, 0 , 23);

console.log(myCreatedDate.toLocaleDateString());
console.log((myCreatedDate.toLocaleString()));

let TimeStamp = Date.now();

//console.log(TimeStamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

TimeStamp.toLocaleString('default',{
    weekday: 'long',
    
})
console.log(TimeStamp);