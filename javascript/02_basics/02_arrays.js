const marvelHeroes = ["thor","ironman","spiderman"];
const dcHeroes = ["superman","flash","batman"];

marvelHeroes.push(dcHeroes);


marvelHeroes.concat(dcHeroes)

const allHeroes = marvelHeroes.concat.dcHeroes

const all_heroes = [...marvelHeroes, ...dcHeroes]

//console.log(all_heroes);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,8,9]]

const real_Array = anotherArray.flat(Infinity)

//console.log(real_Array);

console.log(Array.isArray("waqar")); // it is for knowing or questioning is it array or not 

console.log(Array.from("Waqar")); // to convert in array 
console.log(Array.from({name: "waqar khan"})); // it is interesting to defining array in keys or values if we dont define then it shows empty 


let score1 = 100
let score2 = 200
let score3 = 300



console.log(Array.of(score1,score2,score3));
