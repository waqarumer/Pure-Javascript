const marvelHeroes = ["thor","ironman","spiderman"];
const dcHeroes = ["superman","flash","batman"];

marvelHeroes.push(dcHeroes);


marvelHeroes.concat(dcHeroes)

const allHeroes = marvelHeroes.concat.dcHeroes

const all_heroes = [...marvelHeroes, ...dcHeroes]

//console.log(all_heroes);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,8,9]]

const real_Array = anotherArray.flat(Infinity)

console.log(real_Array);